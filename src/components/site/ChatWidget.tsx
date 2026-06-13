import { useChat } from "@ai-sdk/react";
import { DefaultChatTransport, type UIMessage } from "ai";
import { useEffect, useRef, useState } from "react";
import { MessageCircle, X, Send } from "lucide-react";
import { Link } from "@tanstack/react-router";

const STORAGE_KEY = "jinada_chat_messages_v1";

const WELCOME: UIMessage = {
  id: "welcome",
  role: "assistant",
  parts: [
    {
      type: "text",
      text:
        "Hi! I'm Jin from Jinada Tech 👋 Ask me about our services, process, or how we work. For a real project, I'll point you to our [contact page](/contact).",
    },
  ],
};

function loadMessages(): UIMessage[] {
  if (typeof window === "undefined") return [WELCOME];
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [WELCOME];
    const parsed = JSON.parse(raw) as UIMessage[];
    return Array.isArray(parsed) && parsed.length > 0 ? parsed : [WELCOME];
  } catch {
    return [WELCOME];
  }
}

function renderText(message: UIMessage) {
  return message.parts
    .map((p) => (p.type === "text" ? p.text : ""))
    .join("");
}

// Tiny markdown renderer: links + bold. Keeps bundle small for the widget.
function renderInline(text: string, keyPrefix: string) {
  const nodes: React.ReactNode[] = [];
  const regex = /\[([^\]]+)\]\(([^)]+)\)|\*\*([^*]+)\*\*/g;
  let last = 0;
  let m: RegExpExecArray | null;
  let i = 0;
  while ((m = regex.exec(text)) !== null) {
    if (m.index > last) nodes.push(text.slice(last, m.index));
    if (m[1] && m[2]) {
      const href = m[2];
      const label = m[1];
      const internal = href.startsWith("/");
      nodes.push(
        internal ? (
          <Link
            key={`${keyPrefix}-${i}`}
            to={href}
            className="underline text-[var(--brand-blue)] hover:opacity-80"
          >
            {label}
          </Link>
        ) : (
          <a
            key={`${keyPrefix}-${i}`}
            href={href}
            target="_blank"
            rel="noreferrer"
            className="underline text-[var(--brand-blue)] hover:opacity-80"
          >
            {label}
          </a>
        ),
      );
    } else if (m[3]) {
      nodes.push(
        <strong key={`${keyPrefix}-${i}`} className="font-semibold">
          {m[3]}
        </strong>,
      );
    }
    last = m.index + m[0].length;
    i++;
  }
  if (last < text.length) nodes.push(text.slice(last));
  return nodes;
}

function renderMarkdown(text: string, keyPrefix: string) {
  return text.split(/\n\n+/).map((para, pi) => (
    <p key={`${keyPrefix}-p-${pi}`} className="whitespace-pre-wrap">
      {renderInline(para, `${keyPrefix}-p-${pi}`)}
    </p>
  ));
}

export function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [initial, setInitial] = useState<UIMessage[] | null>(null);
  const [input, setInput] = useState("");
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    setInitial(loadMessages());
  }, []);

  const { messages, sendMessage, status, setMessages } = useChat({
    id: "jinada-chat",
    messages: initial ?? [WELCOME],
    transport: new DefaultChatTransport({ api: "/api/chat" }),
    onError: (err) => {
      console.error("Chat error:", err);
    },
  });

  // Persist
  useEffect(() => {
    if (initial === null) return;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(messages));
    } catch {
      /* ignore */
    }
  }, [messages, initial]);

  // Auto-scroll
  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, status]);

  // Focus when opened
  useEffect(() => {
    if (open) setTimeout(() => inputRef.current?.focus(), 50);
  }, [open]);

  const isLoading = status === "submitted" || status === "streaming";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = input.trim();
    if (!text || isLoading) return;
    setInput("");
    void sendMessage({ text });
  };

  const handleReset = () => {
    setMessages([WELCOME]);
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch {
      /* ignore */
    }
  };

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Close chat" : "Open chat"}
        className="fixed bottom-6 right-6 z-[60] h-14 w-14 rounded-full btn-primary-glow hover:[&]:btn-primary-glow-hover flex items-center justify-center shadow-lg"
      >
        {open ? <X size={22} /> : <MessageCircle size={22} />}
      </button>

      {open && (
        <div
          className="fixed bottom-24 right-4 sm:right-6 z-[60] w-[calc(100vw-2rem)] sm:w-[380px] max-h-[70vh] flex flex-col glass-strong rounded-2xl overflow-hidden border border-white/10 animate-fade-up"
          role="dialog"
          aria-label="Chat with Jinada Tech"
        >
          <div className="flex items-center justify-between px-4 py-3 border-b border-white/10">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-[var(--brand-blue)] animate-pulse-glow" />
              <div>
                <div className="text-sm font-semibold">Chat with Jin</div>
                <div className="text-[10px] uppercase tracking-widest text-muted-foreground">
                  Jinada Tech assistant
                </div>
              </div>
            </div>
            <button
              type="button"
              onClick={handleReset}
              className="text-[10px] uppercase tracking-widest text-muted-foreground hover:text-foreground"
            >
              Reset
            </button>
          </div>

          <div
            ref={scrollRef}
            className="flex-1 overflow-y-auto px-4 py-4 space-y-3 text-sm"
          >
            {messages.map((m) => {
              const text = renderText(m);
              const isUser = m.role === "user";
              return (
                <div
                  key={m.id}
                  className={isUser ? "flex justify-end" : "flex justify-start"}
                >
                  <div
                    className={
                      isUser
                        ? "max-w-[85%] rounded-2xl rounded-br-sm px-3 py-2 bg-primary text-primary-foreground"
                        : "max-w-[90%] text-foreground/95 space-y-2"
                    }
                  >
                    {text ? renderMarkdown(text, m.id) : null}
                  </div>
                </div>
              );
            })}
            {isLoading && (
              <div className="flex items-center gap-1 text-muted-foreground text-xs">
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--brand-blue)] animate-pulse" />
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--brand-blue)] animate-pulse [animation-delay:120ms]" />
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--brand-blue)] animate-pulse [animation-delay:240ms]" />
                <span className="ml-2">Thinking…</span>
              </div>
            )}
          </div>

          <form
            onSubmit={handleSubmit}
            className="border-t border-white/10 p-3 flex items-end gap-2"
          >
            <textarea
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter" && !e.shiftKey) {
                  e.preventDefault();
                  handleSubmit(e);
                }
              }}
              rows={1}
              placeholder="Ask about our services…"
              className="flex-1 resize-none bg-transparent outline-none text-sm placeholder:text-muted-foreground max-h-32 py-2"
            />
            <button
              type="submit"
              disabled={isLoading || !input.trim()}
              aria-label="Send message"
              className="h-9 w-9 rounded-xl btn-primary-glow hover:[&]:btn-primary-glow-hover flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed shrink-0"
            >
              <Send size={14} />
            </button>
          </form>
        </div>
      )}
    </>
  );
}

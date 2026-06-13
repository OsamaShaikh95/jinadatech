import { createLovableAiGatewayProvider } from "@/lib/ai-gateway.server";
import { createFileRoute } from "@tanstack/react-router";
import { convertToModelMessages, streamText, type UIMessage } from "ai";

const SYSTEM_PROMPT = `You are Jin, the friendly AI assistant for Jinada Tech — a modern technology partner that helps startups and local businesses launch, automate, and scale.

About Jinada Tech:
- Services: Web Development, Mobile App Development, AI Automation, SEO & Marketing, Social Media Management, Business Growth Consulting.
- Approach: senior team, ship in weeks not quarters, AI-native, production-grade, growth-focused.
- Typical engagement: ~6 weeks to launch on average. 80+ products shipped. 3.4x average ROI delivered.
- Contact: info@jinadatech.com — https://jinadatech.com
- Site sections: /services, /about, /contact.

Behavior rules:
- Answer basic questions about Jinada Tech, our services, process, and how we work. Keep replies short (1-3 short paragraphs max), warm, and helpful.
- Do NOT quote prices, timelines, or commitments for specific projects — those depend on scope.
- For ANY project inquiry, quote request, scoping question, "can you build X", or anything that needs a human, warmly direct the user to the contact page: link it as [Get a Quote](/contact) and mention they can also email info@jinadatech.com.
- If asked something unrelated to Jinada Tech or our services, politely steer back: say you're focused on helping with Jinada Tech questions and invite them to [contact us](/contact).
- Never invent services we don't offer. Never claim to book meetings, send emails, or take actions — only the contact page can do that.
- Use light markdown (links, bold) but no headings.`;

export const Route = createFileRoute("/api/chat")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        const { messages } = (await request.json()) as { messages?: unknown };
        if (!Array.isArray(messages)) {
          return new Response("Messages are required", { status: 400 });
        }

        const key = process.env.LOVABLE_API_KEY;
        if (!key) return new Response("Missing LOVABLE_API_KEY", { status: 500 });

        const gateway = createLovableAiGatewayProvider(key);
        const result = streamText({
          model: gateway("google/gemini-3-flash-preview"),
          system: SYSTEM_PROMPT,
          messages: await convertToModelMessages(messages as UIMessage[]),
        });

        return result.toUIMessageStreamResponse({
          originalMessages: messages as UIMessage[],
        });
      },
    },
  },
});

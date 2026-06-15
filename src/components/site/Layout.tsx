import type { ReactNode } from "react";
import { Nav } from "./Nav";
import { Footer } from "./Footer";
import { BackToTop } from "./BackToTop";
// import { ChatWidget } from "./ChatWidget";

export function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Nav />
      <main className="flex-1 pt-36 md:pt-40">{children}</main>
      <Footer />
      <BackToTop />
      {/* <ChatWidget /> hidden for now */}
    </div>
  );
}

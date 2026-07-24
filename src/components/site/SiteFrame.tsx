import type { ReactNode } from "react";
import { Nav } from "./Nav";
import { Footer } from "./Footer";

export function SiteFrame({ children }: { children: ReactNode }) {
  return (
    <main className="bg-background text-foreground">
      <Nav />
      {children}
      <Footer />
    </main>
  );
}

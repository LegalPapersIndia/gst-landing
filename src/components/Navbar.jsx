import { Phone } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-navy-950/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <div className="flex items-baseline gap-1.5">
          <span className="font-display text-lg font-semibold text-paper">Legal Papers</span>
          <span className="font-display text-lg font-semibold text-gold-400">India</span>
        </div>
        <a
          href="tel:+919211037448"
          className="flex items-center gap-2 rounded-full border border-gold-400/40 px-4 py-2 text-xs font-medium text-gold-300 transition hover:bg-gold-400/10"
        >
          <Phone className="h-3.5 w-3.5" />
          <span className="hidden sm:inline">+91 92110 37448</span>
          <span className="sm:hidden">Call now</span>
        </a>
      </div>
    </header>
  );
}

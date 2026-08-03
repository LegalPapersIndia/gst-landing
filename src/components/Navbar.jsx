// import { Phone } from "lucide-react";

// export default function Navbar() {
//   return (
//     <header className="sticky top-0 z-40 border-b border-white/10 bg-navy-950/90 backdrop-blur">
//       <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
//         <div className="flex items-baseline gap-1.5">
//           <span className="font-display text-lg font-semibold text-paper">Legal Papers</span>
//           <span className="font-display text-lg font-semibold text-gold-400">India</span>
//         </div>
//         <a
//           href="tel:+919211037448"
//           className="flex items-center gap-2 rounded-full border border-gold-400/40 px-4 py-2 text-xs font-medium text-gold-300 transition hover:bg-gold-400/10"
//         >
//           <Phone className="h-3.5 w-3.5" />
//           <span className="hidden sm:inline">+91 92110 37448</span>
//           <span className="sm:hidden">Call now</span>
//         </a>
//       </div>
//     </header>
//   );
// }


// import { Phone } from "lucide-react";

// export default function Navbar() {
//   return (
//     <header className="sticky top-0 z-40 border-b border-navy-900/10 bg-white/90 backdrop-blur">
//       <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
//         <div className="flex items-baseline gap-0.5">
//           <span className="font-display text-xl font-bold text-navy-600">Legalpapers</span>
//           <span className="font-display text-xl font-bold text-gold-500">india</span>
//           <span className="font-display text-xl font-bold text-ink">.com</span>
//         </div>
//         <a
//           href="tel:+919211037448"
//           className="flex items-center gap-2 rounded-full border border-navy-600/40 px-4 py-2 text-xs font-medium text-navy-600 transition hover:bg-navy-600/10"
//         >
//           <Phone className="h-3.5 w-3.5" />
//           <span className="hidden sm:inline">+91 92110 37448</span>
//           <span className="sm:hidden">Call now</span>
//         </a>
//       </div>
//     </header>
//   );
// }



// import { Phone } from "lucide-react";

// export default function Navbar() {
//   return (
//     <header className="sticky top-0 z-40 border-b border-navy-900/10 bg-white/90 backdrop-blur">
//       <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3.5">
//         <div>
//           <div className="flex items-baseline gap-0.5">
//             <span className="font-display text-2xl font-bold text-navy-600">Legalpapers</span>
//             <span className="font-display text-2xl font-bold text-gold-500">india</span>
//             <span className="font-display text-2xl font-bold text-ink">.com</span>
//           </div>
//           <div className="mt-0.5 flex items-center gap-2">
//             <span className="h-px w-7 bg-slate-400/50" />
//             <p className="text-[11px] text-slate-500">Get Business Papers Ready</p>
//             <span className="h-px w-7 bg-slate-400/50" />
//             <p className="text-[11px] font-semibold text-ink">GROUP</p>
//           </div>
//         </div>
//         <a
//           href="tel:+919211037448"
//           className="flex items-center gap-2 rounded-full border border-navy-600/40 px-4 py-2 text-xs font-medium text-navy-600 transition hover:bg-navy-600/10"
//         >
//           <Phone className="h-3.5 w-3.5" />
//           <span className="hidden sm:inline">+91 92110 37448</span>
//           <span className="sm:hidden">Call now</span>
//         </a>
//       </div>
//     </header>
//   );
// }



import { Phone } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-navy-900/10 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-5 sm:py-3.5">
        <div className="min-w-0">
          <div className="flex items-baseline gap-0.5 whitespace-nowrap">
            <span className="font-display text-xl font-bold text-navy-600 sm:text-2xl">
              Legalpapers
            </span>
            <span className="font-display text-xl font-bold text-gold-500 sm:text-2xl">
              india
            </span>
            <span className="font-display text-xl font-bold text-ink sm:text-2xl">
              .com
            </span>
          </div>

          <div className="mt-0.5 flex items-center gap-1.5 sm:gap-2">
            <span className="h-px w-4 bg-slate-400/50 sm:w-7" />
            <p className="text-[9px] text-slate-500 sm:text-[11px]">
              Get Business Papers Ready
            </p>
            <span className="h-px w-4 bg-slate-400/50 sm:w-7" />
            <p className="text-[9px] font-semibold text-ink sm:text-[11px]">
              GROUP
            </p>
          </div>
        </div>

        <a
          href="tel:+919211037448"
          className="ml-3 flex shrink-0 items-center gap-2 rounded-full border border-navy-600/40 px-3 py-2 text-xs font-medium text-navy-600 transition hover:bg-navy-600/10 sm:px-4"
        >
          <Phone className="h-3.5 w-3.5" />
          <span className="hidden sm:inline">+91 92110 37448</span>
          <span className="sm:hidden">Call now</span>
        </a>
      </div>
    </header>
  );
}
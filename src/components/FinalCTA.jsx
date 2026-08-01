// import LeadForm from "./LeadForm";

// export default function FinalCTA() {
//   return (
//     <section className="relative overflow-hidden bg-navy-950">
//       <div className="pointer-events-none absolute inset-0 bg-noise opacity-[0.12]" />
//       <div className="relative mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-5 py-20 lg:grid-cols-2">
//         <div>
//           <p className="font-mono text-xs uppercase tracking-[0.2em] text-gold-400">Ready when you are</p>
//           <h2 className="mt-3 font-display text-3xl leading-tight text-paper sm:text-4xl">
//             Let's get your GSTIN filed this week.
//           </h2>
//           <p className="mt-4 max-w-md text-sm leading-relaxed text-slate-400">
//             Share your details once — our team calls back with next steps, no obligation.
//           </p>
//         </div>
//         <div className="max-w-md justify-self-start lg:justify-self-end">
//           <LeadForm />
//         </div>
//       </div>
//     </section>
//   );
// }





import LeadForm from "./LeadForm";

export default function FinalCTA() {
  return (
    <section className="relative overflow-hidden border-t border-navy-900/5 bg-navy-500/5">
      <div className="relative mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-5 py-20 lg:grid-cols-2">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-gold-500">Ready when you are</p>
          <h2 className="mt-3 font-display text-3xl leading-tight text-navy-600 sm:text-4xl">
            Let's get your GSTIN filed this week.
          </h2>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-slate-500">
            Share your details once — our team calls back with next steps, no obligation.
          </p>
        </div>
        <div className="max-w-md justify-self-start lg:justify-self-end">
          <LeadForm />
        </div>
      </div>
    </section>
  );
}
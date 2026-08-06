// import { motion } from "framer-motion";
// import { CheckCircle2 } from "lucide-react";
// import { pricingPlans } from "../data";

// export default function Pricing() {
//   return (
//     <section className="border-t border-navy-900/5 bg-navy-500/5">
//       <div className="mx-auto max-w-6xl px-5 py-20">
//         <div className="mx-auto max-w-md text-center">
//           <p className="font-mono text-xs uppercase tracking-[0.2em] text-gold-600">Transparent pricing</p>
//           <h2 className="mt-3 font-display text-3xl text-navy-600 sm:text-4xl">Pick a plan that fits</h2>
//         </div>

//         <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3 md:items-stretch">
//           {pricingPlans.map((plan, i) => (
//             <motion.div
//               key={plan.name}
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true, margin: "-40px" }}
//               transition={{ duration: 0.5, delay: i * 0.1 }}
//               className={`relative flex flex-col rounded-2xl border bg-white p-7 ${
//                 plan.highlight
//                   ? "border-navy-600 shadow-[0_25px_60px_-25px_rgba(18,109,196,0.4)]"
//                   : "border-navy-900/10 shadow-[0_20px_50px_-30px_rgba(10,20,40,0.3)]"
//               }`}
//             >
//               {plan.highlight && (
//                 <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-navy-600 px-3 py-1 text-[10px] font-semibold uppercase tracking-wide text-white">
//                   Most popular
//                 </span>
//               )}

//               <p className="font-display text-xl text-navy-900">{plan.name}</p>
//               <p className="mt-1.5 text-sm leading-relaxed text-slate-500">{plan.desc}</p>

//               <div className="mt-5 flex items-center gap-2">
//                 <span className="font-mono text-sm text-slate-400 line-through">₹{plan.originalPrice}</span>
//                 <span className="rounded-full bg-seal/10 px-2 py-0.5 text-[10px] font-medium text-seal">
//                   {plan.discount}
//                 </span>
//               </div>
//               <p className="mt-1 font-mono text-3xl font-semibold text-navy-900">₹{plan.price}</p>
//               <p className="text-xs text-slate-400">+ Govt. fee, if applicable</p>

//               <a
//                 href="#top-form"
//                 className={`mt-6 flex w-full items-center justify-center rounded-lg py-3 text-sm font-semibold transition ${
//                   plan.highlight
//                     ? "bg-navy-600 text-white hover:bg-navy-700"
//                     : "bg-navy-500/10 text-navy-600 hover:bg-navy-500/20"
//                 }`}
//               >
//                 Get started
//               </a>

//               <ul className="mt-6 flex flex-col gap-2.5 border-t border-navy-900/5 pt-6">
//                 {plan.features.map((f) => (
//                   <li key={f} className="flex items-start gap-2 text-sm text-ink">
//                     <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-seal" />
//                     {f}
//                   </li>
//                 ))}
//               </ul>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }



import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { pricingPlans } from "../data";

export default function Pricing() {
  return (
    <section className="border-t border-navy-900/5 bg-white">
      <div className="mx-auto max-w-6xl px-5 py-20">
        <div className="mx-auto max-w-md text-center">
          <p className="font-mono text-sm font-bold uppercase tracking-[0.2em] text-gold-600">Transparent pricing</p>
          <h2 className="mt-3 font-display text-3xl font-bold leading-tight text-black sm:text-4xl">Pick a plan that fits</h2>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3 md:items-stretch">
          {pricingPlans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`relative flex flex-col rounded-2xl border bg-white p-7 ${
                plan.highlight
                  ? "border-navy-600 shadow-[0_25px_60px_-25px_rgba(18,109,196,0.4)]"
                  : "border-navy-900/10 shadow-[0_20px_50px_-30px_rgba(10,20,40,0.3)]"
              }`}
            >
              {plan.highlight && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-navy-600 px-3 py-1 text-[10px] font-semibold uppercase tracking-wide text-white">
                  Most popular
                </span>
              )}

              <p className="font-display text-xl font-bold text-black">{plan.name}</p>
              <p className="mt-1.5 text-base leading-relaxed text-slate-800">{plan.desc}</p>

              <div className="mt-5 flex items-center gap-2">
                <span className="font-mono text-sm text-slate-400 line-through">₹{plan.originalPrice}</span>
                <span className="rounded-full bg-seal/10 px-2 py-0.5 text-[10px] font-medium text-seal">
                  {plan.discount}
                </span>
              </div>
              <p className="mt-1 font-mono text-3xl font-bold text-black">₹{plan.price}</p>
              <p className="text-xs text-slate-500">+ Govt. fee, if applicable</p>

              <a
                href="#top-form"
                className={`mt-6 flex w-full items-center justify-center rounded-lg py-3 text-sm font-semibold transition ${
                  plan.highlight
                    ? "bg-navy-600 text-white hover:bg-navy-700"
                    : "bg-navy-500/10 text-navy-600 hover:bg-navy-500/20"
                }`}
              >
                Get started
              </a>

              <ul className="mt-6 flex flex-col gap-2.5 border-t border-navy-900/5 pt-6">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-base text-ink">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-seal" />
                    {f}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
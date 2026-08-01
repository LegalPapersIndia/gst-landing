// import { motion } from "framer-motion";
// import { processSteps } from "../data";

// export default function ProcessSteps() {
//   return (
//     <section className="bg-navy-950">
//       <div className="mx-auto max-w-6xl px-5 py-20">
//         <p className="font-mono text-xs uppercase tracking-[0.2em] text-gold-400">How it works</p>
//         <h2 className="mt-3 font-display text-3xl text-paper sm:text-4xl">Four steps to your GSTIN</h2>

//         <div className="relative mt-14 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
//           <div className="absolute left-0 right-0 top-6 hidden h-px bg-gradient-to-r from-transparent via-gold-400/30 to-transparent lg:block" />
//           {processSteps.map((step, i) => (
//             <motion.div
//               key={step.title}
//               initial={{ opacity: 0, y: 16 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true, margin: "-40px" }}
//               transition={{ duration: 0.5, delay: i * 0.12 }}
//               className="relative"
//             >
//               <span className="font-mono text-xs text-gold-400/80">0{i + 1}</span>
//               <p className="mt-3 font-display text-xl text-paper">{step.title}</p>
//               <p className="mt-2 text-sm leading-relaxed text-slate-400">{step.desc}</p>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }



import { motion } from "framer-motion";
import { processSteps } from "../data";

export default function ProcessSteps() {
  return (
    <section className="border-t border-navy-900/5 bg-navy-500/5">
      <div className="mx-auto max-w-6xl px-5 py-20">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-gold-500">How it works</p>
        <h2 className="mt-3 font-display text-3xl text-navy-600 sm:text-4xl">Four steps to your GSTIN</h2>

        <div className="relative mt-14 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="absolute left-0 right-0 top-6 hidden h-px bg-gradient-to-r from-transparent via-gold-500/40 to-transparent lg:block" />
          {processSteps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="relative"
            >
              <span className="font-mono text-xs text-gold-600/80">0{i + 1}</span>
              <p className="mt-3 font-display text-xl text-ink">{step.title}</p>
              <p className="mt-2 text-sm leading-relaxed text-slate-500">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
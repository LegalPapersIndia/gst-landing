// import { motion } from "framer-motion";
// import { HelpCircle } from "lucide-react";
// import { whoNeedsGst } from "../data";

// export default function WhoNeedsGst() {
//   return (
//     <section className="border-t border-navy-900/5 bg-white">
//       <div className="mx-auto max-w-6xl px-5 py-20">
//         <div className="max-w-xl">
//           <div className="flex items-center gap-2">
//             <HelpCircle className="h-5 w-5 text-seal" strokeWidth={1.5} />
//             <p className="font-mono text-xs uppercase tracking-[0.2em] text-gold-600">Not sure if you need it?</p>
//           </div>
//           <h2 className="mt-3 font-display text-3xl text-navy-600 sm:text-4xl">Who needs GST registration</h2>
//           <p className="mt-3 text-sm leading-relaxed text-slate-500">
//             Any one of these applies to you? You're required — or better off — registering for GST.
//           </p>
//         </div>

//         <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
//           {whoNeedsGst.map((item, i) => (
//             <motion.div
//               key={item.title}
//               initial={{ opacity: 0, y: 14 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true, margin: "-40px" }}
//               transition={{ duration: 0.45, delay: i * 0.08 }}
//               className="flex gap-4 rounded-xl border border-navy-900/10 bg-navy-500/5 p-5"
//             >
//               <span className="font-mono text-sm text-gold-600">0{i + 1}</span>
//               <div>
//                 <p className="font-display text-base text-navy-900">{item.title}</p>
//                 <p className="mt-1 text-sm leading-relaxed text-slate-500">{item.desc}</p>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }




import { motion } from "framer-motion";
import { HelpCircle } from "lucide-react";
import { FaChartLine, FaShoppingCart, FaTruck, FaHandshake } from "react-icons/fa";
import { whoNeedsGst } from "../data";

const itemIcons = [FaChartLine, FaShoppingCart, FaTruck, FaHandshake];

export default function WhoNeedsGst() {
  return (
    <section className="border-t border-navy-900/5 bg-white">
      <div className="mx-auto max-w-6xl px-5 py-20">
        <div className="max-w-xl">
          <div className="flex items-center gap-2">
            <HelpCircle className="h-5 w-5 text-seal" strokeWidth={1.5} />
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-gold-600">Not sure if you need it?</p>
          </div>
          <h2 className="mt-3 font-display text-3xl text-navy-600 sm:text-4xl">Who needs GST registration</h2>
          <p className="mt-3 text-sm leading-relaxed text-slate-500">
            Any one of these applies to you? You're required — or better off — registering for GST.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {whoNeedsGst.map((item, i) => {
            const Icon = itemIcons[i % itemIcons.length];
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
                className="group flex gap-4 rounded-xl border border-navy-900/10 bg-navy-500/5 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-gold-500/40 hover:bg-white hover:shadow-[0_20px_45px_-25px_rgba(10,20,40,0.4)]"
              >
                <div className="relative shrink-0">
                  <div className="absolute inset-0 scale-125 rounded-full bg-gold-500/0 blur-md transition-all duration-500 group-hover:scale-150 group-hover:bg-gold-500/30" />
                  <div className="relative flex h-11 w-11 items-center justify-center rounded-full bg-gold-500/10 transition-all duration-500 group-hover:bg-gold-500">
                    <Icon className="h-4 w-4 text-gold-600 transition-colors duration-500 group-hover:text-white" />
                  </div>
                </div>
                <div>
                  <p className="font-display text-base text-navy-900">{item.title}</p>
                  <p className="mt-1 text-sm leading-relaxed text-slate-500">{item.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// import { motion } from "framer-motion";
// import { FileCheck2 } from "lucide-react";
// import { FaUserGraduate, FaBolt, FaTags, FaBell } from "react-icons/fa";
// import { whyUs, documentsRequired } from "../data";

// const whyUsIcons = [FaUserGraduate, FaBolt, FaTags, FaBell];

// export default function WhyUsAndDocuments() {
//   return (
//     <section className="bg-white">
//       <div className="mx-auto grid max-w-6xl grid-cols-1 gap-14 px-5 py-20 lg:grid-cols-2">
//         <div>
//           <p className="font-mono text-xs uppercase tracking-[0.2em] text-gold-600">Why Legal Papers India</p>
//           <h2 className="mt-3 font-display text-2xl text-navy-600 sm:text-3xl">
//             The details that stall an application
//           </h2>
//           <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
//             {whyUs.map((item, i) => {
//               const Icon = whyUsIcons[i % whyUsIcons.length];
//               return (
//                 <motion.div
//                   key={item.title}
//                   initial={{ opacity: 0, y: 14 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   viewport={{ once: true }}
//                   transition={{ duration: 0.4, delay: i * 0.08 }}
//                   className="group rounded-xl border border-navy-900/10 bg-navy-500/5 p-4 transition-colors duration-300 hover:border-gold-500/40 hover:bg-gold-500/10"
//                 >
//                   <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gold-500/10 transition-colors duration-300 group-hover:bg-gold-500">
//                     <Icon className="h-3.5 w-3.5 text-gold-600 transition-colors duration-300 group-hover:text-white" />
//                   </div>
//                   <p className="mt-2.5 font-display text-sm text-navy-900">{item.title}</p>
//                   <p className="mt-1 text-xs leading-relaxed text-slate-500">{item.desc}</p>
//                 </motion.div>
//               );
//             })}
//           </div>
//         </div>

//         <div>
//           <div className="flex items-center gap-2">
//             <FileCheck2 className="h-5 w-5 text-seal" strokeWidth={1.5} />
//             <p className="font-mono text-xs uppercase tracking-[0.2em] text-gold-600">Keep ready</p>
//           </div>
//           <h2 className="mt-3 font-display text-2xl text-navy-600 sm:text-3xl">Documents you'll need</h2>
//           <ul className="mt-8 divide-y divide-navy-900/8 overflow-hidden rounded-xl border border-navy-900/10">
//             {documentsRequired.map((doc, i) => (
//               <motion.li
//                 key={doc}
//                 initial={{ opacity: 0, x: 12 }}
//                 whileInView={{ opacity: 1, x: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.4, delay: i * 0.06 }}
//                 className="flex items-center gap-3 bg-paper/60 px-4 py-3.5 text-sm text-ink"
//               >
//                 <span className="font-mono text-xs text-gold-600">{String(i + 1).padStart(2, "0")}</span>
//                 {doc}
//               </motion.li>
//             ))}
//           </ul>
//         </div>
//       </div>
//     </section>
//   );
// }




import { motion } from "framer-motion";
import { FileCheck2 } from "lucide-react";
import { FaUserGraduate, FaBolt, FaTags, FaBell } from "react-icons/fa";
import { whyUs, documentsRequired } from "../data";

const whyUsIcons = [FaUserGraduate, FaBolt, FaTags, FaBell];

export default function WhyUsAndDocuments() {
  return (
    <section className="bg-white">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-14 px-5 py-20 lg:grid-cols-2">
        {/* Why Legal Papers India */}
        <div>
          <p className="font-mono text-sm font-bold uppercase tracking-[0.2em] text-gold-600">
            Why Legal Papers India
          </p>

          <h2 className="mt-3 font-display text-2xl font-bold leading-tight text-black sm:text-3xl">
            The details that stall an application
          </h2>

          <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {whyUs.map((item, i) => {
              const Icon = whyUsIcons[i % whyUsIcons.length];

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="group rounded-xl border border-navy-900/10 bg-navy-500/5 p-5 transition-colors duration-300 hover:border-gold-500/40 hover:bg-gold-500/10"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gold-500/10 transition-colors duration-300 group-hover:bg-gold-500">
                    <Icon className="h-4 w-4 text-gold-600 transition-colors duration-300 group-hover:text-white" />
                  </div>

                  <p className="mt-3 font-display text-base font-bold text-black sm:text-lg">
                    {item.title}
                  </p>

                  <p className="mt-1.5 text-sm leading-relaxed text-black sm:text-base">
                    {item.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Documents */}
        <div>
          <div className="flex items-center gap-2">
            <FileCheck2
              className="h-6 w-6 text-seal"
              strokeWidth={1.5}
            />

            <p className="font-mono text-sm font-bold uppercase tracking-[0.2em] text-gold-600">
              Keep ready
            </p>
          </div>

          <h2 className="mt-3 font-display text-3xl font-bold leading-tight text-black sm:text-4xl">
            Documents you'll need
          </h2>

          <ul className="mt-8 divide-y divide-navy-900/8 overflow-hidden rounded-xl border border-navy-900/10">
            {documentsRequired.map((doc, i) => (
              <motion.li
                key={doc}
                initial={{ opacity: 0, x: 12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="flex items-center gap-3 bg-paper/60 px-5 py-4 text-base text-black sm:text-lg"
              >
                <span className="font-mono text-sm font-bold text-gold-600">
                  {String(i + 1).padStart(2, "0")}
                </span>

                {doc}
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}


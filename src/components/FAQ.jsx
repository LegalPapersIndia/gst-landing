// import { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { Plus } from "lucide-react";
// import { faqs } from "../data";

// export default function FAQ() {
//   const [open, setOpen] = useState(0);

//   return (
//     <section className="bg-white">
//       <div className="mx-auto max-w-3xl px-5 py-20">
//         <p className="text-center font-mono text-xs uppercase tracking-[0.2em] text-gold-600">FAQ</p>
//         <h2 className="mt-3 text-center font-display text-3xl text-navy-600 sm:text-4xl">
//           Questions we hear most
//         </h2>

//         <div className="mt-10 divide-y divide-navy-900/10 rounded-xl border border-navy-900/10">
//           {faqs.map((item, i) => {
//             const isOpen = open === i;
//             return (
//               <div key={item.q} className="px-5">
//                 <button
//                   onClick={() => setOpen(isOpen ? -1 : i)}
//                   className="flex w-full items-center justify-between gap-4 py-5 text-left"
//                 >
//                   <span className="font-display text-base text-navy-900">{item.q}</span>
//                   <Plus
//                     className={`h-4 w-4 shrink-0 text-gold-600 transition-transform duration-300 ${
//                       isOpen ? "rotate-45" : ""
//                     }`}
//                   />
//                 </button>
//                 <AnimatePresence initial={false}>
//                   {isOpen && (
//                     <motion.div
//                       initial={{ height: 0, opacity: 0 }}
//                       animate={{ height: "auto", opacity: 1 }}
//                       exit={{ height: 0, opacity: 0 }}
//                       transition={{ duration: 0.3, ease: "easeInOut" }}
//                       className="overflow-hidden"
//                     >
//                       <p className="pb-5 text-sm leading-relaxed text-slate-500">{item.a}</p>
//                     </motion.div>
//                   )}
//                 </AnimatePresence>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// }





import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";
import { faqs } from "../data";

export default function FAQ() {
  const [open, setOpen] = useState(0);

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-3xl px-5 py-20">
        <p className="text-center font-mono text-sm font-bold uppercase tracking-[0.2em] text-gold-600">
          FAQ
        </p>

        <h2 className="mt-3 text-center font-display text-3xl font-bold text-black sm:text-4xl">
          Questions we hear most
        </h2>

        <div className="mt-10 divide-y divide-navy-900/10 rounded-xl border border-navy-900/10">
          {faqs.map((item, i) => {
            const isOpen = open === i;

            return (
              <div key={item.q} className="px-5">
                <button
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  className="flex w-full items-center justify-between gap-4 py-5 text-left"
                >
                  <span className="font-display text-lg font-bold text-black sm:text-xl">
                    {item.q}
                  </span>

                  <Plus
                    className={`h-5 w-5 shrink-0 text-gold-600 transition-transform duration-300 ${
                      isOpen ? "rotate-45" : ""
                    }`}
                  />
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <p className="pb-5 text-base leading-relaxed text-black sm:text-lg">
                        {item.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}


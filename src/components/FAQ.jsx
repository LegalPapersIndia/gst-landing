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





// import { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { Plus } from "lucide-react";
// import { faqs } from "../data";

// export default function FAQ() {
//   const [open, setOpen] = useState(0);

//   return (
//     <section className="bg-white">
//       <div className="mx-auto max-w-3xl px-5 py-20">
//         <p className="text-center font-mono text-sm font-bold uppercase tracking-[0.2em] text-gold-600">
//           FAQ
//         </p>

//         <h2 className="mt-3 text-center font-display text-3xl font-bold text-black sm:text-4xl">
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
//                   <span className="font-display text-lg font-bold text-black sm:text-xl">
//                     {item.q}
//                   </span>

//                   <Plus
//                     className={`h-5 w-5 shrink-0 text-gold-600 transition-transform duration-300 ${
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
//                       <p className="pb-5 text-base leading-relaxed text-black sm:text-lg">
//                         {item.a}
//                       </p>
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



// import { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { Plus } from "lucide-react";
// import { faqs } from "../data";
// import faqImage from "../assets/mascot-pointing.webp";

// export default function FAQ() {
//   const [open, setOpen] = useState(0);

//   return (
//     <section className="relative overflow-hidden py-16 sm:py-20">
//       {/* Dotted Background */}
//       <div
//         className="pointer-events-none absolute inset-0 opacity-40"
//         style={{
//           backgroundImage:
//             "radial-gradient(circle, rgba(10,20,40,0.14) 1px, transparent 1px)",
//           backgroundSize: "22px 22px",
//         }}
//       />

//       <div className="relative mx-auto max-w-6xl px-5">
//         <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">

//           {/* LEFT - FAQ */}
//           <div>
//             <motion.div
//               initial={{ opacity: 0, x: -30 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.6 }}
//             >
//               <p className="text-center font-mono text-sm font-bold uppercase tracking-[0.2em] text-gold-500 lg:text-left">
//                 FAQ
//               </p>

//               <h2 className="mt-3 text-center font-display text-3xl font-bold text-black sm:text-4xl lg:text-left">
//                 Questions we hear most
//               </h2>
//             </motion.div>

//             <motion.div
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.6, delay: 0.15 }}
//               className="mt-10 divide-y divide-navy-900/10 rounded-xl border border-navy-900/10 bg-white/80 backdrop-blur-sm"
//             >
//               {faqs.map((item, i) => {
//                 const isOpen = open === i;

//                 return (
//                   <div key={item.q} className="px-5">
//                     <button
//                       onClick={() => setOpen(isOpen ? -1 : i)}
//                       className="flex w-full items-center justify-between gap-4 py-5 text-left"
//                     >
//                       <span className="font-display text-lg font-bold text-black sm:text-xl">
//                         {item.q}
//                       </span>

//                       <Plus
//                         className={`h-5 w-5 shrink-0 text-gold-600 transition-transform duration-300 ${
//                           isOpen ? "rotate-45" : ""
//                         }`}
//                       />
//                     </button>

//                     <AnimatePresence initial={false}>
//                       {isOpen && (
//                         <motion.div
//                           initial={{ height: 0, opacity: 0 }}
//                           animate={{ height: "auto", opacity: 1 }}
//                           exit={{ height: 0, opacity: 0 }}
//                           transition={{
//                             duration: 0.3,
//                             ease: "easeInOut",
//                           }}
//                           className="overflow-hidden"
//                         >
//                           <p className="pb-5 text-base leading-relaxed text-black sm:text-lg">
//                             {item.a}
//                           </p>
//                         </motion.div>
//                       )}
//                     </AnimatePresence>
//                   </div>
//                 );
//               })}
//             </motion.div>
//           </div>

//           {/* RIGHT - Image */}
//           <motion.div
//             initial={{ opacity: 0, x: 30, scale: 0.95 }}
//             whileInView={{ opacity: 1, x: 0, scale: 1 }}
//             viewport={{ once: true }}
//             transition={{
//               duration: 0.7,
//               ease: "easeOut",
//             }}
//             className="relative flex items-center justify-center lg:justify-end"
//           >
//             {/* Image Glow */}
//             <div className="absolute h-64 w-64 rounded-full bg-gold-500/15 blur-3xl sm:h-80 sm:w-80" />

//             {/* Dotted Circle */}
//             <div className="absolute h-[280px] w-[280px] rounded-full border-2 border-dashed border-gold-500/30 sm:h-[360px] sm:w-[360px]" />

//             <motion.img
//               src={faqImage}
//               alt="Frequently asked questions"
//               loading="lazy"
//               animate={{
//                 y: [0, -8, 0],
//               }}
//               transition={{
//                 duration: 4,
//                 repeat: Infinity,
//                 ease: "easeInOut",
//               }}
//               className="relative z-10 h-auto w-full max-w-[320px] object-contain drop-shadow-[0_25px_35px_rgba(10,20,40,0.18)] sm:max-w-[400px]"
//             />
//           </motion.div>

//         </div>
//       </div>
//     </section>
//   );
// }



// import { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { Plus } from "lucide-react";
// import { faqs } from "../data";
// import faqImage from "../assets/faq.png";

// export default function FAQ() {
//   const [open, setOpen] = useState(0);

//   return (
//     <section className="relative overflow-hidden pt-16 sm:pt-20">
//       {/* Dotted Background */}
//       <div
//         className="pointer-events-none absolute inset-0 opacity-40"
//         style={{
//           backgroundImage: "radial-gradient(circle, rgba(10,20,40,0.14) 1px, transparent 1px)",
//           backgroundSize: "22px 22px",
//         }}
//       />

//       <div className="relative mx-auto max-w-6xl px-5">
//         <div className="grid grid-cols-1 items-end gap-12 lg:grid-cols-2 lg:gap-16">
//           {/* LEFT - FAQ */}
//           <div className="pb-16 sm:pb-20">
//             <motion.div
//               initial={{ opacity: 0, x: -30 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.6 }}
//             >
//               <p className="text-center font-mono text-sm font-bold uppercase tracking-[0.2em] text-gold-500 lg:text-left">
//                 FAQ
//               </p>

//               <h2 className="mt-3 text-center font-display text-3xl font-bold text-black sm:text-4xl lg:text-left">
//                 Questions we hear most
//               </h2>
//             </motion.div>

//             <motion.div
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.6, delay: 0.15 }}
//               className="mt-10 divide-y divide-navy-900/10 rounded-xl border border-navy-900/10 bg-white/80 backdrop-blur-sm"
//             >
//               {faqs.map((item, i) => {
//                 const isOpen = open === i;

//                 return (
//                   <div key={item.q} className="px-5">
//                     <button
//                       onClick={() => setOpen(isOpen ? -1 : i)}
//                       className="flex w-full items-center justify-between gap-4 py-5 text-left"
//                     >
//                       <span className="font-display text-lg font-bold text-black sm:text-xl">
//                         {item.q}
//                       </span>

//                       <Plus
//                         className={`h-5 w-5 shrink-0 text-gold-600 transition-transform duration-300 ${
//                           isOpen ? "rotate-45" : ""
//                         }`}
//                       />
//                     </button>

//                     <AnimatePresence initial={false}>
//                       {isOpen && (
//                         <motion.div
//                           initial={{ height: 0, opacity: 0 }}
//                           animate={{ height: "auto", opacity: 1 }}
//                           exit={{ height: 0, opacity: 0 }}
//                           transition={{
//                             duration: 0.3,
//                             ease: "easeInOut",
//                           }}
//                           className="overflow-hidden"
//                         >
//                           <p className="pb-5 text-base leading-relaxed text-black sm:text-lg">
//                             {item.a}
//                           </p>
//                         </motion.div>
//                       )}
//                     </AnimatePresence>
//                   </div>
//                 );
//               })}
//             </motion.div>
//           </div>

//           {/* RIGHT - IMAGE — sits flush against the bottom of the section, no gap */}
//           <motion.div
//             initial={{ opacity: 0, x: 30, scale: 0.95 }}
//             whileInView={{ opacity: 1, x: 0, scale: 1 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.7, ease: "easeOut" }}
//             className="relative z-10 flex translate-y-10 items-end justify-center sm:translate-y-8 lg:translate-y-10 lg:justify-end"
//           >
//             {/* Image Glow */}
//             <motion.div
//               animate={{ scale: [1, 1.08, 1], opacity: [0.3, 0.5, 0.3] }}
//               transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
//               className="absolute bottom-0 h-72 w-72 rounded-full bg-gold-500/20 blur-3xl sm:h-96 sm:w-96 lg:h-[420px] lg:w-[420px]"
//             />

//             {/* Large Dotted Circle */}
//             <motion.div
//               animate={{ rotate: [0, 360] }}
//               transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
//               className="absolute bottom-0 h-[300px] w-[300px] rounded-full border-2 border-dashed border-gold-500/30 sm:h-[380px] sm:w-[380px] lg:h-[440px] lg:w-[440px]"
//             />

//             {/* Inner Dotted Circle */}
//             <motion.div
//               animate={{ scale: [1, 1.04, 1], opacity: [0.35, 0.6, 0.35] }}
//               transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
//               className="absolute bottom-0 h-[250px] w-[250px] rounded-full border border-dashed border-navy-900/15 sm:h-[320px] sm:w-[320px] lg:h-[370px] lg:w-[370px]"
//             />

//             {/* Mascot — bottom edge flush with the section's bottom edge */}
//             <motion.img
//               src={faqImage}
//               alt="Frequently asked questions"
//               loading="lazy"
//               animate={{ y: [0, -10, 0] }}
//               transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
//               className="relative z-10 h-auto w-full max-w-[260px] object-contain drop-shadow-[0_25px_35px_rgba(10,20,40,0.18)] sm:max-w-[340px] lg:max-w-[400px]"
//             />
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// }




import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";
import { faqs } from "../data";
import faqImage from "../assets/faq1.png";

export default function FAQ() {
  const [open, setOpen] = useState(0);

  return (
    <section className="relative overflow-hidden bg-white py-14 sm:py-16 lg:py-20">
      {/* Dotted Background */}
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(10,20,40,0.14) 1px, transparent 1px)",
          backgroundSize: "22px 22px",
        }}
      />

      <div className="relative mx-auto max-w-6xl px-5">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14 xl:gap-16">
          
          {/* ================= LEFT - FAQ ================= */}
          <div className="order-1 w-full">
            {/* Heading */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
             <p className="text-center font-mono text-xl font-extrabold uppercase tracking-[0.2em] text-gold-500 lg:text-left">
  FAQ
</p>

              <h2 className="mt-3 text-center font-display text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-left">
                Frequently Asked Questions
              </h2>
            </motion.div>

            {/* FAQ Box */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="mt-8 space-y-3"
            >
              {faqs.map((item, i) => {
                const isOpen = open === i;

                return (
                  <div key={item.q} className="overflow-hidden rounded-xl">
                    {/* Question */}
                    <button
                      onClick={() => setOpen(isOpen ? -1 : i)}
                      className={`flex w-full items-center justify-between gap-4 px-4 py-4 text-left transition-all duration-300 sm:px-5 sm:py-5 ${
                        isOpen
                          ? "bg-blue-600 shadow-md"
                          : "bg-blue-600 hover:bg-blue-800"
                      }`}
                    >
                      <span className="font-display text-base font-bold leading-snug text-white sm:text-lg">
                        {item.q}
                      </span>

                      <Plus
                        className={`h-5 w-5 shrink-0 text-white transition-transform duration-300 sm:h-6 sm:w-6 ${
                          isOpen ? "rotate-45" : ""
                        }`}
                      />
                    </button>

                    {/* Answer */}
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{
                            duration: 0.3,
                            ease: "easeInOut",
                          }}
                          className="overflow-hidden bg-white"
                        >
                          <p className="px-4 py-4 text-sm leading-relaxed text-black sm:px-5 sm:py-5 sm:text-base">
                            {item.a}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </motion.div>
          </div>

          {/* ================= RIGHT - IMAGE ================= */}
          <motion.div
            initial={{ opacity: 0, x: 30, scale: 0.96 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.7,
              ease: "easeOut",
            }}
            className="
              order-2
              flex
              w-full
              items-end
              justify-center
              lg:justify-end
            "
          >
            <motion.img
              src={faqImage}
              alt="Frequently asked questions"
              loading="lazy"
              animate={{ y: [0, -6, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                h-auto
                w-full
                max-w-[260px]
                object-contain
                drop-shadow-[0_20px_30px_rgba(10,20,40,0.14)]
                sm:max-w-[300px]
                md:max-w-[330px]
                lg:max-w-[350px]
                xl:max-w-[370px]
              "
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
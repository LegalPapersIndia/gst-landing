// // // import { motion } from "framer-motion";
// // // import { FileText } from "lucide-react";
// // // import { services } from "../data";

// // // export default function Services() {
// // //   return (
// // //     <section id="services" className="bg-paper">
// // //       <div className="mx-auto max-w-6xl px-5 py-20">
// // //         <div className="max-w-xl">
// // //           <p className="font-mono text-xs uppercase tracking-[0.2em] text-gold-600">Tax & GST services</p>
// // //           <h2 className="mt-3 font-display text-3xl text-navy-900 sm:text-4xl">
// // //             Everything under GST, handled in one place
// // //           </h2>
// // //           <p className="mt-3 text-sm leading-relaxed text-slate-500">
// // //             Registration is usually the start, not the end. We stay on as your compliance desk for
// // //             whatever comes after.
// // //           </p>
// // //         </div>

// // //         <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
// // //           {services.map((s, i) => (
// // //             <motion.div
// // //               key={s.title}
// // //               initial={{ opacity: 0, y: 16 }}
// // //               whileInView={{ opacity: 1, y: 0 }}
// // //               viewport={{ once: true, margin: "-40px" }}
// // //               transition={{ duration: 0.45, delay: (i % 3) * 0.08 }}
// // //               className="group relative overflow-hidden rounded-xl border border-navy-900/10 bg-white p-6 transition hover:-translate-y-1 hover:shadow-[0_20px_50px_-25px_rgba(10,20,40,0.35)]"
// // //             >
// // //               {s.tag && (
// // //                 <span className="absolute right-4 top-4 rounded-full bg-seal/10 px-2.5 py-1 text-[10px] font-medium uppercase tracking-wide text-seal">
// // //                   {s.tag}
// // //                 </span>
// // //               )}
// // //               <FileText className="h-6 w-6 text-gold-600" strokeWidth={1.5} />
// // //               <p className="mt-4 font-display text-lg text-navy-900">{s.title}</p>
// // //               <p className="mt-1.5 text-sm leading-relaxed text-slate-500">{s.desc}</p>
// // //             </motion.div>
// // //           ))}
// // //         </div>
// // //       </div>
// // //     </section>
// // //   );
// // // }



// // import { motion } from "framer-motion";
// // import { FileText } from "lucide-react";
// // import { services } from "../data";

// // export default function Services() {
// //   return (
// //     <section id="services" className="bg-paper">
// //       <div className="mx-auto max-w-6xl px-5 py-20">
// //         <div className="max-w-xl">
// //           <p className="font-mono text-xs uppercase tracking-[0.2em] text-gold-600">Tax & GST services</p>
// //           <h2 className="mt-3 font-display text-3xl text-navy-600 sm:text-4xl">
// //             Everything under GST, handled in one place
// //           </h2>
// //           <p className="mt-3 text-sm leading-relaxed text-slate-500">
// //             Registration is usually the start, not the end. We stay on as your compliance desk for
// //             whatever comes after.
// //           </p>
// //         </div>

// //         <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
// //           {services.map((s, i) => (
// //             <motion.div
// //               key={s.title}
// //               initial={{ opacity: 0, y: 16 }}
// //               whileInView={{ opacity: 1, y: 0 }}
// //               viewport={{ once: true, margin: "-40px" }}
// //               transition={{ duration: 0.45, delay: (i % 3) * 0.08 }}
// //               className="group relative overflow-hidden rounded-xl border border-navy-900/10 bg-white p-6 transition hover:-translate-y-1 hover:shadow-[0_20px_50px_-25px_rgba(10,20,40,0.35)]"
// //             >
// //               {s.tag && (
// //                 <span className="absolute right-4 top-4 rounded-full bg-seal/10 px-2.5 py-1 text-[10px] font-medium uppercase tracking-wide text-seal">
// //                   {s.tag}
// //                 </span>
// //               )}

// //               <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gold-500/10 transition-all duration-500 group-hover:bg-gold-500">
// //                 <FileText
// //                   className="h-5 w-5 text-gold-600 transition-colors duration-500 group-hover:text-white"
// //                   strokeWidth={1.5}
// //                 />
// //               </div>

// //               <p className="mt-4 font-display text-lg text-navy-900">{s.title}</p>
// //               <p className="mt-1.5 text-sm leading-relaxed text-slate-500">{s.desc}</p>

// //               {/* hover accent bar — absolutely positioned, doesn't affect card height */}
// //               <div className="absolute top-0 left-0 h-1 w-full origin-left scale-x-0 bg-gold-500 transition-transform duration-500 group-hover:scale-x-100" />
// //             </motion.div>
// //           ))}
// //         </div>
// //       </div>
// //     </section>
// //   );
// // }





// import { motion } from "framer-motion";
// import {
//   FaFileSignature,
//   FaPassport,
//   FaEdit,
//   FaBan,
//   FaFileInvoiceDollar,
//   FaUserTie,
// } from "react-icons/fa";
// import { services } from "../data";

// const serviceIcons = [FaFileSignature, FaPassport, FaEdit, FaBan, FaFileInvoiceDollar, FaUserTie];

// export default function Services() {
//   return (
//     <section id="services" className="bg-white">
//       <div className="mx-auto max-w-6xl px-5 py-20">
//         <div className="max-w-xl">
//           <p className="font-mono text-sm font-bold uppercase tracking-[0.2em] text-gold-600">Tax & GST services</p>
//           <h2 className="mt-4 font-display text-3xl font-bold leading-tight text-black sm:text-4xl">
//             Everything under GST, handled in one place
//           </h2>
//           <p className="mt-4 text-base leading-relaxed text-slate-800 sm:text-lg">
//             Registration is usually the start, not the end. We stay on as your compliance desk for
//             whatever comes after.
//           </p>
//         </div>

//         <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
//           {services.map((s, i) => {
//             const Icon = serviceIcons[i % serviceIcons.length];
//             return (
//               <motion.div
//                 key={s.title}
//                 initial={{ opacity: 0, y: 16 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true, margin: "-40px" }}
//                 transition={{ duration: 0.45, delay: (i % 3) * 0.08 }}
//                 className="group relative overflow-hidden rounded-xl border border-navy-900/10 bg-white p-6 transition hover:-translate-y-1 hover:shadow-[0_20px_50px_-25px_rgba(10,20,40,0.35)]"
//               >
//                 {s.tag && (
//                   <span className="absolute right-4 top-4 rounded-full bg-seal/10 px-2.5 py-1 text-[10px] font-medium uppercase tracking-wide text-seal">
//                     {s.tag}
//                   </span>
//                 )}

//                 <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gold-500/10 transition-all duration-500 group-hover:bg-gold-500">
//                   <Icon
//                     className="h-5 w-5 text-gold-600 transition-colors duration-500 group-hover:text-white"
//                   />
//                 </div>

//                 <p className="mt-4 font-display text-lg font-bold sm:text-xl">{s.title}</p>
//                 <p className="mt-1.5 text-base leading-relaxed text-slate-800 sm:text-[17px]">{s.desc}</p>

//                 {/* hover accent bar — absolutely positioned, doesn't affect card height */}
//                 <div className="absolute top-0 left-0 h-1 w-full origin-left scale-x-0 bg-gold-500 transition-transform duration-500 group-hover:scale-x-100" />
//               </motion.div>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// }



// import { motion } from "framer-motion";
// import { services } from "../data";
// import imgRegistration from "../assets/services/Forms-bro.png";
// import imgForeigners from "../assets/services/Health passport-rafiki.png";
// import imgModification from "../assets/services/Edit photo-rafiki.png";
// import imgCancellation from "../assets/services/Documents-amico.png";
// import imgReturns from "../assets/services/Tax-rafiki.png";
// import imgProfessionalTax from "../assets/services/Business deal-bro.png";

// const serviceImages = [
//   imgRegistration,
//   imgForeigners,
//   imgModification,
//   imgCancellation,
//   imgReturns,
//   imgProfessionalTax,
// ];

// export default function Services() {
//   return (
//     <section id="services" className="bg-white">
//       <div className="mx-auto max-w-6xl px-5 py-20">
//        <div className="max-w-xl">
//           <p className="font-mono text-sm font-bold uppercase tracking-[0.2em] text-gold-600">Tax & GST services</p>
//           <h2 className="mt-4 font-display text-3xl font-bold leading-tight text-black sm:text-4xl">
//             Everything under GST, handled in one place
//           </h2>
//           <p className="mt-4 text-base leading-relaxed text-slate-800 sm:text-lg">
//             Registration is usually the start, not the end. We stay on as your compliance desk for
//             whatever comes after.
//           </p>
//         </div>

//         <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
//           {services.map((s, i) => {
//             const image = serviceImages[i % serviceImages.length];
//             return (
//               <motion.div
//                 key={s.title}
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true, margin: "-40px" }}
//                 transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
//                 className="group relative flex flex-col items-center overflow-hidden rounded-2xl border border-navy-900/10 bg-white px-6 pb-7 pt-8 text-center transition duration-300 hover:-translate-y-1.5 hover:border-gold-500/30 hover:shadow-[0_25px_55px_-25px_rgba(10,20,40,0.35)]"
//               >
//                 {s.tag && (
//                   <span className="absolute right-4 top-4 z-10 rounded-full bg-seal/10 px-2.5 py-1 text-[10px] font-medium uppercase tracking-wide text-seal">
//                     {s.tag}
//                   </span>
//                 )}

//                 <div className="flex h-44 w-44 items-center justify-center transition-transform duration-500 group-hover:scale-105">
//                   <img
//                     src={image}
//                     alt={s.title}
//                     loading="lazy"
//                     className="h-full w-full object-contain"
//                   />
//                 </div>

//                 <p className="mt-5 font-display text-xl font-bold">{s.title}</p>
//                 <p className="mt-2 text-base leading-relaxed text-slate-800 sm:text-[17px]">{s.desc}</p>

//                 {/* hover accent bar — absolutely positioned, doesn't affect card height */}
//                 <div className="absolute bottom-0 left-0 h-1 w-full origin-left scale-x-0 bg-gold-500 transition-transform duration-500 group-hover:scale-x-100" />
//               </motion.div>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// }



import { motion } from "framer-motion";
import { services } from "../data";

import imgRegistration from "../assets/services/Forms-bro (2).png";
import imgForeigners from "../assets/services/Foreigners.png";
import imgModification from "../assets/services/Modification1.png";
import imgCancellation from "../assets/services/Cancellation.png";
import imgReturns from "../assets/services/Return.png";
import imgProfessionalTax from "../assets/services/professional.png";

const serviceImages = [
  imgRegistration,
  imgForeigners,
  imgModification,
  imgCancellation,
  imgReturns,
  imgProfessionalTax,
];

export default function Services() {
  return (
    <section
      id="services"
      className="bg-gradient-to-b from-white to-slate-50 py-20"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          {/* <span className="inline-block rounded-full bg-gold-100 px-4 py-1 text-sm font-semibold text-gold-700">
            Tax & GST Services
          </span> */}

          <h2 className="mt-5 font-display text-4xl font-bold text-navy-600 md:text-5xl">
            Everything under GST,
            <span className="text-gold-500"> handled in one place</span>
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            Registration is usually the start, not the end. We stay on as your
            compliance desk for whatever comes after.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 xl:grid-cols-3">
          {services.map((s, i) => {
            const image = serviceImages[i % serviceImages.length];

            return (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: (i % 3) * 0.08,
                }}
                className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white px-6 pb-8 pt-4 text-center shadow-sm transition-all duration-500 hover:-translate-y-3 hover:border-gold-400 hover:shadow-2xl"
              >
                {/* Tag */}
                {s.tag && (
                  <span className="absolute right-4 top-4 rounded-full bg-gold-100 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-gold-700">
                    {s.tag}
                  </span>
                )}

                {/* Image */}
                <div className="-mt-3 flex h-56 items-start justify-center overflow-hidden">
                  <img
                    src={image}
                    alt={s.title}
                    loading="lazy"
                    className="h-52 w-52 object-contain transition-all duration-500 group-hover:scale-110"
                  />
                </div>

                {/* Title */}
                <h3 className="mt-2 text-2xl font-bold  transition-colors group-hover:text-gold-600">
                  {s.title}
                </h3>

                {/* Description */}
                <p className="mt-3 text-base leading-7 text-slate-600">
                  {s.desc}
                </p>

                {/* Bottom Accent */}
                <div className="absolute bottom-0 left-0 h-1 w-full origin-left scale-x-0 bg-gradient-to-r from-gold-400 to-gold-600 transition-transform duration-500 group-hover:scale-x-100"></div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}


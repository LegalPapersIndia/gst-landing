



// // import { motion } from "framer-motion";
// // import { CheckCircle2 } from "lucide-react";
// // import LeadForm from "./LeadForm";
// // import mascot from "../assets/hero-gst-form (3).png";

// // const points = [
// //   "1 Day GST Application",
// //   "GST Apply in Tatkal",
// //   "Advisor for GST",
// //   "GST Billing Software",
// //   "GST Registration",
// //   "Same Day Process for GST",
// // ];

// // export default function Hero() {
// //   return (
// //     <section className="relative overflow-hidden bg-gradient-to-br from-[#eef6ff] via-[#f8fbff] to-[#eaf3ff]">
// //       {/* Shimmer keyframes for the stat box */}
// //       <style>{`
// //         @keyframes shimmerSlide {
// //           0% { transform: translateX(-100%); }
// //           100% { transform: translateX(100%); }
// //         }
// //         .animate-shimmer-slide {
// //           animation: shimmerSlide 2.6s ease-in-out infinite;
// //         }
// //       `}</style>

// //       {/* ================= BACKGROUND DECORATION ================= */}

// //       {/* Soft blue glow */}
// //       <div
// //         className="
// //           pointer-events-none
// //           absolute
// //           -left-32
// //           top-20
// //           h-80
// //           w-80
// //           rounded-full
// //           bg-blue-300/20
// //           blur-3xl
// //         "
// //       />

// //       {/* Soft orange glow */}
// //       <div
// //         className="
// //           pointer-events-none
// //           absolute
// //           right-[-100px]
// //           top-10
// //           h-72
// //           w-72
// //           rounded-full
// //           bg-orange-300/15
// //           blur-3xl
// //         "
// //       />

// //       {/* Bottom blue glow */}
// //       <div
// //         className="
// //           pointer-events-none
// //           absolute
// //           bottom-[-160px]
// //           left-1/2
// //           h-96
// //           w-96
// //           -translate-x-1/2
// //           rounded-full
// //           bg-blue-200/20
// //           blur-3xl
// //         "
// //       />

// //       {/* Decorative dotted texture */}
// //       <div
// //         className="pointer-events-none absolute inset-0 opacity-[0.35]"
// //         style={{
// //           backgroundImage:
// //             "radial-gradient(rgba(30,91,160,0.10) 1px, transparent 1px)",
// //           backgroundSize: "22px 22px",
// //         }}
// //       />

// //       {/* ================= MAIN CONTAINER ================= */}

// //       <div className="relative mx-auto grid max-w-6xl grid-cols-1 items-start gap-8 px-4 pb-16 pt-8 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:gap-10 lg:px-5 lg:pb-24 lg:pt-10">

// //         {/* =====================================================
// //             LEFT — HEADLINE + CONTENT
// //         ====================================================== */}

// //         <div className="order-1">
// //           {/* Small heading */}
// //           <motion.p
// //             initial={{ opacity: 0, y: 10 }}
// //             animate={{ opacity: 1, y: 0 }}
// //             transition={{ duration: 0.5 }}
// //             className="
// //               font-mono
// //               text-sm
// //               font-bold
// //               uppercase
// //               tracking-[0.16em]
// //               text-orange-500

// //               sm:text-base
// //               sm:tracking-[0.2em]
// //             "
// //           >
// //             GST Registration · Pan-India
// //           </motion.p>

// //           {/* Main Heading */}
// //           <motion.h1
// //             initial={{ opacity: 0, y: 16 }}
// //             animate={{ opacity: 1, y: 0 }}
// //             transition={{ duration: 0.6, delay: 0.1 }}
// //             className="
// //               mt-4
// //               font-display
// //               text-[2.35rem]
// //               font-extrabold
// //               leading-[1.08]
// //               tracking-tight
// //               text-[#126dc4]

// //               sm:text-5xl

// //               lg:text-[3.65rem]
// //             "
// //           >
// //             Get GST Registration
// //             <br />
// //             in just{" "}
// //             <span className="relative inline-block italic text-orange-500">
// //               one day.
// //               {/* Underline */}
// //               <svg
// //                 viewBox="0 0 160 14"
// //                 className="
// //                   absolute
// //                   -bottom-2
// //                   left-0
// //                   h-3
// //                   w-full
// //                   text-orange-500
// //                 "
// //                 preserveAspectRatio="none"
// //               >
// //                 <path
// //                   d="M2 9.5C30 2.5 75 2 100 6.5C120 10 140 6 158 4"
// //                   stroke="currentColor"
// //                   strokeWidth="3"
// //                   strokeLinecap="round"
// //                   fill="none"
// //                 />
// //               </svg>
// //             </span>
// //           </motion.h1>

// //           {/* Description */}
// //           <motion.p
// //             initial={{ opacity: 0, y: 16 }}
// //             animate={{ opacity: 1, y: 0 }}
// //             transition={{ duration: 0.6, delay: 0.2 }}
// //             className="
// //               mt-6
// //               max-w-lg
// //               text-base
// //               leading-relaxed
// //               text-slate-600

// //               sm:text-lg
// //             "
// //           >
// //             Legal Papers India handles the paperwork, the portal and the
// //             follow-up with the department — so your registration doesn't sit
// //             stuck on a query you didn't know how to answer.
// //           </motion.p>

// //           {/* Points + Mobile Mascot (side-by-side on mobile only) */}
// //           <div className="mt-7 flex items-center gap-4 lg:block">
// //             <motion.ul
// //               initial={{ opacity: 0 }}
// //               animate={{ opacity: 1 }}
// //               transition={{ duration: 0.6, delay: 0.3 }}
// //               className="
// //                 grid
// //                 flex-1
// //                 grid-cols-1
// //                 gap-x-4
// //                 gap-y-3

// //                 sm:grid-cols-2
// //                 sm:gap-x-6

// //                 lg:grid-cols-2
// //               "
// //             >
// //               {points.map((p) => (
// //                 <li
// //                   key={p}
// //                   className="
// //                     flex
// //                     items-center
// //                     gap-2
// //                     text-sm
// //                     font-bold
// //                     leading-5
// //                     text-[#173252]

// //                     sm:text-base
// //                   "
// //                 >
// //                   <CheckCircle2
// //                     className="
// //                       h-5
// //                       w-5
// //                       shrink-0
// //                       text-orange-500
// //                     "
// //                   />

// //                   {p}
// //                 </li>
// //               ))}
// //             </motion.ul>

// //             {/* Mascot — visible ONLY on mobile/tablet, beside the points list */}
// //           {/* Mascot — visible ONLY on mobile/tablet, beside the points list */}
// // <motion.img
// //   initial={{ opacity: 0, scale: 0.85 }}
// //   animate={{ opacity: 1, scale: 1 }}
// //   transition={{ duration: 0.6, delay: 0.35 }}
// //   src={mascot}
// //   alt="Legal Papers India advisor"
// //   className="
// //     flex
// //     w-40
// //     shrink-0
// //     object-contain
// //     drop-shadow-[0_12px_20px_rgba(30,70,120,0.20)]

// //     sm:w-48

// //     lg:hidden
// //   "
// // />
// //           </div>

// //           {/* Stat box — replaces old small rating pill */}
// //          {/* Stat box — replaces old small rating pill */}
// // <motion.div
// //   initial={{ opacity: 0, y: 10 }}
// //   animate={{ opacity: 1, y: 0 }}
// //   transition={{ duration: 0.5, delay: 0.4 }}
// //   className="
// //     relative
// //     mt-7
// //     w-full
// //     overflow-hidden
// //     rounded-2xl
// //     bg-blue-600
// //     px-5
// //     py-3

// //     shadow-[0_15px_30px_-10px_rgba(37,99,235,0.45)]

// //     sm:py-4
// //   "
// // >
// //             {/* animated shimmer sweep */}
// //             <div
// //               className="
// //                 animate-shimmer-slide
// //                 pointer-events-none
// //                 absolute
// //                 inset-0
// //                 bg-gradient-to-r
// //                 from-transparent
// //                 via-white/25
// //                 to-transparent
// //               "
// //             />

// //             <p
// //               className="
// //                 relative
// //                 z-10
// //                 text-center
// //                 text-lg
// //                 font-extrabold
// //                 tracking-wide
// //                 text-white

// //                 sm:text-xl
// //               "
// //             >
// //               Trusted for 10,000+ GST Registrations
// //             </p>
// //           </motion.div>
// //         </div>

// //         {/* =====================================================
// //             RIGHT — FORM + IMAGE (desktop)
// //         ====================================================== */}

// //         <div
// //           className="
// //             order-2
// //             flex
// //             flex-col
// //             items-center

// //             lg:items-center
// //           "
// //         >
// //           {/* =================================================
// //               FORM
// //               Mobile: FIRST
// //               Desktop: SECOND
// //           ================================================== */}

// //           <motion.div
// //             initial={{
// //               opacity: 0,
// //               y: 25,
// //               scale: 0.97,
// //             }}
// //             animate={{
// //               opacity: 1,
// //               y: 0,
// //               scale: 1,
// //             }}
// //             transition={{
// //               duration: 0.6,
// //               delay: 0.35,
// //             }}
// //             className="
// //               order-1
// //               relative
// //               mt-2
// //               w-full
// //               max-w-sm

// //               lg:order-2
// //               lg:mt-8
// //               lg:max-w-md
// //             "
// //           >
// //             {/* Form */}
// //             <LeadForm />
// //           </motion.div>

// //           {/* =================================================
// //               MASCOT IMAGE — DESKTOP ONLY now
// //               (mobile version moved beside the points list above)
// //           ================================================== */}

// //           <motion.div
// //             initial={{
// //               opacity: 0,
// //               y: 30,
// //               scale: 0.88,
// //             }}
// //             animate={{
// //               opacity: 1,
// //               y: 0,
// //               scale: 1,
// //             }}
// //             transition={{
// //               duration: 0.7,
// //               delay: 0.2,
// //               ease: "easeOut",
// //             }}
// //             className="
// //               order-2
// //               relative
// //               hidden
// //               mt-0
// //               items-end
// //               justify-center

// //               lg:order-1
// //               lg:flex
// //             "
// //           >
// //             {/* Soft image glow */}
// //             <div
// //               className="
// //                 pointer-events-none
// //                 absolute
// //                 bottom-5
// //                 left-1/2
// //                 h-40
// //                 w-64
// //                 -translate-x-1/2
// //                 rounded-full
// //                 bg-blue-300/25
// //                 blur-3xl
// //               "
// //             />

// //             <img
// //               src={mascot}
// //               alt="Legal Papers India advisor"
// //               className="
// //                 relative
// //                 z-10
// //                 w-64
// //                 object-contain
// //                 drop-shadow-[0_22px_35px_rgba(30,70,120,0.22)]

// //                 md:w-80

// //                 lg:w-[22rem]

// //                 xl:w-[25rem]
// //               "
// //             />
// //           </motion.div>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // }



// // import { motion } from "framer-motion";
// // import { CheckCircle2 } from "lucide-react";
// // import LeadForm from "./LeadForm";
// // import mascot from "../assets/hero-gst-form (3).png";

// // const points = [
// //   "1 Day GST Application",
// //   "GST Apply in Tatkal",
// //   "Advisor for GST",
// //   "GST Billing Software",
// //   "GST Registration",
// //   "Same Day Process for GST",
// // ];

// // export default function Hero() {
// //   return (
// //     <section className="relative overflow-hidden bg-gradient-to-br from-[#eef6ff] via-[#f8fbff] to-[#eaf3ff]">
// //       {/* Shimmer keyframes for the stat box */}
// //       <style>{`
// //         @keyframes shimmerSlide {
// //           0% { transform: translateX(-100%); }
// //           100% { transform: translateX(100%); }
// //         }
// //         .animate-shimmer-slide {
// //           animation: shimmerSlide 2.6s ease-in-out infinite;
// //         }
// //       `}</style>

// //       {/* ================= BACKGROUND DECORATION ================= */}

// //       {/* Soft blue glow */}
// //       <div
// //         className="
// //           pointer-events-none
// //           absolute
// //           -left-32
// //           top-20
// //           h-80
// //           w-80
// //           rounded-full
// //           bg-blue-300/20
// //           blur-3xl
// //         "
// //       />

// //       {/* Soft orange glow */}
// //       <div
// //         className="
// //           pointer-events-none
// //           absolute
// //           right-[-100px]
// //           top-10
// //           h-72
// //           w-72
// //           rounded-full
// //           bg-orange-300/15
// //           blur-3xl
// //         "
// //       />

// //       {/* Bottom blue glow */}
// //       <div
// //         className="
// //           pointer-events-none
// //           absolute
// //           bottom-[-160px]
// //           left-1/2
// //           h-96
// //           w-96
// //           -translate-x-1/2
// //           rounded-full
// //           bg-blue-200/20
// //           blur-3xl
// //         "
// //       />

// //       {/* Decorative dotted texture */}
// //       <div
// //         className="pointer-events-none absolute inset-0 opacity-[0.35]"
// //         style={{
// //           backgroundImage:
// //             "radial-gradient(rgba(30,91,160,0.10) 1px, transparent 1px)",
// //           backgroundSize: "22px 22px",
// //         }}
// //       />

// //       {/* ================= MAIN CONTAINER ================= */}

// //       <div className="relative mx-auto grid max-w-6xl grid-cols-1 items-start gap-8 px-4 pb-16 pt-8 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:gap-10 lg:px-5 lg:pb-24 lg:pt-10">

// //         {/* =====================================================
// //             LEFT — HEADLINE + CONTENT
// //         ====================================================== */}

// //         <div className="order-1">
// //           {/* Small heading */}
// //           <motion.p
// //             initial={{ opacity: 0, y: 10 }}
// //             animate={{ opacity: 1, y: 0 }}
// //             transition={{ duration: 0.5 }}
// //             className="
// //               font-mono
// //               text-sm
// //               font-bold
// //               uppercase
// //               tracking-[0.16em]
// //               text-orange-500

// //               sm:text-base
// //               sm:tracking-[0.2em]
// //             "
// //           >
// //             GST Registration · Pan-India
// //           </motion.p>

// //           {/* Main Heading */}
// //           <motion.h1
// //             initial={{ opacity: 0, y: 16 }}
// //             animate={{ opacity: 1, y: 0 }}
// //             transition={{ duration: 0.6, delay: 0.1 }}
// //             className="
// //               mt-4
// //               font-display
// //               text-[2.35rem]
// //               font-extrabold
// //               leading-[1.08]
// //               tracking-tight
// //               text-[#126dc4]

// //               sm:text-5xl

// //               lg:text-[3.65rem]
// //             "
// //           >
// //             Get GST Registration
// //             <br />
// //             in just{" "}
// //             <span className="relative inline-block italic text-orange-500">
// //               one day.
// //               {/* Underline */}
// //               <svg
// //                 viewBox="0 0 160 14"
// //                 className="
// //                   absolute
// //                   -bottom-2
// //                   left-0
// //                   h-3
// //                   w-full
// //                   text-orange-500
// //                 "
// //                 preserveAspectRatio="none"
// //               >
// //                 <path
// //                   d="M2 9.5C30 2.5 75 2 100 6.5C120 10 140 6 158 4"
// //                   stroke="currentColor"
// //                   strokeWidth="3"
// //                   strokeLinecap="round"
// //                   fill="none"
// //                 />
// //               </svg>
// //             </span>
// //           </motion.h1>

// //           {/* Description */}
// //           <motion.p
// //             initial={{ opacity: 0, y: 16 }}
// //             animate={{ opacity: 1, y: 0 }}
// //             transition={{ duration: 0.6, delay: 0.2 }}
// //             className="
// //               mt-6
// //               max-w-lg
// //               text-base
// //               leading-relaxed
// //               text-slate-600

// //               sm:text-lg
// //             "
// //           >
// //             Legal Papers India handles the paperwork, the portal and the
// //             follow-up with the department — so your registration doesn't sit
// //             stuck on a query you didn't know how to answer.
// //           </motion.p>

// //           {/* Mascot — visible ONLY on mobile/tablet, right below the description */}
// //           {/* Mascot — visible ONLY on mobile/tablet, right below the description */}
// // <motion.div
// //   initial={{ opacity: 0, scale: 0.85 }}
// //   animate={{ opacity: 1, scale: 1 }}
// //   transition={{ duration: 0.6, delay: 0.25 }}
// //   className="
// //     mt-5
// //     flex
// //     justify-center
// //     lg:hidden
// //   "
// // >
// //   <img
// //     src={mascot}
// //     alt="Legal Papers India advisor"
// //     className="
// //       w-72
// //       object-contain
// //       drop-shadow-[0_12px_20px_rgba(30,70,120,0.20)]

// //       sm:w-80
// //       md:w-[22rem]
// //     "
// //   />
// // </motion.div>

// //           {/* Points list — 3-column grid on mobile AND desktop */}
// //           <motion.ul
// //             initial={{ opacity: 0 }}
// //             animate={{ opacity: 1 }}
// //             transition={{ duration: 0.6, delay: 0.3 }}
// //             className="
// //               mt-7
// //               grid
// //               grid-cols-2
// //               gap-x-4
// //               gap-y-3

// //               sm:gap-x-6
// //             "
// //           >
// //             {points.map((p) => (
// //               <li
// //                 key={p}
// //                 className="
// //                   flex
// //                   items-center
// //                   gap-2
// //                   text-sm
// //                   font-bold
// //                   leading-5
// //                   text-[#173252]

// //                   sm:text-base
// //                 "
// //               >
// //                 <CheckCircle2
// //                   className="
// //                     h-5
// //                     w-5
// //                     shrink-0
// //                     text-orange-500
// //                   "
// //                 />

// //                 {p}
// //               </li>
// //             ))}
// //           </motion.ul>

// //           {/* Stat box — gold/amber gradient, same as the "Most Popular" badge */}
// //           <motion.div
// //             initial={{ opacity: 0, y: 10 }}
// //             animate={{ opacity: 1, y: 0 }}
// //             transition={{ duration: 0.5, delay: 0.4 }}
// //             className="
// //               relative
// //               mt-7
// //               w-full
// //               overflow-hidden
// //               rounded-2xl
// //               bg-gradient-to-r
// //               from-[#D4AF37] to-[#F5D76E]
// //               px-5
// //               py-3

// //               shadow-[0_15px_30px_-10px_rgba(217,164,6,0.45)]

// //               sm:py-4
// //             "
// //           >
// //             {/* animated shimmer sweep */}
// //             <div
// //               className="
// //                 animate-shimmer-slide
// //                 pointer-events-none
// //                 absolute
// //                 inset-0
// //                 bg-gradient-to-r
// //                 from-transparent
// //                 via-white/30
// //                 to-transparent
// //               "
// //             />

// //             <p
// //               className="
// //                 relative
// //                 z-10
// //                 text-center
// //                 text-lg
// //                 font-extrabold
// //                 tracking-wide
// //                 text-navy-900

// //                 sm:text-xl
// //               "
// //             >
// //               10,000+ GST Registration Certificates Issued
// //             </p>
// //           </motion.div>
// //         </div>

// //         {/* =====================================================
// //             RIGHT — FORM + IMAGE (desktop)
// //         ====================================================== */}

// //         <div
// //           className="
// //             order-2
// //             flex
// //             flex-col
// //             items-center

// //             lg:items-center
// //           "
// //         >
// //           {/* =================================================
// //               FORM
// //               Mobile: FIRST
// //               Desktop: SECOND
// //           ================================================== */}

// //           <motion.div
// //             initial={{
// //               opacity: 0,
// //               y: 25,
// //               scale: 0.97,
// //             }}
// //             animate={{
// //               opacity: 1,
// //               y: 0,
// //               scale: 1,
// //             }}
// //             transition={{
// //               duration: 0.6,
// //               delay: 0.35,
// //             }}
// //             className="
// //               order-1
// //               relative
// //               mt-2
// //               w-full
// //               max-w-sm

// //               lg:order-2
// //               lg:mt-8
// //               lg:max-w-md
// //             "
// //           >
// //             {/* Form */}
// //             <LeadForm />
// //           </motion.div>

// //           {/* =================================================
// //               MASCOT IMAGE — DESKTOP ONLY
// //               (mobile version now sits below the description above)
// //           ================================================== */}

// //           <motion.div
// //             initial={{
// //               opacity: 0,
// //               y: 30,
// //               scale: 0.88,
// //             }}
// //             animate={{
// //               opacity: 1,
// //               y: 0,
// //               scale: 1,
// //             }}
// //             transition={{
// //               duration: 0.7,
// //               delay: 0.2,
// //               ease: "easeOut",
// //             }}
// //             className="
// //               order-2
// //               relative
// //               hidden
// //               mt-0
// //               items-end
// //               justify-center

// //               lg:order-1
// //               lg:flex
// //             "
// //           >
// //             {/* Soft image glow */}
// //             <div
// //               className="
// //                 pointer-events-none
// //                 absolute
// //                 bottom-5
// //                 left-1/2
// //                 h-40
// //                 w-64
// //                 -translate-x-1/2
// //                 rounded-full
// //                 bg-blue-300/25
// //                 blur-3xl
// //               "
// //             />

// //             <img
// //               src={mascot}
// //               alt="Legal Papers India advisor"
// //               className="
// //                 relative
// //                 z-10
// //                 w-64
// //                 object-contain
// //                 drop-shadow-[0_22px_35px_rgba(30,70,120,0.22)]

// //                 md:w-80

// //                 lg:w-[22rem]

// //                 xl:w-[25rem]
// //               "
// //             />
// //           </motion.div>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // }




// import { motion } from "framer-motion";
// import { CheckCircle2 } from "lucide-react";
// import LeadForm from "./LeadForm";
// import mascot from "../assets/hero-gst-form (3).png";

// const points = [
//   "1 Day GST Application",
//   "GST Apply in Tatkal",
//   "Advisor for GST",
//   "GST Billing Software",
//   "GST Registration",
//   "Same Day Process for GST",
// ];

// export default function Hero() {
//   return (
//     <section className="relative overflow-hidden bg-gradient-to-br from-[#eef6ff] via-[#f8fbff] to-[#eaf3ff]">
//       {/* Shimmer keyframes for the stat box */}
//       <style>{`
//         @keyframes shimmerSlide {
//           0% { transform: translateX(-100%); }
//           100% { transform: translateX(100%); }
//         }
//         .animate-shimmer-slide {
//           animation: shimmerSlide 2.6s ease-in-out infinite;
//         }
//       `}</style>

//       {/* ================= BACKGROUND DECORATION ================= */}

//       {/* Soft blue glow */}
//       <div
//         className="
//           pointer-events-none
//           absolute
//           -left-32
//           top-20
//           h-80
//           w-80
//           rounded-full
//           bg-blue-300/20
//           blur-3xl
//         "
//       />

//       {/* Soft orange glow */}
//       <div
//         className="
//           pointer-events-none
//           absolute
//           right-[-100px]
//           top-10
//           h-72
//           w-72
//           rounded-full
//           bg-orange-300/15
//           blur-3xl
//         "
//       />

//       {/* Bottom blue glow */}
//       <div
//         className="
//           pointer-events-none
//           absolute
//           bottom-[-160px]
//           left-1/2
//           h-96
//           w-96
//           -translate-x-1/2
//           rounded-full
//           bg-blue-200/20
//           blur-3xl
//         "
//       />

//       {/* Decorative dotted texture */}
//       <div
//         className="pointer-events-none absolute inset-0 opacity-[0.35]"
//         style={{
//           backgroundImage:
//             "radial-gradient(rgba(30,91,160,0.10) 1px, transparent 1px)",
//           backgroundSize: "22px 22px",
//         }}
//       />

//       {/* ================= MAIN CONTAINER ================= */}

//       <div className="relative mx-auto grid max-w-6xl grid-cols-1 items-start gap-8 px-4 pb-16 pt-8 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:gap-10 lg:px-5 lg:pb-24 lg:pt-10">

//         {/* =====================================================
//             LEFT — HEADLINE + CONTENT
//         ====================================================== */}

//         <div className="order-1">
//           {/* Small heading */}
//           <motion.p
//             initial={{ opacity: 0, y: 10 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5 }}
//             className="
//               font-mono
//               text-sm
//               font-bold
//               uppercase
//               tracking-[0.16em]
//               text-orange-500

//               sm:text-base
//               sm:tracking-[0.2em]
//             "
//           >
//             GST Registration · Pan-India
//           </motion.p>

//           {/* Main Heading */}
//           <motion.h1
//             initial={{ opacity: 0, y: 16 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.1 }}
//             className="
//               mt-4
//               font-display
//               text-[2.35rem]
//               font-extrabold
//               leading-[1.08]
//               tracking-tight
//               text-[#126dc4]

//               sm:text-5xl

//               lg:text-[3.65rem]
//             "
//           >
//             Get GST Registration
//             <br />
//             in just{" "}
//             <span className="relative inline-block italic text-orange-500">
//               one day.
//               {/* Underline */}
//               <svg
//                 viewBox="0 0 160 14"
//                 className="
//                   absolute
//                   -bottom-2
//                   left-0
//                   h-3
//                   w-full
//                   text-orange-500
//                 "
//                 preserveAspectRatio="none"
//               >
//                 <path
//                   d="M2 9.5C30 2.5 75 2 100 6.5C120 10 140 6 158 4"
//                   stroke="currentColor"
//                   strokeWidth="3"
//                   strokeLinecap="round"
//                   fill="none"
//                 />
//               </svg>
//             </span>
//           </motion.h1>

//           {/* Description */}
//           <motion.p
//             initial={{ opacity: 0, y: 16 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.2 }}
//             className="
//               mt-6
//               max-w-lg
//               text-base
//               leading-relaxed
//               text-slate-600

//               sm:text-lg
//             "
//           >
//             Legal Papers India handles the paperwork, the portal and the
//             follow-up with the department — so your registration doesn't sit
//             stuck on a query you didn't know how to answer.
//           </motion.p>

//           {/* Mascot — visible ONLY on mobile/tablet, right below the description */}
//           {/* Mascot — visible ONLY on mobile/tablet, right below the description */}
// <motion.div
//   initial={{ opacity: 0, scale: 0.85 }}
//   animate={{ opacity: 1, scale: 1 }}
//   transition={{ duration: 0.6, delay: 0.25 }}
//   className="
//     mt-5
//     flex
//     justify-center
//     lg:hidden
//   "
// >
//   <img
//     src={mascot}
//     alt="Legal Papers India advisor"
//     className="
//       w-80
//       object-contain
//       drop-shadow-[0_12px_20px_rgba(30,70,120,0.20)]

//       sm:w-96
//       md:w-[26rem]
//     "
//   />
// </motion.div>

//           {/* Points list — 3-column grid on mobile AND desktop */}
//           <motion.ul
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ duration: 0.6, delay: 0.3 }}
//             className="
//               mt-7
//               grid
//               grid-cols-2
//               gap-x-4
//               gap-y-3

//               sm:gap-x-6
//             "
//           >
//             {points.map((p) => (
//               <li
//                 key={p}
//                 className="
//                   flex
//                   items-center
//                   gap-2
//                   text-sm
//                   font-bold
//                   leading-5
//                   text-[#173252]

//                   sm:text-base
//                 "
//               >
//                 <CheckCircle2
//                   className="
//                     h-5
//                     w-5
//                     shrink-0
//                     text-orange-500
//                   "
//                 />

//                 {p}
//               </li>
//             ))}
//           </motion.ul>

//           {/* Stat box — gold/amber gradient, same as the "Most Popular" badge */}
//           <motion.div
//             initial={{ opacity: 0, y: 10 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: 0.4 }}
//             className="
//               relative
//               mt-7
//               w-full
//               overflow-hidden
//               rounded-2xl
//               bg-gradient-to-r
//               from-[#D4AF37] to-[#F5D76E]
//               px-5
//               py-3

//               shadow-[0_15px_30px_-10px_rgba(217,164,6,0.45)]

//               sm:py-4
//             "
//           >
//             {/* animated shimmer sweep */}
//             <div
//               className="
//                 animate-shimmer-slide
//                 pointer-events-none
//                 absolute
//                 inset-0
//                 bg-gradient-to-r
//                 from-transparent
//                 via-white/30
//                 to-transparent
//               "
//             />

//             <p
//               className="
//                 relative
//                 z-10
//                 text-center
//                 text-lg
//                 font-extrabold
//                 tracking-wide
//                 text-navy-900

//                 sm:text-xl
//               "
//             >
//               10,000+ GST Registration Certificates Issued
//             </p>
//           </motion.div>
//         </div>

//         {/* =====================================================
//             RIGHT — FORM + IMAGE (desktop)
//         ====================================================== */}

//         <div
//           className="
//             order-2
//             flex
//             flex-col
//             items-center

//             lg:items-center
//           "
//         >
//           {/* =================================================
//               FORM
//               Mobile: FIRST
//               Desktop: SECOND
//           ================================================== */}

//           <motion.div
//             initial={{
//               opacity: 0,
//               y: 25,
//               scale: 0.97,
//             }}
//             animate={{
//               opacity: 1,
//               y: 0,
//               scale: 1,
//             }}
//             transition={{
//               duration: 0.6,
//               delay: 0.35,
//             }}
//             className="
//               order-1
//               relative
//               mt-2
//               w-full
//               max-w-sm

//               lg:order-2
//               lg:mt-8
//               lg:max-w-md
//             "
//           >
//             {/* Form */}
//             <LeadForm />
//           </motion.div>

//           {/* =================================================
//               MASCOT IMAGE — DESKTOP ONLY
//               (mobile version now sits below the description above)
//           ================================================== */}

//           <motion.div
//             initial={{
//               opacity: 0,
//               y: 30,
//               scale: 0.88,
//             }}
//             animate={{
//               opacity: 1,
//               y: 0,
//               scale: 1,
//             }}
//             transition={{
//               duration: 0.7,
//               delay: 0.2,
//               ease: "easeOut",
//             }}
//             className="
//               order-2
//               relative
//               hidden
//               mt-0
//               items-end
//               justify-center

//               lg:order-1
//               lg:flex
//             "
//           >
//             {/* Soft image glow */}
//             <div
//               className="
//                 pointer-events-none
//                 absolute
//                 bottom-5
//                 left-1/2
//                 h-40
//                 w-64
//                 -translate-x-1/2
//                 rounded-full
//                 bg-blue-300/25
//                 blur-3xl
//               "
//             />

//             <img
//               src={mascot}
//               alt="Legal Papers India advisor"
//               className="
//                 relative
//                 z-10
//                 w-64
//                 object-contain
//                 drop-shadow-[0_22px_35px_rgba(30,70,120,0.22)]

//                 md:w-80

//                 lg:w-[22rem]

//                 xl:w-[25rem]
//               "
//             />
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// }




import { motion } from "framer-motion";
import { CheckCircle2, BadgeCheck } from "lucide-react";
import LeadForm from "./LeadForm";
import mascot from "../assets/hero-gst-form (3).png";

const points = [
  "1 Day GST Application",
  "GST Apply in Tatkal",
  "Advisor for GST",
  "GST Billing Software",
  "GST Registration",
  "Same Day Process for GST",
];

const statText = "10,000+ GST Registration Certificates Issued";

// Typewriter container — types out each character, then reverses (erases) and loops
const typeContainer = {
  hidden: { opacity: 1 },
  visible: {
    transition: {
      staggerChildren: 0.035,
      repeat: Infinity,
      repeatType: "reverse",
      repeatDelay: 1.4,
    },
  },
};

const typeChar = {
  hidden: { opacity: 0, y: 4 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.18 } },
};

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#eef6ff] via-[#f8fbff] to-[#eaf3ff]">
      {/* Shimmer keyframes for the stat box */}
      <style>{`
        @keyframes shimmerSlide {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        .animate-shimmer-slide {
          animation: shimmerSlide 2.6s ease-in-out infinite;
        }
      `}</style>

      {/* ================= BACKGROUND DECORATION ================= */}

      {/* Soft blue glow */}
      <div
        className="
          pointer-events-none
          absolute
          -left-32
          top-20
          h-80
          w-80
          rounded-full
          bg-blue-300/20
          blur-3xl
        "
      />

      {/* Soft orange glow */}
      <div
        className="
          pointer-events-none
          absolute
          right-[-100px]
          top-10
          h-72
          w-72
          rounded-full
          bg-orange-300/15
          blur-3xl
        "
      />

      {/* Bottom blue glow */}
      <div
        className="
          pointer-events-none
          absolute
          bottom-[-160px]
          left-1/2
          h-96
          w-96
          -translate-x-1/2
          rounded-full
          bg-blue-200/20
          blur-3xl
        "
      />

      {/* Decorative dotted texture */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            "radial-gradient(rgba(30,91,160,0.10) 1px, transparent 1px)",
          backgroundSize: "22px 22px",
        }}
      />

      {/* ================= MAIN CONTAINER ================= */}

      <div className="relative mx-auto grid max-w-6xl grid-cols-1 items-start gap-8 px-4 pb-16 pt-8 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:gap-10 lg:px-5 lg:pb-24 lg:pt-10">

        {/* =====================================================
            LEFT — HEADLINE + CONTENT
        ====================================================== */}

        <div className="order-1">
          {/* Small heading */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="
              font-mono
              text-sm
              font-bold
              uppercase
              tracking-[0.16em]
              text-orange-500

              sm:text-base
              sm:tracking-[0.2em]
            "
          >
            GST Registration · Pan-India
          </motion.p>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="
              mt-4
              font-display
              text-[2.35rem]
              font-extrabold
              leading-[1.08]
              tracking-tight
              text-[#126dc4]

              sm:text-5xl

              lg:text-[3.65rem]
            "
          >
            Get GST Registration
            <br />
            in just{" "}
            <span className="relative inline-block italic text-orange-500">
              one day.
              {/* Underline */}
              <svg
                viewBox="0 0 160 14"
                className="
                  absolute
                  -bottom-2
                  left-0
                  h-3
                  w-full
                  text-orange-500
                "
                preserveAspectRatio="none"
              >
                <path
                  d="M2 9.5C30 2.5 75 2 100 6.5C120 10 140 6 158 4"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  fill="none"
                />
              </svg>
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="
              mt-6
              max-w-lg
              text-base
              leading-relaxed
              text-slate-600

              sm:text-lg
            "
          >
            Legal Papers India handles the paperwork, the portal and the
            follow-up with the department — so your registration doesn't sit
            stuck on a query you didn't know how to answer.
          </motion.p>

          {/* Mascot — visible ONLY on mobile/tablet, right below the description */}
          {/* Mascot — visible ONLY on mobile/tablet, right below the description */}
<motion.div
  initial={{ opacity: 0, scale: 0.85 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.6, delay: 0.25 }}
  className="
    mt-5
    flex
    justify-center
    lg:hidden
  "
>
  <img
    src={mascot}
    alt="Legal Papers India advisor"
    className="
      w-96
      object-contain
      drop-shadow-[0_12px_20px_rgba(30,70,120,0.20)]

      sm:w-[28rem]
      md:w-[30rem]
    "
  />
</motion.div>

          {/* Points list — 3-column grid on mobile AND desktop */}
          <motion.ul
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="
              mt-7
              grid
              grid-cols-2
              gap-x-4
              gap-y-3

              sm:gap-x-6
            "
          >
            {points.map((p) => (
              <li
                key={p}
                className="
                  flex
                  items-center
                  gap-2
                  text-sm
                  font-bold
                  leading-5
                  text-[#173252]

                  sm:text-base
                "
              >
                <CheckCircle2
                  className="
                    h-5
                    w-5
                    shrink-0
                    text-orange-500
                  "
                />

                {p}
              </li>
            ))}
          </motion.ul>

          {/* Stat box — gold/amber gradient, with pulsing icon + looping typewriter text */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="
              relative
              mt-7
              w-full
              overflow-hidden
              rounded-2xl
              bg-gradient-to-r
              from-[#D4AF37] to-[#F5D76E]
              px-5
              py-3

              shadow-[0_15px_30px_-10px_rgba(217,164,6,0.45)]

              sm:py-4
            "
          >
            {/* Ping pulse ring — same style as the WhatsApp button */}
            <span className="pointer-events-none absolute inset-0 z-0 animate-ping rounded-2xl bg-[#F5D76E] opacity-40" />
            {/* animated shimmer sweep */}
            <div
              className="
                animate-shimmer-slide
                pointer-events-none
                absolute
                inset-0
                bg-gradient-to-r
                from-transparent
                via-white/30
                to-transparent
              "
            />

            <div className="relative z-10 flex items-center justify-center gap-2 sm:gap-3">
              <motion.span
                animate={{
                  scale: [1, 1.18, 1],
                  rotate: [0, -8, 8, 0],
                }}
                transition={{
                  duration: 2.2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/25 sm:h-9 sm:w-9"
              >
                <BadgeCheck className="h-5 w-5 text-navy-900 sm:h-6 sm:w-6" />
              </motion.span>

              {/* Typewriter text — types out, erases, loops */}
              <motion.p
                variants={typeContainer}
                initial="hidden"
                animate="visible"
                className="
                  text-center
                  text-base
                  font-extrabold
                  tracking-wide
                  text-navy-900

                  sm:text-xl
                "
              >
                {statText.split("").map((char, i) => (
                  <motion.span
                    key={i}
                    variants={typeChar}
                    className="inline-block"
                  >
                    {char === " " ? "\u00A0" : char}
                  </motion.span>
                ))}

                {/* Blinking cursor */}
                <motion.span
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{
                    duration: 0.8,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="ml-0.5 inline-block w-[2px] translate-y-[2px] bg-navy-900"
                  style={{ height: "1em" }}
                />
              </motion.p>
            </div>
          </motion.div>
        </div>

        {/* =====================================================
            RIGHT — FORM + IMAGE (desktop)
        ====================================================== */}

        <div
          className="
            order-2
            flex
            flex-col
            items-center

            lg:items-center
          "
        >
          {/* =================================================
              FORM
              Mobile: FIRST
              Desktop: SECOND
          ================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              y: 25,
              scale: 0.97,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            transition={{
              duration: 0.6,
              delay: 0.35,
            }}
            className="
              order-1
              relative
              mt-2
              w-full
              max-w-sm

              lg:order-2
              lg:mt-8
              lg:max-w-md
            "
          >
            {/* Form */}
            <LeadForm />
          </motion.div>

          {/* =================================================
              MASCOT IMAGE — DESKTOP ONLY
              (mobile version now sits below the description above)
          ================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              y: 30,
              scale: 0.88,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            transition={{
              duration: 0.7,
              delay: 0.2,
              ease: "easeOut",
            }}
            className="
              order-2
              relative
              hidden
              mt-0
              items-end
              justify-center

              lg:order-1
              lg:flex
            "
          >
            {/* Soft image glow */}
            <div
              className="
                pointer-events-none
                absolute
                bottom-5
                left-1/2
                h-40
                w-64
                -translate-x-1/2
                rounded-full
                bg-blue-300/25
                blur-3xl
              "
            />

            <img
              src={mascot}
              alt="Legal Papers India advisor"
              className="
                relative
                z-10
                w-64
                object-contain
                drop-shadow-[0_22px_35px_rgba(30,70,120,0.22)]

                md:w-80

                lg:w-[22rem]

                xl:w-[25rem]
              "
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
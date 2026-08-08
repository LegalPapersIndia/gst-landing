// // // // import { motion } from "framer-motion";
// // // // import { CheckCircle2, Star } from "lucide-react";
// // // // import LeadForm from "./LeadForm";

// // // // const points = ["Filed by tax professionals", "Application within 24 hours", "No office visit needed"];

// // // // export default function Hero() {
// // // //   return (
// // // //     <section className="relative overflow-hidden bg-navy-500/5">
// // // //       {/* decorative background texture */}
// // // //       <div
// // // //         className="pointer-events-none absolute inset-0 opacity-[0.4]"
// // // //         style={{
// // // //           backgroundImage: "radial-gradient(rgba(18,109,196,0.14) 1px, transparent 1px)",
// // // //           backgroundSize: "22px 22px",
// // // //           maskImage: "radial-gradient(ellipse 70% 60% at 30% 20%, black, transparent)",
// // // //         }}
// // // //       />
// // // //       <motion.div
// // // //         animate={{ x: [0, 20, 0], y: [0, 15, 0] }}
// // // //         transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
// // // //         className="pointer-events-none absolute -left-32 top-0 h-96 w-96 rounded-full bg-gold-500/10 blur-3xl"
// // // //       />
// // // //       <motion.div
// // // //         animate={{ x: [0, -20, 0], y: [0, -15, 0] }}
// // // //         transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
// // // //         className="pointer-events-none absolute right-0 top-40 h-72 w-72 rounded-full bg-navy-500/15 blur-3xl"
// // // //       />

// // // //       <div className="relative mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-5 pb-16 pt-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12 lg:pb-28 lg:pt-20">
// // // //         {/* form + stat badge — first on mobile, right column on desktop */}
// // // //         <div className="order-1 flex justify-center lg:order-2">
// // // //           <motion.div
// // // //             initial={{ opacity: 0, y: 16, scale: 0.97 }}
// // // //             animate={{ opacity: 1, y: 0, scale: 1 }}
// // // //             transition={{ duration: 0.6, delay: 0.15 }}
// // // //             className="relative w-full max-w-sm"
// // // //           >
// // // //             <div className="pointer-events-none absolute -inset-6 -z-10 rounded-[2rem] bg-navy-500/10 blur-2xl" />

// // // //             <motion.div
// // // //               initial={{ opacity: 0, y: -10, scale: 0.9 }}
// // // //               animate={{ opacity: 1, y: 0, scale: 1 }}
// // // //               transition={{ duration: 0.5, delay: 0.6 }}
// // // //               className="absolute -right-3 -top-6 z-10 sm:-right-6"
// // // //             >
// // // //               <motion.div
// // // //                 animate={{ y: [0, -6, 0] }}
// // // //                 transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
// // // //                 className="flex items-center gap-2.5 rounded-2xl border border-navy-900/10 bg-white px-4 py-3 shadow-[0_20px_40px_-15px_rgba(10,20,40,0.45)]"
// // // //               >
// // // //                 <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-seal/10 font-mono text-sm font-bold text-seal">
// // // //                   1L+
// // // //                 </span>
// // // //                 <span className="text-xs font-medium leading-tight text-navy-900">
// // // //                   GSTINs
// // // //                   <br />
// // // //                   filed
// // // //                 </span>
// // // //               </motion.div>
// // // //             </motion.div>

// // // //             <LeadForm />
// // // //           </motion.div>
// // // //         </div>

// // // //         {/* headline + content — second on mobile, left column on desktop */}
// // // //         <div className="order-2 lg:order-1">
// // // //           <motion.p
// // // //             initial={{ opacity: 0, y: 10 }}
// // // //             animate={{ opacity: 1, y: 0 }}
// // // //             transition={{ duration: 0.5 }}
// // // //             className="font-mono text-xs uppercase tracking-[0.2em] text-gold-600"
// // // //           >
// // // //             GST Registration · Pan-India
// // // //           </motion.p>

// // // //           <motion.h1
// // // //             initial={{ opacity: 0, y: 16 }}
// // // //             animate={{ opacity: 1, y: 0 }}
// // // //             transition={{ duration: 0.6, delay: 0.1 }}
// // // //             className="mt-4 font-display text-4xl leading-[1.1] text-navy-600 sm:text-5xl lg:text-[3.4rem]"
// // // //           >
// // // //             Get GST Registration
// // // //             <br />
// // // //             in just
// // // //             <span className="relative ml-2 inline-block italic text-gold-600">
// // // //               one day.
// // // //               <svg
// // // //                 viewBox="0 0 160 14"
// // // //                 className="absolute -bottom-2 left-0 h-3 w-full text-gold-400"
// // // //                 preserveAspectRatio="none"
// // // //               >
// // // //                 <path
// // // //                   d="M2 9.5C30 2.5 75 2 100 6.5C120 10 140 6 158 4"
// // // //                   stroke="currentColor"
// // // //                   strokeWidth="3"
// // // //                   strokeLinecap="round"
// // // //                   fill="none"
// // // //                 />
// // // //               </svg>
// // // //             </span>
// // // //           </motion.h1>

// // // //           <motion.p
// // // //             initial={{ opacity: 0, y: 16 }}
// // // //             animate={{ opacity: 1, y: 0 }}
// // // //             transition={{ duration: 0.6, delay: 0.2 }}
// // // //             className="mt-6 max-w-lg text-base leading-relaxed text-slate-500"
// // // //           >
// // // //             Legal Papers India handles the paperwork, the portal and the follow-up with the department —
// // // //             so your registration doesn't sit stuck on a query you didn't know how to answer.
// // // //           </motion.p>

// // // //           <motion.ul
// // // //             initial={{ opacity: 0 }}
// // // //             animate={{ opacity: 1 }}
// // // //             transition={{ duration: 0.6, delay: 0.3 }}
// // // //             className="mt-7 flex flex-col gap-2.5 sm:flex-row sm:flex-wrap sm:gap-x-6 sm:gap-y-2"
// // // //           >
// // // //             {points.map((p) => (
// // // //               <li key={p} className="flex items-center gap-2 text-sm text-ink">
// // // //                 <CheckCircle2 className="h-4 w-4 shrink-0 text-seal" />
// // // //                 {p}
// // // //               </li>
// // // //             ))}
// // // //           </motion.ul>

// // // //           <motion.div
// // // //             initial={{ opacity: 0, y: 10 }}
// // // //             animate={{ opacity: 1, y: 0 }}
// // // //             transition={{ duration: 0.5, delay: 0.4 }}
// // // //             className="mt-7 inline-flex items-center gap-2 rounded-full border border-navy-900/10 bg-white px-3.5 py-1.5 shadow-sm"
// // // //           >
// // // //             <div className="flex">
// // // //               {Array.from({ length: 5 }).map((_, idx) => (
// // // //                 <Star key={idx} className="h-3 w-3 fill-gold-500 text-gold-500" />
// // // //               ))}
// // // //             </div>
// // // //             <span className="font-mono text-[11px] text-slate-500">4.8 rated · 2,000+ businesses</span>
// // // //           </motion.div>
// // // //         </div>
// // // //       </div>
// // // //     </section>
// // // //   );
// // // // }

// // // import { motion } from "framer-motion";
// // // import { CheckCircle2, Star } from "lucide-react";
// // // import LeadForm from "./LeadForm";

// // // const points = [
// // //   "1 Day GST Application",
// // //   "GST Apply in Tatkal",
// // //   "Dedicated Advisor for GST",
// // //   "Complimentary GST Billing Software",
// // //   "GST Registration",
// // //   "Same Day Process for GST",
// // // ];

// // // export default function Hero() {
// // //   return (
// // //     <section className="relative overflow-hidden bg-white">
// // //       {/* decorative background texture */}
// // //       <div
// // //         className="pointer-events-none absolute inset-0 opacity-[0.4]"
// // //         style={{
// // //           backgroundImage: "radial-gradient(rgba(18,109,196,0.14) 1px, transparent 1px)",
// // //           backgroundSize: "22px 22px",
// // //           maskImage: "radial-gradient(ellipse 70% 60% at 30% 20%, black, transparent)",
// // //         }}
// // //       />

// // //       <div className="relative mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-5 pb-16 pt-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12 lg:pb-28 lg:pt-20">
// // //         {/* form + stat badge — first on mobile, right column on desktop */}
// // //         <div className="order-1 flex justify-center lg:order-2">
// // //           <motion.div
// // //             initial={{ opacity: 0, y: 16, scale: 0.97 }}
// // //             animate={{ opacity: 1, y: 0, scale: 1 }}
// // //             transition={{ duration: 0.6, delay: 0.15 }}
// // //             className="relative w-full max-w-sm"
// // //           >
// // //             <div className="pointer-events-none absolute -inset-6 -z-10 rounded-[2rem] bg-navy-500/10 blur-2xl" />

// // //             <motion.div
// // //               initial={{ opacity: 0, y: -10, scale: 0.9 }}
// // //               animate={{ opacity: 1, y: 0, scale: 1 }}
// // //               transition={{ duration: 0.5, delay: 0.6 }}
// // //               className="absolute -right-3 -top-6 z-10 sm:-right-6"
// // //             >
// // //               <motion.div
// // //                 animate={{ y: [0, -6, 0] }}
// // //                 transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
// // //                 className="flex items-center gap-2.5 rounded-2xl border border-navy-900/10 bg-white px-4 py-3 shadow-[0_20px_40px_-15px_rgba(10,20,40,0.45)]"
// // //               >
// // //                 <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-seal/10 font-mono text-sm font-bold text-seal">
// // //                   1L+
// // //                 </span>
// // //                 <span className="text-xs font-medium leading-tight text-navy-900">
// // //                   GSTINs
// // //                   <br />
// // //                   filed
// // //                 </span>
// // //               </motion.div>
// // //             </motion.div>

// // //             <LeadForm />
// // //           </motion.div>
// // //         </div>

// // //         {/* headline + content — second on mobile, left column on desktop */}
// // //         <div className="order-2 lg:order-1">
// // //           <motion.p
// // //             initial={{ opacity: 0, y: 10 }}
// // //             animate={{ opacity: 1, y: 0 }}
// // //             transition={{ duration: 0.5 }}
// // //             className="font-mono text-base font-bold uppercase tracking-[0.2em] text-gold-600"
// // //           >
// // //             GST Registration · Pan-India
// // //           </motion.p>

// // //           <motion.h1
// // //             initial={{ opacity: 0, y: 16 }}
// // //             animate={{ opacity: 1, y: 0 }}
// // //             transition={{ duration: 0.6, delay: 0.1 }}
// // //             className="mt-4 font-display text-4xl leading-[1.1] text-navy-600 sm:text-5xl lg:text-[3.4rem]"
// // //           >
// // //             Get GST Registration
// // //             <br />
// // //             in just
// // //             <span className="relative ml-2 inline-block italic text-gold-600">
// // //               one day.
// // //               <svg
// // //                 viewBox="0 0 160 14"
// // //                 className="absolute -bottom-2 left-0 h-3 w-full text-gold-400"
// // //                 preserveAspectRatio="none"
// // //               >
// // //                 <path
// // //                   d="M2 9.5C30 2.5 75 2 100 6.5C120 10 140 6 158 4"
// // //                   stroke="currentColor"
// // //                   strokeWidth="3"
// // //                   strokeLinecap="round"
// // //                   fill="none"
// // //                 />
// // //               </svg>
// // //             </span>
// // //           </motion.h1>

// // //           <motion.p
// // //             initial={{ opacity: 0, y: 16 }}
// // //             animate={{ opacity: 1, y: 0 }}
// // //             transition={{ duration: 0.6, delay: 0.2 }}
// // //             className="mt-6 max-w-lg text-base leading-relaxed text-ink"
// // //           >
// // //             Legal Papers India handles the paperwork, the portal and the follow-up with the department —
// // //             so your registration doesn't sit stuck on a query you didn't know how to answer.
// // //           </motion.p>

// // //           <motion.ul
// // //             initial={{ opacity: 0 }}
// // //             animate={{ opacity: 1 }}
// // //             transition={{ duration: 0.6, delay: 0.3 }}
// // //             className="mt-7 grid grid-cols-1 gap-x-6 gap-y-2.5 sm:grid-cols-2"
// // //           >
// // //             {points.map((p) => (
// // //               <li key={p} className="flex items-center gap-2 text-base font-bold leading-5 text-ink">
// // //                 <CheckCircle2 className="h-4 w-4 shrink-0 text-seal" />
// // //                 {p}
// // //               </li>
// // //             ))}
// // //           </motion.ul>

// // //           <motion.div
// // //             initial={{ opacity: 0, y: 10 }}
// // //             animate={{ opacity: 1, y: 0 }}
// // //             transition={{ duration: 0.5, delay: 0.4 }}
// // //             className="mt-7 inline-flex items-center gap-2 rounded-full border border-navy-900/10 bg-white px-3.5 py-1.5 shadow-sm"
// // //           >
// // //             <div className="flex">
// // //               {Array.from({ length: 5 }).map((_, idx) => (
// // //                 <Star key={idx} className="h-3 w-3 fill-gold-500 text-gold-500" />
// // //               ))}
// // //             </div>
// // //             <span className="font-mono text-[11px] font-bold text-slate-500">4.8 rated · 2,000+ businesses</span>
// // //           </motion.div>
// // //         </div>
// // //       </div>
// // //     </section>
// // //   );
// // // }

// // import { motion } from "framer-motion";
// // import { CheckCircle2, Star } from "lucide-react";
// // import LeadForm from "./LeadForm";
// // import mascot from "../assets/mascot-pointing.webp";

// // const points = [
// //   "1 Day GST Application",
// //   "GST Apply in Tatkal",
// //   "Dedicated Advisor for GST",
// //   "Complimentary GST Billing Software",
// //   "GST Registration",
// //   "Same Day Process for GST",
// // ];

// // export default function Hero() {
// //   return (
// //     <section className="relative overflow-hidden bg-white">
// //       {/* decorative background texture */}
// //       <div
// //         className="pointer-events-none absolute inset-0 opacity-[0.4]"
// //         style={{
// //           backgroundImage: "radial-gradient(rgba(18,109,196,0.14) 1px, transparent 1px)",
// //           backgroundSize: "22px 22px",
// //           maskImage: "radial-gradient(ellipse 70% 60% at 30% 20%, black, transparent)",
// //         }}
// //       />

// //       <div className="relative mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-3 pb-16 pt-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12 lg:pb-28 lg:pt-20">
// //         {/* form + mascot — first on mobile, right column on desktop */}
// //         <div className="order-1 flex justify-center lg:order-2">
// //           <motion.div
// //             initial={{ opacity: 0, y: 16, scale: 0.97 }}
// //             animate={{ opacity: 1, y: 0, scale: 1 }}
// //             transition={{ duration: 0.6, delay: 0.15 }}
// //             className="relative w-full max-w-sm"
// //           >
// //             <div className="pointer-events-none absolute -inset-6 -z-10 rounded-[2rem] bg-navy-500/10 blur-2xl" />

// //             {/* mascot pointing at the form — desktop/tablet only */}
// //             <motion.div
// //               initial={{ opacity: 0, x: 40, scale: 0.85 }}
// //               animate={{ opacity: 1, x: 0, scale: 1 }}
// //               transition={{ duration: 0.7, delay: 0.5, ease: "easeOut" }}
// //               className="pointer-events-none absolute -right-6 top-0 z-10 hidden md:block md:-right-14 lg:-right-24 xl:-right-32"
// //             >
// //               <img
// //                 src={mascot}
// //                 alt=""
// //                 aria-hidden="true"
// //                 className="w-28 animate-float drop-shadow-[0_18px_30px_rgba(10,20,40,0.25)] [animation-delay:1.2s] md:w-36 lg:w-48 xl:w-56"
// //               />
// //             </motion.div>

// //             {/* stat badge — opposite corner from the mascot */}
// //             <motion.div
// //               initial={{ opacity: 0, y: 10, scale: 0.9 }}
// //               animate={{ opacity: 1, y: 0, scale: 1 }}
// //               transition={{ duration: 0.5, delay: 0.75 }}
// //               className="absolute -bottom-5 -left-16 z-10 sm:-left-24"
// //             >
// //               <div className="animate-float flex items-center gap-2 rounded-2xl border border-navy-900/10 bg-white px-3 py-2.5 shadow-[0_20px_40px_-15px_rgba(10,20,40,0.45)] [animation-delay:0.6s] sm:gap-2.5 sm:px-4 sm:py-3">
// //                 <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-seal/10 font-mono text-xs font-bold text-seal sm:h-11 sm:w-11 sm:text-sm">
// //                   1L+
// //                 </span>
// //                 <span className="text-[11px] font-bold leading-tight text-navy-900 sm:text-xs">
// //                   GSTINs
// //                   <br />
// //                   filed
// //                 </span>
// //               </div>
// //             </motion.div>

// //             <LeadForm />
// //           </motion.div>
// //         </div>

// //         {/* headline + content — second on mobile, left column on desktop */}
// //         <div className="order-2 lg:order-1">
// //           <motion.p
// //             initial={{ opacity: 0, y: 10 }}
// //             animate={{ opacity: 1, y: 0 }}
// //             transition={{ duration: 0.5 }}
// //             className="font-mono text-base font-bold uppercase tracking-[0.2em] text-gold-600"
// //           >
// //             GST Registration · Pan-India
// //           </motion.p>

// //           <motion.h1
// //             initial={{ opacity: 0, y: 16 }}
// //             animate={{ opacity: 1, y: 0 }}
// //             transition={{ duration: 0.6, delay: 0.1 }}
// //             className="mt-4 font-display text-4xl leading-[1.1] text-navy-600 sm:text-5xl lg:text-[3.4rem]"
// //           >
// //             Get GST Registration
// //             <br />
// //             in just
// //             <span className="relative ml-2 inline-block italic text-gold-600">
// //               one day.
// //               <svg
// //                 viewBox="0 0 160 14"
// //                 className="absolute -bottom-2 left-0 h-3 w-full text-gold-400"
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

// //           <motion.p
// //             initial={{ opacity: 0, y: 16 }}
// //             animate={{ opacity: 1, y: 0 }}
// //             transition={{ duration: 0.6, delay: 0.2 }}
// //             className="mt-6 max-w-lg text-base leading-relaxed text-ink"
// //           >
// //             Legal Papers India handles the paperwork, the portal and the follow-up with the department —
// //             so your registration doesn't sit stuck on a query you didn't know how to answer.
// //           </motion.p>

// //           <motion.ul
// //             initial={{ opacity: 0 }}
// //             animate={{ opacity: 1 }}
// //             transition={{ duration: 0.6, delay: 0.3 }}
// //             className="mt-7 grid grid-cols-1 gap-x-6 gap-y-2.5 sm:grid-cols-2"
// //           >
// //             {points.map((p) => (
// //               <li key={p} className="flex items-center gap-2 text-base font-bold leading-5 text-ink">
// //                 <CheckCircle2 className="h-4 w-4 shrink-0 text-seal" />
// //                 {p}
// //               </li>
// //             ))}
// //           </motion.ul>

// //           <motion.div
// //             initial={{ opacity: 0, y: 10 }}
// //             animate={{ opacity: 1, y: 0 }}
// //             transition={{ duration: 0.5, delay: 0.4 }}
// //             className="mt-7 inline-flex items-center gap-2 rounded-full border border-navy-900/10 bg-white px-3.5 py-1.5 shadow-sm"
// //           >
// //             <div className="flex">
// //               {Array.from({ length: 5 }).map((_, idx) => (
// //                 <Star key={idx} className="h-3 w-3 fill-gold-500 text-gold-500" />
// //               ))}
// //             </div>
// //             <span className="font-mono text-[11px] text-slate-500">4.8 rated · 2,000+ businesses</span>
// //           </motion.div>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // }

// // import { motion } from "framer-motion";
// // import { CheckCircle2, Star } from "lucide-react";
// // import LeadForm from "./LeadForm";
// // import mascot from "../assets/mascot-pointing.webp";

// // const points = [
// //   "1 Day GST Application",
// //   "GST Apply in Tatkal",
// //   "Dedicated Advisor for GST",
// //   "Complimentary GST Billing Software",
// //   "GST Registration",
// //   "Same Day Process for GST",
// // ];

// // export default function Hero() {
// //   return (
// //     <section className="relative overflow-hidden bg-white">
// //       {/* Decorative background texture */}
// //       <div
// //         className="pointer-events-none absolute inset-0 opacity-[0.4]"
// //         style={{
// //           backgroundImage:
// //             "radial-gradient(rgba(18,109,196,0.14) 1px, transparent 1px)",
// //           backgroundSize: "22px 22px",
// //           maskImage:
// //             "radial-gradient(ellipse 70% 60% at 30% 20%, black, transparent)",
// //         }}
// //       />

// //       <div className="relative mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-5 pb-16 pt-10 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12 lg:px-5 lg:pb-28 lg:pt-20">

// //         {/* =====================================================
// //             FORM + MASCOT
// //         ====================================================== */}
// //         <div className="order-1 flex justify-center lg:order-2">
// //           <motion.div
// //             initial={{ opacity: 0, y: 16, scale: 0.97 }}
// //             animate={{ opacity: 1, y: 0, scale: 1 }}
// //             transition={{ duration: 0.6, delay: 0.15 }}
// //             className="relative w-full max-w-sm"
// //           >
// //             {/* Form background glow */}
// //             <div className="pointer-events-none absolute -inset-6 -z-10 rounded-[2rem] bg-navy-500/10 blur-2xl" />

// //             {/* =================================================
// //                 PREMIUM MASCOT STAGE
// //             ================================================== */}
// //             <motion.div
// //               initial={{ opacity: 0, y: 35, scale: 0.9 }}
// //               animate={{ opacity: 1, y: 0, scale: 1 }}
// //               transition={{
// //                 duration: 0.8,
// //                 delay: 0.4,
// //                 ease: [0.22, 1, 0.36, 1],
// //               }}
// //               className="pointer-events-none absolute -right-2 -top-28 z-20 sm:-right-8 sm:-top-32 md:-right-12 md:-top-36 lg:-right-20 lg:-top-40 xl:-right-28"
// //             >
// //               {/* Soft glow */}
// //               <div className="absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold-500/20 blur-[60px] sm:h-52 sm:w-52 sm:blur-[70px]" />

// //               {/* Back halo */}
// //               <div className="absolute left-1/2 top-[45%] h-32 w-32 -translate-x-1/2 -translate-y-1/2 rounded-full border border-gold-500/20 bg-gold-500/5 sm:h-44 sm:w-44" />

// //               {/* Mascot */}
// //               <motion.img
// //                 src={mascot}
// //                 alt=""
// //                 aria-hidden="true"
// //                 animate={{
// //                   y: [0, -7, 0],
// //                   rotate: [0, 0.8, 0],
// //                 }}
// //                 transition={{
// //                   duration: 4.5,
// //                   repeat: Infinity,
// //                   ease: "easeInOut",
// //                 }}
// //                 className="relative z-20 w-28 drop-shadow-[0_25px_30px_rgba(10,20,40,0.28)] sm:w-36 md:w-40 lg:w-52 xl:w-60"
// //               />

// //               {/* =================================================
// //                   PREMIUM 3D PLATFORM
// //               ================================================== */}
// //               <div className="absolute bottom-[-15px] left-1/2 z-10 w-[155px] -translate-x-1/2 sm:bottom-[-18px] sm:w-[190px] md:w-[210px] lg:w-[260px]">

// //                 {/* Platform glow */}
// //                 <div className="absolute -inset-4 rounded-full bg-gold-500/20 blur-2xl" />

// //                 {/* Bottom shadow */}
// //                 <div className="absolute -bottom-3 left-1/2 h-6 w-[85%] -translate-x-1/2 rounded-[50%] bg-navy-900/20 blur-xl" />

// //                 {/* Platform depth */}
// //                 <div className="relative h-8 rounded-[50%] border border-navy-900/20 bg-gradient-to-b from-navy-600 to-navy-900 shadow-[0_15px_30px_rgba(10,20,40,0.25)] sm:h-10">

// //                   {/* Gold edge */}
// //                   <div className="absolute left-[8%] right-[8%] top-0 h-1 rounded-full bg-gradient-to-r from-transparent via-gold-400 to-transparent" />
// //                 </div>

// //                 {/* Platform top */}
// //                 <div className="absolute left-1/2 top-[-8px] h-7 w-[92%] -translate-x-1/2 rounded-[50%] border border-gold-500/30 bg-gradient-to-b from-white via-gold-50 to-gold-500/20 shadow-[0_5px_15px_rgba(10,20,40,0.18)] sm:h-9">

// //                   {/* Inner ring */}
// //                   <div className="absolute inset-[5px] rounded-[50%] border border-gold-500/20" />

// //                   {/* Center shine */}
// //                   <div className="absolute left-1/2 top-1/2 h-2 w-[45%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold-400/40 blur-sm" />
// //                 </div>
// //               </div>

// //               {/* GST Expert badge */}
// //               <motion.div
// //                 animate={{
// //                   y: [0, -4, 0],
// //                 }}
// //                 transition={{
// //                   duration: 3,
// //                   repeat: Infinity,
// //                   ease: "easeInOut",
// //                   delay: 0.5,
// //                 }}
// //                 className="absolute -bottom-8 -left-10 z-30 hidden items-center gap-2 rounded-full border border-navy-900/10 bg-white/95 px-3 py-1.5 shadow-[0_12px_30px_rgba(10,20,40,0.16)] backdrop-blur sm:flex"
// //               >
// //                 <span className="flex h-6 w-6 items-center justify-center rounded-full bg-gold-500 text-[9px] font-black text-white">
// //                   ✓
// //                 </span>

// //                 <span className="text-[10px] font-bold tracking-wide text-black">
// //                   GST EXPERT
// //                 </span>
// //               </motion.div>
// //             </motion.div>

// //             {/* =================================================
// //                 GSTIN STAT BADGE
// //             ================================================== */}
// //             <motion.div
// //               initial={{ opacity: 0, y: 10, scale: 0.9 }}
// //               animate={{ opacity: 1, y: 0, scale: 1 }}
// //               transition={{ duration: 0.5, delay: 0.75 }}
// //               className="absolute -bottom-6 left-0 z-30 sm:-left-6 lg:-left-12"
// //             >
// //               <div className="animate-float flex items-center gap-2 rounded-2xl border border-navy-900/10 bg-white px-3 py-2.5 shadow-[0_20px_40px_-15px_rgba(10,20,40,0.45)] [animation-delay:0.6s] sm:gap-2.5 sm:px-4 sm:py-3">
// //                 <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-seal/10 font-mono text-xs font-bold text-seal sm:h-11 sm:w-11 sm:text-sm">
// //                   1L+
// //                 </span>

// //                 <span className="text-[11px] font-bold leading-tight text-navy-900 sm:text-xs">
// //                   GSTINs
// //                   <br />
// //                   filed
// //                 </span>
// //               </div>
// //             </motion.div>

// //             {/* Lead Form */}
// //             <LeadForm />
// //           </motion.div>
// //         </div>

// //         {/* =====================================================
// //             HEADLINE + CONTENT
// //         ====================================================== */}
// //         <div className="order-2 lg:order-1">
// //           <motion.p
// //             initial={{ opacity: 0, y: 10 }}
// //             animate={{ opacity: 1, y: 0 }}
// //             transition={{ duration: 0.5 }}
// //             className="font-mono text-base font-bold uppercase tracking-[0.2em] text-gold-600"
// //           >
// //             GST Registration · Pan-India
// //           </motion.p>

// //           <motion.h1
// //             initial={{ opacity: 0, y: 16 }}
// //             animate={{ opacity: 1, y: 0 }}
// //             transition={{ duration: 0.6, delay: 0.1 }}
// //             className="mt-4 font-display text-4xl leading-[1.1] text-navy-600 sm:text-5xl lg:text-[3.4rem]"
// //           >
// //             Get GST Registration
// //             <br />
// //             in just
// //             <span className="relative ml-2 inline-block italic text-gold-600">
// //               one day.

// //               <svg
// //                 viewBox="0 0 160 14"
// //                 className="absolute -bottom-2 left-0 h-3 w-full text-gold-400"
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

// //           <motion.p
// //             initial={{ opacity: 0, y: 16 }}
// //             animate={{ opacity: 1, y: 0 }}
// //             transition={{ duration: 0.6, delay: 0.2 }}
// //             className="mt-6 max-w-lg text-base leading-relaxed text-ink"
// //           >
// //             Legal Papers India handles the paperwork, the portal and the
// //             follow-up with the department — so your registration doesn't sit
// //             stuck on a query you didn't know how to answer.
// //           </motion.p>

// //           {/* Points */}
// //           <motion.ul
// //             initial={{ opacity: 0 }}
// //             animate={{ opacity: 1 }}
// //             transition={{ duration: 0.6, delay: 0.3 }}
// //             className="mt-7 grid grid-cols-1 gap-x-6 gap-y-2.5 sm:grid-cols-2"
// //           >
// //             {points.map((p) => (
// //               <li
// //                 key={p}
// //                 className="flex items-center gap-2 text-base font-bold leading-5 text-ink"
// //               >
// //                 <CheckCircle2 className="h-4 w-4 shrink-0 text-seal" />
// //                 {p}
// //               </li>
// //             ))}
// //           </motion.ul>

// //           {/* Rating */}
// //           <motion.div
// //             initial={{ opacity: 0, y: 10 }}
// //             animate={{ opacity: 1, y: 0 }}
// //             transition={{ duration: 0.5, delay: 0.4 }}
// //             className="mt-7 inline-flex items-center gap-2 rounded-full border border-navy-900/10 bg-white px-3.5 py-1.5 shadow-sm"
// //           >
// //             <div className="flex">
// //               {Array.from({ length: 5 }).map((_, idx) => (
// //                 <Star
// //                   key={idx}
// //                   className="h-3 w-3 fill-gold-500 text-gold-500"
// //                 />
// //               ))}
// //             </div>

// //             <span className="font-mono text-[11px] text-slate-500">
// //               4.8 rated · 2,000+ businesses
// //             </span>
// //           </motion.div>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // }

// import { motion } from "framer-motion";
// import { CheckCircle2, Star } from "lucide-react";
// import LeadForm from "./LeadForm";
// import mascot from "../assets/mascot-pointing.webp";

// const points = [
//   "1 Day GST Application",
//   "GST Apply in Tatkal",
//   "Dedicated Advisor for GST",
//   "Complimentary GST Billing Software",
//   "GST Registration",
//   "Same Day Process for GST",
// ];

// export default function Hero() {
//   return (
//     <section className="relative overflow-hidden bg-white">
//       {/* Decorative background texture */}
//       <div
//         className="pointer-events-none absolute inset-0 opacity-[0.4]"
//         style={{
//           backgroundImage:
//             "radial-gradient(rgba(18,109,196,0.14) 1px, transparent 1px)",
//           backgroundSize: "22px 22px",
//           maskImage:
//             "radial-gradient(ellipse 70% 60% at 30% 20%, black, transparent)",
//         }}
//       />

//       <div className="relative mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-5 pb-16 pt-10 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12 lg:px-5 lg:pb-28 lg:pt-20">

//         {/* =====================================================
//             FORM + MASCOT
//         ====================================================== */}
//         <div className="order-1 flex justify-center lg:order-2">
//           <motion.div
//             initial={{ opacity: 0, y: 16, scale: 0.97 }}
//             animate={{ opacity: 1, y: 0, scale: 1 }}
//             transition={{ duration: 0.6, delay: 0.15 }}
//             className="relative w-full max-w-sm"
//           >
//             {/* Form background glow */}
//             <div className="pointer-events-none absolute -inset-6 -z-10 rounded-[2rem] bg-navy-500/10 blur-2xl" />

//             {/* =================================================
//                 PREMIUM MASCOT STAGE
//                 Hidden on mobile
//             ================================================== */}
//             <motion.div
//               initial={{ opacity: 0, y: 35, scale: 0.9 }}
//               animate={{ opacity: 1, y: 0, scale: 1 }}
//               transition={{
//                 duration: 0.8,
//                 delay: 0.4,
//                 ease: [0.22, 1, 0.36, 1],
//               }}
//              className="pointer-events-none absolute hidden -right-28 -top-8 z-10 lg:block lg:-right-40 lg:-top-16 xl:-right-48"
//             >
//               {/* Soft glow */}
//               <div className="absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold-500/20 blur-[60px] sm:h-52 sm:w-52 sm:blur-[70px]" />

//               {/* Back halo */}
//               <div className="absolute left-1/2 top-[45%] h-32 w-32 -translate-x-1/2 -translate-y-1/2 rounded-full border border-gold-500/20 bg-gold-500/5 sm:h-44 sm:w-44" />

//               {/* Mascot */}
//               <motion.img
//                 src={mascot}
//                 alt=""
//                 aria-hidden="true"
//                 animate={{
//                   y: [0, -7, 0],
//                   rotate: [0, 0.8, 0],
//                 }}
//                 transition={{
//                   duration: 4.5,
//                   repeat: Infinity,
//                   ease: "easeInOut",
//                 }}
//                 className="relative z-10 w-52 drop-shadow-[0_25px_30px_rgba(10,20,40,0.28)] xl:w-60"
//               />

//               {/* =================================================
//                   PREMIUM 3D PLATFORM
//               ================================================== */}
//               <div className="absolute bottom-[-42px] left-1/2 z-0 w-[260px] -translate-x-1/2">

//                 {/* Platform glow */}
//                 <div className="absolute -inset-4 rounded-full bg-gold-500/20 blur-2xl" />

//                 {/* Bottom shadow */}
//                 <div className="absolute -bottom-3 left-1/2 h-6 w-[85%] -translate-x-1/2 rounded-[50%] bg-navy-900/20 blur-xl" />

//                 {/* Platform depth */}
//                 <div className="relative h-10 rounded-[50%] border border-navy-900/20 bg-gradient-to-b from-navy-600 to-navy-900 shadow-[0_15px_30px_rgba(10,20,40,0.25)]">

//                   {/* Gold edge */}
//                   <div className="absolute left-[8%] right-[8%] top-0 h-1 rounded-full bg-gradient-to-r from-transparent via-gold-400 to-transparent" />
//                 </div>

//                 {/* Platform top */}
//                 <div className="absolute left-1/2 top-[-8px] h-9 w-[92%] -translate-x-1/2 rounded-[50%] border border-gold-500/30 bg-gradient-to-b from-white via-gold-50 to-gold-500/20 shadow-[0_5px_15px_rgba(10,20,40,0.18)]">

//                   {/* Inner ring */}
//                   <div className="absolute inset-[5px] rounded-[50%] border border-gold-500/20" />

//                   {/* Center shine */}
//                   <div className="absolute left-1/2 top-1/2 h-2 w-[45%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold-400/40 blur-sm" />
//                 </div>
//               </div>

//               {/* GST Expert badge */}
//               <motion.div
//                 animate={{
//                   y: [0, -4, 0],
//                 }}
//                 transition={{
//                   duration: 3,
//                   repeat: Infinity,
//                   ease: "easeInOut",
//                   delay: 0.5,
//                 }}
//                 className="absolute -bottom-14 -left-10 z-30 hidden items-center gap-2 rounded-full border border-navy-900/10 bg-white/95 px-3 py-1.5 shadow-[0_12px_30px_rgba(10,20,40,0.16)] backdrop-blur sm:flex"
//               >
//                 {/* <span className="flex h-6 w-6 items-center justify-center rounded-full bg-gold-500 text-[9px] font-black text-white">
//                   ✓
//                 </span> */}

//                 {/* <span className="text-[10px] font-bold tracking-wide text-black">
//                   GST EXPERT
//                 </span> */}
//               </motion.div>
//             </motion.div>

//             {/* =================================================
//                 GSTIN STAT BADGE
//             ================================================== */}
//             <motion.div
//               initial={{ opacity: 0, y: 10, scale: 0.9 }}
//               animate={{ opacity: 1, y: 0, scale: 1 }}
//               transition={{ duration: 0.5, delay: 0.75 }}
//               className="absolute -bottom-10 left-0 z-30 sm:-left-6 lg:-left-12"
//             >
//               <div className="animate-float flex items-center gap-2 rounded-2xl border border-navy-900/10 bg-white px-3 py-2.5 shadow-[0_20px_40px_-15px_rgba(10,20,40,0.45)] [animation-delay:0.6s] sm:gap-2.5 sm:px-4 sm:py-3">
//                 <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-seal/10 font-mono text-xs font-bold text-seal sm:h-11 sm:w-11 sm:text-sm">
//                   1L+
//                 </span>

//                 <span className="text-[11px] font-bold leading-tight text-navy-900 sm:text-xs">
//                   GSTINs
//                   <br />
//                   filed
//                 </span>
//               </div>
//             </motion.div>

//             {/* Lead Form */}
//             <div className="relative z-20">
//               <LeadForm />
//             </div>
//           </motion.div>
//         </div>

//         {/* =====================================================
//             HEADLINE + CONTENT
//         ====================================================== */}
//         <div className="order-2 lg:order-1">
//           <motion.p
//             initial={{ opacity: 0, y: 10 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5 }}
//             className="font-mono text-base font-bold uppercase tracking-[0.2em] text-gold-600"
//           >
//             GST Registration · Pan-India
//           </motion.p>

//           <motion.h1
//             initial={{ opacity: 0, y: 16 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.1 }}
//             className="mt-4 font-display text-4xl leading-[1.1] text-navy-600 sm:text-5xl lg:text-[3.4rem]"
//           >
//             Get GST Registration
//             <br />
//             in just
//             <span className="relative ml-2 inline-block italic text-gold-600">
//               one day.

//               <svg
//                 viewBox="0 0 160 14"
//                 className="absolute -bottom-2 left-0 h-3 w-full text-gold-400"
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

//           <motion.p
//             initial={{ opacity: 0, y: 16 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.2 }}
//             className="mt-6 max-w-lg text-base leading-relaxed text-ink"
//           >
//             Legal Papers India handles the paperwork, the portal and the
//             follow-up with the department — so your registration doesn't sit
//             stuck on a query you didn't know how to answer.
//           </motion.p>

//           {/* Points */}
//           <motion.ul
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ duration: 0.6, delay: 0.3 }}
//             className="mt-7 grid grid-cols-1 gap-x-6 gap-y-2.5 sm:grid-cols-2"
//           >
//             {points.map((p) => (
//               <li
//                 key={p}
//                 className="flex items-center gap-2 text-base font-bold leading-5 text-ink"
//               >
//                 <CheckCircle2 className="h-4 w-4 shrink-0 text-seal" />
//                 {p}
//               </li>
//             ))}
//           </motion.ul>

//           {/* Rating */}
//           <motion.div
//             initial={{ opacity: 0, y: 10 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: 0.4 }}
//             className="mt-7 inline-flex items-center gap-2 rounded-full border border-navy-900/10 bg-white px-3.5 py-1.5 shadow-sm"
//           >
//             <div className="flex">
//               {Array.from({ length: 5 }).map((_, idx) => (
//                 <Star
//                   key={idx}
//                   className="h-3 w-3 fill-gold-500 text-gold-500"
//                 />
//               ))}
//             </div>

//             <span className="font-mono text-[11px] text-slate-500">
//               4.8 rated · 2,000+ businesses
//             </span>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// }

// import { motion } from "framer-motion";
// import { CheckCircle2, Star } from "lucide-react";
// import LeadForm from "./LeadForm";
// import mascot from "../assets/hero-gst-form (3).png";

// const points = [
//   "1 Day GST Application",
//   "GST Apply in Tatkal",
//   "Dedicated Advisor for GST",
//   "Complimentary GST Billing Software",
//   "GST Registration",
//   "Same Day Process for GST",
// ];

// export default function Hero() {
//   return (
//     <section className="relative overflow-hidden bg-gradient-to-br from-navy-700 via-navy-600 to-navy-700">
//       {/* decorative texture + glow */}
//       <div
//         className="pointer-events-none absolute inset-0 opacity-[0.5]"
//         style={{
//           backgroundImage: "radial-gradient(rgba(255,255,255,0.12) 1px, transparent 1px)",
//           backgroundSize: "22px 22px",
//         }}
//       />
//       <div className="pointer-events-none absolute -left-24 -top-24 h-80 w-80 rounded-full bg-gold-500/20 blur-3xl" />
//       <div className="pointer-events-none absolute -bottom-24 -right-24 h-96 w-96 rounded-full bg-white/10 blur-3xl" />

//       <div className="relative mx-auto grid max-w-6xl grid-cols-1 items-center gap-14 px-5 pb-16 pt-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10 lg:pb-24 lg:pt-20">
//         {/* headline + content */}
//         <div className="order-2 lg:order-1">
//           <motion.p
//             initial={{ opacity: 0, y: 10 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5 }}
//             className="font-mono text-base font-bold uppercase tracking-[0.2em] text-gold-400"
//           >
//             GST Registration · Pan-India
//           </motion.p>

//           <motion.h1
//             initial={{ opacity: 0, y: 16 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.1 }}
//             className="mt-4 font-display text-[2.75rem] font-extrabold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-[3.75rem]"
//           >
//             Get GST Registration
//             <br />
//             in just
//             <span className="relative ml-2 inline-block italic text-gold-400">
//               one day.
//               <svg
//                 viewBox="0 0 160 14"
//                 className="absolute -bottom-2 left-0 h-3 w-full text-gold-400"
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

//           <motion.p
//             initial={{ opacity: 0, y: 16 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.2 }}
//             className="mt-6 max-w-lg text-base leading-relaxed text-white/80"
//           >
//             Legal Papers India handles the paperwork, the portal and the follow-up with the department —
//             so your registration doesn't sit stuck on a query you didn't know how to answer.
//           </motion.p>

//           <motion.ul
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ duration: 0.6, delay: 0.3 }}
//             className="mt-7 grid grid-cols-1 gap-x-6 gap-y-2.5 sm:grid-cols-2"
//           >
//             {points.map((p) => (
//               <li key={p} className="flex items-center gap-2 text-base font-bold leading-5 text-white">
//                 <CheckCircle2 className="h-4 w-4 shrink-0 text-gold-400" />
//                 {p}
//               </li>
//             ))}
//           </motion.ul>

//           <motion.div
//             initial={{ opacity: 0, y: 10 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: 0.4 }}
//             className="mt-7 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3.5 py-1.5 backdrop-blur"
//           >
//             <div className="flex">
//               {Array.from({ length: 5 }).map((_, idx) => (
//                 <Star key={idx} className="h-3 w-3 fill-gold-400 text-gold-400" />
//               ))}
//             </div>
//             <span className="font-mono text-[11px] font-bold text-white/80">4.8 rated · 2,000+ businesses</span>
//           </motion.div>
//         </div>

//         {/* mascot + form */}
//         <div className="order-1 flex flex-col items-center lg:order-2">
//           <motion.img
//             src={mascot}
//             alt="Legal Papers India advisor"
//             initial={{ opacity: 0, y: 30, scale: 0.9 }}
//             animate={{ opacity: 1, y: 0, scale: 1 }}
//             transition={{ duration: 0.65, delay: 0.2, ease: "easeOut" }}
//             className="w-40 drop-shadow-[0_20px_35px_rgba(0,0,0,0.35)] sm:w-52 lg:w-56"
//           />

//           <motion.div
//             initial={{ opacity: 0, y: 20, scale: 0.97 }}
//             animate={{ opacity: 1, y: 0, scale: 1 }}
//             transition={{ duration: 0.6, delay: 0.45 }}
//             className="relative -mt-4 w-full max-w-sm"
//           >
//             <motion.div
//               initial={{ opacity: 0, scale: 0.85 }}
//               animate={{ opacity: 1, scale: 1 }}
//               transition={{ duration: 0.5, delay: 0.9 }}
//               className="animate-float absolute -top-5 right-4 z-20 flex items-center gap-2 rounded-xl border border-navy-900/10 bg-white px-3 py-2 shadow-[0_15px_30px_-12px_rgba(0,0,0,0.4)] [animation-delay:0.6s]"
//             >
//               <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-seal/10 font-mono text-[11px] font-bold text-seal">
//                 1L+
//               </span>
//               <span className="text-[10px] font-bold leading-tight text-navy-900">
//                 GSTINs
//                 <br />
//                 filed
//               </span>
//             </motion.div>

//             <LeadForm />
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// }



import { motion } from "framer-motion";
import { CheckCircle2, Star } from "lucide-react";
import LeadForm from "./LeadForm";
import mascot from "../assets/hero-gst-form (3).png";

const points = [
  "1 Day GST Application",
  "GST Apply in Tatkal",
  "Dedicated Advisor for GST",
  "Complimentary GST Billing Software",
  "GST Registration",
  "Same Day Process for GST",
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#eef6ff] via-[#f8fbff] to-[#eaf3ff]">
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
              text-[#102a4c]

              sm:text-5xl

              lg:text-[3.65rem]
            "
          >
            Get GST Registration
            <br />
            in just{" "}
            <span className="relative inline-block italic text-[#126dc4]">
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

          {/* Points */}
          <motion.ul
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="
              mt-7
              grid
              grid-cols-1
              gap-x-6
              gap-y-3

              sm:grid-cols-2
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

          {/* Rating */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="
              mt-7
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-blue-200
              bg-white/80
              px-3.5
              py-1.5
              shadow-sm
              backdrop-blur
            "
          >
            <div className="flex">
              {Array.from({ length: 5 }).map((_, idx) => (
                <Star
                  key={idx}
                  className="h-3.5 w-3.5 fill-orange-400 text-orange-400"
                />
              ))}
            </div>

            <span
              className="
                font-mono
                text-[11px]
                font-bold
                text-slate-600
              "
            >
              4.8 rated · 2,000+ businesses
            </span>
          </motion.div>
        </div>

        {/* =====================================================
            RIGHT — FORM + IMAGE
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
            {/* GSTIN floating badge */}
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.85,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              transition={{
                duration: 0.5,
                delay: 0.9,
              }}
              className="
                animate-float
                absolute
                -top-5
                right-4
                z-20
                flex
                items-center
                gap-2
                rounded-xl
                border
                border-blue-100
                bg-white
                px-3
                py-2
                shadow-[0_15px_30px_-12px_rgba(30,80,140,0.25)]
                [animation-delay:0.6s]
              "
            >
              <span
                className="
                  flex
                  h-8
                  w-8
                  shrink-0
                  items-center
                  justify-center
                  rounded-full
                  bg-blue-50
                  font-mono
                  text-[11px]
                  font-bold
                  text-blue-600
                "
              >
                10K+
              </span>

              <span
                className="
                  text-[10px]
                  font-bold
                  leading-tight
                  text-[#173252]
                "
              >
                GSTINs
                <br />
                filed
              </span>
            </motion.div>

            {/* Form */}
            <LeadForm />
          </motion.div>

          {/* =================================================
              MASCOT IMAGE
              Mobile: AFTER FORM
              Desktop: FIRST
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
              mt-8
              flex
              items-end
              justify-center

              lg:order-1
              lg:mt-0
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

                sm:w-72

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

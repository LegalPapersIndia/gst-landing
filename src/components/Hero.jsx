

// import { motion } from "framer-motion";
// import { CheckCircle2, Star } from "lucide-react";
// import LeadForm from "./LeadForm";

// const points = ["Filed by tax professionals", "Application within 24 hours", "No office visit needed"];

// export default function Hero() {
//   return (
//     <section className="relative overflow-hidden bg-navy-500/5">
//       {/* decorative background texture */}
//       <div
//         className="pointer-events-none absolute inset-0 opacity-[0.4]"
//         style={{
//           backgroundImage: "radial-gradient(rgba(18,109,196,0.14) 1px, transparent 1px)",
//           backgroundSize: "22px 22px",
//           maskImage: "radial-gradient(ellipse 70% 60% at 30% 20%, black, transparent)",
//         }}
//       />
//       <motion.div
//         animate={{ x: [0, 20, 0], y: [0, 15, 0] }}
//         transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
//         className="pointer-events-none absolute -left-32 top-0 h-96 w-96 rounded-full bg-gold-500/10 blur-3xl"
//       />
//       <motion.div
//         animate={{ x: [0, -20, 0], y: [0, -15, 0] }}
//         transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
//         className="pointer-events-none absolute right-0 top-40 h-72 w-72 rounded-full bg-navy-500/15 blur-3xl"
//       />

//       <div className="relative mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-5 pb-16 pt-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12 lg:pb-28 lg:pt-20">
//         {/* form + stat badge — first on mobile, right column on desktop */}
//         <div className="order-1 flex justify-center lg:order-2">
//           <motion.div
//             initial={{ opacity: 0, y: 16, scale: 0.97 }}
//             animate={{ opacity: 1, y: 0, scale: 1 }}
//             transition={{ duration: 0.6, delay: 0.15 }}
//             className="relative w-full max-w-sm"
//           >
//             <div className="pointer-events-none absolute -inset-6 -z-10 rounded-[2rem] bg-navy-500/10 blur-2xl" />

//             <motion.div
//               initial={{ opacity: 0, y: -10, scale: 0.9 }}
//               animate={{ opacity: 1, y: 0, scale: 1 }}
//               transition={{ duration: 0.5, delay: 0.6 }}
//               className="absolute -right-3 -top-6 z-10 sm:-right-6"
//             >
//               <motion.div
//                 animate={{ y: [0, -6, 0] }}
//                 transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
//                 className="flex items-center gap-2.5 rounded-2xl border border-navy-900/10 bg-white px-4 py-3 shadow-[0_20px_40px_-15px_rgba(10,20,40,0.45)]"
//               >
//                 <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-seal/10 font-mono text-sm font-bold text-seal">
//                   1L+
//                 </span>
//                 <span className="text-xs font-medium leading-tight text-navy-900">
//                   GSTINs
//                   <br />
//                   filed
//                 </span>
//               </motion.div>
//             </motion.div>

//             <LeadForm />
//           </motion.div>
//         </div>

//         {/* headline + content — second on mobile, left column on desktop */}
//         <div className="order-2 lg:order-1">
//           <motion.p
//             initial={{ opacity: 0, y: 10 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5 }}
//             className="font-mono text-xs uppercase tracking-[0.2em] text-gold-600"
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
//             className="mt-6 max-w-lg text-base leading-relaxed text-slate-500"
//           >
//             Legal Papers India handles the paperwork, the portal and the follow-up with the department —
//             so your registration doesn't sit stuck on a query you didn't know how to answer.
//           </motion.p>

//           <motion.ul
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ duration: 0.6, delay: 0.3 }}
//             className="mt-7 flex flex-col gap-2.5 sm:flex-row sm:flex-wrap sm:gap-x-6 sm:gap-y-2"
//           >
//             {points.map((p) => (
//               <li key={p} className="flex items-center gap-2 text-sm text-ink">
//                 <CheckCircle2 className="h-4 w-4 shrink-0 text-seal" />
//                 {p}
//               </li>
//             ))}
//           </motion.ul>

//           <motion.div
//             initial={{ opacity: 0, y: 10 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: 0.4 }}
//             className="mt-7 inline-flex items-center gap-2 rounded-full border border-navy-900/10 bg-white px-3.5 py-1.5 shadow-sm"
//           >
//             <div className="flex">
//               {Array.from({ length: 5 }).map((_, idx) => (
//                 <Star key={idx} className="h-3 w-3 fill-gold-500 text-gold-500" />
//               ))}
//             </div>
//             <span className="font-mono text-[11px] text-slate-500">4.8 rated · 2,000+ businesses</span>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// }


import { motion } from "framer-motion";
import { CheckCircle2, Star } from "lucide-react";
import LeadForm from "./LeadForm";

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
    <section className="relative overflow-hidden bg-white">
      {/* decorative background texture */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.4]"
        style={{
          backgroundImage: "radial-gradient(rgba(18,109,196,0.14) 1px, transparent 1px)",
          backgroundSize: "22px 22px",
          maskImage: "radial-gradient(ellipse 70% 60% at 30% 20%, black, transparent)",
        }}
      />

      <div className="relative mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-5 pb-16 pt-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12 lg:pb-28 lg:pt-20">
        {/* form + stat badge — first on mobile, right column on desktop */}
        <div className="order-1 flex justify-center lg:order-2">
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="relative w-full max-w-sm"
          >
            <div className="pointer-events-none absolute -inset-6 -z-10 rounded-[2rem] bg-navy-500/10 blur-2xl" />

            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="absolute -right-3 -top-6 z-10 sm:-right-6"
            >
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="flex items-center gap-2.5 rounded-2xl border border-navy-900/10 bg-white px-4 py-3 shadow-[0_20px_40px_-15px_rgba(10,20,40,0.45)]"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-seal/10 font-mono text-sm font-bold text-seal">
                  1L+
                </span>
                <span className="text-xs font-medium leading-tight text-navy-900">
                  GSTINs
                  <br />
                  filed
                </span>
              </motion.div>
            </motion.div>

            <LeadForm />
          </motion.div>
        </div>

        {/* headline + content — second on mobile, left column on desktop */}
        <div className="order-2 lg:order-1">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="font-mono text-base font-bold uppercase tracking-[0.2em] text-gold-600"
          >
            GST Registration · Pan-India
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-4 font-display text-4xl leading-[1.1] text-navy-600 sm:text-5xl lg:text-[3.4rem]"
          >
            Get GST Registration
            <br />
            in just
            <span className="relative ml-2 inline-block italic text-gold-600">
              one day.
              <svg
                viewBox="0 0 160 14"
                className="absolute -bottom-2 left-0 h-3 w-full text-gold-400"
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

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 max-w-lg text-base leading-relaxed text-ink"
          >
            Legal Papers India handles the paperwork, the portal and the follow-up with the department —
            so your registration doesn't sit stuck on a query you didn't know how to answer.
          </motion.p>

          <motion.ul
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-7 grid grid-cols-1 gap-x-6 gap-y-2.5 sm:grid-cols-2"
          >
            {points.map((p) => (
              <li key={p} className="flex items-center gap-2 text-base font-bold leading-5 text-ink">
                <CheckCircle2 className="h-4 w-4 shrink-0 text-seal" />
                {p}
              </li>
            ))}
          </motion.ul>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-7 inline-flex items-center gap-2 rounded-full border border-navy-900/10 bg-white px-3.5 py-1.5 shadow-sm"
          >
            <div className="flex">
              {Array.from({ length: 5 }).map((_, idx) => (
                <Star key={idx} className="h-3 w-3 fill-gold-500 text-gold-500" />
              ))}
            </div>
            <span className="font-mono text-[11px] font-bold text-slate-500">4.8 rated · 2,000+ businesses</span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
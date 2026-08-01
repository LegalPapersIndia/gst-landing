

// import { motion } from "framer-motion";
// import { CheckCircle2, Star } from "lucide-react";
// import LeadForm from "./LeadForm";
// import GstinCertificate from "./GstinCertificate";

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
//       <div className="pointer-events-none absolute -left-32 top-0 h-96 w-96 rounded-full bg-gold-500/10 blur-3xl" />
//       <div className="pointer-events-none absolute right-0 top-40 h-72 w-72 rounded-full bg-navy-500/15 blur-3xl" />

//       <div className="relative mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-5 pb-16 pt-14 lg:grid-cols-[1.1fr_0.9fr] lg:pb-28 lg:pt-20">
//         <div>
//           <motion.div
//             initial={{ opacity: 0, y: 10 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5 }}
//             className="inline-flex items-center gap-2 rounded-full border border-navy-900/10 bg-white px-3.5 py-1.5 shadow-sm"
//           >
//             <div className="flex">
//               {Array.from({ length: 5 }).map((_, idx) => (
//                 <Star key={idx} className="h-3 w-3 fill-gold-500 text-gold-500" />
//               ))}
//             </div>
//             <span className="font-mono text-[11px] text-slate-500">4.8 rated · 2,000+ businesses</span>
//           </motion.div>

//           <motion.h1
//             initial={{ opacity: 0, y: 16 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.1 }}
//             className="mt-5 font-display text-4xl leading-[1.1] text-navy-900 sm:text-5xl lg:text-[3.4rem]"
//           >
//             Your GSTIN, filed right
//             <br />
//             <span className="relative inline-block italic text-gold-600">
//               the first time.
//               <svg
//                 viewBox="0 0 220 14"
//                 className="absolute -bottom-2 left-0 h-3 w-full text-gold-400"
//                 preserveAspectRatio="none"
//               >
//                 <path
//                   d="M2 9.5C40 2.5 100 2 130 6.5C160 11 190 6 218 4"
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
//             transition={{ duration: 0.6, delay: 0.35 }}
//             className="mt-7 flex flex-col gap-2.5 border-t border-navy-900/10 pt-6 sm:flex-row sm:flex-wrap sm:gap-x-6 sm:gap-y-2"
//           >
//             {points.map((p) => (
//               <li key={p} className="flex items-center gap-2 text-sm text-ink">
//                 <CheckCircle2 className="h-4 w-4 shrink-0 text-seal" />
//                 {p}
//               </li>
//             ))}
//           </motion.ul>

//           <motion.div
//             initial={{ opacity: 0, y: 16 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.45 }}
//             className="mt-9 max-w-md lg:hidden"
//           >
//             <LeadForm />
//           </motion.div>
//         </div>

//         <div className="hidden flex-col items-center gap-8 justify-self-center lg:flex">
//           <motion.div
//             initial={{ opacity: 0, scale: 0.94 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 0.7, delay: 0.2 }}
//             className="relative"
//           >
//             <GstinCertificate />
//             <motion.div
//               initial={{ opacity: 0, y: 10, scale: 0.9 }}
//               animate={{ opacity: 1, y: 0, scale: 1 }}
//               transition={{ duration: 0.5, delay: 0.9 }}
//               className="absolute -bottom-5 -left-6 flex items-center gap-2 rounded-xl border border-navy-900/10 bg-white px-3.5 py-2.5 shadow-[0_20px_40px_-20px_rgba(10,20,40,0.4)]"
//             >
//               <span className="flex h-8 w-8 items-center justify-center rounded-full bg-seal/10 font-mono text-xs font-semibold text-seal">
//                 1L+
//               </span>
//               <span className="text-[11px] leading-tight text-slate-500">
//                 GSTINs
//                 <br />
//                 filed
//               </span>
//             </motion.div>
//           </motion.div>
//           <motion.div
//             initial={{ opacity: 0, y: 16 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.4 }}
//             className="w-full max-w-sm"
//           >
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

const points = ["Filed by tax professionals", "Application within 24 hours", "No office visit needed"];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-navy-500/5">
      {/* decorative background texture */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.4]"
        style={{
          backgroundImage: "radial-gradient(rgba(18,109,196,0.14) 1px, transparent 1px)",
          backgroundSize: "22px 22px",
          maskImage: "radial-gradient(ellipse 70% 60% at 30% 20%, black, transparent)",
        }}
      />
      <div className="pointer-events-none absolute -left-32 top-0 h-96 w-96 rounded-full bg-gold-500/10 blur-3xl" />
      <div className="pointer-events-none absolute right-0 top-40 h-72 w-72 rounded-full bg-navy-500/15 blur-3xl" />

      <div className="relative mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-5 pb-16 pt-14 lg:grid-cols-[1.1fr_0.9fr] lg:pb-28 lg:pt-20">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="font-mono text-xs uppercase tracking-[0.2em] text-gold-600"
          >
            GST Registration · Pan-India
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-4 font-display text-4xl leading-[1.1] text-navy-900 sm:text-5xl lg:text-[3.4rem]"
          >
            Your GSTIN, filed right
            <br />
            <span className="relative inline-block italic text-gold-600">
              the first time.
              <svg
                viewBox="0 0 220 14"
                className="absolute -bottom-2 left-0 h-3 w-full text-gold-400"
                preserveAspectRatio="none"
              >
                <path
                  d="M2 9.5C40 2.5 100 2 130 6.5C160 11 190 6 218 4"
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
            className="mt-6 max-w-lg text-base leading-relaxed text-slate-500"
          >
            Legal Papers India handles the paperwork, the portal and the follow-up with the department —
            so your registration doesn't sit stuck on a query you didn't know how to answer.
          </motion.p>

          <motion.ul
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-7 flex flex-col gap-2.5 sm:flex-row sm:flex-wrap sm:gap-x-6 sm:gap-y-2"
          >
            {points.map((p) => (
              <li key={p} className="flex items-center gap-2 text-sm text-ink">
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
            <span className="font-mono text-[11px] text-slate-500">4.8 rated · 2,000+ businesses</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-9 max-w-md lg:hidden"
          >
            <LeadForm />
          </motion.div>
        </div>

        <div className="hidden justify-self-center lg:block">
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="relative w-full max-w-sm"
          >
            <div className="pointer-events-none absolute -inset-6 -z-10 rounded-[2rem] bg-navy-500/10 blur-2xl" />

            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="absolute -right-5 -top-5 z-10 flex items-center gap-2 rounded-xl border border-navy-900/10 bg-white px-3.5 py-2.5 shadow-[0_20px_40px_-20px_rgba(10,20,40,0.4)]"
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-seal/10 font-mono text-xs font-semibold text-seal">
                1L+
              </span>
              <span className="text-[11px] leading-tight text-slate-500">
                GSTINs
                <br />
                filed
              </span>
            </motion.div>

            <LeadForm />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
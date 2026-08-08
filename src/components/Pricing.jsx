// import { motion } from "framer-motion";
// import { CheckCircle2 } from "lucide-react";
// import { pricingPlans } from "../data";

// export default function Pricing() {
//   return (
//     <section className="border-t border-navy-900/5 bg-navy-500/5">
//       <div className="mx-auto max-w-6xl px-5 py-20">
//         <div className="mx-auto max-w-md text-center">
//           <p className="font-mono text-xs uppercase tracking-[0.2em] text-gold-600">Transparent pricing</p>
//           <h2 className="mt-3 font-display text-3xl text-navy-600 sm:text-4xl">Pick a plan that fits</h2>
//         </div>

//         <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3 md:items-stretch">
//           {pricingPlans.map((plan, i) => (
//             <motion.div
//               key={plan.name}
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true, margin: "-40px" }}
//               transition={{ duration: 0.5, delay: i * 0.1 }}
//               className={`relative flex flex-col rounded-2xl border bg-white p-7 ${
//                 plan.highlight
//                   ? "border-navy-600 shadow-[0_25px_60px_-25px_rgba(18,109,196,0.4)]"
//                   : "border-navy-900/10 shadow-[0_20px_50px_-30px_rgba(10,20,40,0.3)]"
//               }`}
//             >
//               {plan.highlight && (
//                 <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-navy-600 px-3 py-1 text-[10px] font-semibold uppercase tracking-wide text-white">
//                   Most popular
//                 </span>
//               )}

//               <p className="font-display text-xl text-navy-900">{plan.name}</p>
//               <p className="mt-1.5 text-sm leading-relaxed text-slate-500">{plan.desc}</p>

//               <div className="mt-5 flex items-center gap-2">
//                 <span className="font-mono text-sm text-slate-400 line-through">₹{plan.originalPrice}</span>
//                 <span className="rounded-full bg-seal/10 px-2 py-0.5 text-[10px] font-medium text-seal">
//                   {plan.discount}
//                 </span>
//               </div>
//               <p className="mt-1 font-mono text-3xl font-semibold text-navy-900">₹{plan.price}</p>
//               <p className="text-xs text-slate-400">+ Govt. fee, if applicable</p>

//               <a
//                 href="#top-form"
//                 className={`mt-6 flex w-full items-center justify-center rounded-lg py-3 text-sm font-semibold transition ${
//                   plan.highlight
//                     ? "bg-navy-600 text-white hover:bg-navy-700"
//                     : "bg-navy-500/10 text-navy-600 hover:bg-navy-500/20"
//                 }`}
//               >
//                 Get started
//               </a>

//               <ul className="mt-6 flex flex-col gap-2.5 border-t border-navy-900/5 pt-6">
//                 {plan.features.map((f) => (
//                   <li key={f} className="flex items-start gap-2 text-sm text-ink">
//                     <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-seal" />
//                     {f}
//                   </li>
//                 ))}
//               </ul>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }



// import { motion } from "framer-motion";
// import { CheckCircle2 } from "lucide-react";
// import { pricingPlans } from "../data";

// export default function Pricing() {
//   return (
//     <section className="border-t border-navy-900/5 bg-white">
//       <div className="mx-auto max-w-6xl px-5 py-20">
//         <div className="mx-auto max-w-md text-center">
//           <p className="font-mono text-sm font-bold uppercase tracking-[0.2em] text-gold-600">Transparent pricing</p>
//           <h2 className="mt-3 font-display text-3xl font-bold leading-tight text-black sm:text-4xl">Pick a plan that fits</h2>
//         </div>

//         <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3 md:items-stretch">
//           {pricingPlans.map((plan, i) => (
//             <motion.div
//               key={plan.name}
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true, margin: "-40px" }}
//               transition={{ duration: 0.5, delay: i * 0.1 }}
//               className={`relative flex flex-col rounded-2xl border bg-white p-7 ${
//                 plan.highlight
//                   ? "border-navy-600 shadow-[0_25px_60px_-25px_rgba(18,109,196,0.4)]"
//                   : "border-navy-900/10 shadow-[0_20px_50px_-30px_rgba(10,20,40,0.3)]"
//               }`}
//             >
//               {plan.highlight && (
//                 <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-navy-600 px-3 py-1 text-[10px] font-semibold uppercase tracking-wide text-white">
//                   Most popular
//                 </span>
//               )}

//               <p className="font-display text-xl font-bold text-black">{plan.name}</p>
//               <p className="mt-1.5 text-base leading-relaxed text-slate-800">{plan.desc}</p>

//               <div className="mt-5 flex items-center gap-2">
//                 <span className="font-mono text-sm text-slate-400 line-through">₹{plan.originalPrice}</span>
//                 <span className="rounded-full bg-seal/10 px-2 py-0.5 text-[10px] font-medium text-seal">
//                   {plan.discount}
//                 </span>
//               </div>
//               <p className="mt-1 font-mono text-3xl font-bold text-black">₹{plan.price}</p>
//               <p className="text-xs text-slate-500">+ Govt. fee, if applicable</p>

//               <a
//                 href="#top-form"
//                 className={`mt-6 flex w-full items-center justify-center rounded-lg py-3 text-sm font-semibold transition ${
//                   plan.highlight
//                     ? "bg-navy-600 text-white hover:bg-navy-700"
//                     : "bg-navy-500/10 text-navy-600 hover:bg-navy-500/20"
//                 }`}
//               >
//                 Get started
//               </a>

//               <ul className="mt-6 flex flex-col gap-2.5 border-t border-navy-900/5 pt-6">
//                 {plan.features.map((f) => (
//                   <li key={f} className="flex items-start gap-2 text-base text-ink">
//                     <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-seal" />
//                     {f}
//                   </li>
//                 ))}
//               </ul>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }



import { motion } from "framer-motion";
import {
  FaCheckCircle,
  FaTag,
  FaCoins,
  FaStar,
} from "react-icons/fa";

import { pricingPlans } from "../data";

export default function Pricing() {
  return (
    <section className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-24">
      {/* =====================================================
          BACKGROUND DECORATION
      ====================================================== */}

      <div className="pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full bg-blue-500/5 blur-3xl" />

      <div className="pointer-events-none absolute -right-40 bottom-0 h-80 w-80 rounded-full bg-gold-500/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

        {/* =====================================================
            HEADING
        ====================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            margin: "-60px",
          }}
          transition={{
            duration: 0.6,
          }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="font-mono text-sm font-bold uppercase tracking-[0.2em] text-gold-600">
            Transparent pricing
          </p>

          <h2 className="mt-4 font-display text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
            Pick a plan that fits
            <span className="block text-blue-700">
              your business
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">
            Simple plans with professional support, transparent pricing
            and everything you need to manage your GST requirements.
          </p>
        </motion.div>

        {/* =====================================================
            PRICING CARDS
        ====================================================== */}

        <div className="mt-12 grid grid-cols-1 gap-7 md:grid-cols-3 md:items-stretch">

          {pricingPlans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{
                opacity: 0,
                y: 30,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                margin: "-50px",
              }}
              transition={{
                duration: 0.55,
                delay: i * 0.1,
              }}
              whileHover={{
                y: -8,
              }}
              className={`group relative flex h-full flex-col overflow-hidden rounded-3xl border bg-white p-6 transition-all duration-500 sm:p-7 ${
                plan.highlight
                  ? "border-gold-400 shadow-[0_20px_60px_-25px_rgba(234,179,8,0.45)]"
                  : "border-slate-200 shadow-[0_20px_50px_-30px_rgba(10,20,40,0.3)] hover:border-blue-500/40 hover:shadow-[0_25px_60px_-25px_rgba(18,109,196,0.3)]"
              }`}
            >

              {/* =================================================
                  GOLDEN ANIMATED GLOW - ONLY POPULAR CARD
              ================================================== */}

              {plan.highlight && (
                <>
                  <motion.div
                    animate={{
                      opacity: [0.15, 0.35, 0.15],
                      scale: [1, 1.08, 1],
                    }}
                    transition={{
                      duration: 3.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-gold-400/30 blur-3xl"
                  />

                  <motion.div
                    animate={{
                      opacity: [0.1, 0.25, 0.1],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="pointer-events-none absolute -bottom-20 -left-20 h-48 w-48 rounded-full bg-gold-500/20 blur-3xl"
                  />
                </>
              )}

              {/* =================================================
                  MOST POPULAR BADGE
              ================================================== */}

              {plan.highlight && (
                <motion.div
                  initial={{
                    opacity: 0,
                    scale: 0.8,
                    y: -8,
                  }}
                  whileInView={{
                    opacity: 1,
                    scale: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    duration: 0.5,
                    type: "spring",
                    stiffness: 250,
                    damping: 18,
                  }}
                  className="absolute left-1/2 top-0 z-20 -translate-x-1/2 -translate-y-1/2"
                >
                  <motion.div
                    animate={{
                      boxShadow: [
                        "0 0 0 rgba(234,179,8,0)",
                        "0 0 22px rgba(234,179,8,0.45)",
                        "0 0 0 rgba(234,179,8,0)",
                      ],
                    }}
                    transition={{
                      duration: 2.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="flex items-center gap-1.5 rounded-full border border-gold-400 bg-gold-500 px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.12em] text-white"
                  >
                    <FaStar className="text-[9px]" />
                    Most Popular
                  </motion.div>
                </motion.div>
              )}

              {/* =================================================
                  TOP ACCENT
              ================================================== */}

              <div
                className={`absolute left-0 top-0 h-1 w-full ${
                  plan.highlight
                    ? "bg-gradient-to-r from-transparent via-gold-500 to-transparent"
                    : "bg-gradient-to-r from-transparent via-blue-600/50 to-transparent"
                }`}
              />

              {/* =================================================
                  PLAN NAME
              ================================================== */}

              <div className="relative z-10">

                <div className="flex items-center justify-between gap-3">

                  <p className="font-display text-2xl font-bold text-black">
                    {plan.name}
                  </p>

                  {/* Small icon */}

                  <div
                    className={`flex h-10 w-10 items-center justify-center rounded-xl ${
                      plan.highlight
                        ? "bg-gold-500/10 text-gold-600"
                        : "bg-blue-600/10 text-blue-700"
                    }`}
                  >
                    <FaTag className="text-base" />
                  </div>

                </div>

                <p className="mt-2 min-h-[60px] text-sm leading-6 text-slate-600 sm:text-base">
                  {plan.desc}
                </p>

              </div>

              {/* =================================================
                  PRICE
              ================================================== */}

              <div className="relative z-10 mt-5">

                <div className="flex flex-wrap items-center gap-2.5">

                  {/* Old Price */}

                  <span className="font-mono text-sm text-slate-400 line-through">
                    ₹{plan.originalPrice}
                  </span>

                  {/* Discount */}

                  <span className="flex items-center gap-1 rounded-full bg-blue-50 px-2.5 py-1 text-[10px] font-bold text-blue-700">
                    <FaTag className="text-[9px]" />
                    {plan.discount}
                  </span>

                </div>

                {/* Current Price */}

                <p className="mt-1 font-mono text-3xl font-bold text-black sm:text-4xl">
                  ₹{plan.price}
                </p>

                <p className="mt-1 text-xs font-medium text-slate-500">
                  + Govt. fee, if applicable
                </p>

              </div>

              {/* =================================================
                  BENEFIT STRIP
              ================================================== */}

              <div
                className={`relative z-10 mt-5 flex items-center gap-3 border-y py-3 ${
                  plan.highlight
                    ? "border-gold-500/20"
                    : "border-slate-200"
                }`}
              >

                <div
                  className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${
                    plan.highlight
                      ? "bg-gold-500/10 text-gold-600"
                      : "bg-blue-500/10 text-blue-700"
                  }`}
                >
                  <FaCoins className="text-lg" />
                </div>

                <p className="text-xs leading-5 text-slate-600">
                  <strong className="text-sm text-black">
                    Great value for your business
                  </strong>

                  <br />

                  Professional support without unnecessary costs.
                </p>

              </div>

              {/* =================================================
                  GET STARTED BUTTON
              ================================================== */}

              <a
                href="#top-form"
                className="relative z-10 mt-5 block w-full"
              >
                <motion.div
                  whileHover={{
                    scale: 1.02,
                  }}
                  whileTap={{
                    scale: 0.98,
                  }}
                  className="flex w-full items-center justify-center rounded-xl bg-blue-600 px-5 py-3.5 text-sm font-bold text-white shadow-[0_10px_25px_-10px_rgba(37,99,235,0.6)] transition-all duration-300 hover:bg-blue-700 hover:shadow-[0_15px_30px_-10px_rgba(37,99,235,0.7)]"
                >
                  Get started
                </motion.div>
              </a>

              {/* =================================================
                  FEATURES
              ================================================== */}

              <div className="relative z-10 mt-6 flex-1 border-t border-slate-200 pt-6">

                <p className="text-sm font-bold text-black">
                  What you'll get
                </p>

                <ul className="mt-4 flex flex-col gap-3">

                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-2.5 text-sm leading-5 text-slate-700 sm:text-base"
                    >
                      <FaCheckCircle
                        className={`mt-0.5 h-4 w-4 shrink-0 ${
                          plan.highlight
                            ? "text-gold-500"
                            : "text-blue-600"
                        }`}
                      />

                      <span>{feature}</span>
                    </li>
                  ))}

                </ul>

              </div>

              {/* =================================================
                  HOVER GOLDEN LINE - POPULAR ONLY
              ================================================== */}

              {plan.highlight && (
                <motion.div
                  initial={{
                    scaleX: 0,
                  }}
                  whileHover={{
                    scaleX: 1,
                  }}
                  className="absolute bottom-0 left-0 h-1 w-full origin-left bg-gradient-to-r from-transparent via-gold-500 to-transparent"
                />
              )}

              {/* Normal card blue hover line */}

              {!plan.highlight && (
                <div className="absolute bottom-0 left-0 h-1 w-full origin-left scale-x-0 bg-gradient-to-r from-transparent via-blue-600 to-transparent transition-transform duration-500 group-hover:scale-x-100" />
              )}

            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}
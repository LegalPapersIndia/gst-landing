// import { motion } from "framer-motion";
// import { FaUserGraduate, FaBolt, FaTags, FaBell } from "react-icons/fa";
// import { whyUs } from "../data";

// const whyUsIcons = [FaUserGraduate, FaBolt, FaTags, FaBell];

// export default function WhyUs() {
//   return (
//     <section className="border-t border-navy-900/5 bg-white">
//       <div className="mx-auto max-w-6xl px-5 py-20">
//         <div className="max-w-xl">
//           <p className="font-mono text-sm font-bold uppercase tracking-[0.2em] text-gold-600">
//             Why Legal Papers India
//           </p>
//           <h2 className="mt-3 font-display text-3xl font-bold leading-tight text-black sm:text-4xl">
//             The details that stall an application
//           </h2>
//         </div>

//         <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
//           {whyUs.map((item, i) => {
//             const Icon = whyUsIcons[i % whyUsIcons.length];
//             return (
//               <motion.div
//                 key={item.title}
//                 initial={{ opacity: 0, y: 18 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true, margin: "-40px" }}
//                 transition={{ duration: 0.45, delay: i * 0.1 }}
//                 className="group relative overflow-hidden rounded-2xl border border-navy-900/10 bg-navy-500/5 p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-gold-500/40 hover:bg-white hover:shadow-[0_25px_50px_-25px_rgba(10,20,40,0.35)]"
//               >
//                 <div className="relative">
//                   <div className="absolute inset-0 scale-125 rounded-full bg-gold-500/0 blur-md transition-all duration-500 group-hover:scale-150 group-hover:bg-gold-500/30" />
//                   <div className="relative flex h-12 w-12 items-center justify-center rounded-full bg-gold-500/10 transition-all duration-500 group-hover:bg-gold-500">
//                     <Icon className="h-5 w-5 text-gold-600 transition-colors duration-500 group-hover:text-white" />
//                   </div>
//                 </div>

//                 <p className="mt-4 font-display text-lg font-bold text-black">{item.title}</p>
//                 <p className="mt-1.5 text-base leading-relaxed text-slate-800">{item.desc}</p>

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
import {
  FaUserGraduate,
  FaBolt,
  FaTags,
  FaBell,
} from "react-icons/fa";
import { whyUs } from "../data";

const whyUsIcons = [
  FaUserGraduate,
  FaBolt,
  FaTags,
  FaBell,
];

export default function WhyUs() {
  return (
    <section className="border-t border-navy-900/5 bg-[#f4f8ff]">
      <div className="mx-auto max-w-6xl px-5 py-20">

        {/* ================= HEADING ================= */}
        <div>
          <p className="font-mono text-sm font-bold uppercase tracking-[0.2em] text-gold-600">
            Why Legal Papers India
          </p>

          <h2 className="mt-3 font-display text-3xl font-bold leading-tight text-black sm:text-4xl">
            The details that stall an application
          </h2>
        </div>

        {/* ================= CARDS ================= */}
        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {whyUs.map((item, i) => {
            const Icon = whyUsIcons[i % whyUsIcons.length];

            return (
              <motion.div
                key={item.title}
                initial={{
                  opacity: 0,
                  y: 18,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  margin: "-40px",
                }}
                transition={{
                  duration: 0.45,
                  delay: i * 0.1,
                }}
                className="group relative"
              >
                {/* ================= OUTER BLUE GLOW ================= */}
                <div
                  className="
                    pointer-events-none
                    absolute
                    -inset-1
                    rounded-2xl
                    bg-blue-500/0
                    blur-xl
                    opacity-0
                    transition-all
                    duration-500

                    group-hover:bg-blue-500/20
                    group-hover:opacity-100
                  "
                />

                {/* ================= CARD ================= */}
                <div
                  className="
                    relative
                    h-full
                    overflow-hidden
                    rounded-2xl
                    border
                    border-slate-200
                    bg-white
                    p-6

                    shadow-[0_12px_30px_-20px_rgba(15,35,65,0.35)]

                    transition-all
                    duration-400
                    ease-out

                    group-hover:-translate-y-1.5
                    group-hover:border-blue-300
                    group-hover:shadow-[0_22px_45px_-22px_rgba(37,99,235,0.35)]
                  "
                >
                  {/* ================= LEFT SIDE BLUE ANIMATION ================= */}
                  <div
                    className="
                      absolute
                      left-0
                      top-0
                      h-full
                      w-1
                      origin-top
                      scale-y-0
                      bg-gradient-to-b
                      from-blue-500
                      via-blue-600
                      to-orange-500

                      transition-transform
                      duration-500
                      ease-out

                      group-hover:scale-y-100
                    "
                  />

                  {/* ================= TOP ORANGE LINE ================= */}
                  <div
                    className="
                      absolute
                      left-0
                      top-0
                      h-1
                      w-full
                      origin-left
                      scale-x-0
                      bg-gradient-to-r
                      from-blue-500
                      via-blue-400
                      to-orange-500

                      transition-transform
                      duration-500

                      group-hover:scale-x-100
                    "
                  />

                  {/* ================= DECORATIVE CIRCLE ================= */}
                  <div
                    className="
                      pointer-events-none
                      absolute
                      -right-10
                      -top-10
                      h-24
                      w-24
                      rounded-full
                      bg-blue-50
                      opacity-70

                      transition-all
                      duration-500

                      group-hover:scale-150
                      group-hover:bg-blue-100
                    "
                  />

                  {/* ================= ICON ================= */}
                  <div className="relative z-10">
                    {/* Glow behind icon */}
                    <div
                      className="
                        absolute
                        inset-0
                        h-16
                        w-16
                        rounded-full
                        bg-blue-500/0
                        blur-lg

                        transition-all
                        duration-500

                        group-hover:bg-blue-500/25
                      "
                    />

                    {/* Icon circle */}
                    <div
  className="
    relative
    flex
    h-16
    w-16
    items-center
    justify-center
    rounded-full
    bg-gradient-to-br
    from-blue-50
    to-blue-100
    border
    border-blue-100

    transition-all
    duration-500

    group-hover:scale-110
    group-hover:border-orange-300
    group-hover:from-orange-400
    group-hover:to-orange-500
  "
>
  <Icon
    className="
      h-7
      w-7
      text-blue-600

      transition-all
      duration-500

      group-hover:scale-110
      group-hover:text-white
    "
  />
</div>
                  </div>

                  {/* ================= TITLE ================= */}
                  <p
                    className="
                      relative
                      z-10
                      mt-5
                      font-display
                      text-lg
                      font-bold
                      text-[#173252]

                      transition-colors
                      duration-300

                      group-hover:text-blue-700
                    "
                  >
                    {item.title}
                  </p>

                  {/* ================= DESCRIPTION ================= */}
                  <p
                    className="
                      relative
                      z-10
                      mt-1.5
                      text-base
                      leading-relaxed
                      text-slate-600

                      transition-colors
                      duration-300

                      group-hover:text-slate-700
                    "
                  >
                    {item.desc}
                  </p>

                  {/* ================= BOTTOM ORANGE LINE ================= */}
                  <div
                    className="
                      absolute
                      bottom-0
                      left-0
                      h-1
                      w-full
                      origin-left
                      scale-x-0
                      bg-gradient-to-r
                      from-blue-500
                      to-orange-500

                      transition-transform
                      duration-500

                      group-hover:scale-x-100
                    "
                  />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
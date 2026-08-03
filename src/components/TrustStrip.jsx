// import { motion } from "framer-motion";
// import { stats } from "../data";

// export default function TrustStrip() {
//   return (
//     <section className="border-y border-navy-900/10 bg-white">
//       <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-5 py-10 sm:grid-cols-4">
//         {stats.map((s, i) => (
//           <motion.div
//             key={s.label}
//             initial={{ opacity: 0, y: 12 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.5, delay: i * 0.08 }}
//             className="text-center"
//           >
//             <p className="font-mono text-2xl font-semibold text-navy-900 sm:text-3xl">{s.value}</p>
//             <p className="mt-1 text-xs text-slate-500">{s.label}</p>
//           </motion.div>
//         ))}
//       </div>
//     </section>
//   );
// }




import { motion } from "framer-motion";
import { FaBriefcase, FaStar, FaMapMarkedAlt, FaHeadset } from "react-icons/fa";
import { stats } from "../data";

const statIcons = [FaBriefcase, FaStar, FaMapMarkedAlt, FaHeadset];

export default function TrustStrip() {
  return (
    <section className="border-y border-navy-900/10 bg-white">
      <div className="mx-auto max-w-6xl px-5 py-14">
       <div className="mb-8">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-gold-600">Why businesses trust us</p>
          <h2 className="mt-2 font-display text-2xl text-navy-600 sm:text-3xl">Numbers that speak for themselves</h2>
        </div>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          {stats.map((s, i) => {
            const Icon = statIcons[i % statIcons.length];
            return (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
                className="group relative overflow-hidden rounded-xl border border-navy-900/10 bg-navy-500/5 px-4 py-7 text-center transition duration-300 hover:-translate-y-1 hover:border-navy-600/20 hover:bg-white hover:shadow-[0_20px_45px_-25px_rgba(10,20,40,0.4)]"
              >
                <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-xl bg-gold-500/10 transition-all duration-500 group-hover:scale-110 group-hover:bg-gold-500">
                  <Icon className="h-5 w-5 text-gold-600 transition-colors duration-500 group-hover:text-white" />
                </div>
                <p className="mt-3 font-mono text-xl font-semibold text-navy-900 sm:text-2xl">{s.value}</p>
                <p className="mt-1 text-xs text-slate-500">{s.label}</p>

                <div className="absolute bottom-0 left-0 h-1 w-full origin-left scale-x-0 bg-gold-500 transition-transform duration-500 group-hover:scale-x-100" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
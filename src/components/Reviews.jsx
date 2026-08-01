// import { motion } from "framer-motion";
// import { Star, ExternalLink } from "lucide-react";
// import { reviewPlatforms } from "../data";

// export default function Reviews() {
//   return (
//     <section id="reviews" className="bg-paper">
//       <div className="mx-auto max-w-6xl px-5 py-20">
//         <p className="font-mono text-xs uppercase tracking-[0.2em] text-gold-600">Trusted, publicly</p>
//         <h2 className="mt-3 font-display text-3xl text-navy-600 sm:text-4xl">
//           Ratings from clients, not from us
//         </h2>

//         <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-3">
//           {reviewPlatforms.map((r, i) => (
//             <motion.a
//               key={r.name}
//               href={r.href}
//               target="_blank"
//               rel="noopener noreferrer"
//               initial={{ opacity: 0, y: 16 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.45, delay: i * 0.1 }}
//               className="group flex flex-col justify-between rounded-xl border border-navy-900/10 bg-white p-6 transition hover:-translate-y-1 hover:shadow-[0_20px_50px_-25px_rgba(10,20,40,0.35)]"
//             >
//               <div>
//                 <div className="flex items-center justify-between">
//                   <p className="font-display text-lg text-navy-900">{r.name}</p>
//                   <ExternalLink className="h-4 w-4 text-slate-400 transition group-hover:text-gold-600" />
//                 </div>
//                 <div className="mt-2 flex items-center gap-1.5">
//                   <div className="flex">
//                     {Array.from({ length: 5 }).map((_, idx) => (
//                       <Star key={idx} className="h-3.5 w-3.5 fill-gold-500 text-gold-500" />
//                     ))}
//                   </div>
//                   <span className="font-mono text-xs text-slate-500">
//                     {r.rating} · {r.count}
//                   </span>
//                 </div>
//                 <p className="mt-4 text-sm italic leading-relaxed text-slate-500">"{r.quote}"</p>
//                 <p className="mt-2 text-xs text-slate-400">— {r.author}</p>
//               </div>
//             </motion.a>
//           ))}
//         </div>
//         <p className="mt-6 text-xs text-slate-400">
//           Showing placeholder ratings and excerpts — swap in real figures and quotes from each platform
//           before this goes live.
//         </p>
//       </div>
//     </section>
//   );
// }




import { motion } from "framer-motion";
import { Star, ExternalLink } from "lucide-react";
import { FaGoogle, FaRegBuilding } from "react-icons/fa";
import { SiTrustpilot } from "react-icons/si";
import { reviewPlatforms } from "../data";

const platformIcons = {
  "Google Reviews": FaGoogle,
  Trustpilot: SiTrustpilot,
  AmbitionBox: FaRegBuilding,
};

export default function Reviews() {
  return (
    <section id="reviews" className="bg-paper">
      <div className="mx-auto max-w-6xl px-5 py-20">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-gold-600">Trusted, publicly</p>
        <h2 className="mt-3 font-display text-3xl text-navy-600 sm:text-4xl">
          Ratings from clients, not from us
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-3">
          {reviewPlatforms.map((r, i) => {
            const Icon = platformIcons[r.name] ?? FaRegBuilding;
            return (
              <motion.a
                key={r.name}
                href={r.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.1 }}
                className="group flex flex-col justify-between rounded-xl border border-navy-900/10 bg-white p-6 transition hover:-translate-y-1 hover:shadow-[0_20px_50px_-25px_rgba(10,20,40,0.35)]"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-navy-500/10 transition-colors duration-500 group-hover:bg-navy-600">
                        <Icon className="h-4 w-4 text-navy-600 transition-colors duration-500 group-hover:text-white" />
                      </div>
                      <p className="font-display text-lg text-navy-900">{r.name}</p>
                    </div>
                    <ExternalLink className="h-4 w-4 text-slate-400 transition group-hover:text-gold-600" />
                  </div>
                  <div className="mt-3 flex items-center gap-1.5">
                    <div className="flex">
                      {Array.from({ length: 5 }).map((_, idx) => (
                        <Star key={idx} className="h-3.5 w-3.5 fill-gold-500 text-gold-500" />
                      ))}
                    </div>
                    <span className="font-mono text-xs text-slate-500">
                      {r.rating} · {r.count}
                    </span>
                  </div>
                  <p className="mt-4 text-sm italic leading-relaxed text-slate-500">"{r.quote}"</p>
                  <p className="mt-2 text-xs text-slate-400">— {r.author}</p>
                </div>
              </motion.a>
            );
          })}
        </div>
        <p className="mt-6 text-xs text-slate-400">
          Showing placeholder ratings and excerpts — swap in real figures and quotes from each platform
          before this goes live.
        </p>
      </div>
    </section>
  );
}
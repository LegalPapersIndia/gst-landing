

// // // import { motion } from "framer-motion";
// // // import { Star, ExternalLink } from "lucide-react";
// // // import { reviewPlatforms } from "../data";
// // // import logoGoogle from "../assets/g.webp";
// // // import logoTrustpilot from "../assets/t.webp";
// // // import logoAmbitionBox from "../assets/a.webp";

// // // const platformLogos = {
// // //   "Google Reviews": logoGoogle,
// // //   Trustpilot: logoTrustpilot,
// // //   AmbitionBox: logoAmbitionBox,
// // // };

// // // export default function Reviews() {
// // //   return (
// // //     <section id="reviews" className="bg-paper">
// // //       <div className="mx-auto max-w-6xl px-5 py-20">
// // //         <p className="font-mono text-xs uppercase tracking-[0.2em] text-gold-600">Trusted, publicly</p>
// // //         <h2 className="mt-3 font-display text-3xl text-navy-600 sm:text-4xl">
// // //           Ratings from clients, not from us
// // //         </h2>

// // //         <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-3">
// // //           {reviewPlatforms.map((r, i) => (
// // //             <motion.a
// // //               key={r.name}
// // //               href={r.href}
// // //               target="_blank"
// // //               rel="noopener noreferrer"
// // //               initial={{ opacity: 0, y: 16 }}
// // //               whileInView={{ opacity: 1, y: 0 }}
// // //               viewport={{ once: true }}
// // //               transition={{ duration: 0.45, delay: i * 0.1 }}
// // //               className="group flex flex-col justify-between rounded-xl border border-navy-900/10 bg-white p-6 transition hover:-translate-y-1 hover:shadow-[0_20px_50px_-25px_rgba(10,20,40,0.35)]"
// // //             >
// // //               <div>
// // //                 <div className="flex items-center justify-between">
// // //                   <div className="flex items-center gap-2.5">
// // //                     <img
// // //                       src={platformLogos[r.name]}
// // //                       alt={r.name}
// // //                       loading="lazy"
// // //                       className="h-6 w-auto max-w-[1.75rem] object-contain sm:h-7 sm:max-w-[2rem]"
// // //                     />
// // //                     <p className="font-display text-base text-navy-900 sm:text-lg">{r.name}</p>
// // //                   </div>
// // //                   <ExternalLink className="h-4 w-4 shrink-0 text-slate-400 transition group-hover:text-gold-600" />
// // //                 </div>
// // //                 <div className="mt-3 flex items-center gap-1.5">
// // //                   <div className="flex">
// // //                     {Array.from({ length: 5 }).map((_, idx) => (
// // //                       <Star key={idx} className="h-3.5 w-3.5 fill-gold-500 text-gold-500" />
// // //                     ))}
// // //                   </div>
// // //                   <span className="font-mono text-xs text-slate-500">
// // //                     {r.rating} · {r.count}
// // //                   </span>
// // //                 </div>
// // //                 <p className="mt-4 text-sm italic leading-relaxed text-slate-500">"{r.quote}"</p>
// // //                 <p className="mt-2 text-xs text-slate-400">— {r.author}</p>
// // //               </div>
// // //             </motion.a>
// // //           ))}
// // //         </div>
// // //         <p className="mt-6 text-xs text-slate-400">
// // //           Showing placeholder ratings and excerpts — swap in real figures and quotes from each platform
// // //           before this goes live.
// // //         </p>
// // //       </div>
// // //     </section>
// // //   );
// // // }




// // // import { motion } from "framer-motion";
// // // import { Star, ExternalLink } from "lucide-react";
// // // import { reviewPlatforms } from "../data";
// // // import logoGoogle from "../assets/g.webp";
// // // import logoTrustpilot from "../assets/t.webp";
// // // import logoAmbitionBox from "../assets/a.webp";

// // // const platformLogos = {
// // //   "Google Reviews": logoGoogle,
// // //   Trustpilot: logoTrustpilot,
// // //   AmbitionBox: logoAmbitionBox,
// // // };

// // // export default function Reviews() {
// // //   return (
// // //     <section id="reviews" className="bg-white">
// // //       <div className="mx-auto max-w-6xl px-5 py-20">
// // //         <p className="font-mono text-base font-bold uppercase tracking-[0.2em] text-gold-600">Trusted, publicly</p>
// // //         <h2 className="mt-3 font-display text-3xl text-navy-600 sm:text-4xl">
// // //           Ratings from clients, not from us
// // //         </h2>

// // //         <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-3">
// // //           {reviewPlatforms.map((r, i) => (
// // //             <motion.a
// // //               key={r.name}
// // //               href={r.href}
// // //               target="_blank"
// // //               rel="noopener noreferrer"
// // //               initial={{ opacity: 0, y: 16 }}
// // //               whileInView={{ opacity: 1, y: 0 }}
// // //               viewport={{ once: true }}
// // //               transition={{ duration: 0.45, delay: i * 0.1 }}
// // //               className="group flex flex-col justify-between rounded-xl border border-navy-900/10 bg-white p-6 transition hover:-translate-y-1 hover:shadow-[0_20px_50px_-25px_rgba(10,20,40,0.35)]"
// // //             >
// // //               <div>
// // //                 <div className="flex items-center justify-between">
// // //                   <div className="flex items-center gap-3">
// // //                     <img
// // //                       src={platformLogos[r.name]}
// // //                       alt={r.name}
// // //                       loading="lazy"
// // //                       className="h-9 w-auto max-w-[2.25rem] object-contain sm:h-11 sm:max-w-[2.75rem]"
// // //                     />
// // //                     <p className="font-display text-lg font-bold text-ink sm:text-xl">{r.name}</p>
// // //                   </div>
// // //                   <ExternalLink className="h-4 w-4 shrink-0 text-slate-400 transition group-hover:text-gold-600" />
// // //                 </div>
// // //                 <div className="mt-3 flex items-center gap-1.5">
// // //                   <div className="flex">
// // //                     {Array.from({ length: 5 }).map((_, idx) => (
// // //                       <Star key={idx} className="h-3.5 w-3.5 fill-gold-500 text-gold-500" />
// // //                     ))}
// // //                   </div>
// // //                   <span className="font-mono text-xs font-bold text-ink">
// // //                     {r.rating} · {r.count}
// // //                   </span>
// // //                 </div>
// // //                 <p className="mt-4 text-sm italic leading-relaxed text-ink">"{r.quote}"</p>
// // //                 <p className="mt-2 text-xs font-bold text-ink">— {r.author}</p>
// // //               </div>
// // //             </motion.a>
// // //           ))}
// // //         </div>
// // //         <p className="mt-6 text-xs text-slate-400">
// // //           Showing placeholder ratings and excerpts — swap in real figures and quotes from each platform
// // //           before this goes live.
// // //         </p>
// // //       </div>
// // //     </section>
// // //   );
// // // }





// // import { motion } from "framer-motion";
// // import { Star, ExternalLink } from "lucide-react";
// // import { reviewPlatforms } from "../data";
// // import logoGoogle from "../assets/g.webp";
// // import logoTrustpilot from "../assets/t.webp";
// // import logoAmbitionBox from "../assets/a.webp";

// // const platformLogos = {
// //   "Google Reviews": logoGoogle,
// //   Trustpilot: logoTrustpilot,
// //   AmbitionBox: logoAmbitionBox,
// // };

// // export default function Reviews() {
// //   return (
// //     <section id="reviews" className="bg-white">
// //       <div className="mx-auto max-w-6xl px-5 py-20">
// //         <p className="font-mono text-sm font-bold uppercase tracking-[0.2em] text-gold-600">
// //           Trusted, publicly
// //         </p>

// //         <h2 className="mt-4 font-display text-3xl font-bold leading-tight text-black sm:text-4xl">
// //           Ratings from clients, not from us
// //         </h2>

// //         <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-3">
// //           {reviewPlatforms.map((r, i) => (
// //             <motion.a
// //               key={r.name}
// //               href={r.href}
// //               target="_blank"
// //               rel="noopener noreferrer"
// //               initial={{ opacity: 0, y: 16 }}
// //               whileInView={{ opacity: 1, y: 0 }}
// //               viewport={{ once: true }}
// //               transition={{ duration: 0.45, delay: i * 0.1 }}
// //               className="group flex flex-col justify-between rounded-xl border border-navy-900/10 bg-navy-500/5 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-gold-500/40 hover:bg-white hover:shadow-[0_20px_45px_-25px_rgba(10,20,40,0.4)]"
// //             >
// //               <div>
// //                 <div className="flex items-center justify-between">
// //                   <div className="flex items-center gap-3">
// //                     <img
// //                       src={platformLogos[r.name]}
// //                       alt={r.name}
// //                       loading="lazy"
// //                       className="h-10 w-auto max-w-[2.5rem] object-contain sm:h-11 sm:max-w-[2.75rem]"
// //                     />

// //                     <p className="font-display text-xl font-bold text-black sm:text-2xl">
// //                       {r.name}
// //                     </p>
// //                   </div>

// //                   <ExternalLink className="h-5 w-5 shrink-0 text-slate-500 transition group-hover:text-gold-600" />
// //                 </div>

// //                 <div className="mt-4 flex items-center gap-2">
// //                   <div className="flex">
// //                     {Array.from({ length: 5 }).map((_, idx) => (
// //                       <Star
// //                         key={idx}
// //                         className="h-4 w-4 fill-gold-500 text-gold-500"
// //                       />
// //                     ))}
// //                   </div>

// //                   <span className="font-mono text-sm font-bold text-black">
// //                     {r.rating} · {r.count}
// //                   </span>
// //                 </div>

// //                 <p className="mt-5 text-base italic leading-relaxed text-black sm:text-lg">
// //                   "{r.quote}"
// //                 </p>

// //                 <p className="mt-3 text-sm font-bold text-black sm:text-base">
// //                   — {r.author}
// //                 </p>
// //               </div>
// //             </motion.a>
// //           ))}
// //         </div>

// //         <p className="mt-6 text-sm leading-relaxed text-slate-800">
// //           Showing placeholder ratings and excerpts — swap in real figures and
// //           quotes from each platform before this goes live.
// //         </p>
// //       </div>
// //     </section>
// //   );
// // }



import { motion } from "framer-motion";
import { Star, ArrowUpRight } from "lucide-react";
import { reviewPlatforms } from "../data";
import logoGoogle from "../assets/G.png";
import logoTrustpilot from "../assets/T.png";
import logoMouthshut from "../assets/M.png";

const platformLogos = {
  "Google Reviews": logoGoogle,
  Trustpilot: logoTrustpilot,
  Mouthshut: logoMouthshut,
};

export default function Reviews() {
  return (
    <section id="reviews" className="bg-white">
      <div className="mx-auto max-w-6xl px-5 py-20">
        {/* <p className="font-mono text-sm font-bold uppercase tracking-[0.2em] text-gold-600">
          Trusted, publicly
        </p> */}

        <h2 className="mt-4 font-display text-3xl font-bold leading-tight text-black sm:text-4xl">
          Ratings from clients
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-3">
          {reviewPlatforms.map((r, i) => (
            <motion.div
              key={r.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.1 }}
              className="group relative flex flex-col items-center justify-between overflow-hidden rounded-xl border border-navy-900/10 bg-navy-500/5 p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:border-gold-500/40 hover:bg-white hover:shadow-[0_20px_45px_-25px_rgba(10,20,40,0.4)]"
            >
              {/* Blurred glow, intensifies on hover */}
              <div className="pointer-events-none absolute left-1/2 top-1/2 h-0 w-0 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold-500/25 blur-2xl transition-all duration-500 group-hover:h-40 group-hover:w-40" />

              <img
                src={platformLogos[r.name]}
                alt={r.name}
                loading="lazy"
                className="relative h-16 w-auto max-w-[8rem] object-contain sm:h-20 sm:max-w-[9rem]"
              />

              <p className="relative mt-4 font-display text-xl font-bold text-black sm:text-2xl">
                {r.name}
              </p>

              <div className="relative mt-3 flex items-center gap-2">
                <div className="flex">
                  {Array.from({ length: 5 }).map((_, idx) => (
                    <Star
                      key={idx}
                      className="h-4 w-4 fill-gold-500 text-gold-500"
                    />
                  ))}
                </div>

                <span className="font-mono text-sm font-bold text-black">
                  {r.rating} · {r.count}
                </span>
              </div>

              <a
                href={r.href}
                target="_blank"
                rel="noopener noreferrer"
                className="relative mt-5 inline-flex items-center gap-1.5 rounded-full border border-gold-500/40 bg-gold-500/10 px-4 py-2 font-mono text-xs font-bold uppercase tracking-wider text-gold-600 transition-all duration-300 hover:gap-2.5 hover:bg-gold-500 hover:text-white"
              >
                Read More
                <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}



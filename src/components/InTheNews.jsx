
// import { motion } from "framer-motion";
// import { mediaMentions } from "../data";
// import logoDailyhunt from "../assets/logo2.png";
// import logoZeeNews from "../assets/logo3.jpg";
// import logoHindustanTimes from "../assets/logo4.jpg";
// import logoBusinessStandard from "../assets/logo4.png";

// const logos = {
//   Dailyhunt: logoDailyhunt,
//   "Zee News": logoZeeNews,
//   "Hindustan Times": logoHindustanTimes,
//   "Business Standard": logoBusinessStandard,
// };

// export default function InTheNews() {
//   return (
//     <section className="border-t border-navy-900/5 bg-navy-500/5">
//       <div className="mx-auto max-w-6xl px-5 py-16">
//         <div className="flex flex-col items-center gap-2 text-center">
//           <div className="flex items-center gap-2">
//             <span className="h-px w-8 bg-navy-900/15" />
//             <p className="font-mono text-xs uppercase tracking-[0.2em] text-gold-600">In the media</p>
//             <span className="h-px w-8 bg-navy-900/15" />
//           </div>
//           <h2 className="font-display text-2xl text-navy-600 sm:text-3xl">As featured in</h2>
//         </div>

//         <div className="mt-10 grid grid-cols-2 gap-5 lg:grid-cols-4">
//           {mediaMentions.map((item, i) => (
//             <motion.div
//               key={item.name}
//               initial={{ opacity: 0, y: 18 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true, margin: "-40px" }}
//               transition={{ duration: 0.45, delay: i * 0.08 }}
//               className="flex flex-col items-center rounded-2xl border border-navy-900/10 bg-white px-5 py-9 text-center shadow-[0_15px_40px_-25px_rgba(10,20,40,0.3)] transition hover:-translate-y-1 hover:shadow-[0_25px_50px_-25px_rgba(10,20,40,0.35)]"
//             >
//               <img
//                 src={logos[item.name]}
//                 alt={item.name}
//                 loading="lazy"
//                 className="h-12 w-auto max-w-[9.5rem] object-contain"
//               />
//               <p className="mt-4 max-w-[15rem] text-xs leading-relaxed text-slate-500">{item.caption}</p>
//             </motion.div>
//           ))}
//         </div>

//         <p className="mt-6 text-center text-xs text-slate-400">
//           Placeholder captions — swap in the real headline/publication link once you have it, and I can
//           make each card clickable.
//         </p>
//       </div>
//     </section>
//   );
// }





import { motion } from "framer-motion";
import { mediaMentions } from "../data";
import logoDailyhunt from "../assets/logo2.png";
import logoZeeNews from "../assets/logo3.jpg";
import logoHindustanTimes from "../assets/logo4.jpg";
import logoBusinessStandard from "../assets/logo4.png";

const logos = {
  Dailyhunt: logoDailyhunt,
  "Zee News": logoZeeNews,
  "Hindustan Times": logoHindustanTimes,
  "Business Standard": logoBusinessStandard,
};

export default function InTheNews() {
  return (
    <section className="border-t border-navy-900/5 bg-white">
      <div className="mx-auto max-w-6xl px-5 py-16">
        <div className="flex flex-col items-center gap-2 text-center">
          <div className="flex items-center gap-2">
            <span className="h-px w-8 bg-navy-900/15" />

            <p className="font-mono text-sm font-bold uppercase tracking-[0.2em] text-gold-600">
              In the media
            </p>

            <span className="h-px w-8 bg-navy-900/15" />
          </div>

          <h2 className="font-display text-3xl font-bold text-black sm:text-4xl">
            As featured in
          </h2>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-5 lg:grid-cols-4">
          {mediaMentions.map((item, i) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              className="flex flex-col items-center rounded-2xl border border-navy-900/10 bg-white px-5 py-9 text-center shadow-[0_15px_40px_-25px_rgba(10,20,40,0.3)] transition hover:-translate-y-1 hover:shadow-[0_25px_50px_-25px_rgba(10,20,40,0.35)]"
            >
              <img
                src={logos[item.name]}
                alt={item.name}
                loading="lazy"
                className="h-16 w-auto max-w-[11rem] object-contain sm:h-20 sm:max-w-[13rem]"
              />

              <p className="mt-5 max-w-[15rem] text-sm font-medium leading-relaxed text-black sm:text-base">
                {item.caption}
              </p>
            </motion.div>
          ))}
        </div>

        {/* <p className="mt-6 text-center text-sm leading-relaxed text-black">
          Placeholder captions — swap in the real headline/publication link
          once you have it, and I can make each card clickable.
        </p> */}
      </div>
    </section>
  );
}


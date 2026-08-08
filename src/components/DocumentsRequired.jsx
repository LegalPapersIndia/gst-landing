// import { motion } from "framer-motion";
// import { FileCheck2 } from "lucide-react";
// import { FaIdCard, FaFingerprint, FaCamera, FaHome, FaUniversity, FaSignature } from "react-icons/fa";
// import { documentsRequired } from "../data";

// const docIcons = [FaIdCard, FaFingerprint, FaCamera, FaHome, FaUniversity, FaSignature];

// export default function DocumentsRequired() {
//   return (
//     <section className="border-t border-navy-900/5 bg-navy-500/5">
//       <div className="mx-auto max-w-6xl px-5 py-20">
//         <div className="flex items-center gap-2">
//           <FileCheck2 className="h-6 w-6 text-seal" strokeWidth={1.5} />
//           <p className="font-mono text-sm font-bold uppercase tracking-[0.2em] text-gold-600">Keep ready</p>
//         </div>
//         <h2 className="mt-3 font-display text-3xl font-bold leading-tight text-black sm:text-4xl">
//           Documents you'll need
//         </h2>

//         <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
//           {documentsRequired.map((doc, i) => {
//             const Icon = docIcons[i % docIcons.length];
//             return (
//               <motion.div
//                 key={doc}
//                 initial={{ opacity: 0, y: 16 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true, margin: "-40px" }}
//                 transition={{ duration: 0.4, delay: i * 0.07 }}
//                 className="group flex items-center gap-4 rounded-xl border border-navy-900/10 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-gold-500/40 hover:shadow-[0_20px_40px_-25px_rgba(10,20,40,0.4)]"
//               >
//                 <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-seal/10 transition-all duration-500 group-hover:bg-seal">
//                   <Icon className="h-4 w-4 text-seal transition-colors duration-500 group-hover:text-white" />
//                 </div>
//                 <p className="text-base font-bold leading-snug text-black">{doc}</p>
//               </motion.div>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// }




import { motion } from "framer-motion";
import { FileCheck2 } from "lucide-react";
import { documentsRequired } from "../data";

import iconPan from "../assets/documents/doc-pan.png";
import iconAadhaar from "../assets/documents/doc-aadhaar.png";
import iconPhoto from "../assets/documents/doc-photo.png";
import iconAddress from "../assets/documents/doc-address.png";
import iconBank from "../assets/documents/doc-bank.png";
import iconSignature from "../assets/documents/doc-signature.png";

const docIcons = [
  iconPan,
  iconAadhaar,
  iconPhoto,
  iconAddress,
  iconBank,
  iconSignature,
];

export default function DocumentsRequired() {
  return (
    <section className="border-t border-navy-900/5 bg-white">
      <div className="mx-auto max-w-6xl px-5 py-20">

        {/* Heading - Same position */}
        <div className="flex items-center gap-2">
          <FileCheck2
            className="h-6 w-6 text-gold-500"
            strokeWidth={1.5}
          />

          <p className="font-mono text-sm font-bold uppercase tracking-[0.2em] text-gold-600">
            Keep ready
          </p>
        </div>

        <h2 className="mt-3 font-display text-3xl font-bold leading-tight text-black sm:text-4xl">
          Documents you'll need
        </h2>

        {/* Documents Grid */}
        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {documentsRequired.map((doc, i) => {
            const icon = docIcons[i % docIcons.length];

            return (
              <motion.div
                key={doc}
                initial={{
                  opacity: 0,
                  y: 16,
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
                  duration: 0.4,
                  delay: i * 0.07,
                }}
                className="group relative"
              >
                {/* Soft orange glow outside card */}
                <div
                  className="
                    pointer-events-none
                    absolute
                    -inset-1
                    rounded-2xl
                    bg-orange-400/0
                    opacity-0
                    blur-lg
                    transition-all
                    duration-500
                    group-hover:bg-orange-400/20
                    group-hover:opacity-100
                  "
                />

                {/* Card */}
                <div
                  className="
                    relative
                    flex
                    min-h-[210px]
                    w-full
                    flex-col
                    items-center
                    justify-center
                    overflow-hidden
                    rounded-2xl
                    border
                    border-slate-200
                    bg-white
                    px-5
                    py-6
                    text-center

                    shadow-[0_10px_30px_-20px_rgba(10,20,40,0.45)]

                    transition-all
                    duration-300
                    ease-out

                    group-hover:-translate-y-1
                    group-hover:border-orange-300
                    group-hover:shadow-[0_20px_40px_-22px_rgba(249,115,22,0.35)]
                  "
                >
                  {/* Decorative orange circle */}
                  <div
                    className="
                      pointer-events-none
                      absolute
                      -right-8
                      -top-8
                      h-20
                      w-20
                      rounded-full
                      bg-orange-50
                      opacity-70
                      transition-transform
                      duration-500
                      group-hover:scale-125
                    "
                  />

                  {/* Decorative blue circle */}
                  <div
                    className="
                      pointer-events-none
                      absolute
                      -bottom-10
                      -left-10
                      h-20
                      w-20
                      rounded-full
                      bg-blue-50
                      opacity-60
                      transition-transform
                      duration-500
                      group-hover:scale-125
                    "
                  />

                  {/* Document Image */}
                  <div
                    className="
                      relative
                      flex
                      h-20
                      w-20
                      items-center
                      justify-center
                      rounded-2xl
                      bg-gradient-to-br
                      from-orange-50
                      via-white
                      to-blue-50

                      transition-all
                      duration-500

                      group-hover:scale-105
                    "
                  >
                    {/* Image border */}
                    <div
                      className="
                        absolute
                        inset-0
                        rounded-2xl
                        border
                        border-orange-200/50
                        transition-colors
                        duration-500
                        group-hover:border-orange-400/60
                      "
                    />

                    <img
                      src={icon}
                      alt={doc}
                      loading="lazy"
                      className="
                        relative
                        z-10
                        h-16
                        w-16
                        object-contain
                        drop-shadow-[0_6px_8px_rgba(15,35,65,0.12)]

                        transition-transform
                        duration-500

                        group-hover:scale-110
                      "
                    />
                  </div>

                  {/* Document Name */}
                  <p
                    className="
                      relative
                      z-10
                      mt-4
                      text-base
                      font-bold
                      leading-snug
                      text-[#173252]

                      transition-colors
                      duration-300

                      group-hover:text-orange-600
                    "
                  >
                    {doc}
                  </p>

                  {/* Orange animated line */}
                  <div
                    className="
                      mt-3
                      h-[3px]
                      w-6
                      rounded-full
                      bg-orange-400/40

                      transition-all
                      duration-500

                      group-hover:w-10
                      group-hover:bg-orange-500
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
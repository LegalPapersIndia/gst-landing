// import LeadForm from "./LeadForm";

// export default function FinalCTA() {
//   return (
//     <section className="relative overflow-hidden bg-navy-950">
//       <div className="pointer-events-none absolute inset-0 bg-noise opacity-[0.12]" />
//       <div className="relative mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-5 py-20 lg:grid-cols-2">
//         <div>
//           <p className="font-mono text-xs uppercase tracking-[0.2em] text-gold-400">Ready when you are</p>
//           <h2 className="mt-3 font-display text-3xl leading-tight text-paper sm:text-4xl">
//             Let's get your GSTIN filed this week.
//           </h2>
//           <p className="mt-4 max-w-md text-sm leading-relaxed text-slate-400">
//             Share your details once — our team calls back with next steps, no obligation.
//           </p>
//         </div>
//         <div className="max-w-md justify-self-start lg:justify-self-end">
//           <LeadForm />
//         </div>
//       </div>
//     </section>
//   );
// }





// import LeadForm from "./LeadForm";

// export default function FinalCTA() {
//   return (
//     <section className="relative overflow-hidden border-t border-navy-900/5 bg-navy-500/5">
//       <div className="relative mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-5 py-20 lg:grid-cols-2">
//         <div>
//           <p className="font-mono text-xs uppercase tracking-[0.2em] text-gold-500">Ready when you are</p>
//           <h2 className="mt-3 font-display text-3xl leading-tight text-navy-600 sm:text-4xl">
//             Let's get your GSTIN filed this week.
//           </h2>
//           <p className="mt-4 max-w-md text-sm leading-relaxed text-slate-500">
//             Share your details once — our team calls back with next steps, no obligation.
//           </p>
//         </div>
//         <div className="max-w-md justify-self-start lg:justify-self-end">
//           <LeadForm />
//         </div>
//       </div>
//     </section>
//   );
// }



// import LeadForm from "./LeadForm";

// export default function FinalCTA() {
//   return (
//     <section className="relative overflow-hidden border-t border-navy-900/5 bg-navy-500/5">
//       <div className="relative mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-5 py-20 lg:grid-cols-2">
//         <div>
//           <p className="font-mono text-sm font-bold uppercase tracking-[0.2em] text-gold-500">
//             Ready when you are
//           </p>

//           <h2 className="mt-3 font-display text-3xl font-bold leading-tight text-black sm:text-4xl">
//             Let's get your GSTIN filed this week.
//           </h2>

//           <p className="mt-4 max-w-md text-base leading-relaxed text-black sm:text-lg">
//             Share your details once — our team calls back with next steps, no
//             obligation.
//           </p>
//         </div>

//         <div className="max-w-md justify-self-start lg:justify-self-end">
//           <LeadForm />
//         </div>
//       </div>
//     </section>
//   );
// }




import { motion } from "framer-motion";
import LeadForm from "./LeadForm";
import ctaImage from "../assets/finalcta.png";

export default function FinalCTA() {
  return (
    <section className="relative overflow-hidden border-t border-navy-900/5 bg-white">
      {/* Decorative background */}
      <div className="pointer-events-none absolute -left-32 top-10 h-72 w-72 rounded-full bg-gold-500/10 blur-3xl " />
      <div className="pointer-events-none absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-navy-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-5 py-16 sm:py-20 lg:py-24">

        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">

          {/* LEFT - Image + Content */}
          <div className="order-1">

            {/* Heading Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="font-mono text-sm font-bold uppercase tracking-[0.2em] text-gold-500">
                Ready when you are
              </p>

              {/* <h2 className="mt-3 font-display text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-[42px]">
                Let's get your GSTIN filed this week.
              </h2> */}

              <p className="mt-4 max-w-md text-base leading-relaxed text-black sm:text-lg">
                Share your details once — our team calls back with next steps,
                no obligation.
              </p>
            </motion.div>

            {/* Character Image */}
            <motion.div
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                delay: 0.15,
                ease: "easeOut",
              }}
              className="relative mt-6 flex justify-center lg:justify-start"
            >
              {/* Glow behind character */}
              <div className="absolute bottom-8 left-1/2 h-48 w-48 -translate-x-1/2 rounded-full bg-gold-500/20 blur-3xl sm:h-60 sm:w-60" />

              <motion.img
                src={ctaImage}
                alt="Legal Papers India professional"
                loading="lazy"
                animate={{
                  y: [0, -8, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="relative z-10 h-auto w-full max-w-[330px] object-contain drop-shadow-[0_25px_35px_rgba(10,20,40,0.18)] sm:max-w-[380px] lg:max-w-[400px]"
              />
            </motion.div>
          </div>

          {/* RIGHT - Lead Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              delay: 0.15,
            }}
            className="w-full max-w-md justify-self-center lg:justify-self-end"
          >
            <div className="relative">

              {/* Form Glow */}
              <div className="absolute -inset-3 rounded-3xl bg-gold-500/10 blur-2xl" />

              {/* Form */}
              <div className="relative rounded-2xl border border-navy-900/10 bg-white p-1 shadow-[0_25px_70px_-30px_rgba(10,20,40,0.35)]">
                <LeadForm />
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
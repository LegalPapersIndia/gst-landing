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




// import { motion } from "framer-motion";
// import LeadForm from "./LeadForm";
// // import ctaImage from "../assets/finalcta.png";
// import ctaImage from "../assets/cta.png";

// export default function FinalCTA() {
//   return (
//     <section className="relative overflow-hidden border-t border-navy-900/5 bg-white">
//       {/* Decorative background */}
//       <div className="pointer-events-none absolute -left-32 top-10 h-72 w-72 rounded-full bg-gold-500/10 blur-3xl " />
//       <div className="pointer-events-none absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-navy-500/10 blur-3xl" />

//       <div className="relative mx-auto max-w-6xl px-5 py-16 sm:py-20 lg:py-24">

//         <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">

//           {/* LEFT - Image + Content */}
//           <div className="order-1">

//             {/* Heading Content */}
//             <motion.div
//               initial={{ opacity: 0, x: -30 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.6 }}
//             >
//               <p className="font-mono text-sm font-bold uppercase tracking-[0.2em] text-gold-500">
//                 Ready when you are
//               </p>

//               {/* <h2 className="mt-3 font-display text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-[42px]">
//                 Let's get your GSTIN filed this week.
//               </h2> */}

//               <p className="mt-4 max-w-md text-base leading-relaxed text-black sm:text-lg">
//                 Share your details once — our team calls back with next steps,
//                 no obligation.
//               </p>
//             </motion.div>

//             {/* Character Image */}
//             <motion.div
//               initial={{ opacity: 0, y: 40, scale: 0.95 }}
//               whileInView={{ opacity: 1, y: 0, scale: 1 }}
//               viewport={{ once: true }}
//               transition={{
//                 duration: 0.7,
//                 delay: 0.15,
//                 ease: "easeOut",
//               }}
//               className="relative mt-6 flex justify-center lg:justify-start"
//             >
//               {/* Glow behind character */}
//               <div className="absolute bottom-8 left-1/2 h-48 w-48 -translate-x-1/2 rounded-full bg-gold-500/20 blur-3xl sm:h-60 sm:w-60" />

//               <motion.img
//                 src={ctaImage}
//                 alt="Legal Papers India professional"
//                 loading="lazy"
//                 animate={{
//                   y: [0, -8, 0],
//                 }}
//                 transition={{
//                   duration: 4,
//                   repeat: Infinity,
//                   ease: "easeInOut",
//                 }}
//                 className="relative z-10 h-auto w-full max-w-[330px] object-contain drop-shadow-[0_25px_35px_rgba(10,20,40,0.18)] sm:max-w-[380px] lg:max-w-[400px]"
//               />
//             </motion.div>
//           </div>

//           {/* RIGHT - Lead Form */}
//           <motion.div
//             initial={{ opacity: 0, x: 30 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             transition={{
//               duration: 0.6,
//               delay: 0.15,
//             }}
//             className="w-full max-w-md justify-self-center lg:justify-self-end"
//           >
//             <div className="relative">

//               {/* Form Glow */}
//               <div className="absolute -inset-3 rounded-3xl bg-gold-500/10 blur-2xl" />

//               {/* Form */}
//               <div className="relative rounded-2xl border border-navy-900/10 bg-white p-1 shadow-[0_25px_70px_-30px_rgba(10,20,40,0.35)]">
//                 <LeadForm />
//               </div>

//             </div>
//           </motion.div>

//         </div>
//       </div>
//     </section>
//   );
// }


// import { motion } from "framer-motion";
// import LeadForm from "./LeadForm";
// import ctaImage from "../assets/cta.png";

// export default function FinalCTA() {
//   return (
//     <section className="relative overflow-hidden border-t border-navy-900/5 bg-white pt-16 sm:pt-20 lg:pt-24">
//       {/* Decorative background */}
//       <div className="pointer-events-none absolute -left-32 top-10 h-72 w-72 rounded-full bg-gold-500/10 blur-3xl " />
//       <div className="pointer-events-none absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-navy-500/10 blur-3xl" />

//       <div className="relative mx-auto max-w-6xl px-5">
//         <div className="grid grid-cols-1 items-stretch gap-12 lg:grid-cols-2 lg:gap-16">
//           {/* LEFT - Image + Content */}
//           <div className="order-1 flex flex-col">
//             {/* Heading Content */}
//             <motion.div
//               initial={{ opacity: 0, x: -30 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.6 }}
//             >
//               <p className="font-mono text-sm font-bold uppercase tracking-[0.2em] text-gold-500">
//                 Ready when you are
//               </p>

//               <p className="mt-4 max-w-md text-base leading-relaxed text-black sm:text-lg">
//                 Share your details once — our team calls back with next steps,
//                 no obligation.
//               </p>
//             </motion.div>

//             {/* Character Image — pushed to the bottom, flush with the section edge */}
//             <motion.div
//               initial={{ opacity: 0, y: 40, scale: 0.95 }}
//               whileInView={{ opacity: 1, y: 0, scale: 1 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
//               className="relative mt-auto flex justify-center pt-6 lg:justify-start"
//             >
//               {/* Glow behind character */}
//               <div className="absolute bottom-0 left-1/2 h-52 w-52 -translate-x-1/2 rounded-full bg-gold-500/20 blur-3xl sm:h-64 sm:w-64" />

//               <motion.img
//                 src={ctaImage}
//                 alt="Legal Papers India professional"
//                 loading="lazy"
//                 animate={{ y: [0, -8, 0] }}
//                 transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
//                 className="relative z-10 h-auto w-full max-w-[380px] object-contain drop-shadow-[0_25px_35px_rgba(10,20,40,0.18)] sm:max-w-[440px] lg:max-w-[460px]"
//               />
//             </motion.div>
//           </div>

//           {/* RIGHT - Lead Form */}
//           <motion.div
//             initial={{ opacity: 0, x: 30 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6, delay: 0.15 }}
//             className="w-full max-w-md self-center justify-self-center pb-16 sm:pb-20 lg:justify-self-end lg:pb-24"
//           >
//             <div className="relative">
//               {/* Form Glow */}
//               <div className="absolute -inset-3 rounded-3xl bg-gold-500/10 blur-2xl" />

//               {/* Form */}
//               <div className="relative rounded-2xl border border-navy-900/10 bg-white p-1 shadow-[0_25px_70px_-30px_rgba(10,20,40,0.35)]">
//                 <LeadForm />
//               </div>
//             </div>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// }




import { motion } from "framer-motion";
import LeadForm from "./LeadForm";
import ctaImage from "../assets/cta1.png";

export default function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-24">
      {/* Decorative Background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-32 top-10 h-72 w-72 rounded-full bg-gold-500/10 blur-3xl" />

        <div className="absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-navy-500/5 blur-3xl" />

        <div className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold-500/5 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl px-5">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-14 xl:gap-20">
          {/* ================= LEFT - IMAGE + CONTENT ================= */}
          <div className="order-1 flex flex-col">
            {/* Heading / Content */}
            <motion.div
              initial={{ opacity: 0, x: -35 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative z-20"
            >
              <p className="font-mono text-sm font-bold uppercase tracking-[0.2em] text-gold-500">
                Ready when you are
              </p>

              <h2 className="mt-3 max-w-xl text-3xl font-extrabold leading-tight text-black sm:text-4xl lg:text-5xl">
                Let’s get your paperwork
                <span className="text-navy-900"> sorted.</span>
              </h2>

              <p className="mt-4 max-w-lg text-base leading-relaxed text-black sm:text-lg">
                Share your details once — our team calls back with next steps,
                no obligation.
              </p>
            </motion.div>

            {/* ================= CTA IMAGE ================= */}
            <motion.div
              initial={{ opacity: 0, y: 40, scale: 0.94 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                delay: 0.15,
                ease: "easeOut",
              }}
              className="relative mt-5 flex justify-center lg:-ml-8 lg:justify-start"
            >
              {/* Image Glow */}
              <div className="pointer-events-none absolute bottom-8 left-1/2 h-56 w-56 -translate-x-1/2 rounded-full bg-gold-500/20 blur-3xl sm:h-72 sm:w-72 lg:left-[42%]" />

              <motion.img
                src={ctaImage}
                alt="Legal Papers India professional"
                loading="lazy"
                animate={{
                  y: [0, -7, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="
                  relative z-10
                  h-auto
                  w-full
                  max-w-[420px]
                  object-contain
                  drop-shadow-[0_25px_35px_rgba(10,20,40,0.18)]
                  sm:max-w-[500px]
                  lg:max-w-[570px]
                  xl:max-w-[600px]
                "
              />
            </motion.div>
          </div>

          {/* ================= RIGHT - LEAD FORM ================= */}
          <motion.div
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              delay: 0.15,
            }}
            className="
              order-2
              flex
              w-full
              justify-center
              lg:justify-end
            "
          >
            <div className="relative w-full max-w-md">
              {/* Form Glow */}
              <div className="absolute -inset-4 rounded-[2rem] bg-gold-500/10 blur-2xl" />

              {/* Form Card */}
              <div
                className="
                  relative
                  rounded-2xl
                  border
                  border-navy-900/10
                  bg-white
                  p-1
                  shadow-[0_25px_70px_-30px_rgba(10,20,40,0.35)]
                "
              >
                <LeadForm />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
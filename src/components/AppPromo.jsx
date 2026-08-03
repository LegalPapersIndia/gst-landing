// import { motion } from "framer-motion";

// const PHONE_IMG = "https://www.legalpapersindia.com/assets/images/category/app-advertisement-section-tuq.webp";
// const PLAYSTORE_BADGE = "https://www.legalpapersindia.com/assets/images/category/app-advertisement-section-ppn.webp";
// const PLAYSTORE_URL = "https://play.google.com/store/apps/details?id=com.legalpapers.india&pcampaignid=web_share";

// export default function AppPromo() {
//   return (
//     <section className="border-t border-navy-900/5 bg-white">
//       <div className="mx-auto max-w-6xl px-5 py-16">
//         <motion.div
//           initial={{ opacity: 0, y: 24 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true, margin: "-60px" }}
//           transition={{ duration: 0.6 }}
//           className="relative overflow-hidden rounded-3xl bg-navy-600"
//         >
//           <div
//             className="pointer-events-none absolute inset-0 opacity-[0.5]"
//             style={{
//               backgroundImage: "radial-gradient(rgba(255,255,255,0.16) 1px, transparent 1px)",
//               backgroundSize: "20px 20px",
//             }}
//           />
//           <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-gold-500/20 blur-3xl" />

//           <div className="relative grid grid-cols-1 items-center gap-8 px-6 py-10 sm:px-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-4 lg:py-0">
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.5, delay: 0.1 }}
//               className="flex justify-center lg:justify-end"
//             >
//               <img
//                 src={PHONE_IMG}
//                 alt="Legal Papers India mobile app"
//                 loading="lazy"
//                 className="w-48 drop-shadow-[0_25px_45px_rgba(0,0,0,0.35)] sm:w-56 lg:w-64"
//               />
//             </motion.div>

//             <div className="text-center lg:py-10 lg:text-left">
//               <motion.p
//                 initial={{ opacity: 0, y: 14 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.5, delay: 0.15 }}
//                 className="font-display text-xl leading-snug text-white sm:text-2xl lg:text-[1.75rem]"
//               >
//                 Your compliance partner, now one click away —
//                 <span className="text-gold-300"> get the Legal Papers India app.</span>
//               </motion.p>
//               <motion.p
//                 initial={{ opacity: 0, y: 14 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.5, delay: 0.22 }}
//                 className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-white/70 lg:mx-0"
//               >
//                 Track your order, get real-time compliance updates, and reach our team by call, chat or
//                 email — free on the Play Store.
//               </motion.p>

//               <motion.a
//                 initial={{ opacity: 0, y: 14 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.5, delay: 0.3 }}
//                 href={PLAYSTORE_URL}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 title="Get it on Google Play"
//                 className="mt-6 inline-block transition hover:opacity-90"
//               >
//                 <img src={PLAYSTORE_BADGE} alt="Get it on Google Play" loading="lazy" className="h-12 w-auto" />
//               </motion.a>
//             </div>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// }




import { motion } from "framer-motion";
import screenshotOne from "../assets/app.jpeg";
import screenshotTwo from "../assets/app1.jpeg";

const PLAYSTORE_BADGE = "https://www.legalpapersindia.com/assets/images/category/app-advertisement-section-ppn.webp";
const PLAYSTORE_URL = "https://play.google.com/store/apps/details?id=com.legalpapers.india&pcampaignid=web_share";

export default function AppPromo() {
  return (
    <section className="relative w-full overflow-hidden bg-navy-600">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.5]"
        style={{
          backgroundImage: "radial-gradient(rgba(255,255,255,0.16) 1px, transparent 1px)",
          backgroundSize: "20px 20px",
        }}
      />
      <div className="pointer-events-none absolute -right-20 -top-20 h-80 w-80 rounded-full bg-gold-500/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -left-16 h-72 w-72 rounded-full bg-white/5 blur-3xl" />

      <div className="relative mx-auto flex max-w-6xl flex-col items-center gap-12 px-5 py-16 lg:flex-row lg:justify-between lg:gap-8 lg:py-20">
        <div className="max-w-md text-center lg:text-left">
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="font-display text-2xl leading-snug text-white sm:text-3xl"
          >
            Your compliance partner, now one click away —
            <span className="text-gold-300"> get the Legal Papers India app.</span>
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mx-auto mt-4 max-w-sm text-sm leading-relaxed text-white/70 lg:mx-0"
          >
            Track your order, get real-time compliance updates, and reach our team by call, chat or
            email — free on the Play Store.
          </motion.p>

          <motion.a
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            href={PLAYSTORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            title="Get it on Google Play"
            className="mt-7 inline-block transition hover:opacity-90"
          >
            <img src={PLAYSTORE_BADGE} alt="Get it on Google Play" loading="lazy" className="h-12 w-auto" />
          </motion.a>
        </div>

        <div className="relative flex h-72 w-full max-w-xs items-center justify-center sm:h-80">
          <motion.div
            initial={{ opacity: 0, y: 24, rotate: -10 }}
            whileInView={{ opacity: 1, y: 0, rotate: -8 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="absolute left-0 top-4 w-40 -rotate-6 overflow-hidden rounded-[1.75rem] border-4 border-white/10 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5)] sm:w-44"
          >
            <img
              src={screenshotOne}
              alt="Legal Papers India app screenshot"
              loading="lazy"
              className="aspect-[9/19] w-full object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24, rotate: 10 }}
            whileInView={{ opacity: 1, y: 0, rotate: 6 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="absolute right-0 bottom-4 w-40 rotate-6 overflow-hidden rounded-[1.75rem] border-4 border-white/10 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5)] sm:w-44"
          >
            <img
              src={screenshotTwo}
              alt="Legal Papers India app screenshot"
              loading="lazy"
              className="aspect-[9/19] w-full object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
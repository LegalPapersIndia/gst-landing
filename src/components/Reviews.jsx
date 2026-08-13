

// import { motion } from "framer-motion";

// const reviewImages = [
//   {
//     href: "https://share.google/1MYy6yASxWRMA1ZPa",
//     src: "https://www.legalpapersindia.com/assets/images/category/google-reviews-section-xvr.webp",
//     alt: "Google Reviews",
//   },
//   {
//     href: "https://www.trustpilot.com/review/legalpapersindia.com",
//     src: "https://www.legalpapersindia.com/assets/images/category/google-reviews-section-kab.webp",
//     alt: "Trustpilot Reviews",
//   },
//   {
//     href: "https://www.ambitionbox.com/reviews/legal-papers-india-reviews",
//     src: "https://www.legalpapersindia.com/assets/images/category/google-reviews-section-cvq.webp",
//     alt: "AmbitionBox Reviews",
//   },
// ];

// export default function Reviews() {
//   return (
//     <section id="reviews" className="bg-white">
//       <div className="mx-auto max-w-6xl px-5 py-20">
//         <h2 className="mt-4 font-display text-3xl font-bold leading-tight text-black sm:text-4xl">
//           Ratings from clients
//         </h2>

//         <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
//           {reviewImages.map((r, i) => (
//             <motion.div
//               key={r.href}
//               initial={{ opacity: 0, y: 16 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.45, delay: i * 0.1 }}
//             >
//               <a
//                 href={r.href}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 title={r.alt}
//                 className="
//                   block
//                   rounded-2xl
//                   bg-white
//                   p-3
//                   shadow-[0_8px_16px_-4px_rgba(10,20,40,0.12),0_20px_40px_-12px_rgba(10,20,40,0.28)]
//                   transition-all
//                   duration-300
//                   hover:-translate-y-2
//                   hover:shadow-[0_12px_20px_-4px_rgba(10,20,40,0.15),0_30px_55px_-12px_rgba(10,20,40,0.35)]
//                 "
//               >
//                 <img
//                   loading="lazy"
//                   src={r.src}
//                   alt={r.alt}
//                   title={r.alt}
//                   className="w-full rounded-xl object-contain"
//                 />
//               </a>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }


import { motion } from "framer-motion";

const reviewImages = [
  {
    href: "https://share.google/1MYy6yASxWRMA1ZPa",
    src: "https://www.legalpapersindia.com/assets/images/category/google-reviews-section-xvr.webp",
    alt: "Google Reviews",
  },
  {
    href: "https://www.trustpilot.com/review/legalpapersindia.com",
    src: "https://www.legalpapersindia.com/assets/images/category/google-reviews-section-kab.webp",
    alt: "Trustpilot Reviews",
  },
  {
    href: "https://www.ambitionbox.com/reviews/legal-papers-india-reviews",
    src: "https://www.legalpapersindia.com/assets/images/category/google-reviews-section-cvq.webp",
    alt: "AmbitionBox Reviews",
  },
];

export default function Reviews() {
  return (
    <section id="reviews" className="bg-white">
      <div className="mx-auto max-w-[1400px] px-5 py-20 lg:px-8">
        <h2 className="mt-4 font-display text-3xl font-bold leading-tight text-black sm:text-4xl">
          Ratings from clients
        </h2>

        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
          {reviewImages.map((r, i) => (
            <motion.div
              key={r.href}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.1 }}
            >
              <a
                href={r.href}
                target="_blank"
                rel="noopener noreferrer"
                title={r.alt}
                className="
                  block
                  rounded-2xl
                  bg-white
                  p-3
                  shadow-[0_8px_16px_-4px_rgba(10,20,40,0.12),0_20px_40px_-12px_rgba(10,20,40,0.28)]
                  transition-all
                  duration-300
                  hover:-translate-y-2
                  hover:shadow-[0_12px_20px_-4px_rgba(10,20,40,0.15),0_30px_55px_-12px_rgba(10,20,40,0.35)]
                "
              >
                <img
                  loading="lazy"
                  src={r.src}
                  alt={r.alt}
                  title={r.alt}
                  className="w-full rounded-xl object-contain"
                />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
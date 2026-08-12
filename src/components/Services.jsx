

import { motion } from "framer-motion";
import {
  FaFileSignature,
  FaGlobe,
  FaEdit,
  FaBan,
  FaFileInvoice,
  FaUserTie,
} from "react-icons/fa";
import { services } from "../data";

import imgRegistration from "../assets/services/Forms-bro (2).png";
import imgForeigners from "../assets/services/Foreigners.png";
import imgModification from "../assets/services/Modification1.png";
import imgCancellation from "../assets/services/Cancellation.png";
import imgReturns from "../assets/services/Return.png";
import imgProfessionalTax from "../assets/services/professional.png";

const serviceImages = [
  imgRegistration,
  imgForeigners,
  imgModification,
  imgCancellation,
  imgReturns,
  imgProfessionalTax,
];

const serviceIcons = [
  FaFileSignature,
  FaGlobe,
  FaEdit,
  FaBan,
  FaFileInvoice,
  FaUserTie,
];

export default function Services() {
  return (
    <section
      id="services"
      className="bg-gradient-to-b from-white to-slate-50 py-20"
    >
      {/* Shimmer keyframes */}
      <style>{`
        @keyframes shimmerSlide {
          0% { transform: translateX(-120%); }
          100% { transform: translateX(120%); }
        }
        .card-shimmer {
          animation: shimmerSlide 3.4s ease-in-out infinite;
        }
        .group:hover .card-shimmer {
          animation-duration: 1.6s;
        }
        @keyframes iconPulse {
          0%, 100% { box-shadow: 0 0 0 0 rgba(249,115,22,0.35); }
          50% { box-shadow: 0 0 0 8px rgba(249,115,22,0); }
        }
        .icon-pulse {
          animation: iconPulse 2.4s ease-in-out infinite;
        }
      `}</style>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mt-5 font-display text-4xl font-bold text-navy-600 md:text-5xl">
            Everything under GST,
            <span className="text-gold-500"> handled in one place</span>
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            Registration is usually the start, not the end. We stay on as your
            compliance desk for whatever comes after.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-16 grid grid-cols-2 gap-3 sm:gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {services.map((s, i) => {
            const image = serviceImages[i % serviceImages.length];
            const Icon = serviceIcons[i % serviceIcons.length];

            return (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: (i % 3) * 0.08,
                }}
                whileHover={{ y: -6 }}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-xl
                  border
                  border-navy-900/10
                  bg-white
                  px-2.5
                  pb-2.5
                  pt-2
                  sm:px-4
                  sm:pb-4
                  sm:pt-3
                  text-center

                  shadow-[0_8px_16px_-6px_rgba(10,20,40,0.1),0_20px_45px_-20px_rgba(10,20,40,0.3)]

                  transition-all
                  duration-500

                  hover:border-blue-300
                  hover:shadow-[0_12px_20px_-6px_rgba(37,99,235,0.15),0_28px_55px_-20px_rgba(37,99,235,0.3)]
                "
              >
                {/* Shimmer sweep — halka blue, jaise InTheNews section mai */}
                <div
                  className="
                    card-shimmer
                    pointer-events-none
                    absolute
                    inset-0
                    bg-gradient-to-r
                    from-transparent
                    via-blue-400/10
                    to-transparent
                  "
                />

                {/* Side icon badge — orange, bigger on desktop, compact on mobile */}
                <div className="icon-pulse absolute left-2 top-2 sm:left-4 sm:top-4 z-10 flex h-8 w-8 sm:h-11 sm:w-11 items-center justify-center rounded-full bg-orange-500 text-white shadow-md transition-transform duration-500 group-hover:scale-110">
                  <Icon className="h-3.5 w-3.5 sm:h-5 sm:w-5" />
                </div>

                {/* Tag */}
                {s.tag && (
                  <span className="absolute right-2 top-2 sm:right-4 sm:top-4 z-10 rounded-full bg-green-100 px-2.5 py-1 sm:px-3.5 sm:py-1.5 text-[10px] sm:text-xs font-bold uppercase tracking-wider text-green-700">
                    {s.tag}
                  </span>
                )}

                {/* Image */}
                <div className="relative z-10 mt-1 flex h-24 sm:h-48 items-center justify-center overflow-hidden">
                  <img
                    src={image}
                    alt={s.title}
                    loading="lazy"
                    className="h-24 w-24 sm:h-48 sm:w-48 object-contain transition-all duration-500 group-hover:scale-110"
                  />
                </div>

                {/* Title */}
                <h3 className="relative z-10 mt-1 text-sm sm:text-lg font-bold transition-colors group-hover:text-gold-600">
                  {s.title}
                </h3>

                {/* Description */}
                <p className="relative z-10 mt-1 sm:mt-2 text-xs sm:text-sm leading-5 sm:leading-6 text-slate-600">
                  {s.desc}
                </p>

                {/* Bottom Accent */}
                <div className="absolute bottom-0 left-0 z-10 h-1 w-full origin-left scale-x-0 bg-gradient-to-r from-gold-400 to-gold-600 transition-transform duration-500 group-hover:scale-x-100" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
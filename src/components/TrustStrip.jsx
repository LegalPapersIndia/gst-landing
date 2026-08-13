

import { motion } from "framer-motion";
import {
  FaBriefcase,
  FaStar,
  FaMapMarkedAlt,
  FaHeadset,
} from "react-icons/fa";
import { stats } from "../data";

const statIcons = [FaBriefcase, FaStar, FaMapMarkedAlt, FaHeadset];

export default function TrustStrip() {
  return (
    <section className="relative overflow-hidden border-y border-navy-900/10 bg-blue-600">
      {/* Shimmer keyframes */}
      <style>{`
        @keyframes shimmerSlide {
          0% { transform: translateX(-120%); }
          100% { transform: translateX(120%); }
        }
        .section-shimmer {
          animation: shimmerSlide 4s ease-in-out infinite;
        }
        .card-shimmer {
          animation: shimmerSlide 3.2s ease-in-out infinite;
        }
        .group:hover .card-shimmer {
          animation-duration: 1.6s;
        }
      `}</style>

      {/* Section-wide shimmer sweep */}
      <div
        className="
          section-shimmer
          pointer-events-none
          absolute
          inset-0
          bg-gradient-to-r
          from-transparent
          via-white/10
          to-transparent
        "
      />

      {/* Dotted texture */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.5]"
        style={{
          backgroundImage:
            "radial-gradient(rgba(255,255,255,0.14) 1px, transparent 1px)",
          backgroundSize: "20px 20px",
        }}
      />

      {/* Decorative glows */}
      <div className="pointer-events-none absolute -left-20 -top-24 h-72 w-72 rounded-full bg-gold-500/15 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -right-16 h-72 w-72 rounded-full bg-white/10 blur-3xl" />

      <div className="relative mx-auto max-w-[1400px] px-5 py-14 sm:py-16 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <p className="font-mono text-sm font-bold uppercase tracking-[0.2em] text-gold-400">
            Why businesses trust us
          </p>

          <h2 className="mt-2 font-display text-3xl font-bold leading-tight text-white sm:text-4xl">
            Numbers that speak for themselves
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 gap-5 sm:grid-cols-4">
          {stats.map((s, i) => {
            const Icon = statIcons[i % statIcons.length];

            return (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 24, scale: 0.94 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -10, scale: 1.03 }}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-2xl
                  border
                  border-transparent
                  bg-white
                  px-4
                  py-8
                  text-center

                  shadow-[0_8px_16px_-4px_rgba(10,20,40,0.18),0_20px_45px_-15px_rgba(10,20,40,0.5)]

                  transition-shadow
                  duration-500

                  hover:shadow-[0_12px_20px_-4px_rgba(10,20,40,0.22),0_30px_60px_-15px_rgba(10,20,40,0.4)]
                "
              >
                {/* Card shimmer sweep */}
                <div
                  className="
                    card-shimmer
                    pointer-events-none
                    absolute
                    inset-0
                    bg-gradient-to-r
                    from-transparent
                    via-gold-400/10
                    to-transparent
                  "
                />

                {/* Radial glow that grows on hover, stays behind content */}
                <div className="pointer-events-none absolute left-1/2 top-1/2 h-0 w-0 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold-500/15 blur-2xl transition-all duration-500 group-hover:h-44 group-hover:w-44" />

                <motion.div
                  className="relative z-10 mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-gold-500/10 ring-1 ring-gold-500/15"
                  whileHover={{ rotate: [0, -10, 10, -5, 0], scale: 1.15 }}
                  transition={{ duration: 0.5 }}
                >
                  <Icon className="h-8 w-8 text-gold-600" />
                </motion.div>

                <p className="relative z-10 mt-4 font-mono text-2xl font-bold text-black sm:text-3xl">
                  {s.value}
                </p>

                <p className="relative z-10 mt-2 font-display text-base font-medium text-black sm:text-lg">
                  {s.label}
                </p>

                {/* Bottom accent line grows on hover */}
                <div className="absolute bottom-0 left-0 z-10 h-[3px] w-full origin-left scale-x-0 bg-gradient-to-r from-gold-500/0 via-gold-500 to-gold-500/0 transition-transform duration-500 group-hover:scale-x-100" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
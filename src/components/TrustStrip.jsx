import { motion } from "framer-motion";
import { stats } from "../data";

export default function TrustStrip() {
  return (
    <section className="border-y border-navy-900/10 bg-white">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-5 py-10 sm:grid-cols-4">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="text-center"
          >
            <p className="font-mono text-2xl font-semibold text-navy-900 sm:text-3xl">{s.value}</p>
            <p className="mt-1 text-xs text-slate-500">{s.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

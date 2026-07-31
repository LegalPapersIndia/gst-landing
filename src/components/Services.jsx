import { motion } from "framer-motion";
import { FileText } from "lucide-react";
import { services } from "../data";

export default function Services() {
  return (
    <section id="services" className="bg-paper">
      <div className="mx-auto max-w-6xl px-5 py-20">
        <div className="max-w-xl">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-gold-600">Tax & GST services</p>
          <h2 className="mt-3 font-display text-3xl text-navy-900 sm:text-4xl">
            Everything under GST, handled in one place
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-slate-500">
            Registration is usually the start, not the end. We stay on as your compliance desk for
            whatever comes after.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: (i % 3) * 0.08 }}
              className="group relative overflow-hidden rounded-xl border border-navy-900/10 bg-white p-6 transition hover:-translate-y-1 hover:shadow-[0_20px_50px_-25px_rgba(10,20,40,0.35)]"
            >
              {s.tag && (
                <span className="absolute right-4 top-4 rounded-full bg-seal/10 px-2.5 py-1 text-[10px] font-medium uppercase tracking-wide text-seal">
                  {s.tag}
                </span>
              )}
              <FileText className="h-6 w-6 text-gold-600" strokeWidth={1.5} />
              <p className="mt-4 font-display text-lg text-navy-900">{s.title}</p>
              <p className="mt-1.5 text-sm leading-relaxed text-slate-500">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

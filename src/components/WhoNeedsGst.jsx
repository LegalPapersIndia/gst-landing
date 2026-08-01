import { motion } from "framer-motion";
import { HelpCircle } from "lucide-react";
import { whoNeedsGst } from "../data";

export default function WhoNeedsGst() {
  return (
    <section className="border-t border-navy-900/5 bg-white">
      <div className="mx-auto max-w-6xl px-5 py-20">
        <div className="max-w-xl">
          <div className="flex items-center gap-2">
            <HelpCircle className="h-5 w-5 text-seal" strokeWidth={1.5} />
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-gold-600">Not sure if you need it?</p>
          </div>
          <h2 className="mt-3 font-display text-3xl text-navy-900 sm:text-4xl">Who needs GST registration</h2>
          <p className="mt-3 text-sm leading-relaxed text-slate-500">
            Any one of these applies to you? You're required — or better off — registering for GST.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {whoNeedsGst.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              className="flex gap-4 rounded-xl border border-navy-900/10 bg-navy-500/5 p-5"
            >
              <span className="font-mono text-sm text-gold-600">0{i + 1}</span>
              <div>
                <p className="font-display text-base text-navy-900">{item.title}</p>
                <p className="mt-1 text-sm leading-relaxed text-slate-500">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
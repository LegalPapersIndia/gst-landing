import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import LeadForm from "./LeadForm";
import GstinCertificate from "./GstinCertificate";

const points = ["Filed by tax professionals", "Application within 24 hours", "No office visit needed"];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-navy-950">
      <div className="pointer-events-none absolute inset-0 bg-noise opacity-[0.15]" />
      <div className="pointer-events-none absolute -left-32 top-0 h-96 w-96 rounded-full bg-gold-500/10 blur-3xl" />
      <div className="pointer-events-none absolute right-0 top-40 h-72 w-72 rounded-full bg-navy-600/30 blur-3xl" />

      <div className="relative mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-5 pb-16 pt-14 lg:grid-cols-[1.1fr_0.9fr] lg:pb-24 lg:pt-20">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="font-mono text-xs uppercase tracking-[0.2em] text-gold-400"
          >
            GST Registration · Pan-India
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-4 font-display text-4xl leading-[1.1] text-paper sm:text-5xl lg:text-[3.25rem]"
          >
            Your GSTIN, filed right
            <span className="italic text-gold-300"> the first time.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-5 max-w-lg text-base leading-relaxed text-slate-400"
          >
            Legal Papers India handles the paperwork, the portal and the follow-up with the department —
            so your registration doesn't sit stuck on a query you didn't know how to answer.
          </motion.p>

          <motion.ul
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="mt-7 flex flex-col gap-2.5 sm:flex-row sm:flex-wrap sm:gap-x-6 sm:gap-y-2"
          >
            {points.map((p) => (
              <li key={p} className="flex items-center gap-2 text-sm text-slate-300">
                <CheckCircle2 className="h-4 w-4 shrink-0 text-seal" />
                {p}
              </li>
            ))}
          </motion.ul>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="mt-9 max-w-md lg:hidden"
          >
            <LeadForm />
          </motion.div>
        </div>

        <div className="hidden flex-col items-center gap-8 justify-self-center lg:flex">
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <GstinCertificate />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="w-full max-w-sm"
          >
            <LeadForm />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

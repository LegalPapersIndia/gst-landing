import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { businessTypes } from "../data";

export default function LeadForm({ variant = "card" }) {
  const [form, setForm] = useState({ name: "", phone: "", city: "", businessType: "" });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name.trim() || !/^[0-9]{10}$/.test(form.phone) || !form.city.trim() || !form.businessType) {
      setError("Please fill every field with a valid 10-digit phone number.");
      return;
    }
    setError("");
    // TODO: wire this up to the real lead-capture endpoint.
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center gap-3 rounded-2xl border border-seal/30 bg-seal/5 px-6 py-10 text-center">
        <CheckCircle2 className="h-10 w-10 text-seal" strokeWidth={1.5} />
        <p className="font-display text-xl text-navy-900">Request received</p>
        <p className="text-sm text-slate-500">
          A compliance expert will call {form.name.split(" ")[0]} within 30 minutes.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={
        variant === "card"
          ? "rounded-2xl border border-navy-700/10 bg-white/95 p-6 shadow-[0_20px_60px_-25px_rgba(10,20,40,0.45)] backdrop-blur"
          : ""
      }
    >
      {variant === "card" && (
        <div className="mb-5">
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-gold-600">Free consultation</p>
          <p className="font-display text-2xl text-navy-900">Start your GST registration</p>
        </div>
      )}

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        <input
          type="text"
          name="name"
          placeholder="Full name"
          value={form.name}
          onChange={handleChange}
          className="col-span-1 rounded-lg border border-navy-700/15 bg-paper/60 px-4 py-3 text-sm text-ink outline-none transition focus:border-gold-500 focus:ring-2 focus:ring-gold-300/40 sm:col-span-2"
        />
        <input
          type="tel"
          name="phone"
          placeholder="Mobile number"
          value={form.phone}
          onChange={handleChange}
          maxLength={10}
          className="rounded-lg border border-navy-700/15 bg-paper/60 px-4 py-3 text-sm text-ink outline-none transition focus:border-gold-500 focus:ring-2 focus:ring-gold-300/40"
        />
        <input
          type="text"
          name="city"
          placeholder="City"
          value={form.city}
          onChange={handleChange}
          className="rounded-lg border border-navy-700/15 bg-paper/60 px-4 py-3 text-sm text-ink outline-none transition focus:border-gold-500 focus:ring-2 focus:ring-gold-300/40"
        />
        <select
          name="businessType"
          value={form.businessType}
          onChange={handleChange}
          className="col-span-1 rounded-lg border border-navy-700/15 bg-paper/60 px-4 py-3 text-sm text-ink outline-none transition focus:border-gold-500 focus:ring-2 focus:ring-gold-300/40 sm:col-span-2"
        >
          <option value="">Business type</option>
          {businessTypes.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
      </div>

      {error && <p className="mt-3 text-xs text-red-600">{error}</p>}

      <motion.button
        whileTap={{ scale: 0.98 }}
        type="submit"
        className="mt-4 flex w-full items-center justify-center gap-2 rounded-lg bg-navy-900 px-5 py-3.5 text-sm font-semibold text-paper transition hover:bg-navy-800"
      >
        Get free consultation
        <ArrowRight className="h-4 w-4" />
      </motion.button>
      <p className="mt-3 text-center text-[11px] text-slate-400">
        No spam. Just a callback from a real compliance expert.
      </p>
    </form>
  );
}

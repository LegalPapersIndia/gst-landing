export default function Footer() {
  return (
    <footer className="bg-navy-950 border-t border-white/10">
      <div className="mx-auto max-w-6xl px-5 py-10 text-center">
        <p className="font-display text-lg text-paper">
          Legal Papers <span className="text-gold-400">India</span>
        </p>
        <p className="mt-2 text-xs text-slate-500">
          F 2, Sector 8, Noida, Uttar Pradesh, 201301 · info@legalpapersindia.com · +91 92110 37448
        </p>
        <p className="mt-4 text-[11px] text-slate-600">
          © {new Date().getFullYear()} Legal Papers India Business Solution Private Limited. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

// // export default function Footer() {
// //   return (
// //     <footer className="bg-navy-950 border-t border-white/10">
// //       <div className="mx-auto max-w-6xl px-5 py-10 text-center">
// //         <p className="font-display text-lg text-paper">
// //           Legal Papers <span className="text-gold-400">India</span>
// //         </p>
// //         <p className="mt-2 text-xs text-slate-500">
// //           F 2, Sector 8, Noida, Uttar Pradesh, 201301 · info@legalpapersindia.com · +91 92110 37448
// //         </p>
// //         <p className="mt-4 text-[11px] text-slate-600">
// //           © {new Date().getFullYear()} Legal Papers India Business Solution Private Limited. All rights reserved.
// //         </p>
// //       </div>
// //     </footer>
// //   );
// // }


// import logo from "../assets/logo (1).png";

// export default function Footer() {
//   return (
//     <footer className="bg-navy-950 border-t border-white/10">
//       <div className="mx-auto max-w-6xl px-5 py-10 text-center">
//         <img src={logo} alt="Legal Papers India" className="mx-auto h-8 w-auto" />
//         <p className="mt-4 text-xs text-slate-500">
//           F 2, Sector 8, Noida, Uttar Pradesh, 201301 · info@legalpapersindia.com · +91 92110 37448
//         </p>
//         <p className="mt-4 text-[11px] text-slate-600">
//           © {new Date().getFullYear()} Legal Papers India Business Solution Private Limited. All rights reserved.
//         </p>
//       </div>
//     </footer>
//   );
// }

export default function Footer() {
  return (
    <footer className="border-t border-navy-900/10 bg-white">
      <div className="mx-auto max-w-6xl px-5 py-10 text-center">
        <div className="flex items-baseline justify-center gap-0.5">
          <span className="font-display text-2xl font-bold text-navy-600">Legalpapers</span>
          <span className="font-display text-2xl font-bold text-gold-500">india</span>
          <span className="font-display text-2xl font-bold text-ink">.com</span>
        </div>
        <div className="mt-1.5 flex items-center justify-center gap-3">
          <span className="h-px w-10 bg-slate-400/50" />
          <p className="text-[11px] text-slate-500">Get Business Papers Ready</p>
          <span className="h-px w-10 bg-slate-400/50" />
          <p className="text-[11px] font-semibold text-ink">GROUP</p>
        </div>
        <p className="mt-5 text-xs text-slate-500">
          F 2, Sector 8, Noida, Uttar Pradesh, 201301 · info@legalpapersindia.com · +91 92110 37448
        </p>
        <p className="mt-4 text-[11px] text-slate-400">
          © {new Date().getFullYear()} Legal Papers India Business Solution Private Limited. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
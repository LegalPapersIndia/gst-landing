// // // export default function Footer() {
// // //   return (
// // //     <footer className="bg-navy-950 border-t border-white/10">
// // //       <div className="mx-auto max-w-6xl px-5 py-10 text-center">
// // //         <p className="font-display text-lg text-paper">
// // //           Legal Papers <span className="text-gold-400">India</span>
// // //         </p>
// // //         <p className="mt-2 text-xs text-slate-500">
// // //           F 2, Sector 8, Noida, Uttar Pradesh, 201301 · info@legalpapersindia.com · +91 92110 37448
// // //         </p>
// // //         <p className="mt-4 text-[11px] text-slate-600">
// // //           © {new Date().getFullYear()} Legal Papers India Business Solution Private Limited. All rights reserved.
// // //         </p>
// // //       </div>
// // //     </footer>
// // //   );
// // // }


// // import logo from "../assets/logo (1).png";

// // export default function Footer() {
// //   return (
// //     <footer className="bg-navy-950 border-t border-white/10">
// //       <div className="mx-auto max-w-6xl px-5 py-10 text-center">
// //         <img src={logo} alt="Legal Papers India" className="mx-auto h-8 w-auto" />
// //         <p className="mt-4 text-xs text-slate-500">
// //           F 2, Sector 8, Noida, Uttar Pradesh, 201301 · info@legalpapersindia.com · +91 92110 37448
// //         </p>
// //         <p className="mt-4 text-[11px] text-slate-600">
// //           © {new Date().getFullYear()} Legal Papers India Business Solution Private Limited. All rights reserved.
// //         </p>
// //       </div>
// //     </footer>
// //   );
// // }

// export default function Footer() {
//   return (
//     <footer className="border-t border-navy-900/10 bg-white">
//       <div className="mx-auto max-w-6xl px-5 py-10 text-center">
//         <div className="flex items-baseline justify-center gap-0.5">
//           <span className="font-display text-2xl font-bold text-navy-600">Legalpapers</span>
//           <span className="font-display text-2xl font-bold text-gold-500">india</span>
//           <span className="font-display text-2xl font-bold text-ink">.com</span>
//         </div>
//         <div className="mt-1.5 flex items-center justify-center gap-3">
//           <span className="h-px w-10 bg-slate-400/50" />
//           <p className="text-[11px] text-slate-500">Get Business Papers Ready</p>
//           <span className="h-px w-10 bg-slate-400/50" />
//           <p className="text-[11px] font-semibold text-ink">GROUP</p>
//         </div>
//         <p className="mt-5 text-xs text-slate-500">
//           F 2, Sector 8, Noida, Uttar Pradesh, 201301 · info@legalpapersindia.com · +91 92110 37448
//         </p>
//         <p className="mt-4 text-[11px] text-slate-400">
//           © {new Date().getFullYear()} Legal Papers India Business Solution Private Limited. All rights reserved.
//         </p>
//       </div>
//     </footer>
//   );
// }




import { MapPin, Phone, Mail, ArrowUpRight } from "lucide-react";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
import { footerLinkColumns, socialLinks } from "../data";

const socialIcons = {
  Facebook: FaFacebookF,
  Instagram: FaInstagram,
  LinkedIn: FaLinkedinIn,
  Twitter: FaXTwitter,
};

const ADDRESS = "Legal Papers India Business Solution Private Limited, F 2, Sector 8, Noida, Uttar Pradesh, 201301";

export default function Footer() {
  return (
    <footer className="border-t border-navy-900/10 bg-white">
      {/* top: wordmark + social */}
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-5 py-10 sm:flex-row">
        <div>
          <div className="flex items-baseline justify-center gap-0.5 sm:justify-start">
            <span className="font-display text-2xl font-bold text-navy-600">Legalpapers</span>
            <span className="font-display text-2xl font-bold text-gold-500">india</span>
            <span className="font-display text-2xl font-bold text-ink">.com</span>
          </div>
          <div className="mt-1 flex w-full items-center gap-2">
            <span className="h-px flex-1 bg-slate-400/50" />
            <p className="whitespace-nowrap text-[11px] text-ink">Get Business Papers Ready</p>
            <span className="h-px flex-1 bg-slate-400/50" />
            <p className="whitespace-nowrap text-[11px] font-semibold text-ink">GROUP</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          {socialLinks.map((s) => {
            const Icon = socialIcons[s.label];
            return (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                title={s.label}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-navy-900/10 text-navy-600 transition hover:bg-navy-600 hover:text-white"
              >
                <Icon className="h-3.5 w-3.5" />
              </a>
            );
          })}
        </div>
      </div>

      {/* link columns */}
      <div className="border-t border-navy-900/5">
        <div className="mx-auto max-w-6xl px-5 py-12">
          <div className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 lg:grid-cols-5">
            {footerLinkColumns.map((col) => (
              <div key={col.heading}>
                <p className="font-display text-sm font-semibold text-navy-900">{col.heading}</p>
                <ul className="mt-3 flex flex-col gap-2">
                  {col.links.map((l) => (
                    <li key={l.label}>
                      <a href={l.href} className="text-xs leading-relaxed text-slate-500 transition hover:text-gold-600">
                        {l.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* business contact */}
            <div className="col-span-2 sm:col-span-1">
              <p className="font-display text-sm font-semibold text-navy-900">Business Contact</p>
              <ul className="mt-3 flex flex-col gap-3">
                <li className="flex items-start gap-2 text-xs leading-relaxed text-slate-500">
                  <MapPin className="mt-0.5 h-3.5 w-3.5 shrink-0 text-gold-600" />
                  {ADDRESS}
                </li>
                <li className="flex items-center gap-2 text-xs text-slate-500">
                  <Phone className="h-3.5 w-3.5 shrink-0 text-gold-600" />
                  <a href="tel:+919211037448" className="hover:text-gold-600">
                    +91 9211037448
                  </a>
                </li>
                <li className="flex items-center gap-2 text-xs text-slate-500">
                  <Mail className="h-3.5 w-3.5 shrink-0 text-gold-600" />
                  <a href="mailto:info@legalpapersindia.com" className="hover:text-gold-600">
                    info@legalpapersindia.com
                  </a>
                </li>
              </ul>
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(ADDRESS)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-1.5 rounded-full border border-navy-900/15 px-3.5 py-1.5 text-[11px] font-medium text-navy-600 transition hover:bg-navy-500/10"
              >
                Get direction
                <ArrowUpRight className="h-3 w-3" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* disclaimer */}
      <div className="border-t border-navy-900/5 bg-navy-500/5">
        <div className="mx-auto max-w-6xl px-5 py-6">
          <p className="text-[11px] leading-relaxed text-slate-500">
            This is not a Government run website and the form is not the actual registration form, it is
            just to collect information from our clients so that our expert can easily understand their
            business or needs. By proceeding forward with this website you are aware that we are a
            private company managing this website and providing assistance based on the request from our
            customers, and the fee collected on this website is a consultancy fee.
          </p>
        </div>
      </div>

      {/* bottom bar */}
      <div className="border-t border-navy-900/10">
        <div className="mx-auto max-w-6xl px-5 py-5">
          <p className="text-center text-xs text-slate-400">
            Copyright © {new Date().getFullYear()} Legal Papers India | All Rights Reserved | Website
            Design, Developed &amp; Google Promotion by{" "}
            <a
              href="https://www.vrdcreative.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-slate-500 hover:text-gold-600"
            >
              VRD Creative Pvt Ltd
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
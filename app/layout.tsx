import "./globals.css";
import { Tajawal } from "next/font/google";
import type { Metadata } from "next";
import type { ReactNode } from "react";

const tajawal = Tajawal({ subsets: ["arabic"], weight: ["400", "500", "700"] });

export const metadata: Metadata = {
  title: "خاخ واقي من الشمس SPF 50",
  description: "إعلان وقائي خاخ SPF 50 للوجه والجسم، حماية متقدمة بلمسة واحدة."
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ar" dir="rtl">
      <body className={tajawal.className}>{children}</body>
    </html>
  );
}

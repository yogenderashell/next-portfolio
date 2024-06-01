import { Inter } from "next/font/google";
import "./globals.css";
import { TransitionProvide } from "@/components";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Yogender Dev Portfolio App",
  description: "Generated ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <TransitionProvide>{children}</TransitionProvide>
      </body>
    </html>
  );
}

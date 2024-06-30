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
      <head>
      <link rel="shortcut icon" href="/profile.jpeg"/>
      </head>
      <body className={inter.className}>
        <TransitionProvide>{children}</TransitionProvide>
      </body>
    </html>
  );
}

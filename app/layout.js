import "./globals.css";
import { Open_Sans } from 'next/font/google'
import { Marcellus } from "next/font/google";

const openSans = Open_Sans({
  subsets: ['latin'],
})

const marcellus = Marcellus({
  subsets: ['latin'],
  weight: "400",
})

export const metadata = {
  title: "Jing Yang",
  description: "Jing's Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={openSans.className}>
        {children}
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const poppins = Poppins({
  variable: "--ff-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "MD MERAZUL ISLAM | Python Backend Developer Portfolio",
  description: "Python Backend Developer with 2+ years of experience in scalable backend systems, Django, Docker, and AWS.",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="https://res.cloudinary.com/dnsorselg/image/upload/v1766158169/merazul-islam-software-engineer_wgtiir.jpg" type="image/x-icon" />
      </head>
      <body
        className={`${poppins.variable} antialiased`}
      >
        {children}
        <Script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js" />
        <Script noModule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js" />
      </body>
    </html>
  );
}

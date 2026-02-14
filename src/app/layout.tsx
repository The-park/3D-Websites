import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import { Analytics } from "@vercel/analytics/react";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";
import LoadingScreen from "@/components/LoadingScreen";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "AENEXZ — Transform Your Career with Expert-Led Courses",
  description: "Learn practical skills from industry professionals. Explore 50+ expert-led programs in Full Stack Development, AI/ML, Cloud Computing, and more.",
  openGraph: {
    title: "AENEXZ — Transform Your Career",
    description: "Expert-led online courses for the future of work. 100% Job Guarantee Program.",
    url: "http://localhost:3000",
    siteName: "AENEXZ",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AENEXZ — Transform Your Career",
    description: "Expert-led online courses. 100% Job Guarantee Program.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="antialiased">
        <SmoothScroll />
        {children}
        <Footer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'Aenexz',
              url: 'http://localhost:3000',
              sameAs: [
                'https://www.linkedin.com/company/aenexz-tech-private-limited/',
                'https://www.instagram.com/aenexz_tech/'
              ],
              address: {
                '@type': 'PostalAddress',
                streetAddress: '1st Floor, Vajpayee Nagar, Hosur Rd',
                addressLocality: 'Bengaluru',
                postalCode: '560068',
                addressCountry: 'IN'
              }
            })
          }}
        />
        <Analytics />
      </body>
    </html>
  );
}

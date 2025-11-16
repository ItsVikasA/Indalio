import "@css/animate.css";
import "@css/bootstrap.min.css";
import "@css/font-awesome.css";
import "@css/magnific-popup.css";
import "@css/main.css";
import "@css/meanmenu.css";
import "@css/nice-select.css";
import "@css/swiper-bundle.min.css";
import "./globals.css";
import Preloader from "@/layouts/Preloader";

export const metadata = {
  metadataBase: new URL('https://indalio.com'),
  title: "Indalio - Premium Workspace Accessories | Monitor Arms & Cable Management",
  description: "Indalio specializes in manufacturing high-quality gas spring monitor arms, wall-mounted solutions, and cable management systems. Engineered in Ludhiana for modern workspaces.",
  applicationName: "Indalio",
  authors: [{ name: "Indalio" }],
  keywords: ["monitor arms", "cable management", "gas spring", "ergonomic", "workspace accessories", "Ludhiana"],
  icons: {
    icon: '/assets/img/logo/logo.png',
    shortcut: '/assets/img/logo/logo.png',
    apple: '/assets/img/logo/logo.png',
  },
  manifest: '/manifest.json',
  openGraph: {
    title: "Indalio - Premium Workspace Accessories",
    description: "High-quality gas spring monitor arms, wall-mounted solutions, and cable management systems. Engineered in Ludhiana for modern workspaces.",
    siteName: "Indalio",
    images: ['/assets/img/logo/logo.png'],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Indalio - Premium Workspace Accessories",
    description: "High-quality gas spring monitor arms, wall-mounted solutions, and cable management systems.",
    images: ['/assets/img/logo/logo.png'],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/assets/img/logo/logo.png" type="image/png" />
        <link rel="apple-touch-icon" href="/assets/img/logo/logo.png" />
        <meta name="theme-color" content="#FF6600" />
      </head>
      <body>
      <Preloader />
      {children}
      </body>
    </html>
  );
}

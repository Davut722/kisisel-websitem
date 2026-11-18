import { Inter, JetBrains_Mono, Outfit } from "next/font/google";
import { SmoothScroll } from "@/components/providers/SmoothScroll";
import { Navbar } from "@/components/ui/Navbar";
import "lenis/dist/lenis.css";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700", "800"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "latin-ext"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500"],
});

export const metadata = {
  title: {
    default: "Davut Örs — Yazılım Geliştirici",
    template: "%s | Davut Örs",
  },
  description:
    "Problem çözme odaklı, yenilikçi teknolojiler ve mühendislik pratikleriyle modern web deneyimleri inşa eden yazılım geliştirici.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="tr"
      className={`${outfit.variable} ${inter.variable} ${jetbrainsMono.variable}`}
    >
      <body className="bg-background font-sans text-foreground antialiased selection:bg-accent selection:text-accent-foreground">
        <SmoothScroll>
          <Navbar />
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}

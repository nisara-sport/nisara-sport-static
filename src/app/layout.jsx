import { Hanken_Grotesk } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import Providers from "./providers";
import { Toaster } from "@/components/ui/toaster";
import { ContactButtons } from "@/components/ContactButtons";

const hankenGrotesk = Hanken_Grotesk({
  weight: ["100", "300", "400", "500", "700", "900"],
  subsets: ["latin"],
});

export const metadata = {
  title: "NISARA | Buôn bán sỉ lẻ đồ tập, đồ thể thao",
  description: "NISARA | Buôn bán sỉ lẻ đồ tập, đồ thể thao",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${hankenGrotesk.className} antialiased relative`}>
        <Providers>
          <Header />
          {children}
          <Footer />
        </Providers>
        <Toaster />
        <ContactButtons />
      </body>
    </html>
  );
}

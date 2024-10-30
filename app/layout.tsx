import localFont from "next/font/local";
import "./globals.css";
import RootLayoutProvider from "@/components/RootLayoutProvide";
import Navbar from "@/components/Navbar";
import PageProvider from "@/components/PageProvider";
import FooterBar from "@/components/Footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const RootLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <RootLayoutProvider>
          <Navbar />
          <PageProvider>{children}</PageProvider>
          <FooterBar />
        </RootLayoutProvider>
      </body>
    </html>
  );
};

export default RootLayout;

"use client";
import localFont from "next/font/local";
import "./globals.css";
import RootLayoutProvider from "@/components/RootLayoutProvide";
import Navbar from "@/components/Navbar";
import PageProvider from "@/components/PageProvider";
import FooterBar from "@/components/Footer";
import SideBar from "@/components/Sidebar";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Toaster } from "react-hot-toast";

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
  const [openSidebar, setOpenSidebar] = useState<boolean>(false);

  const currentPath = usePathname();

  const isLoanPage = () => {
    return currentPath.indexOf("loan") > -1;
  };

  const handleClickOutside = () => {
    if (openSidebar) {
      setOpenSidebar(false); // Close sidebar on outside click
    }
  };

  useEffect(() => {
    if (openSidebar) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [openSidebar]);

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <RootLayoutProvider>
          <Toaster
            // position="top-right"
            toastOptions={{
              success: {
                duration: 4000,
                style: {
                  background: "#4CAF50",
                  color: "white",
                },
              },
              error: {
                duration: 4000,
                style: {
                  background: '#F44336',
                  color: 'white',
                },
              },
            }}
          />
          <Navbar open={openSidebar} setOpen={setOpenSidebar} />
          <SideBar open={openSidebar} setOpen={setOpenSidebar} />
          <PageProvider>{children}</PageProvider>
          {!isLoanPage && <FooterBar />}
        </RootLayoutProvider>
      </body>
    </html>
  );
};

export default RootLayout;

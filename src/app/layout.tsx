import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import AuthProvider from "@/context/context";
import AuthGuard from "@/middleware/AuthGuard/authguard";
import { QueryClientProvider } from "@tanstack/react-query";
import queryClient from "@/middleware/ApiProvider/provider";
import { ToastContainer } from "react-toastify";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="w-100 h-100">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <AuthProvider>
          <AuthGuard>
            <QueryClientProvider client={queryClient}>
              {children}
              <ToastContainer position="top-right" autoClose={3000} />
            </QueryClientProvider>
          </AuthGuard>
        </AuthProvider>
      </body>
    </html>
  );
}

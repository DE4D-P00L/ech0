import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import NavBar from "@/components/NavBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Echo",
  description: "Echo",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <div className="w-full px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 bg-white">
            <NavBar />
          </div>
          <div className="w-full px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 bg-slate-100">
            {children}
          </div>
        </body>
      </html>
    </ClerkProvider>
  );
}

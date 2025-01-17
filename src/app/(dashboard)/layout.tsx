import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./../globals.css";
import Link from "next/link";
import Image from "next/image";
import logo from "../../../public/logo1.png"

import Menu from "../../components/Menu"
import NavBar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "BIMB School Management Dashboard",
  description: "Next.js School Management System",
};

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    
      <div className="h-full flex">
        {/* LEFT */}
        <div className="w-[14%] md:w-[8%] lg:w-[16%] xl:w-[14%] p-4">
          <Link href="/" className="flex items-center justify-center gap-2 lg:justify-start">
            <Image src={logo} alt="logo" width={32} height={32}/>
            <span className="hidden lg:block">BIMB School</span>
          </Link>
          <Menu/>
        </div>
        {/* RIGHT */}
        <div className="w-[86%] md:w-[92%] lg:w-[84%] xl:w-[86%] bg-[#F5F5DC]">
          <NavBar/>
          {children}
        </div>
      
      </div>
    
  );
}

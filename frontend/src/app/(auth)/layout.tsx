import { ReactNode } from "react";
import doctorVector from "@/assets/SignInPageVector.png";
import medPlusLogo from "@/assets/MedPlusLogo.png";
import Image from "next/image";
import "@/styles/globals.css";

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="bg-indigo-100 flex h-screen w-screen">
      <div className="flex w-full items-center justify-center p-3 lg:w-1/2">
        <div className="z-10 flex h-full w-full max-w-md flex-col justify-between rounded-3xl bg-white p-6">
          <div className="">
            <Image src={medPlusLogo} alt="MedPlus Logo" />{" "}
          </div>
          {children}
          <p className="text-xs capitalize">
            MedPlus&copy; - sample MERN stack project
          </p>
        </div>
      </div>
      <div className="hidden w-1/2 items-center justify-center py-3 lg:flex">
        <div className="bg-babyBlue h-full w-2/3 rounded-3xl"></div>
        <Image
          src={doctorVector}
          alt="doctor vector"
          className="absolute right-0 top-1/2 h-5/6 -translate-y-1/2"
        />
      </div>
    </div>
  );
}

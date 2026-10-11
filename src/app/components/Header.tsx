

import Image from "next/image";
import UserButton from "./UserButton";
import Navbar from "./Navbar";
import Marquee from "./Marquee";
import { Suspense } from "react";

const Header = () => {
const today = new Intl.DateTimeFormat("bn-BD", {
  month: "long",
  day: "numeric",
  year: "numeric",
  timeZone: "Asia/Dhaka",
}).format(new Date());

  return (
    <div className="w-full">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
        <div className="flex gap-2 items-center">
          <div className="bg-gradient-to-br from-green-800 to-emerald-950 shadow-[0_8px_25px_rgba(22,101,52,0.4)] w-14 h-14 rounded-2xl flex justify-center items-center border border-green-300/50 transition-transform duration-300 hover:scale-105">
           <Image src="/logo-icon.png" alt="Image" width={28} height={28} /> </div>

          <div>
            <h2 className="font-bold text-2xl">বাজার দর</h2>
            <p>{today}</p> 
          </div>
        </div>


         <Suspense fallback={null}>
        <UserButton />
         </Suspense>
        
      </div>

      <Navbar></Navbar>

      <Marquee></Marquee>
      
        
    </div>
  
  );
};

export default Header;
import { Jua, Lexend_Deca } from "next/font/google";
import Image from "next/image";


const lexendDeca = Lexend_Deca({
  variable: "--font-lexend-deca",
  subsets: ["latin"],
  weight: ["400"],
});

export default function Hero() {
  return (
    <div className="flex flex-1 w-full bg-[#fff3e3] ">
      <div className="flex flex-col h-full justify-center items-center w-full">
        <Image
          src={"Logo.svg"}
          width={200}
          height={200}
          alt="Logo"
          className="scale-150"
        />
        <h1
          className={`font-jua text-7xl  tracking-wider text-[#d69a6b]`}
        >
          lumina.lk
        </h1>
        <h2
          className={`${lexendDeca.className} tracking-tighter text-xl mt-2 font-bold text-[#9b7c65]`}
        >
          All your Educational needs In one place.
        </h2>
        <div className="flex flex-row gap-4 mt-6">
          <button
            className={`bg-[#d69a6b] text-white px-4 py-2 w-32 rounded-full hover:bg-[#d69a6b]/80 transition-all duration-300 ease-in-out hover:scale-105 hover:cursor-pointer active:scale-95 shadow-lg ${lexendDeca.className}`}
          >
            Get Started
          </button>
          <button
            className={`bg-[#d69a6b] text-white px-4 py-2 w-32 rounded-full hover:bg-[#d69a6b]/80 transition-all duration-300 ease-in-out hover:scale-105 hover:cursor-pointer active:scale-95 shadow-lg ${lexendDeca.className}`}
          >
            More Info
          </button>
        </div>
      </div>
    </div>
  );
}

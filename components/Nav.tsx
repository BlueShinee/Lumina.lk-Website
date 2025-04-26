import Link from "next/link";

export default function Nav() {
  return (
    <div className="flex justify-between items-center w-full h-16 bg-white text-gray-700 relative shadow-md px-4">
      <div className="flex items-center justify-between w-full ">
        <h1 className={`font-jua text-[#d69a6b] text-2xl font-bold`}>
          lumina.lk
        </h1>
        <div className="flex gap-4 text-center items-center justify-center">
          <Link
            href={""}
            className={`font-lexend-deca text-sm hover:text-gray-700 scale-105 hover:cursor-pointer text-center text-[#d69a6b] active:scale-95 transition-all duration-300 ease-in-out active:text-[#9b7c65] tracking-wider`}
          >
            Home
          </Link>
          <Link
            href={""}
            className={`font-lexend-deca text-sm hover:scale-105 hover:cursor-pointer text-center hover:text-[#d69a6b] active:scale-95 transition-all duration-300 ease-in-out active:text-[#9b7c65] tracking-wider`}
          >
            Resouse Library
          </Link>
          <Link
            href={""}
            className={`font-lexend-deca text-sm hover:scale-105 hover:cursor-pointer text-center hover:text-[#d69a6b] active:scale-95 transition-all duration-300 ease-in-out active:text-[#9b7c65] tracking-wider`}
          >
            Lesson Pack Store
          </Link>
        </div>
        <button
          className={`bg-[#d69a6b] text-white px-4 py-2 w-32 rounded-full hover:bg-[#d69a6b]/80 transition-all duration-300 ease-in-out hover:scale-105 hover:cursor-pointer active:scale-95 shadow-sm font-bold font-lexend-deca`}
        >
          Get Started
        </button>
      </div>
    </div>
  );
}

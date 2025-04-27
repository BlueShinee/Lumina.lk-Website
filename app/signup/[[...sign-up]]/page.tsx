import { SignUp } from "@clerk/nextjs";

export default function page() {
  return (
    <div className="w-full min-h-screen flex justify-center items-center bg-[#fff3e3] p-12">
      <SignUp  fallback={<Fallback />} />;
    </div>
  );
}

function Fallback() {
  return (
    <div className=" w-12 h-12 flex justify-center items-center bg-white border border-[#d5cbbf] rounded-xl shadow-[0_0_15px_rgba(0,0,0,0.25)]">
      <span className="loading loading-spinner text-[#d69a6b]"></span>
    </div>
  );
}

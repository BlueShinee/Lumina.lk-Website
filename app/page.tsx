import Hero from "@/components/hero";
import Nav from "@/components/Nav";
import Features from "@/components/Features";
import CallToActionPage from "@/components/CallToAction";
import HowItWorks from "@/components/example";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function page() {
  return (
    <div className=" w-full flex flex-col items-center ">
      <div className="h-[80vh] w-full flex flex-col items-center bg-[#fff3e3]">
        <Nav />
        <Hero />
      </div>
      <Features />
      <CallToActionPage />
      <HowItWorks />
      <FAQ />
      <Footer />
    </div>
  );
}

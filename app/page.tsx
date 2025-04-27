import Hero from "@/components/Website/hero";
import Nav from "@/components/Website/Nav";
import Features from "@/components/Website/Features";
import CallToActionPage from "@/components/Website/CallToAction";
import HowItWorks from "@/components/Website/example";
import FAQ from "@/components/Website/FAQ";
import Footer from "@/components/Website/Footer";

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

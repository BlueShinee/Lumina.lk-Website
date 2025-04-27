

// Utility function to combine class names
const cn = (...classes: string[]) => {
  return classes.filter(Boolean).join(" ");
};

const Footer = () => {
  return (
    <footer className="bg-[#fff3e3] shadow-md text-[#d69a6b] border-t border-[#9b7c65] py-6 w-full">
      <div className="container mx-auto px-4 text-center">
        <p className=" font-bold text-[#9b7c65]">
          &copy; {new Date().getFullYear()} Lumina.lk. All rights reserved.
        </p>
{/*         <div className="mt-4 flex justify-center gap-4">
          <a href="#" className=" hover:text-white transition-colors">
            Facebook
          </a>
          <a href="#" className=" hover:text-white transition-colors">
            Twitter
          </a>
          <a href="#" className=" hover:text-white transition-colors">
            Instagram
          </a>
        </div> */}
      </div>
    </footer>
  );
};

export default Footer;

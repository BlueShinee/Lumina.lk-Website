"use client"
import { motion } from "framer-motion";
import {
  BookOpen, // Example icons - choose relevant ones
  Laptop,
  Users,
  GraduationCap,
} from "lucide-react";

// Utility function to combine class names
const cn = (...classes: string[]) => {
  return classes.filter(Boolean).join(" ");
};

// Data for the steps
const steps = [
  {
    title: "1. Sign Up",
    description:
      "Create your account and select from our diverse range of Resources.",
    icon: BookOpen,
  },
  {
    title: "2. Learn at Your Own Pace",
    description:
      "Access Resources anytime, anywhere, and learn on your schedule.",
    icon: Laptop,
  },
/*   {
    title: "3. Engage & Connect",
    description:
      "Participate in discussions, interact with instructors, and collaborate with peers.",
    icon: Users,
  },
  {
    title: "4. Get Certified",
    description:
      "Complete the course and receive a certificate to showcase your new skills.",
    icon: GraduationCap,
  }, */
];

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.5,
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const HowItWorks = () => {
  return (
    <section className="py-16 bg-light-peach">
      {" "}
      {/* Use your light peach color */}
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-700 font-jua">
          {" "}
          {/* Darker text for contrast */}
          How It Works
        </h2>
        <motion.div
          className="space-y-12"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={index}
                className={cn(
                  "flex flex-col md:flex-row items-center",
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse", // Alternate layout
                  "gap-8"
                )}
                variants={itemVariants}
              >
                <div className="md:w-1/3 flex items-center justify-center">
                  <div
                    className={cn(
                      "w-20 h-20 rounded-full flex items-center justify-center",
                      "bg-orange-100/70 backdrop-blur-md shadow-md", // Added blur
                      "border border-orange-200"
                    )}
                  >
                    <Icon className="w-10 h-10 text-[#d69a6b]" />{" "}
                    {/* Consistent icon color */}
                  </div>
                </div>
                <div className="md:w-2/3 space-y-2">
                  <h3 className="text-2xl font-semibold text-gray-700 font-jua">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 tracking-tighter font-lexend-deca">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;

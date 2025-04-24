"use client";

import { motion } from "framer-motion";
import {
  BrainCircuit, // For Expert Instructors
  Clock, // For Flexible Learning
  Gamepad2, // For Interactive Content
  Users, // For Community Support
  Award,
  BookOpen, // For Certification
} from "lucide-react";

// You can define these utility functions directly, or import them if they are in a separate file
const cn = (...classes: string[]) => classes.filter(Boolean).join(" ");

// Define the features data
const features = [
/*   {
    title: "Expert Instructors",
    description:
      "Learn from leading experts in their fields, gaining practical knowledge and insights.",
    icon: BrainCircuit,
  }, */
  {
    title: "Flexible Learning",
    description:
      "Study at your own pace, anytime, anywhere, with our self-paced lesson packs.",
    icon: Clock,
  },
  {
    title: "Resource Library",
    description:
      "Access massive library of resources to help you learn and grow.",
    icon: BookOpen,
  },
/*   {
    title: "Community Support",
    description:
      "Connect with a vibrant community of learners, collaborate on projects, and get your questions answered.",
    icon: Users,
  },
  {
    title: "Certification",
    description:
      "Earn recognized certifications upon course completion, enhancing your career prospects.",
    icon: Award,
  },
  {
    title: "Mobile-Friendly",
    description:
      "Access courses on any device, ensuring a seamless learning experience on desktops, tablets, and smartphones.",
    icon: Award,
  }, */
];

// Animation variants
const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2, // Staggered delay for each card
      duration: 0.6,
      ease: "easeInOut",
    },
  }),
};

const KeyFeatures = () => {
  return (
    <section className="py-12">
      {" "}
      {/* Replaced bg-background */}
      <div className="container mx-auto px-4">
        <h2 className="font-jua text-3xl font-bold tracking-wider text-center mb-8 text-gray-700">
          {" "}
          {/* Replaced text-foreground */}
          Empowering Your Learning Journey
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon; // Get the icon component
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                custom={index} // Pass the index for staggering
                className={cn(
                  "bg-orange-50 rounded-xl p-6", //Replaced bg-card
                  "border border-gray-200", //Replaced border-border
                  "shadow-md hover:shadow-lg transition-shadow duration-300",
                  "flex flex-col items-start gap-4" // Added gap for consistent spacing
                )}
              >
                <div
                  className={cn(
                    "w-12 h-12 rounded-full flex items-center justify-center",
                    "bg-orange-200 text-[#9b7c65]" //  Replaced bg-primary/20 text-primary
                  )}
                >
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-jua tracking-wide font-semibold text-gray-700">
                  {" "}
                  {/* Replaced text-foreground */}
                  {feature.title}
                </h3>
                <p className="text-gray-600 font-lexend-deca tracking-tighter">
                  {" "}
                  {/* Replaced text-muted-foreground */}
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default KeyFeatures;

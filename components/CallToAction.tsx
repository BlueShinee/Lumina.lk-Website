"use client";
import { motion } from "framer-motion";
import { ArrowRight, BookOpen, Users, Zap } from "lucide-react";

// Utility function to combine class names
const cn = (...classes: string[]) => {
  return classes.filter(Boolean).join(" ");
};

// CTA Page Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

const CallToActionPage = () => {
  return (
    <motion.div
      className="min-h-screen bg-gradient-to-br from-white to-light-peach p-4 flex items-center justify-center"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <motion.h1
          className="text-4xl sm:text-5xl font-jua lg:text-6xl font-bold text-gray-700"
          variants={itemVariants}
        >
          Ready to Transform Your Learning?
        </motion.h1>
        <motion.p
          className="text-lg font-lexend-deca tracking-tighter sm:text-xl text-gray-700"
          variants={itemVariants}
        >
          Join Lumina.lk today and unlock a world of knowledge, gain new skills,
          and connect with a community of passionate learners.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row justify-center gap-4"
          variants={itemVariants}
        >
          <button
            className={cn(
              "bg-[#d69a6b] hover:bg-white hover:text-[#d69a6b] hover:scale-105 active:scale-95 border-2 border-[#d69a6b] text-white font-lexend-deca ",
              "text-white hover:from-blue-600 hover:to-purple-600",
              "px-8 py-3 rounded-full shadow-lg hover:shadow-xl",
              "transition-all duration-300",
              "flex items-center gap-2",
              "text-lg font-semibold",
              "w-full sm:w-auto" // Added for responsiveness
            )}
          >
            Get Started Now <ArrowRight className="w-5 h-5" />
          </button>
          <button
            className={cn(
              "border-2 border-[#d69a6b] text-[#d69a6b] hover:scale-105 active:scale-95 hover:bg-[#d69a6b] hover:text-white font-lexend-deca",
              "px-8 py-3 rounded-full shadow-md hover:shadow-lg",
              "transition-all duration-300",
              "flex items-center gap-2",
              "text-lg font-semibold",
              "w-full sm:w-auto" // Added for responsiveness
            )}
          >
            Explore Courses <BookOpen className="w-5 h-5" />
          </button>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12"
        >
          <div className="bg-orange-100/70 backdrop-blur-md rounded-xl p-6 shadow-md border border-gray-100 hover:shadow-lg transition-shadow duration-300 flex flex-col items-center justify-center ">
            <Zap className="w-10 h-10 text-yellow-500 mb-4" />
            <h3 className="text-xl font-semibold text-gray-700 mb-2 font-jua">
              Instant Access
            </h3>
            <p className="text-gray-600 font-lexend-deca">
              Start learning immediately with our easy-to-use platform.
            </p>
          </div>
          <div className="bg-orange-100/70 backdrop-blur-md rounded-xl p-6 shadow-md border border-gray-100 hover:shadow-lg transition-shadow duration-300 flex flex-col items-center justify-center">
            <BookOpen className="w-10 h-10 text-blue-500 mb-4" />
            <h3 className="text-xl font-semibold text-gray-700 mb-2 font-jua">
              Diverse Courses
            </h3>
            <p className="text-gray-600 font-lexend-deca">
              Choose from a wide range of courses taught by industry experts.
            </p>
          </div>
          <div className="bg-orange-100/70 backdrop-blur-md rounded-xl p-6 shadow-md border border-gray-100 hover:shadow-lg transition-shadow duration-300 flex flex-col items-center justify-center">
            <Users className="w-10 h-10 text-green-500 mb-4" />
            <h3 className="text-xl font-semibold text-gray-700 mb-2 font-jua">
              Community
            </h3>
            <p className="text-gray-600 font-lexend-deca">
              Connect with a supportive community of learners.
            </p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default CallToActionPage;

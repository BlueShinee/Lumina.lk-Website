"use client"

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';

// Utility function to combine class names
const cn = (...classes) => { // Removed the TypeScript type annotation
    return classes.filter(Boolean).join(' ');
};

// Sample FAQ data
const faqData = [
    {
        question: 'What is Lumina.lk?',
        answer:
            'Lumina.lk is an online learning platform that offers a wide range of courses to help you gain new skills and advance your career.',
    },
    {
        question: 'How do I enroll in a course?',
        answer:
            'To enroll in a course, simply create an account, browse our course catalog, and select the course you want to join. Then, click the "Enroll Now" button and follow the prompts to complete your enrollment.',
    },
];

// Animation variants
const itemVariants = {
    open: {
        opacity: 1,
        height: 'auto',
        transition: {
            height: { duration: 0.3, ease: 'easeInOut' },
            opacity: { duration: 0.2 },
        },
    },
    closed: {
        opacity: 0,
        height: 0,
        transition: {
            height: { duration: 0.3, ease: 'easeInOut' },
            opacity: { duration: 0.2, delay: 0.1 },
        },
    },
};

const FAQ = () => {
    const [openQuestion, setOpenQuestion] = useState < number | null > (null);

    const toggleQuestion = (index: number) => {
        setOpenQuestion((prevIndex) => (prevIndex === index ? null : index));
    };

    return (
        <section className="py-16 bg-white w-full">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
                    Frequently Asked Questions
                </h2>
                <div className="space-y-6">
                    {faqData.map((item, index) => (
                        <div
                            key={index}
                            className="border border-gray-200 rounded-lg shadow-sm"
                        >
                            <button
                                className={cn(
                                    "flex w-full items-center justify-between p-4",
                                    "text-left focus:outline-none",
                                    "transition-colors duration-200",
                                    "hover:bg-gray-50 rounded-t-lg",
                                    "group" // Added for better icon styling
                                )}
                                onClick={() => toggleQuestion(index)}
                            >
                                <span className="text-lg font-semibold text-gray-900">
                                    {item.question}
                                </span>
                                {openQuestion === index ? (
                                    <ChevronUp
                                        className="w-6 h-6 text-blue-500 transition-transform"
                                    />
                                ) : (
                                    <ChevronDown
                                        className="w-6 h-6 text-gray-500 transition-transform group-hover:text-blue-500" // Icon color change on hover
                                    />
                                )}
                            </button>
                            <AnimatePresence>
                                {openQuestion === index && (
                                    <motion.div
                                        variants={itemVariants}
                                        initial="closed"
                                        animate="open"
                                        exit="closed"
                                        className="px-4 pb-4 text-gray-700"
                                    >
                                        {item.answer}
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;


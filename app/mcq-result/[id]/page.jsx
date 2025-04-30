"use client"

import { useQuery, useMutation } from "@tanstack/react-query";
import { getMcqQuestions, InsertMcqResults } from "../../../database/index"
import { redirect, useParams } from "next/navigation";
import React from 'react';
import { useUser } from "@clerk/nextjs";
import { cn } from "@/lib/utils"; 

export default function page() {
    const { isSignedIn, user, isLoaded } = useUser();
    const params = useParams();
    const testId = parseInt(params.id);

    if (!isSignedIn && isLoaded) {
        redirect("/signin");
    }

    const { data: questions, isLoading, isError } = useQuery({
        queryKey: ['McqQuestions', testId],
        queryFn: () => getMcqQuestions(testId)
    });
    
    

    if (isLoading || !isLoaded) {
        return (
            <div className="w-full h-screen flex justify-center items-center">
                <span className="loading loading-spinner loading-xl text-orange-600"></span>
            </div>
        );
    }

    if (isError) {
        return (
            <div className="w-full h-screen flex flex-col gap-4 justify-center items-center">
                <div className="text-orange-600 motion-preset-blink">
                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-alert-triangle">
                        <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />
                        <path d="M12 9v4" />
                        <path d="M12 17h.01" />
                    </svg>
                </div>
                <h2 className="text-2xl font-bold text-orange-600">Error Loading Questions</h2>
                <p className="text-zinc-600">There was a problem loading the questions. Please try again later.</p>
            </div>
        );
    }

    return (
        <div className="w-full min-h-screen p-6 space-y-8 bg-zinc-50">
            <div className="flex flex-col items-center space-y-2">
                <h1 className="text-2xl font-bold tracking-tight text-orange-600">MCQ Results</h1>
                <p className="text-zinc-600">Review your answers for this MCQ test.</p>
            </div>
            <div className="max-w-3xl mx-auto space-y-6">
                {questions?.map((question, index) => (
                    <div key={question.id} className="bg-white p-6 rounded-lg shadow-sm border border-zinc-200 space-y-4">
                        <div className="flex items-start gap-3">
                            <span className="text-orange-600 font-semibold">{question.Qnumber}.</span>
                            <p className="text-zinc-800">{question.question}</p>
                        </div>
                        <div className="space-y-3 pl-8">
                            {[1, 2, 3, 4, 5].map((optionNum) => (
                                <label key={optionNum} className={cn("flex items-center gap-3  p-2 rounded-md transition-colors", optionNum === question.answer ? "bg-green-400" : "bg-white")}>
                                    <input
                                        type="radio"
                                        name={`question-${question.id}`}
                                        checked={question.answer === optionNum}
                                        value={optionNum}
                                        disabled
                                        className="radio radio-neutral bg-white checked:bg-white border-zinc-300  disabled:opacity-100"
                                    />
                                    <span className="text-zinc-700">{question[`option${optionNum}`]}</span>
                                </label>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

"use client"

import { useQuery } from "@tanstack/react-query";
import { getMcqQuestions } from "../../../database/index"
import { useParams } from "next/navigation";
import React from 'react';
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
import { AlertTriangle } from "lucide-react";

export default function page() {

    const [selectedAnswers, setSelectedAnswers] = React.useState({});
    const [unAnswered, setUnAnswered] = React.useState(false);

    const params = useParams();
    const testId = parseInt(params.id);

    const { data: questions, isLoading, isError } = useQuery({
        queryKey: ['McqQuestions', testId],
        queryFn: () => getMcqQuestions(testId)
    });

    console.log(questions);
    if (isLoading) {
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

    const handleAnswerChange = (questionId, value) => {
        setSelectedAnswers(prev => ({
            ...prev,
            [questionId]: value
        }));
    };

    const handleSubmit = () => {
        // Check if all questions are answered
        const unansweredQuestions = questions.length !== Object.keys(selectedAnswers).length;
        setUnAnswered(unansweredQuestions);

        if (unansweredQuestions) {
            return;
        }

        // Calculate score by comparing selected answers with correct answers
        const score = questions.reduce((total, question) => {
            return total + (selectedAnswers[question.id] === question.answer ? 1 : 0);
        }, 0);

        console.log('Score:', score, 'out of', questions.length);
        console.log('Selected answers:', selectedAnswers);
    };

    return (
        <div className="w-full min-h-screen p-6 space-y-8 bg-zinc-50">
            <div className="flex flex-col items-center space-y-2">
                <h1 className="text-2xl font-bold tracking-tight text-orange-600">MCQ Questions</h1>
                <p className="text-zinc-600">Answer the following multiple choice questions.</p>
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
                                <label key={optionNum} className="flex items-center gap-3 cursor-pointer hover:bg-orange-50 p-2 rounded-md transition-colors">
                                    <input
                                        type="radio"
                                        name={`question-${question.id}`}
                                        value={optionNum}
                                        checked={selectedAnswers[question.id] === optionNum}
                                        onChange={() => handleAnswerChange(question.id, optionNum)}
                                        className="radio radio-neutral bg-white checked:bg-white border-zinc-700"
                                    />
                                    <span className="text-zinc-700">{question[`option${optionNum}`]}</span>
                                </label>
                            ))}
                        </div>
                    </div>
                ))}
                {unAnswered && (
                    <Alert variant="destructive" className="mt-4 bg-red-50 border-red-200">
                        <AlertTriangle className="h-4 w-4 text-red-500" />
                        <AlertTitle className="text-red-500">Incomplete Answers</AlertTitle>
                        <AlertDescription className="text-red-600">
                            Please answer all questions before submitting.
                        </AlertDescription>
                    </Alert>
                )}
                <div className="flex justify-center pt-6">
                    <button
                        onClick={handleSubmit}
                        className="btn border-orange-600 bg-orange-500 text-white px-8 py-2 rounded-md hover:bg-orange-600 transition-colors active:bg-orange-700"
                    >
                        Submit Answers
                    </button>
                </div>
            </div>
        </div>
    );
}

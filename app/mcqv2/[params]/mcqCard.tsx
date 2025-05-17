"use client";

import React from "react";

interface McqCardProps {
  question: {
    id: number;
    catId: number;
    question: string;
    Qnumber: number;
    option1: string;
    option2: string;
    option3: string;
    option4: string;
    option5: string;
    answer: number;
  };
}

export default function McqCard({ question }: McqCardProps) {
  return <div>{question.question}</div>;
}

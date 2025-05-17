"use client";

import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

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
  Qnum: number;
}

export default function McqCard({ question, Qnum }: McqCardProps) {
  return (
    <Card className="mb-8 ">
      {" "}
      <CardHeader>
        <CardTitle>
          {Qnum + 1}. {question.question}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="flex flex-col gap-2">
          <Button variant={"mcq"} >
            <span className="text-wrap">{question.option1}</span>
          </Button>
          <Button variant={"mcq"} >
            <span className="text-wrap">{question.option2}</span>
          </Button>
          <Button variant={"mcq"} >
            <span className="text-wrap">{question.option3}</span>
          </Button>
          <Button variant={"mcq"} >
            <span className="text-wrap">{question.option4}</span>
          </Button>
        </ul>
      </CardContent>
    </Card>
  );
}

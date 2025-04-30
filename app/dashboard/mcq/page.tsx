"use client";
import { useUser } from "@clerk/nextjs";
import { useQuery } from "@tanstack/react-query";
import { getMcqTests } from "@/database/index";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { redirect } from "next/navigation";

export default function page() {
    let score 
    
  const {
    data: mcqTestData,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["McqTests"],
    queryFn: getMcqTests,
  });
    
    const {  user, isLoaded } = useUser();

  if (isLoading || !isLoaded) {
    return (
      <div className="w-full h-screen flex justify-center items-center">
        <span className="loading loading-spinner loading-xl text-orange-600"></span>
      </div>
    );
  }
  // error page
  if (isError) {
    return (
      <div className="w-full h-screen flex flex-col gap-4 justify-center items-center">
        <div className="text-orange-600 motion-preset-blink ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="48"
            height="48"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-alert-triangle"
          >
            <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />
            <path d="M12 9v4" />
            <path d="M12 17h.01" />
          </svg>
        </div>
        <h2 className="text-2xl font-bold text-orange-600">
          Error Loading MCQ Tests
        </h2>
        <p className="text-zinc-600">
          There was a problem loading the MCQ tests. Please try again later.
        </p>
      </div>
    );
  }

  return (
    <div className="w-full min-h-screen p-6 space-y-8 bg-zinc-50">
      <div className="flex flex-col space-y-2">
        <h1 className="text-2xl font-bold tracking-tight text-orange-600">
          MCQ Tests
        </h1>
        <p className="text-zinc-600">
          Practice your knowledge with our multiple choice questions. Select a
          test to begin your assessment.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mcqTestData?.map((test, index) => (
          <Card
                key={index}
                onClick={()=>{redirect("/mcq/"+test.id)}}
            className="hover:border-orange-400 transition-colors cursor-pointer"
          >
            <CardHeader>
              <CardTitle className="text-orange-600">{test.name}</CardTitle>
              <CardDescription>{test.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div
                className={cn(
                  "flex items-center h-9 justify-between text-sm text-zinc-600"
                )}
              >
                <span>{test.questions} Questions</span>
                <div
                  className={cn(
                    "relative w-9 h-auto border-2 rounded-full aspect-square",
                    score == undefined ? "hidden" : "flex",
                    {
                      "border-green-500": (score / test.questions) * 100 >= 75,
                      "border-yellow-500":
                        (score / test.questions) * 100 >= 50 &&
                        (score / test.questions) * 100 < 75,
                      "border-orange-500":
                        (score / test.questions) * 100 >= 25 &&
                        (score / test.questions) * 100 < 50,
                      "border-red-500": (score / test.questions) * 100 < 25,
                    }
                  )}
                >
                  <div
                    className={
                      "absolute inset-0 flex items-center text-[0.6rem] justify-center font-extrabold"
                    }
                  >
                    {score !== undefined ? score / test.questions * 100 + "%" : "-"}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

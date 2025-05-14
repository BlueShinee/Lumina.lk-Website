import { getMcqCat } from "@/database/index";
import McqCategoryCard from "./McqCategoryCard"; // Added import for the new component
import { tryCatch } from "@/lib/trycatch";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Suspense } from "react";
import {
  QueryClient,
  usePrefetchQuery,
  HydrationBoundary,
  dehydrate,
  useSuspenseQuery,
} from "@tanstack/react-query";

export const dynamic = "force-dynamic";

export default async function Page() {
  return (
    <div className="w-full min-h-screen p-6 space-y-8 bg-zinc-50 flex flex-col">
      <div className="flex flex-col space-y-2">
        <h1 className="text-2xl font-bold tracking-tight text-orange-600">
          MCQ Tests
        </h1>
        <p className="text-zinc-700">
          Practice your knowledge with our multiple choice questions. Select a
          Unit and the number of questions you want.
        </p>
      </div>
      <div className="w-full ">
        <Suspense
          fallback={
            <div className="w-full flex flex-col min-h-[80vh] justify-center items-center">
              <span className="loading loading-spinner loading-xl text-orange-600"></span>
            </div>
          }
        >
          <McqCatagories />
        </Suspense>
      </div>
    </div>
  );
}

async function McqCatagories() {
  const { data: catagories, error: catErr } = await tryCatch(getMcqCat());

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {catagories?.map((cat, index) => (
        <McqCategoryCard key={index} category={cat} />
      ))}
    </div>
  );
}

import { getMcqCat } from "@/database/index";
import { McqCatagories } from "./McqCategoryCard"; // Added import for the new component
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
} from "@tanstack/react-query";

export default async function Page() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["mcq-catagories"],
    queryFn: getMcqCat,
  });

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
        <Suspense fallback={<div>Loading...</div>}>
          <HydrationBoundary state={dehydrate(queryClient)}>
            <McqCatagories />
          </HydrationBoundary>
        </Suspense>
      </div>
    </div>
  );
}

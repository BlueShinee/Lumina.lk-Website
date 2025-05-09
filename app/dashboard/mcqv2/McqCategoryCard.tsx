"use client";

import { getMcqCat } from "@/database/index";

import { SetStateAction, useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

// Define a type for the category prop
// Ensure this matches the actual structure of your category data
interface Category {
  id: string | number; // Assuming an ID field exists
  name: string;
  description: string;
  // Add any other properties your category object might have
}

interface McqCategoryCardProps {
  category: Category;
}

function McqCategoryCard({ category }: McqCategoryCardProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [numQuestions, setNumQuestions] = useState(20); // Default value, min 5, max 100
  const router = useRouter();

  const handleSubmit = () => {
        router.push("/mcqv2/" + category.id + "-" + numQuestions);
        setIsOpen(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Card
          className={cn(
            "transition-colors cursor-pointer",
            "hover:border-orange-600"
          )}
        >
          <CardHeader>
            <CardTitle className="text-zinc-900">{category.name}</CardTitle>
            <CardDescription>{category.description}</CardDescription>
          </CardHeader>
          <CardContent>
            <div
              className={cn(
                "flex items-center h-9 justify-between text-sm text-zinc-600"
              )}
            >
              {/* You can add more info here if needed, e.g., number of sub-topics */}
            </div>
          </CardContent>
        </Card>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Configure Test: <span className="text-orange-600">{category.name}</span></DialogTitle>
          <DialogDescription>
            Select the number of questions for your test.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-6 py-4">
          <div className="space-y-2">
            <Label htmlFor="num-questions" className="text-sm font-medium">
              Number of Questions: <span className="text-orange-700">{numQuestions}</span>
            </Label>
            <Slider
              id="num-questions"
              min={5}
              max={20}
              step={1}
              value={[numQuestions]}
              onValueChange={(value: SetStateAction<number>[]) =>
                setNumQuestions(value[0])
              }
              className="w-full bg-orange-600"
            />
          </div>
        </div>
        <DialogFooter>
          <Button
            type="button"
            onClick={() => setIsOpen(false)}
            variant="outline"
          >
            Cancel
          </Button>
          <Button type="submit" className="hover:bg-orange-600" onClick={handleSubmit}>
            Start Test
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}


export function McqCatagories() {
  const { data: catagories } = useQuery({
    queryKey: ["mcq-catagories"],
    queryFn: getMcqCat,
  });

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {catagories?.map((cat, index) => (
        <McqCategoryCard key={index} category={cat} />
      ))}
    </div>
  );
};
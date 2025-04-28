"use client";

import { Construction } from "lucide-react";

interface UnderDevelopmentProps {
  description?: string;
}

export function UnderDevelopment({ description }: UnderDevelopmentProps) {
  return (
    <div className="h-screen w-full flex flex-col items-center justify-center bg-white">
      <Construction className="h-24 w-24 text-orange-500 motion-preset-seesaw   " />
      <h1 className="text-4xl font-bold text-orange-600 mt-6 font-jua">
        Under Development
      </h1>
      {description && (
        <p className="text-lg text-zinc-600 mt-4 max-w-md text-center">
          {description}
        </p>
      )}
    </div>
  );
}

import { resolve } from "path";
import { genarateQuestions } from "./mcqGenAlgo";

interface McqsProps {
  qCatagory: string;
  qAmount: string;
}

export default async function Mcqs({ qCatagory, qAmount }: McqsProps) {
    let test = await genarateQuestions(parseInt(qCatagory), parseInt(qAmount));
    return <div className="w-full">
    mcqs
    </div>;
}

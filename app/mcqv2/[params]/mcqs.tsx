import { resolve } from "path";
import { genarateQuestions } from "./mcqGenAlgo";
import McqCard from "./mcqCard";

interface McqsProps {
  qCatagory: string;
  qAmount: string;
}

export default async function Mcqs({ qCatagory, qAmount }: McqsProps) {
  let test = await genarateQuestions(parseInt(qCatagory), parseInt(qAmount));
  return (
    <div className="w-full">
      {test.map((v, i) => {
        return <McqCard question={v} Qnum={i} key={i}/>;
      })}
    </div>
  );
}

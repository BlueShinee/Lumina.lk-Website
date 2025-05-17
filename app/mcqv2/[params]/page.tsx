import { Suspense } from "react";
import { genarateQuestions } from "./mcqGenAlgo";

export default async function page({
  params,
}: {
  params: { [key: string]: string };
}) {
  let [qCatagory, qAmount] = params.params.split("-");
  let test = await genarateQuestions(parseInt(qCatagory), parseInt(qAmount));
  return (<div className="w-full min-h-screen flex flex-col">
    <Suspense fallback={<span>loading...</span>}>
      {test.map((q) => (<div key={q.id}>{q.question}</div>))}
      </Suspense>
      
  </div>
  );
}

import { Suspense } from "react";
import Mcqs from "./mcqs";

export default async function page({
  params,
}: {
  params: { [key: string]: string };
}) {
  let params_result = await params;
  let [qCatagory, qAmount] = params_result.params.split("-");

  return (
    <div className="w-full min-h-screen flex flex-col">
      <Suspense
        fallback={
          <div className="w-full flex h-screen justify-center items-center bg-zinc-50">
            <span className="loading loading-spinner loading-xl text-orange-600"></span>
          </div>
        }
      >
        <Mcqs qCatagory={qCatagory} qAmount={qAmount} />
      </Suspense>
    </div>
  );
}

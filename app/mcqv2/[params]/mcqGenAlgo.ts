"use server";

import { getMcqQuestionsByCategoryId } from "@/database";

export async function genarateQuestions(catagory: number, amount: number) {
  let qAll = await getMcqQuestionsByCategoryId(catagory);
  let qSelected: typeof qAll = [];
  qAll.map((v, i) => {
    if (qSelected.length < amount) {
      let heat = Math.floor(Math.random() * 10);
      if (heat > 5) {
        qSelected.push(v);
      }
    } else {
      return qSelected;
    }
  });
    return qSelected;
}

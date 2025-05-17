"use server";

import { getMcqQuestionsByCategoryId } from "@/database";

export async function genarateQuestions(catagory: number, amount: number) {
  let qAll = await getMcqQuestionsByCategoryId(catagory);

  // Random question genarater
  //-------------------------------------------------------------
  let qSelected: typeof qAll = [];
  let loop: boolean = true;
  let counter: number = 0;
  while (loop) {
    let heat = Math.floor(Math.random() * 10);
    if (heat > 8) {
      if (!qSelected.includes(qAll[counter])) {
        qSelected.push(qAll[counter]);
      }
    }

    if (counter >= qAll.length) {
      counter = 0;
    }
    if (qSelected.length >= amount) {
      loop = false;
      }
    counter++;
  }
  //----------------------------------------------------

  console.log(qSelected);
  return qSelected;
}

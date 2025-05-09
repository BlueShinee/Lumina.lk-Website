"use server"

import { getMcqQuestionsByCategoryId } from "@/database";

export async function genarateQuestions(catagory:number,amount:number) {
    let qAll = await getMcqQuestionsByCategoryId(catagory)
    console.log(qAll);
    
    return qAll[2].question
}
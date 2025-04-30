import "dotenv/config";
import { drizzle } from "drizzle-orm/libsql";

import { and, eq } from "drizzle-orm";

import {
  announcementTable,
  mcqQuestionsTable,
  mcqTestsTable,
  mcqResults,
} from "./db/schema";

// You can specify any property from the libsql connection options
export const db = drizzle({
  connection: {
    url: "libsql://study-platform-blueshinee.aws-ap-south-1.turso.io",
    authToken:
      "eyJhbGciOiJFZERTQSIsInR5cCI6IkpXVCJ9.eyJhIjoicnciLCJpYXQiOjE3NDU4MjI0MDQsImlkIjoiYTcyZTg1YjEtNDg2OC00MTZhLTg0YzMtNGJmNzljOWY3NTI4IiwicmlkIjoiYzVmM2U2ZmEtOTk0ZS00OTEyLThjYzMtMzQzYzdlNjQzNWNmIn0.hVoRyizf1mgmk-J9AkpBn8oc_D1XjiLr-tbFF2ROOp_8SU40JzgERc4zMfVBvnTZKCd3RwrTsV5EX2k4KZvSAw",
  },
});

export const getAnnouncements = async () => {
  const announcements = await db.select().from(announcementTable);
  return announcements;
};

export const getMcqTests = async () => {
  const McqTests = await db.select().from(mcqTestsTable);
  return McqTests;
};

export const getMcqQuestions = async (Testid: number) => {
  const McqQestions = await db
    .select()
    .from(mcqQuestionsTable)
    .where(eq(mcqQuestionsTable.testId, Testid));
  return McqQestions;
};

export const InsertMcqResults = async (
  userId: string,
  testId: number,
  score: number,
  ansewers: number
) => {
  const existingResult = await db
    .select()
    .from(mcqResults)
    .where(and(eq(mcqResults.userId, userId), eq(mcqResults.testId, testId)));

  if (existingResult.length > 0) {
      await db.update(mcqResults)
          .set({ score: score, ansewers: ansewers })
          .where(and(eq(mcqResults.userId, userId), eq(mcqResults.testId, testId)));
      return;
  }

  await db.insert(mcqResults).values({
    userId: userId,
    testId: testId,
    score: score,
    ansewers: ansewers,
  });
};

export const getMcqResults = async (userId: string, testId: number) => {
  const McqResults = await db
   .select()
   .from(mcqResults)
   .where(and(eq(mcqResults.userId, userId), eq(mcqResults.testId, testId)));
  return McqResults[0];
}
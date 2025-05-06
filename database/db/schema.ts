import { sql } from "drizzle-orm";
import { int, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const announcementTable = sqliteTable("announcement_table", {
  id: int().primaryKey({ autoIncrement: true }),
  title: text().notNull(),
  content: text().notNull(),
  date: int({ mode: "number" }).notNull(),
});

export const mcqTestsTable = sqliteTable("mcq_tests", {
  id: int().primaryKey({ autoIncrement: true }),
  name: text().notNull(),
  description: text().notNull(),
  questions: int().notNull(),
});

export const mcqCatagories = sqliteTable("mcq_Cat", {
  id: int().primaryKey({ autoIncrement: true }),
  name: text().notNull(),
  description: text().notNull(),
});

export const mcqQuestionsTable = sqliteTable("mcq_questions", {
  id: int().primaryKey({ autoIncrement: true }),
  testId: int().notNull(),
  question: text().notNull(),
  Qnumber: int().notNull(),
  option1: text().notNull(),
  option2: text().notNull(),
  option3: text().notNull(),
  option4: text().notNull(),
  option5: text().notNull(),
  answer: int().notNull(),
});

export const mcqResults = sqliteTable("mcq_results", {
  id: int().primaryKey({ autoIncrement: true }),
  testId: int().notNull(),
  userId: text().notNull(),
  score: int().notNull(),
  ansewers: int().notNull(),
});

import "dotenv/config";
import { drizzle } from "drizzle-orm/libsql";

import { announcementTable } from "./db/schema";


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
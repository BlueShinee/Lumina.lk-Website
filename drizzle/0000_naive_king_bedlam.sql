CREATE TABLE `announcement_table` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`title` text NOT NULL,
	`content` text NOT NULL,
	`date` integer NOT NULL
);
--> statement-breakpoint
CREATE TABLE `mcq_questions` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`testId` integer NOT NULL,
	`question` text NOT NULL,
	`Qnumber` integer NOT NULL,
	`option1` text NOT NULL,
	`option2` text NOT NULL,
	`option3` text NOT NULL,
	`option4` text NOT NULL,
	`option5` text NOT NULL,
	`answer` integer NOT NULL
);
--> statement-breakpoint
CREATE TABLE `mcq_tests` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`name` text NOT NULL,
	`description` text NOT NULL,
	`questions` integer NOT NULL
);

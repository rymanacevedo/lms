import { pgTable, text, uuid, integer, pgEnum } from "drizzle-orm/pg-core";
import {id, updatedAt, createdAt} from '../schemaHelper';
import { CourseTable } from "./course";

export const courseSectionStatuses = ['public', 'private'] as const;
export type CourseSectionStatus = (typeof courseSectionStatuses)[number];
export const courseSectionStatusEnum = pgEnum('course_section_status', courseSectionStatuses);



export const CourseSectionTable = pgTable('course_sections',
{
    id, 
    name: text().notNull(),
    status:courseSectionStatusEnum().notNull().default('private'),
    order: integer().notNull(),
    courseId: uuid().notNull().references(() => CourseTable.id, {onDelete: 'restrict'}),
    createdAt,
    updatedAt,
},
)
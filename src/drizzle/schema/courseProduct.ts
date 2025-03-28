import { pgTable, primaryKey, uuid } from "drizzle-orm/pg-core";
import { CourseTable } from "./course";
import { ProductTable } from "./product";
import { updatedAt, createdAt } from "../schemaHelper";
import { relations } from "drizzle-orm";

export const CourseProductTable = pgTable('course_products',
{
    courseId: uuid().notNull().references(() => CourseTable.id, {onDelete: 'restrict'}),
    productId: uuid().notNull().references(() => ProductTable.id, {onDelete: 'cascade'}),
    createdAt,
    updatedAt,
},
t => [primaryKey({columns: [t.courseId, t.productId]})]
)

export const CourseProudctRelationships = relations(CourseProductTable, ({one}) => ({
    course: one(CourseTable, {
        fields: [CourseProductTable.courseId],
        references: [CourseTable.id]
    }),
    product: one(ProductTable, {
        fields: [CourseProductTable.courseId],
        references: [ProductTable.id]
    })
}));
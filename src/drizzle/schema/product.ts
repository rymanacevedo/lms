import { pgEnum, pgTable, text, integer } from "drizzle-orm/pg-core";
import { relations } from "drizzle-orm";
import { createdAt, id, updatedAt } from '../schemaHelper';
import { CourseProductTable } from "./courseProduct";

export const productStatuses = ['public', 'private'] as const;
export type ProductStatus = (typeof productStatuses)[number];
export const productStatusEnum = pgEnum('product_status', productStatuses);

export const ProductTable = pgTable('products', {
    id,
    name: text().notNull(),
    description: text().notNull(),
    priceInDollars: integer().notNull(),
    status: productStatusEnum().notNull().default('private'),
    createdAt,
    updatedAt,
})

export const ProductRelationships = relations(ProductTable, ({many}) => ({
    courseProducts: many(CourseProductTable)
}));
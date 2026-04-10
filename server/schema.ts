import { pgTable, text, timestamp, numeric, boolean } from 'drizzle-orm/pg-core';

export const categories = pgTable('categories', {
  id: text('id').primaryKey(),
  name: text('name').notNull(),
  icon: text('icon').notNull(),
  slug: text('slug').notNull(),
});

export const products = pgTable('products', {
  id: text('id').primaryKey(),
  categoryId: text('category_id').references(() => categories.id).notNull(),
  title: text('title').notNull(),
  description: text('description'),
  price: numeric('price').notNull(),
  oldPrice: numeric('old_price'),
  image: text('image').notNull(),
  tag: text('tag'),
  isFeatured: boolean('is_featured').default(false),
  createdAt: timestamp('created_at').defaultNow()
});

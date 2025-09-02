import { int, mysqlTable, timestamp, varchar } from "drizzle-orm/mysql-core";
export const shortLinksTable = mysqlTable("short_link", {
  id: int().autoincrement().primaryKey(),
  url: varchar({ length: 255 }).notNull(),
  shortCode: varchar("short_code", { length: 20 }).notNull().unique(),
});


export const usersTable = mysqlTable("users", {
  id: int().autoincrement().primaryKey(),
  name: varchar({ length: 255 }).notNull(),
  email: varchar({ length: 255 }).notNull(),
  password: varchar({ length: 255 }).notNull().unique(),
  createdAt: timestamp("created_at").defaultNow().onUpdateNow().notNull(),
  
});

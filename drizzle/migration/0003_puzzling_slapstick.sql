ALTER TABLE `users` DROP INDEX `users_email_unique`;--> statement-breakpoint
ALTER TABLE `users` ADD CONSTRAINT `users_password_unique` UNIQUE(`password`);
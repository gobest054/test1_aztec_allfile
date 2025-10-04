/*
  Warnings:

  - You are about to drop the column `createdAt` on the `PatientCardRead` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `PatientCardRead` DROP COLUMN `createdAt`,
    ADD COLUMN `read_time` TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6);

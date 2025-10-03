/*
  Warnings:

  - You are about to drop the column `read_time` on the `PatientCardRead` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `PatientCardRead` DROP COLUMN `read_time`,
    ADD COLUMN `createdAt` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0);

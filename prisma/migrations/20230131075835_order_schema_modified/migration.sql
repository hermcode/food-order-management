/*
  Warnings:

  - You are about to drop the column `fecha` on the `order` table. All the data in the column will be lost.
  - You are about to drop the column `nombre` on the `order` table. All the data in the column will be lost.
  - Added the required column `customerName` to the `Order` table without a default value. This is not possible if the table is not empty.
  - Added the required column `date` to the `Order` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `order` DROP COLUMN `fecha`,
    DROP COLUMN `nombre`,
    ADD COLUMN `customerName` VARCHAR(191) NOT NULL,
    ADD COLUMN `date` VARCHAR(191) NOT NULL;

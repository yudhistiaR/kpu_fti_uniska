/*
  Warnings:

  - The values [TI,SI,BEM] on the enum `Calon_type` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterTable
ALTER TABLE `Calon` MODIFY `type` ENUM('ti', 'si', 'bem') NOT NULL;

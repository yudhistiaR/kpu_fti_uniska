/*
  Warnings:

  - The primary key for the `Pemilih` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `role` on the `Pemilih` table. All the data in the column will be lost.
  - You are about to drop the `Profile` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[id]` on the table `Pemilih` will be added. If there are existing duplicate values, this will fail.
  - The required column `id` was added to the `Pemilih` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.

*/
-- DropForeignKey
ALTER TABLE `Profile` DROP FOREIGN KEY `Profile_pemilih_npm_fkey`;

-- AlterTable
ALTER TABLE `Pemilih` DROP PRIMARY KEY,
    DROP COLUMN `role`,
    ADD COLUMN `email` VARCHAR(191) NULL,
    ADD COLUMN `id` VARCHAR(191) NOT NULL,
    ADD COLUMN `nama` VARCHAR(191) NULL,
    ADD COLUMN `no_telp` VARCHAR(191) NULL,
    ADD COLUMN `password` VARCHAR(191) NULL,
    ADD COLUMN `token_voting` VARCHAR(191) NULL,
    ADD PRIMARY KEY (`id`);

-- DropTable
DROP TABLE `Profile`;

-- CreateIndex
CREATE UNIQUE INDEX `Pemilih_id_key` ON `Pemilih`(`id`);

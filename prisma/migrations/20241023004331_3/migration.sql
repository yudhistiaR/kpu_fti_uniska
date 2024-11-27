/*
  Warnings:

  - The primary key for the `Pemilih` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `Pemilih` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[npm]` on the table `Pemilih` will be added. If there are existing duplicate values, this will fail.
  - Made the column `npm` on table `Pemilih` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE `VotingCalon` DROP FOREIGN KEY `VotingCalon_user_id_fkey`;

-- AlterTable
ALTER TABLE `Pemilih` DROP PRIMARY KEY,
    DROP COLUMN `id`,
    MODIFY `npm` VARCHAR(191) NOT NULL,
    ADD PRIMARY KEY (`npm`);

-- CreateIndex
CREATE UNIQUE INDEX `Pemilih_npm_key` ON `Pemilih`(`npm`);

-- AddForeignKey
ALTER TABLE `VotingCalon` ADD CONSTRAINT `VotingCalon_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `Pemilih`(`npm`) ON DELETE RESTRICT ON UPDATE CASCADE;

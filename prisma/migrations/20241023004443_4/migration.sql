/*
  Warnings:

  - The primary key for the `VotingCalon` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `user_id` on the `VotingCalon` table. All the data in the column will be lost.
  - Added the required column `npm` to the `VotingCalon` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `VotingCalon` DROP FOREIGN KEY `VotingCalon_user_id_fkey`;

-- AlterTable
ALTER TABLE `VotingCalon` DROP PRIMARY KEY,
    DROP COLUMN `user_id`,
    ADD COLUMN `npm` VARCHAR(191) NOT NULL,
    ADD PRIMARY KEY (`calon_id`, `npm`);

-- AddForeignKey
ALTER TABLE `VotingCalon` ADD CONSTRAINT `VotingCalon_npm_fkey` FOREIGN KEY (`npm`) REFERENCES `Pemilih`(`npm`) ON DELETE RESTRICT ON UPDATE CASCADE;

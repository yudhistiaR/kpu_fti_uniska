/*
  Warnings:

  - The primary key for the `Pemilih` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `Pemilih` table. All the data in the column will be lost.
  - Made the column `email` on table `Pemilih` required. This step will fail if there are existing NULL values in that column.
  - Made the column `nama` on table `Pemilih` required. This step will fail if there are existing NULL values in that column.
  - Made the column `no_telp` on table `Pemilih` required. This step will fail if there are existing NULL values in that column.
  - Made the column `password` on table `Pemilih` required. This step will fail if there are existing NULL values in that column.
  - Made the column `token_voting` on table `Pemilih` required. This step will fail if there are existing NULL values in that column.

*/
-- DropIndex
DROP INDEX `Pemilih_id_key` ON `Pemilih`;

-- AlterTable
ALTER TABLE `Pemilih` DROP PRIMARY KEY,
    DROP COLUMN `id`,
    MODIFY `email` VARCHAR(191) NOT NULL,
    MODIFY `nama` VARCHAR(191) NOT NULL,
    MODIFY `no_telp` VARCHAR(191) NOT NULL,
    MODIFY `password` VARCHAR(191) NOT NULL,
    MODIFY `token_voting` VARCHAR(191) NOT NULL,
    ADD PRIMARY KEY (`npm`);

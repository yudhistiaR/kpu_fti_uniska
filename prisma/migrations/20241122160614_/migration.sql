/*
  Warnings:

  - You are about to drop the column `email` on the `Pemilih` table. All the data in the column will be lost.
  - You are about to drop the column `nama` on the `Pemilih` table. All the data in the column will be lost.
  - You are about to drop the column `no_telp` on the `Pemilih` table. All the data in the column will be lost.
  - You are about to drop the column `password` on the `Pemilih` table. All the data in the column will be lost.
  - You are about to drop the column `token_voting` on the `Pemilih` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `Pemilih` DROP COLUMN `email`,
    DROP COLUMN `nama`,
    DROP COLUMN `no_telp`,
    DROP COLUMN `password`,
    DROP COLUMN `token_voting`,
    ADD COLUMN `prodi` VARCHAR(191) NULL;

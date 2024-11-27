/*
  Warnings:

  - You are about to drop the column `Prodi` on the `Pemilih` table. All the data in the column will be lost.
  - You are about to drop the column `nama` on the `Pemilih` table. All the data in the column will be lost.
  - You are about to drop the column `refresh_token` on the `Pemilih` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `Pemilih` DROP COLUMN `Prodi`,
    DROP COLUMN `nama`,
    DROP COLUMN `refresh_token`;

-- CreateTable
CREATE TABLE `Profile` (
    `id` VARCHAR(191) NOT NULL,
    `nama` VARCHAR(191) NULL,
    `email` VARCHAR(191) NULL,
    `no_telp` VARCHAR(191) NULL,
    `Prodi` VARCHAR(191) NULL,
    `token_voting` VARCHAR(191) NULL,
    `isTokenValid` BOOLEAN NULL DEFAULT false,
    `pemilih_npm` VARCHAR(191) NULL,

    UNIQUE INDEX `Profile_id_key`(`id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Profile` ADD CONSTRAINT `Profile_pemilih_npm_fkey` FOREIGN KEY (`pemilih_npm`) REFERENCES `Pemilih`(`npm`) ON DELETE SET NULL ON UPDATE CASCADE;

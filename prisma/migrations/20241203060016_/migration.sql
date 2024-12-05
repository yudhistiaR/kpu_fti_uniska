/*
  Warnings:

  - You are about to drop the column `misi` on the `Calon` table. All the data in the column will be lost.
  - You are about to drop the column `tgl_lahir` on the `Calon` table. All the data in the column will be lost.
  - You are about to drop the column `visi` on the `Calon` table. All the data in the column will be lost.
  - Added the required column `visiMisi` to the `Calon` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Calon" DROP COLUMN "misi",
DROP COLUMN "tgl_lahir",
DROP COLUMN "visi",
ADD COLUMN     "visiMisi" TEXT NOT NULL;

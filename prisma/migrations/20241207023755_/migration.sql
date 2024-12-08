/*
  Warnings:

  - The `status_akun` column on the `Pemilih` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "Pemilih" DROP COLUMN "status_akun",
ADD COLUMN     "status_akun" TEXT;

-- DropEnum
DROP TYPE "StatusAkun";

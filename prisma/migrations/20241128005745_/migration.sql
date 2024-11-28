-- CreateEnum
CREATE TYPE "StatusAkun" AS ENUM ('Pelaksana', 'Mahasiswa');

-- CreateEnum
CREATE TYPE "TypeCalon" AS ENUM ('ti', 'si', 'bem');

-- CreateTable
CREATE TABLE "Pemilih" (
    "npm" TEXT NOT NULL,
    "prodi" TEXT,
    "status_hmp" BOOLEAN NOT NULL DEFAULT false,
    "status_bem" BOOLEAN NOT NULL DEFAULT false,
    "status_akun" "StatusAkun" NOT NULL DEFAULT 'Mahasiswa',

    CONSTRAINT "Pemilih_pkey" PRIMARY KEY ("npm")
);

-- CreateTable
CREATE TABLE "Calon" (
    "id" TEXT NOT NULL,
    "nama" TEXT NOT NULL,
    "visi" TEXT NOT NULL,
    "misi" TEXT NOT NULL,
    "prodi" TEXT NOT NULL,
    "foto" TEXT NOT NULL,
    "angkatan" INTEGER NOT NULL,
    "tgl_lahir" TIMESTAMP(3) NOT NULL,
    "no_urut" INTEGER NOT NULL,
    "type" "TypeCalon" NOT NULL,

    CONSTRAINT "Calon_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "VotingCalon" (
    "calon_id" TEXT NOT NULL,
    "npm" TEXT NOT NULL,

    CONSTRAINT "VotingCalon_pkey" PRIMARY KEY ("calon_id","npm")
);

-- CreateIndex
CREATE UNIQUE INDEX "Pemilih_npm_key" ON "Pemilih"("npm");

-- AddForeignKey
ALTER TABLE "VotingCalon" ADD CONSTRAINT "VotingCalon_npm_fkey" FOREIGN KEY ("npm") REFERENCES "Pemilih"("npm") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "VotingCalon" ADD CONSTRAINT "VotingCalon_calon_id_fkey" FOREIGN KEY ("calon_id") REFERENCES "Calon"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

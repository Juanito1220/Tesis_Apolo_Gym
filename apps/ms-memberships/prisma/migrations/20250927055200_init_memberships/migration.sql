-- CreateEnum
CREATE TYPE "public"."EstadoMembresia" AS ENUM ('ACTIVA', 'VENCIDA', 'CANCELADA', 'PENDIENTE_PAGO');

-- CreateTable
CREATE TABLE "public"."Plan" (
    "id" TEXT NOT NULL,
    "nombre" TEXT NOT NULL,
    "descripcion" TEXT,
    "precio" DOUBLE PRECISION NOT NULL,
    "duracionDias" INTEGER NOT NULL,
    "beneficios" TEXT[],
    "activo" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Plan_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Membresia" (
    "id" TEXT NOT NULL,
    "usuarioId" TEXT NOT NULL,
    "planId" TEXT NOT NULL,
    "fechaInicio" TIMESTAMP(3) NOT NULL,
    "fechaVencimiento" TIMESTAMP(3) NOT NULL,
    "estado" "public"."EstadoMembresia" NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "stripeSessionId" TEXT,

    CONSTRAINT "Membresia_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "Membresia_usuarioId_idx" ON "public"."Membresia"("usuarioId");

-- AddForeignKey
ALTER TABLE "public"."Membresia" ADD CONSTRAINT "Membresia_planId_fkey" FOREIGN KEY ("planId") REFERENCES "public"."Plan"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- CreateTable
CREATE TABLE "public"."ejercicios" (
    "id" TEXT NOT NULL,
    "nombre" TEXT NOT NULL,
    "descripcion" TEXT NOT NULL,
    "musculoObjetivo" TEXT NOT NULL,
    "urlVideo" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ejercicios_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."rutinas" (
    "id" TEXT NOT NULL,
    "nombre" TEXT NOT NULL,
    "creadorId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "rutinas_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."rutina_ejercicios" (
    "id" TEXT NOT NULL,
    "rutinaId" TEXT NOT NULL,
    "ejercicioId" TEXT NOT NULL,
    "series" INTEGER NOT NULL,
    "repeticiones" TEXT NOT NULL,
    "cargaSugerida" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "rutina_ejercicios_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."asignacion_rutinas" (
    "id" TEXT NOT NULL,
    "clienteId" TEXT NOT NULL,
    "entrenadorId" TEXT NOT NULL,
    "rutinaId" TEXT NOT NULL,
    "fechaInicio" TIMESTAMP(3) NOT NULL,
    "fechaFin" TIMESTAMP(3) NOT NULL,
    "activa" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "asignacion_rutinas_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."registro_progresos" (
    "id" TEXT NOT NULL,
    "asignacionId" TEXT NOT NULL,
    "ejercicioId" TEXT NOT NULL,
    "fechaRegistro" TIMESTAMP(3) NOT NULL,
    "setsRealizados" INTEGER NOT NULL,
    "repeticionesMax" INTEGER NOT NULL,
    "cargaLevantada" DECIMAL(65,30) NOT NULL,
    "notasEntrenador" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "registro_progresos_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "public"."rutina_ejercicios" ADD CONSTRAINT "rutina_ejercicios_rutinaId_fkey" FOREIGN KEY ("rutinaId") REFERENCES "public"."rutinas"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."rutina_ejercicios" ADD CONSTRAINT "rutina_ejercicios_ejercicioId_fkey" FOREIGN KEY ("ejercicioId") REFERENCES "public"."ejercicios"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."asignacion_rutinas" ADD CONSTRAINT "asignacion_rutinas_rutinaId_fkey" FOREIGN KEY ("rutinaId") REFERENCES "public"."rutinas"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."registro_progresos" ADD CONSTRAINT "registro_progresos_asignacionId_fkey" FOREIGN KEY ("asignacionId") REFERENCES "public"."asignacion_rutinas"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."registro_progresos" ADD CONSTRAINT "registro_progresos_ejercicioId_fkey" FOREIGN KEY ("ejercicioId") REFERENCES "public"."ejercicios"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

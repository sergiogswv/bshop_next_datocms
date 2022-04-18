-- CreateTable
CREATE TABLE `Compra` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `fecha` DATETIME(3) NOT NULL,
    `total` DOUBLE NOT NULL,
    `articulos` INTEGER NOT NULL,
    `noticket` VARCHAR(191) NOT NULL,
    `idUsuario` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `BshopUser` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nombre` VARCHAR(191) NOT NULL,
    `paterno` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,
    `tokenConfirmacion` VARCHAR(191) NOT NULL,
    `tokenCambio` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `BshopUser_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Compra` ADD CONSTRAINT `Compra_idUsuario_fkey` FOREIGN KEY (`idUsuario`) REFERENCES `BshopUser`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

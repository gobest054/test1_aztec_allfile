-- CreateTable
CREATE TABLE `PatientCardRead` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `cid` VARCHAR(13) NOT NULL,
    `first_name` VARCHAR(100) NULL,
    `last_name` VARCHAR(100) NULL,
    `dob` DATETIME(3) NULL,
    `read_time` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- MySQL dump 10.13  Distrib 8.0.30, for Win64 (x86_64)
--
-- Host: localhost    Database: klinik_legacy
-- ------------------------------------------------------
-- Server version	8.0.30

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `kasir`
--

DROP TABLE IF EXISTS `kasir`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `kasir` (
  `id_pembayaran` int NOT NULL AUTO_INCREMENT,
  `id_kunjungan` int NOT NULL,
  `total_biaya` decimal(10,2) DEFAULT NULL,
  `metode_pembayaran` enum('Tunai','Debit','Transfer') DEFAULT NULL,
  `status_bayar` enum('Belum Bayar','Lunas') DEFAULT 'Belum Bayar',
  `tanggal_bayar` datetime DEFAULT NULL,
  PRIMARY KEY (`id_pembayaran`),
  KEY `id_kunjungan` (`id_kunjungan`),
  CONSTRAINT `kasir_ibfk_1` FOREIGN KEY (`id_kunjungan`) REFERENCES `registrations` (`id_kunjungan`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `kasir`
--

LOCK TABLES `kasir` WRITE;
/*!40000 ALTER TABLE `kasir` DISABLE KEYS */;
/*!40000 ALTER TABLE `kasir` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `obat`
--

DROP TABLE IF EXISTS `obat`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `obat` (
  `id_obat` int NOT NULL AUTO_INCREMENT,
  `nama_obat` varchar(100) DEFAULT NULL,
  `stok` int DEFAULT NULL,
  `harga` decimal(10,2) DEFAULT NULL,
  PRIMARY KEY (`id_obat`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `obat`
--

LOCK TABLES `obat` WRITE;
/*!40000 ALTER TABLE `obat` DISABLE KEYS */;
/*!40000 ALTER TABLE `obat` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `pasiens`
--

DROP TABLE IF EXISTS `pasiens`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `pasiens` (
  `id` varchar(50) NOT NULL,
  `nik_pasien` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `nama_pasien` varchar(100) NOT NULL,
  `tanggal_lahir` date DEFAULT NULL,
  `jenis_kelamin` enum('L','P') DEFAULT NULL,
  `email_pasien` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `alamat` text,
  `no_telp` varchar(20) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `pasiens`
--

LOCK TABLES `pasiens` WRITE;
/*!40000 ALTER TABLE `pasiens` DISABLE KEYS */;
INSERT INTO `pasiens` VALUES ('10','3175051312840022','Andira Nikeisha','2012-07-20','P','aaaaaa@aaa.com','Mustika Cluster Brazia','089508611088','2026-02-16 16:03:34','2026-02-16 16:03:34'),('11','3175051312840022','Andira Nikeisha','2012-07-20','P','aaaaaa@aaa.com','Mustika Cluster Brazia','089508611088','2026-02-16 16:07:05','2026-02-16 16:07:05'),('12','3175051312840022','Andira Nikeisha','2012-07-20','P','aaaaaa@aaa.com','Mustika Cluster Brazia','089508611088','2026-02-16 23:09:20','2026-02-16 23:09:20'),('1292d2cd-ba5f-4f94-98ec-b2e7bf97aa10','3175051312840022','Andira Nikeisha','1990-07-20','P','aaaaaa@aaa.com','Mustika Park Place, Kab Bekasi','089508611088','2026-02-17 13:15:17','2026-02-17 13:15:17'),('13','3175051312840006','triono','1984-12-13','L','triono.triono1@gmail.com','bogor','089508611088','2026-02-16 23:12:01','2026-02-16 23:12:01'),('14','3175051312840022','Andira Nikeisha','2012-07-20','P','aaaaaa@aaa.com','Mustika Cluster Brazia','089508611088','2026-02-16 23:15:32','2026-02-16 23:15:32'),('15','3175051312840022','Andira Nikeisha','2017-07-20','P','aaaaaa@aaa.com','mustika PP','089508611088','2026-02-17 02:32:15','2026-02-17 02:32:15'),('2893d70f-bc93-4403-a092-bfcd76daa49d','3175051312840022','Andira Nikeisha','1990-07-20','P','aaaaaa@aaa.com','Mustika Park Place, Kab Bekasi','089508611088','2026-02-17 13:07:49','2026-02-17 13:07:49'),('4','3175051312840006','triono','1984-12-13','L','triono.triono1@gmail.com','bogor','089508611088','2026-02-03 00:42:06','2026-02-03 00:42:06'),('56853b95-95a4-48cc-9c6b-fc3fb40a12a7','3175051312840022','Andira Nikeisha','1990-07-20','P','aaaaaa@aaa.com','Mustika Park Place, Kab Bekasi','089508611088','2026-02-17 13:11:04','2026-02-17 13:11:04'),('577b62ca-c5b9-4064-869f-c28dcab53c0f','3175051312840022','Andira Nikeisha','1990-07-20','P','aaaaaa@aaa.com','Mustika Park Place, Kab Bekasi','089508611088','2026-02-17 13:13:00','2026-02-17 13:13:00'),('6','124','xcfx','1990-02-04','L','sddsfds@dfssdf','sdfsdfdf','234234','2026-02-05 11:23:41','2026-02-05 11:23:41'),('7','3175051312840003','triono kevin','1990-12-04','L','sddsfds@dfssdf','setu kab bekasi','089508611088','2026-02-05 11:25:05','2026-02-05 11:25:05'),('8','3175051312840008','andira','2012-07-20','P','aaaaaa@aaa.com','mustika park place','089508611088','2026-02-16 15:50:54','2026-02-16 15:50:54'),('87e8c519-04bd-4b4f-bb0d-0fcf40635aa8','3175051312840022','Andira Nikeisha','1990-07-20','P','aaaaaa@aaa.com','Mustika Park Place, Kab Bekasi','089508611088','2026-02-17 13:18:26','2026-02-17 13:18:26'),('9',NULL,'Andira Nikeisha','2012-07-20','P','aaaaaa@aaa.com','Mustika Cluster Brazia','089508611088','2026-02-16 16:01:18','2026-02-16 16:01:18'),('9126a3d2-c136-49ed-afe5-83f2252ca2e4','3175051312840022','Andira Nikeisha','1990-07-20','P','aaaaaa@aaa.com','Mustika Park Place, Kab Bekasi','089508611088','2026-02-17 13:00:31','2026-02-17 13:00:31'),('95b14102-a19d-48cc-9ed4-ad04fa046cce','3175051312840022','Andira Nikeisha','1990-07-20','P','aaaaaa@aaa.com','Mustika Park Place, Kab Bekasi','089508611088','2026-02-17 13:15:42','2026-02-17 13:15:42'),('e10c03d2-2377-41f3-b78d-313f447c862d','3175051312840023','Dani Arya','1980-01-01','L','aaaaaa@aaa.com','Bekasi','089508611099','2026-02-17 14:05:14','2026-02-17 14:05:14');
/*!40000 ALTER TABLE `pasiens` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `password_reset_tokens`
--

DROP TABLE IF EXISTS `password_reset_tokens`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `password_reset_tokens` (
  `token` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `password_reset_tokens`
--

LOCK TABLES `password_reset_tokens` WRITE;
/*!40000 ALTER TABLE `password_reset_tokens` DISABLE KEYS */;
/*!40000 ALTER TABLE `password_reset_tokens` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `personal_access_tokens`
--

DROP TABLE IF EXISTS `personal_access_tokens`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `personal_access_tokens` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `tokenable_type` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `tokenable_id` bigint unsigned NOT NULL,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(64) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `abilities` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `expires_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`)
) ENGINE=InnoDB AUTO_INCREMENT=24 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `personal_access_tokens`
--

LOCK TABLES `personal_access_tokens` WRITE;
/*!40000 ALTER TABLE `personal_access_tokens` DISABLE KEYS */;
INSERT INTO `personal_access_tokens` VALUES (2,'App\\Models\\User',2,'api_token','8d2ddbd1f418d551a080fd194601f0b00bcd49e5e165cd24fc0f95dc482347f3','[\"*\"]','2026-02-03 00:42:06',NULL,'2026-02-03 00:14:46','2026-02-03 00:42:06'),(3,'App\\Models\\User',2,'api_token','88cfbec81712267509aa9771694407175892fdcb2549249e317ac4841185a14a','[\"*\"]',NULL,NULL,'2026-02-03 01:12:06','2026-02-03 01:12:06'),(4,'App\\Models\\User',2,'api_token','c4dc0a810545edfd77cc4bcaad79de2b5c9603dcfd6a94937b2568e851fd6bb3','[\"*\"]',NULL,NULL,'2026-02-03 01:15:53','2026-02-03 01:15:53'),(5,'App\\Models\\User',2,'api_token','ca3da94147faabc5576d241cd1f7386622de93b247679e856ab4ff60682c61f8','[\"*\"]',NULL,NULL,'2026-02-03 02:01:43','2026-02-03 02:01:43'),(6,'App\\Models\\User',2,'api_token','9012e1e5c3a50422bfc1d4a660d2f07ae50ab9024a539bf59b01773b2f76bf0d','[\"*\"]',NULL,NULL,'2026-02-03 02:04:13','2026-02-03 02:04:13'),(7,'App\\Models\\User',2,'api_token','239b5a29a03316a2b50b83593a8d74f200cc0c3d187676c650ff5f2d09b9dcf7','[\"*\"]',NULL,NULL,'2026-02-03 02:05:20','2026-02-03 02:05:20'),(8,'App\\Models\\User',2,'api_token','6f071e1df75707978903a49870fa854249df5bcf3f751e2b52bb3c3c0184a749','[\"*\"]',NULL,NULL,'2026-02-03 02:06:11','2026-02-03 02:06:11'),(9,'App\\Models\\User',2,'api_token','1c91eb59d60b9bb4e03064e130d37f5656419efc383201c5e2aec08ea296fa79','[\"*\"]',NULL,NULL,'2026-02-03 02:16:52','2026-02-03 02:16:52'),(10,'App\\Models\\User',5,'api_token','e5c2082178e21789b80fc7389d6a44bd4e70ec64c738c74637f803ebd055a45a','[\"*\"]',NULL,NULL,'2026-02-03 06:33:00','2026-02-03 06:33:00'),(11,'App\\Models\\User',5,'api_token','0cad41ff4c72d2682bb984b5cab209ffcf8624912f542eee01a67925702b8e84','[\"*\"]',NULL,NULL,'2026-02-03 06:33:19','2026-02-03 06:33:19'),(12,'App\\Models\\User',5,'api_token','64853e51713319e1fafaeda04120c011eaa3a2fa3dea2304e5ce5f916f19c887','[\"*\"]','2026-02-16 15:48:39',NULL,'2026-02-03 06:42:44','2026-02-16 15:48:39'),(13,'App\\Models\\User',5,'api_token','adfee2c589deb733e436851d08943b94f7a0b0203c80d82449f38765991be154','[\"*\"]',NULL,NULL,'2026-02-03 07:38:31','2026-02-03 07:38:31'),(14,'App\\Models\\User',5,'api_token','ec026f7eb0670ad5246b7730533e6874d79db17aa4d24d06026c6f3acdaecd15','[\"*\"]',NULL,NULL,'2026-02-03 07:50:42','2026-02-03 07:50:42'),(15,'App\\Models\\User',5,'api_token','f06a7173a3c2497ab6f01ff99c3a979782e2969d9b8294c5703fb40b71ef2641','[\"*\"]',NULL,NULL,'2026-02-03 07:51:14','2026-02-03 07:51:14'),(16,'App\\Models\\User',5,'api_token','1b12528ab56309c0510a9d4b7b63edafe27452d8c2f63b6c002aa3ae6883a116','[\"*\"]',NULL,NULL,'2026-02-03 07:56:09','2026-02-03 07:56:09'),(17,'App\\Models\\User',5,'api_token','a72172ae390b68047dac94758f13a26f7b1d0ccca66a8613a5254fb146fe2f68','[\"*\"]',NULL,NULL,'2026-02-03 07:56:23','2026-02-03 07:56:23'),(18,'App\\Models\\User',5,'api_token','02fd2648ed05899dff438bdec49e03659778d246f6b156313ca4baf621ffd0da','[\"*\"]',NULL,NULL,'2026-02-03 07:56:55','2026-02-03 07:56:55'),(19,'App\\Models\\User',5,'api_token','31420486e5b1e2e402ca380eb266c74228eff8ad6eca4b0976474dcabd540945','[\"*\"]','2026-02-05 11:25:04',NULL,'2026-02-03 08:01:44','2026-02-05 11:25:04'),(20,'App\\Models\\User',5,'api_token','859e2a35a512c45b71f0667b611a625d92dd5a9f5578d9b914208ebfce301fb7','[\"*\"]','2026-02-18 06:43:07',NULL,'2026-02-05 02:55:08','2026-02-18 06:43:07'),(21,'App\\Models\\User',5,'api_token','3ab4d5271f20f7c8544bfdd9d9da94e66d77be55a3bd19eb16439059dabdc7a1','[\"*\"]','2026-02-16 23:15:31',NULL,'2026-02-16 08:21:32','2026-02-16 23:15:31'),(22,'App\\Models\\User',5,'api_token','06b5e366cd841c5ac8b4df86ee10e73e9ba4f161c97e26ee06104a9b64049988','[\"*\"]',NULL,NULL,'2026-02-17 02:08:03','2026-02-17 02:08:03'),(23,'App\\Models\\User',5,'api_token','c6c7c12478300a0f887695adc77bb57020d88450afc748cd241549ec6bd8b905','[\"*\"]','2026-02-19 06:06:04',NULL,'2026-02-17 02:13:38','2026-02-19 06:06:04');
/*!40000 ALTER TABLE `personal_access_tokens` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `registrations`
--

DROP TABLE IF EXISTS `registrations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `registrations` (
  `id_kunjungan` int NOT NULL AUTO_INCREMENT,
  `id_pasien` varchar(50) NOT NULL,
  `tanggal_kunjungan` date NOT NULL,
  `status_pasien` enum('Registrasi','Hadir','Tindakan','Kasir','Selesai') NOT NULL DEFAULT 'Registrasi',
  `crm_id` int DEFAULT NULL,
  `perawat_id` int DEFAULT NULL,
  `dokter_id` int DEFAULT NULL,
  `kasir_id` int DEFAULT NULL,
  `waktu_registrasi` datetime DEFAULT NULL,
  `waktu_hadir` datetime DEFAULT NULL,
  `waktu_tindakan` datetime DEFAULT NULL,
  `waktu_bayar` datetime DEFAULT NULL,
  `waktu_selesai` datetime DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id_kunjungan`),
  KEY `id_pasien` (`id_pasien`),
  KEY `crm_id` (`crm_id`),
  KEY `perawat_id` (`perawat_id`),
  KEY `dokter_id` (`dokter_id`),
  KEY `kasir_id` (`kasir_id`),
  CONSTRAINT `registrations_ibfk_2` FOREIGN KEY (`crm_id`) REFERENCES `users` (`id`),
  CONSTRAINT `registrations_ibfk_3` FOREIGN KEY (`perawat_id`) REFERENCES `users` (`id`),
  CONSTRAINT `registrations_ibfk_4` FOREIGN KEY (`dokter_id`) REFERENCES `users` (`id`),
  CONSTRAINT `registrations_ibfk_5` FOREIGN KEY (`kasir_id`) REFERENCES `users` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `registrations`
--

LOCK TABLES `registrations` WRITE;
/*!40000 ALTER TABLE `registrations` DISABLE KEYS */;
INSERT INTO `registrations` VALUES (4,'02571b44-c484-4163-93f7-9c7d9d914bf7','2026-02-17','Registrasi',NULL,NULL,NULL,NULL,'2026-02-17 20:15:42',NULL,NULL,NULL,NULL,'2026-02-17 13:15:42','2026-02-17 13:15:42'),(5,'87e8c519-04bd-4b4f-bb0d-0fcf40635aa8','2026-02-17','Registrasi',NULL,NULL,NULL,NULL,'2026-02-17 20:18:26',NULL,NULL,NULL,NULL,'2026-02-17 13:18:26','2026-02-17 13:18:26'),(6,'e10c03d2-2377-41f3-b78d-313f447c862d','2026-02-17','Registrasi',NULL,NULL,NULL,NULL,'2026-02-17 21:05:14',NULL,NULL,NULL,NULL,'2026-02-17 14:05:14','2026-02-17 14:05:14');
/*!40000 ALTER TABLE `registrations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `resep`
--

DROP TABLE IF EXISTS `resep`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `resep` (
  `id_resep` int NOT NULL AUTO_INCREMENT,
  `id_kunjungan` int NOT NULL,
  `id_obat` int NOT NULL,
  `jumlah` int DEFAULT NULL,
  `aturan_pakai` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id_resep`),
  KEY `id_kunjungan` (`id_kunjungan`),
  KEY `id_obat` (`id_obat`),
  CONSTRAINT `resep_ibfk_1` FOREIGN KEY (`id_kunjungan`) REFERENCES `registrations` (`id_kunjungan`),
  CONSTRAINT `resep_ibfk_2` FOREIGN KEY (`id_obat`) REFERENCES `obat` (`id_obat`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `resep`
--

LOCK TABLES `resep` WRITE;
/*!40000 ALTER TABLE `resep` DISABLE KEYS */;
/*!40000 ALTER TABLE `resep` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tindakan`
--

DROP TABLE IF EXISTS `tindakan`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tindakan` (
  `id_tindakan` int NOT NULL AUTO_INCREMENT,
  `id_kunjungan` int NOT NULL,
  `diagnosa` text,
  `tindakan` text,
  `biaya` decimal(10,2) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id_tindakan`),
  KEY `id_kunjungan` (`id_kunjungan`),
  CONSTRAINT `tindakan_ibfk_1` FOREIGN KEY (`id_kunjungan`) REFERENCES `registrations` (`id_kunjungan`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tindakan`
--

LOCK TABLES `tindakan` WRITE;
/*!40000 ALTER TABLE `tindakan` DISABLE KEYS */;
/*!40000 ALTER TABLE `tindakan` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `email` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `password` varchar(100) NOT NULL,
  `nama` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `role` enum('CRM','Perawat','Dokter','Kasir') NOT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (5,'triono.triono1@gmail.com','$2y$12$2k.cl2yhSjfVUQnAsDoBEemiu4NwFaVqXe5NMx3YGdm3RBpW1fpe6','crm 01','CRM','2026-02-03 06:30:51','2026-02-03 06:30:51'),(6,'triono.triono1384@gmail.com','$2y$12$.G6UDALZIdS3.mJfjpCgAuCOO.vCJW4UfN6.7vixLOJ1UcQRMSOGG','PERAWAT 01','Perawat','2026-02-03 06:31:20','2026-02-03 06:31:20');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping routines for database 'klinik_legacy'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2026-02-21  9:00:40

-- phpMyAdmin SQL Dump
-- version 4.9.5deb2
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Mar 30, 2023 at 02:58 AM
-- Server version: 8.0.32-0ubuntu0.20.04.2
-- PHP Version: 7.4.33

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `funnymovies`
--

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int NOT NULL,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `isAdmin` tinyint(1) NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `username`, `password`, `email`, `isAdmin`) VALUES
(1, 'Duy Lam', '$2b$10$6dHK1R9c6Vke6x1YfQld4uLmRDWOVDauOs90b4zsmgVWVKUAEjDK.', 'nguyenlam0043@gmail.com', 0),
(2, 'Admin', '$2b$10$6dHK1R9c6Vke6x1YfQld4uLmRDWOVDauOs90b4zsmgVWVKUAEjDK.', 'admin@funnymovies.com', 1);

-- --------------------------------------------------------

--
-- Table structure for table `video`
--

CREATE TABLE `video` (
  `id` int NOT NULL,
  `url` varchar(255) NOT NULL,
  `video_id` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `video`
--

INSERT INTO `video` (`id`, `url`, `video_id`) VALUES
(22, 'https://www.youtube.com/watch?v=LZN4I3K8SC0&list=RDg97La0u55_g&index=27', 'LZN4I3K8SC0'),
(23, 'https://www.youtube.com/watch?v=WzDNlilVnXU&list=RDg97La0u55_g&index=27', 'WzDNlilVnXU'),
(25, 'https://www.youtube.com/watch?v=DZyeMmeQo-U', 'DZyeMmeQo-U'),
(27, 'https://www.youtube.com/watch?v=oJeQ0UUrz7M', 'oJeQ0UUrz7M'),
(28, 'https://www.youtube.com/watch?v=PaJQjkOVf34', 'PaJQjkOVf34');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `video`
--
ALTER TABLE `video`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=44;

--
-- AUTO_INCREMENT for table `video`
--
ALTER TABLE `video`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=29;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

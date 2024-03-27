-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 27, 2024 at 06:53 PM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `meetings_jb_test`
--
CREATE DATABASE IF NOT EXISTS `meetings_jb_test` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `meetings_jb_test`;

-- --------------------------------------------------------

--
-- Table structure for table `developer_teams`
--

CREATE TABLE `developer_teams` (
  `id` int(11) NOT NULL,
  `team_name` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `developer_teams`
--

INSERT INTO `developer_teams` (`id`, `team_name`) VALUES
(1, 'Backend Team'),
(2, 'Frontend Team'),
(3, 'AI Team');

-- --------------------------------------------------------

--
-- Table structure for table `team_meetings`
--

CREATE TABLE `team_meetings` (
  `id` int(11) NOT NULL,
  `team_id` int(11) NOT NULL,
  `dateTime_start` datetime NOT NULL,
  `dateTime_end` datetime NOT NULL,
  `description` varchar(100) NOT NULL,
  `meeting_room` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `team_meetings`
--

INSERT INTO `team_meetings` (`id`, `team_id`, `dateTime_start`, `dateTime_end`, `description`, `meeting_room`) VALUES
(1, 1, '2024-03-28 19:41:00', '2024-03-28 20:41:00', 'New app - discussing', 'blue room'),
(2, 1, '2024-03-27 22:42:00', '2024-03-27 23:42:00', 'Project Meeting', 'Red room'),
(3, 2, '2024-04-01 18:43:00', '2024-04-01 19:43:00', 'UI - meeting ', 'Black room'),
(4, 3, '2024-03-27 18:49:00', '2024-03-27 21:49:00', 'Ading AI for app ', 'blue room'),
(5, 3, '2024-04-03 18:49:00', '2024-04-03 19:50:00', 'Week\'s meeting', 'Black room'),
(6, 1, '2024-03-30 18:50:00', '2024-03-30 19:50:00', 'New project - Simple Date', 'blue room');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `developer_teams`
--
ALTER TABLE `developer_teams`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `team_meetings`
--
ALTER TABLE `team_meetings`
  ADD PRIMARY KEY (`id`),
  ADD KEY `team_id` (`team_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `developer_teams`
--
ALTER TABLE `developer_teams`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `team_meetings`
--
ALTER TABLE `team_meetings`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `team_meetings`
--
ALTER TABLE `team_meetings`
  ADD CONSTRAINT `team_meetings_ibfk_1` FOREIGN KEY (`team_id`) REFERENCES `developer_teams` (`id`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 19, 2024 at 06:29 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.1.25

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_room`
--

-- --------------------------------------------------------

--
-- Table structure for table `record`
--

CREATE TABLE `record` (
  `c_id` int(4) NOT NULL,
  `c_time` date NOT NULL,
  `c_intime` time NOT NULL,
  `c_outtime` time NOT NULL,
  `c_building` varchar(100) NOT NULL,
  `c_name` varchar(50) NOT NULL,
  `c_phone` varchar(10) NOT NULL,
  `c_point` varchar(100) NOT NULL,
  `c_consultant` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `record`
--

INSERT INTO `record` (`c_id`, `c_time`, `c_intime`, `c_outtime`, `c_building`, `c_name`, `c_phone`, `c_point`, `c_consultant`) VALUES
(1, '2024-07-09', '05:11:18', '09:02:18', 'abi303', 'hunk', '0685289555', 'การเรียน', 'kk');

-- --------------------------------------------------------

--
-- Table structure for table `room`
--

CREATE TABLE `room` (
  `r_id` varchar(11) NOT NULL,
  `r_building` varchar(100) NOT NULL,
  `r_nameroom` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `room`
--

INSERT INTO `room` (`r_id`, `r_building`, `r_nameroom`) VALUES
('abi301', 'เทคโน', 'abi301'),
('abi302', 'เทคโน', 'abi302'),
('abi303', 'เทคโน', 'abi303'),
('abi304', 'เทคโน', 'abi304'),
('abi305', 'เทคโน', 'abi305'),
('abi306', 'เทคโน', 'abi306'),
('fs101', 'อคช.', 'ห้องบรรยาย'),
('fs102', 'อคช.', 'ห้องปฎิบัติการอาหารเบเกอรี่'),
('fs103', 'อคช.', 'ห้องปฎิบัติการแปรรูปอาหาร'),
('fs104', 'อคช.', 'ห้องปฎิบัติการเคมีอาหาร'),
('fs105', 'อคช.', 'ห้องปฎิบัติการจุลชีวะอาหาร'),
('fs106', 'อคช.', 'ห้องปฎิบัติการทดสอบคุณภาพประสาทสัมผัส');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `record`
--
ALTER TABLE `record`
  ADD PRIMARY KEY (`c_id`);

--
-- Indexes for table `room`
--
ALTER TABLE `room`
  ADD PRIMARY KEY (`r_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `record`
--
ALTER TABLE `record`
  MODIFY `c_id` int(4) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

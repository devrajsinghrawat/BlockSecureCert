-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Jan 05, 2023 at 12:09 PM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `certification_system`
--

-- --------------------------------------------------------

--
-- Table structure for table `studentprofile`
--

CREATE TABLE `studentprofile` (
  `id` int(11) NOT NULL,
  `RollNumber` varchar(255) NOT NULL,
  `DoB` varchar(255) NOT NULL,
  `Name` varchar(255) NOT NULL,
  `StudentWalletAddress` varchar(255) NOT NULL,
  `Email` varchar(255) NOT NULL,
  `CreationDate` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `studentprofile`
--

INSERT INTO `studentprofile` (`id`, `RollNumber`, `DoB`, `Name`, `StudentWalletAddress`, `Email`, `CreationDate`) VALUES
(1, '123', '12/06/2022', 'Mandeep', '123', 'Mandeep@gmail.com', '2023-01-05 09:45:33');

-- --------------------------------------------------------

--
-- Table structure for table `studentrecord`
--

CREATE TABLE `studentrecord` (
  `id` int(11) NOT NULL,
  `RollNumber` varchar(255) DEFAULT NULL,
  `Course_ID` varchar(255) NOT NULL,
  `IssuingWalletAddress` varchar(255) NOT NULL,
  `TotalMarks` varchar(255) NOT NULL,
  `Sub_1` varchar(255) NOT NULL,
  `Sub_2` varchar(255) NOT NULL,
  `Total` varchar(255) NOT NULL,
  `Status` enum('Active','Inactive') DEFAULT NULL,
  `Created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `studentrecord`
--

INSERT INTO `studentrecord` (`id`, `RollNumber`, `Course_ID`, `IssuingWalletAddress`, `TotalMarks`, `Sub_1`, `Sub_2`, `Total`, `Status`, `Created_at`) VALUES
(1, '1111', '22', '0xee45a7dfe2ebdb8d113ec669f2682f27dac5fc31', '300', '200', '100', '100', 'Inactive', '2023-01-05 11:02:38');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `studentprofile`
--
ALTER TABLE `studentprofile`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `studentrecord`
--
ALTER TABLE `studentrecord`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `studentprofile`
--
ALTER TABLE `studentprofile`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `studentrecord`
--
ALTER TABLE `studentrecord`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

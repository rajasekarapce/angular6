-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Aug 27, 2018 at 02:08 PM
-- Server version: 10.1.19-MariaDB
-- PHP Version: 7.0.13

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `angular`
--

-- --------------------------------------------------------

--
-- Table structure for table `game`
--

CREATE TABLE `game` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `price` varchar(50) DEFAULT NULL,
  `CreateDate` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `game`
--

INSERT INTO `game` (`id`, `name`, `price`, `CreateDate`) VALUES
(1, 'crickets', '410', '2018-08-22 12:35:10'),
(2, 'CSK', '5000', '2018-08-21 15:23:03'),
(3, 'football', '600', '2018-08-10 18:15:01'),
(5, 'volleyball', '1000', '2018-08-10 18:14:58'),
(8, 'testing', '100', '2018-08-22 16:19:14');

-- --------------------------------------------------------

--
-- Table structure for table `usermgmt`
--

CREATE TABLE `usermgmt` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `username` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `token` varchar(255) DEFAULT NULL,
  `userimage` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `usermgmt`
--

INSERT INTO `usermgmt` (`id`, `name`, `username`, `password`, `token`, `userimage`) VALUES
(1, 'Sakthivel', 'sakthi', '123456', 'ten120', NULL),
(2, 'Raja', 'rajasts', '123456', '5f6a25e53de3058c61944c8e063e045c', NULL),
(3, 'Amarnath M', 'amar123', '12345', '2771881c12ecbecf6ebcd8f9c4105e83', NULL),
(4, 'mathi', 'mathi', '123456', '9ac4b09ce8a59f39dc582a5a922fd54a', NULL),
(5, 'Venkat', 'venkat', '123456', '63b0c42b42f35b3f6c5b234f77b24f53', NULL),
(13, 'Radha', 'radha', '123456', '6aabe4a3a46958e861051cae321da318', NULL);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `game`
--
ALTER TABLE `game`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `usermgmt`
--
ALTER TABLE `usermgmt`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `game`
--
ALTER TABLE `game`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
--
-- AUTO_INCREMENT for table `usermgmt`
--
ALTER TABLE `usermgmt`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

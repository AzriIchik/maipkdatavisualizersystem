-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Aug 04, 2019 at 08:41 AM
-- Server version: 10.3.16-MariaDB
-- PHP Version: 7.1.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `maipk_data_visualizer_system`
--

-- --------------------------------------------------------

--
-- Table structure for table `maiapkdata`
--

CREATE TABLE `maiapkdata` (
  `data_id` int(11) NOT NULL,
  `data_actualValue` decimal(15,2) DEFAULT NULL,
  `data_year` year(4) DEFAULT NULL,
  `data_zakat_type` int(3) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `maiapkdata`
--

INSERT INTO `maiapkdata` (`data_id`, `data_actualValue`, `data_year`, `data_zakat_type`) VALUES
(686, '277662.35', 2010, 4),
(687, '2564585.94', 2011, 4),
(688, '1934377.48', 2012, 4),
(689, '3247608.00', 2013, 4),
(690, '2351146.00', 2014, 4),
(691, '1096192.00', 2015, 4),
(692, '1042019.00', 2016, 4),
(693, '2588325.00', 2017, 4),
(702, '26863742.99', 2010, 3),
(703, '37639737.23', 2011, 3),
(704, '42912609.44', 2012, 3),
(705, '40015127.00', 2013, 3),
(706, '38135189.00', 2014, 3),
(707, '47472293.00', 2015, 3),
(708, '51655199.00', 2016, 3),
(709, '58167340.00', 2017, 3),
(710, '26863742.99', 2010, 5),
(711, '37639737.23', 2011, 5),
(712, '42912609.44', 2012, 5),
(713, '40015127.00', 2013, 5),
(714, '38135189.00', 2014, 5),
(715, '47472293.00', 2015, 5),
(716, '51655199.00', 2016, 5),
(717, '58167340.00', 2017, 5),
(762, '1993009.00', 2013, 7),
(763, '4563909.00', 2014, 7),
(764, '3797807.00', 2015, 7),
(765, '6185551.00', 2016, 7),
(766, '4585827.00', 2017, 7),
(777, '248364.45', 2010, 8),
(778, '344090.77', 2011, 8),
(779, '599168.58', 2012, 8),
(780, '26863742.99', 2010, 9),
(781, '37639737.23', 2011, 9),
(782, '42912609.44', 2012, 9),
(811, '25756315.00', 2004, 1),
(812, '25756315.00', 2005, 1),
(813, '33935661.00', 2006, 1),
(814, '40802916.00', 2007, 1),
(815, '57727213.00', 2008, 1),
(816, '62285431.00', 2009, 1),
(817, '70828296.00', 2010, 1),
(818, '87419398.00', 2011, 1),
(819, '103202759.00', 2012, 1),
(820, '109825143.00', 2013, 1),
(821, '114588532.29', 2014, 1),
(822, '132224707.37', 2015, 1),
(823, '140019980.75', 2016, 1),
(824, '150804553.00', 2017, 1),
(825, '40015127.00', 2013, 9),
(826, '38135189.00', 2014, 9),
(827, '47472293.00', 2015, 9),
(828, '51655199.00', 2016, 9),
(829, '58167340.00', 2017, 9),
(854, '26863742.99', 2010, 2),
(855, '37639737.23', 2011, 2),
(856, '42912609.44', 2012, 2),
(857, '40015127.00', 2013, 2),
(858, '38135189.00', 2014, 2),
(859, '47472293.00', 2015, 2),
(860, '51655199.00', 2016, 2),
(861, '48167340.00', 2017, 2);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `user_ID` int(200) NOT NULL,
  `user_name` varchar(100) DEFAULT NULL,
  `user_staffNo` varchar(10) DEFAULT NULL,
  `user_gender` enum('LELAKI','WANITA') DEFAULT NULL,
  `user_password` varchar(100) DEFAULT NULL,
  `user_phoneNum` varchar(15) DEFAULT NULL,
  `user_email` varchar(50) DEFAULT NULL,
  `user_type` enum('ADMIN','STAFF','TPMNGMNT') DEFAULT NULL,
  `user_status` tinyint(1) DEFAULT NULL,
  `user_adddate` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `user_authCode` varchar(200) DEFAULT NULL,
  `user_imgsrc` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`user_ID`, `user_name`, `user_staffNo`, `user_gender`, `user_password`, `user_phoneNum`, `user_email`, `user_type`, `user_status`, `user_adddate`, `user_authCode`, `user_imgsrc`) VALUES
(17, 'Mohammad Azri bin Perisiben', 'D201610725', 'LELAKI', 'e19d5cd5af0378da05f63f891c7467af', '014-6511665', 'admin@maiapk.com', 'ADMIN', 1, '2019-08-03 12:36:59', NULL, 'img/upload/5d1f1753198f28.15897459.png'),
(38, 'Dr Ibrahim bin Hashim', 'D201601725', 'LELAKI', 'e19d5cd5af0378da05f63f891c7467af', '012-12321321', 'topmanager@maiapk.com', 'TPMNGMNT', 1, '2019-08-03 15:11:33', NULL, 'img/upload/5d45a4253290c6.33322856.png'),
(40, 'Encik Rashidi ', 'D201601725', 'LELAKI', 'e19d5cd5af0378da05f63f891c7467af', '012-3233443', 'staff@maiapk.com', 'STAFF', 1, '2019-08-04 06:19:01', NULL, 'img/upload/5d4678d5501f33.46657034.png');

-- --------------------------------------------------------

--
-- Table structure for table `zakat`
--

CREATE TABLE `zakat` (
  `zakat_id` int(3) NOT NULL,
  `zakat_type` char(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `zakat`
--

INSERT INTO `zakat` (`zakat_id`, `zakat_type`) VALUES
(1, 'KUTIPAN'),
(2, 'PERNIAGAAN'),
(3, 'FITRAH'),
(4, 'TANAMAN'),
(5, 'HARTA'),
(7, 'KEUNTUNGAN_BANK_DAN_PENDAPATAN_LAIN'),
(8, 'EMAS_DAN_PERAK'),
(9, 'SIMPANAN');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `maiapkdata`
--
ALTER TABLE `maiapkdata`
  ADD PRIMARY KEY (`data_id`),
  ADD KEY `data_zakat_type` (`data_zakat_type`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`user_ID`);

--
-- Indexes for table `zakat`
--
ALTER TABLE `zakat`
  ADD PRIMARY KEY (`zakat_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `maiapkdata`
--
ALTER TABLE `maiapkdata`
  MODIFY `data_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=862;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `user_ID` int(200) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=41;

--
-- AUTO_INCREMENT for table `zakat`
--
ALTER TABLE `zakat`
  MODIFY `zakat_id` int(3) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `maiapkdata`
--
ALTER TABLE `maiapkdata`
  ADD CONSTRAINT `maiapkdata_ibfk_1` FOREIGN KEY (`data_zakat_type`) REFERENCES `zakat` (`zakat_id`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;


-- ----------------------------
--  Records of `t_users`
-- ----------------------------
BEGIN;
INSERT INTO `t_users` VALUES ('1', 'zliangyu@gmail.com', '18926030755', '老步', null, '2016-04-29 14:50:10');
COMMIT;
-- ----------------------------
--  Records of `t_users_profile`
-- ----------------------------
BEGIN;
INSERT INTO `t_users_profile` VALUES ('1', '周亮宇', null, null, null, null, null, null, '2015-12-04 13:07:25', '2015-12-04 13:07:28');
COMMIT;
-- ----------------------------
--  Records of `t_users_strategies_local`
-- ----------------------------
BEGIN;
INSERT INTO `t_users_strategies_local` VALUES ('1', '4bb1841303d9967f47d3dbf23f4c88ec2774928c0508003ceada8c84883e5b3793d543f6a67653b8e6e6927a268dd236e3106fac1c98e42ac72054af3f966378934d635a374d1714b08d4d1960e0b237355acf1e0c451a08769b31cc021483510ddb571689b4af9bb72185eb26cbb900e6d92cf0c87d844da246867b3b1be200350ac3d325e95054a06aa14e1745929edbc62e76ceb93743649a67141dc3bc8eca0d4cd4c0f00406585e6da4f776a8eb80fcaeca65465012b1e48e2a47fe0e77e6e4c1c87ad4ab98c0376b10dd68223bbe8b022f305981c764533e67e0c484a9efbb3e86904a79591a6223641e35f0be5cb279c85878e8af9e92eedff6c38cc1', 'c4b502f44a', '2016-04-22 11:14:46');
COMMIT;
-- ----------------------------
--  Records of `t_match_day`
-- ----------------------------
BEGIN;
INSERT INTO `t_match_day` (`id`,`categoryId`,`startTime`,`betEndTime`) VALUES ('1','1','2016-05-26 00:00:00','2016-05-25 23:00:00');
INSERT INTO `t_match_day` (`id`,`categoryId`,`startTime`,`betEndTime`) VALUES ('2','1','2016-05-27 00:00:00','2016-05-26 23:00:00');
INSERT INTO `t_match_day` (`id`,`categoryId`,`startTime`,`betEndTime`) VALUES ('3','2','2016-05-26 00:00:00','2016-05-25 23:00:00');
INSERT INTO `t_match_day` (`id`,`categoryId`,`startTime`,`betEndTime`) VALUES ('4','2','2016-05-27 00:00:00','2016-05-26 23:00:00');
COMMIT;
-- ----------------------------
--  Records of `t_contest`
-- ----------------------------
BEGIN;
INSERT INTO `t_contest` (`id`,`creatorId`,`matchDayId`,`ruleId`,`name`,`entriesLimit`,`entryPrice`,`status`) VALUES ('1','1','1','1','CONTEST_001','16','5','0');
INSERT INTO `t_contest` (`id`,`creatorId`,`matchDayId`,`ruleId`,`name`,`entriesLimit`,`entryPrice`,`status`) VALUES ('2','1','2','3','CONTEST_002','32','10','0');

INSERT INTO `t_contest` (`id`,`creatorId`,`matchDayId`,`ruleId`,`name`,`entriesLimit`,`entryPrice`,`status`) VALUES ('4','1','1','2','CONTEST_004','64','5','0');
INSERT INTO `t_contest` (`id`,`creatorId`,`matchDayId`,`ruleId`,`name`,`entriesLimit`,`entryPrice`,`status`) VALUES ('5','1','2','1','CONTEST_005','128','10','0');

INSERT INTO `t_contest` (`id`,`creatorId`,`matchDayId`,`ruleId`,`name`,`entriesLimit`,`entryPrice`,`status`) VALUES ('7','1','1','2','CONTEST_007','32','5','0');
INSERT INTO `t_contest` (`id`,`creatorId`,`matchDayId`,`ruleId`,`name`,`entriesLimit`,`entryPrice`,`status`) VALUES ('8','1','2','3','CONTEST_008','64','10','0');
COMMIT;
-- ----------------------------
--  Records of `t_game`
-- ----------------------------
BEGIN;
INSERT INTO `deerwar`.`t_game` (`id`, `categoryId`, `hostTeamId`, `guestTeamId`, `matchDayId`, `name`, `startTime`, `ext`, `createdTime`, `updatedTime`) VALUES ('1', '1', '1', '2', '1', '半决赛', '2016-05-26 00:00:00', '', '2016-05-12 00:00:00', '2016-05-12 00:00:00');
INSERT INTO `deerwar`.`t_game` (`id`, `categoryId`, `hostTeamId`, `guestTeamId`, `matchDayId`, `name`, `startTime`, `ext`, `createdTime`, `updatedTime`) VALUES ('2', '1', '3', '4', '1', '半决赛', '2016-05-26 02:00:00', '', '2016-05-12 00:00:00', '2016-05-12 00:00:00');
INSERT INTO `deerwar`.`t_game` (`id`, `categoryId`, `hostTeamId`, `guestTeamId`, `matchDayId`, `name`, `startTime`, `ext`, `createdTime`, `updatedTime`) VALUES ('3', '2', '1', '3', '3', '半决赛', '2016-05-27 00:00:00', '', '2016-05-12 00:00:00', '2016-05-12 00:00:00');
INSERT INTO `deerwar`.`t_game` (`id`, `categoryId`, `hostTeamId`, `guestTeamId`, `matchDayId`, `name`, `startTime`, `ext`, `createdTime`, `updatedTime`) VALUES ('4', '2', '2', '4', '3', '半决赛', '2016-05-27 02:00:00', '', '2016-05-12 00:00:00', '2016-05-12 00:00:00');
COMMIT;

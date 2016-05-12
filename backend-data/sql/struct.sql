/*
 Navicat Premium Data Transfer

 Source Server         : deerwar
 Source Server Type    : MySQL
 Source Server Version : 50624
 Source Host           : localhost
 Source Database       : deerwar

 Target Server Type    : MySQL
 Target Server Version : 50624
 File Encoding         : utf-8

 Date: 05/10/2016 12:09:59 PM
*/

SET NAMES utf8;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
--  Table structure for `t_category`
-- ----------------------------
DROP TABLE IF EXISTS `t_category`;
CREATE TABLE `t_category` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `sportId` int(10) unsigned NOT NULL,
  `name` varchar(255) NOT NULL,
  `durationTime` int(10) NOT NULL COMMENT '每场比赛持续时间',
  `minGameToStartContest` int(10) unsigned DEFAULT NULL COMMENT '可以开展 Contest 最低的比赛场数',
  `script` text COMMENT '比赛结果排名脚本（JS）',
  `logoUrl` varchar(255) COMMENT '赛事LOGO路径',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
--  Table structure for `t_common_cities`
-- ----------------------------
DROP TABLE IF EXISTS `t_common_cities`;
CREATE TABLE `t_common_cities` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `provinceId` int(10) unsigned NOT NULL,
  `name` varchar(255) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `provinceId` (`provinceId`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;

-- ----------------------------
--  Table structure for `t_common_provinces`
-- ----------------------------
DROP TABLE IF EXISTS `t_common_provinces`;
CREATE TABLE `t_common_provinces` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;

-- ----------------------------
--  Table structure for `t_contest`
-- ----------------------------
DROP TABLE IF EXISTS `t_contest`;
CREATE TABLE `t_contest` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `creatorId` int(10) unsigned NOT NULL,
  `matchDayId` int(10) unsigned NOT NULL,
  `ruleId` int(10) unsigned NOT NULL,
  `createdTime` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  `updatedTime` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  `name` varchar(255) DEFAULT NULL,
  `entriesLimit` int(10) unsigned DEFAULT NULL COMMENT '参加 Contest 的人数限制',
  `entryPrice` decimal(10,2) unsigned NOT NULL COMMENT '入场金额',
  `status` tinyint(2) unsigned DEFAULT '0' COMMENT 'Contest 状态（即将来临、正在进行、已经结束）',
  `priceSum` decimal(10,2) unsigned DEFAULT NULL COMMENT '该 Contest 比赛总金额',
  `completedTime` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;

-- ----------------------------
--  Table structure for `t_deerpoints_exchanges`
-- ----------------------------
DROP TABLE IF EXISTS `t_deerpoints_exchanges`;
CREATE TABLE `t_deerpoints_exchanges` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `deerPoints` int(10) NOT NULL,
  `deerCoins` int(10) NOT NULL,
  `isHot` tinyint(1) DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;

-- ----------------------------
--  Table structure for `t_deerpoints_exchanges_records`
-- ----------------------------
DROP TABLE IF EXISTS `t_deerpoints_exchanges_records`;
CREATE TABLE `t_deerpoints_exchanges_records` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `exchangeId` int(10) unsigned NOT NULL,
  `userId` int(10) unsigned NOT NULL,
  `deerPoints` int(10) NOT NULL,
  `deerCoins` int(10) NOT NULL,
  `createdTime` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;

-- ----------------------------
--  Table structure for `t_entry`
-- ----------------------------
DROP TABLE IF EXISTS `t_entry`;
CREATE TABLE `t_entry` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `contestId` int(10) unsigned NOT NULL,
  `userId` int(10) unsigned NOT NULL,
  `createdTime` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  `updatedTime` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;

-- ----------------------------
--  Table structure for `t_game`
-- ----------------------------
DROP TABLE IF EXISTS `t_game`;
CREATE TABLE `t_game` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `categoryId` int(10) unsigned NOT NULL,
  `hostTeamId` int(10) unsigned NOT NULL,
  `guestTeamId` int(10) unsigned NOT NULL,
  `matchDayId` int(10) unsigned NOT NULL,
  `name` varchar(255) NOT NULL,
  `startTime` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  `ext` text,
  `createdTime` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  `updatedTime` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
--  Table structure for `t_lineup`
-- ----------------------------
DROP TABLE IF EXISTS `t_lineup`;
CREATE TABLE `t_lineup` (
  `entryId` int(10) unsigned NOT NULL,
  `playerId` int(10) unsigned NOT NULL,
  `positionId` int(10) unsigned NOT NULL COMMENT '该球员在该队伍中的位置'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
--  Table structure for `t_match_day`
-- ----------------------------
DROP TABLE IF EXISTS `t_match_day`;
CREATE TABLE `t_match_day` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `categoryId` int(10) unsigned NOT NULL,
  `startTime` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  `betEndTime` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
--  Table structure for `t_player`
-- ----------------------------
DROP TABLE IF EXISTS `t_player`;
CREATE TABLE `t_player` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8mb4 NOT NULL,
  `positionId` int(10) unsigned NOT NULL,
  `avatar` varchar(512) DEFAULT NULL,
  `ext` text,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
--  Table structure for `t_player_score`
-- ----------------------------
DROP TABLE IF EXISTS `t_player_score`;
CREATE TABLE `t_player_score` (
  `playerId` int(10) unsigned NOT NULL,
  `gameId` int(10) unsigned NOT NULL,
  `record` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
--  Table structure for `t_rule`
-- ----------------------------
DROP TABLE IF EXISTS `t_rule`;
CREATE TABLE `t_rule` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `remark` text,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
--  Table structure for `t_rule_price`
-- ----------------------------
DROP TABLE IF EXISTS `t_rule_price`;
CREATE TABLE `t_rule_price` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `ruleId` int(10) unsigned NOT NULL,
  `name` varchar(255) NOT NULL,
  `remark` text,
  `script` text COMMENT '该规则的奖金分配方式（存储JS脚本）',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
--  Table structure for `t_sport`
-- ----------------------------
DROP TABLE IF EXISTS `t_sport`;
CREATE TABLE `t_sport` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
--  Table structure for `t_team`
-- ----------------------------
DROP TABLE IF EXISTS `t_team`;
CREATE TABLE `t_team` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8mb4 NOT NULL,
  `logoUrl` varchar(512) DEFAULT NULL,
  `ext` text,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
--  Table structure for `t_team_player`
-- ----------------------------
DROP TABLE IF EXISTS `t_team_player`;
CREATE TABLE `t_team_player` (
  `teamId` int(10) unsigned NOT NULL,
  `playerId` int(10) unsigned NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
--  Table structure for `t_users`
-- ----------------------------
DROP TABLE IF EXISTS `t_users`;
CREATE TABLE `t_users` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `email` varchar(255) DEFAULT NULL,
  `mobile` varchar(11) DEFAULT NULL,
  `nickName` varchar(512) CHARACTER SET utf8mb4 DEFAULT NULL COMMENT '用户昵称,mb4',
  `avatarUrl` varchar(512) DEFAULT NULL COMMENT '头像url地址',
  `createdTime` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;

-- ----------------------------
--  Table structure for `t_users_deercoins`
-- ----------------------------
DROP TABLE IF EXISTS `t_users_deercoins`;
CREATE TABLE `t_users_deercoins` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `deerCoins` int(10) unsigned NOT NULL DEFAULT '0',
  `userId` int(10) unsigned NOT NULL,
  PRIMARY KEY (`id`,`userId`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;

-- ----------------------------
--  Table structure for `t_users_deercoins_orders`
-- ----------------------------
DROP TABLE IF EXISTS `t_users_deercoins_orders`;
CREATE TABLE `t_users_deercoins_orders` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `userId` int(10) NOT NULL,
  `status` int(1) unsigned NOT NULL DEFAULT '0',
  `deerCoins` int(10) unsigned NOT NULL,
  `createdTime` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;

-- ----------------------------
--  Table structure for `t_users_deerpoints`
-- ----------------------------
DROP TABLE IF EXISTS `t_users_deerpoints`;
CREATE TABLE `t_users_deerpoints` (
  `userId` int(10) unsigned NOT NULL COMMENT '用户id',
  `deerPoints` int(10) unsigned NOT NULL COMMENT '点券',
  `createdTime` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) COMMENT '加入时间',
  `id` int(10) NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;

-- ----------------------------
--  Table structure for `t_users_profile`
-- ----------------------------
DROP TABLE IF EXISTS `t_users_profile`;
CREATE TABLE `t_users_profile` (
  `userId` int(10) unsigned NOT NULL COMMENT '用户id',
  `trueName` varchar(255) DEFAULT NULL COMMENT '真实姓名',
  `sex` tinyint(4) unsigned DEFAULT NULL COMMENT '性别 0 = 未指定 1= 男 2 ＝ 女',
  `qq` varchar(18) DEFAULT NULL COMMENT 'QQ号码',
  `exNumber` varchar(30) DEFAULT NULL COMMENT '分机号码',
  `country` varchar(30) DEFAULT NULL COMMENT '国家',
  `province` varchar(30) DEFAULT NULL COMMENT '省份',
  `city` varchar(30) DEFAULT NULL COMMENT '城市',
  `createdTime` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) COMMENT '用户资料创建时间',
  `updatedTime` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) COMMENT '用户资料更新时间',
  PRIMARY KEY (`userId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 ROW_FORMAT=COMPACT COMMENT='用户资料表';

-- ----------------------------
--  Table structure for `t_users_setting`
-- ----------------------------
DROP TABLE IF EXISTS `t_users_setting`;
CREATE TABLE `t_users_setting` (
  `userId` int(10) unsigned NOT NULL COMMENT '用户id',
  `lang` varchar(30) DEFAULT NULL COMMENT '首选语言',
  `createdTime` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) COMMENT '用户设置创建时间',
  `updatedTime` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) COMMENT '用户设置更新时间',
  PRIMARY KEY (`userId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 ROW_FORMAT=COMPACT COMMENT='用户设置表';

-- ----------------------------
--  Table structure for `t_users_strategies_local`
-- ----------------------------
DROP TABLE IF EXISTS `t_users_strategies_local`;
CREATE TABLE `t_users_strategies_local` (
  `userId` int(10) unsigned NOT NULL COMMENT '用户id',
  `password` varchar(512) NOT NULL COMMENT '加密后登录密码',
  `salt` varchar(256) NOT NULL COMMENT '加密使用的盐值',
  `createdTime` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) COMMENT '本地登录策略创建时间',
  PRIMARY KEY (`userId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='用户本地登录策略表';

-- ----------------------------
--  Table structure for `t_users_strategies_wechat`
-- ----------------------------
DROP TABLE IF EXISTS `t_users_strategies_wechat`;
CREATE TABLE `t_users_strategies_wechat` (
  `userId` int(10) unsigned NOT NULL COMMENT '用户id',
  `openid` varchar(64) NOT NULL COMMENT '用户在该微信公众号的openid',
  `uniqueId` varchar(64) DEFAULT NULL COMMENT '用户在该微信公众号所属的开发者账号的uniqueId',
  `createdTime` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) COMMENT '加入时间',
  PRIMARY KEY (`userId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
--  Table structure for `t_users_strategies_staff`
-- ----------------------------
DROP TABLE IF EXISTS `t_users_strategies_staff`;
CREATE TABLE `t_users_strategies_staff` (
  `userId` int(10) unsigned NOT NULL COMMENT '用户id',
  `staffName` varchar(255) NOT NULL COMMENT '测试用户名称',
  `createdTime` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) COMMENT '加入时间',
  PRIMARY KEY (`userId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;



-- ----------------------------
--  Table structure for `t_position`
-- ----------------------------
DROP TABLE IF EXISTS `t_position`;
CREATE TABLE `t_position` (
  `id` int(10) unsigned NOT NULL COMMENT 'position id',
  `name` varchar(64) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

SET FOREIGN_KEY_CHECKS = 1;

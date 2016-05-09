import mysql from '../stores/mysql'
const LEN = 72
const generateSql = () => {
  let command = 'INSERT INTO t_player VALUES'
  let _sql = [
    "(1, '曾诚', '门将', null, null),",
    "(2, '梅方', '后卫', null,  null),",
    "(3, '冯潇霆', '后卫',null, null),",
    "(4, '荣昊', '后卫',null, null),",
    "(5, '王上源','中场',null, null),",
    "(6, '郑智', '中场',null, null),",
    "(7, '阿兰',  '前锋' ,null, null),",
    "(8, '黄博文', '中场',null, null),",
    "(9, '高拉特', '中场',null, null),",
    "(10, '保利尼奥', '中场',null, null),",
    "(11, '李源一', '前锋',null, null),",
    "(12, '刘殿座', '门将',null, null),",
    "(13, '徐新', '中场',null, null),",
    "(14, '李学鹏', '后卫',null, null),",
    "(15, '于汉超', '中场',null, null),",
    "(16, '刘健', '中场',null, null),",
    "(17, '廖力生', '中场',null, null),",
    "(18, '郜林', '前锋',null, null),",
    "(19, '耿晓峰', '门将', null, null),",
    "(20, '柏佳骏', '后卫', null, null),",
    "(21, '李运秋', '后卫',null, null),",
    "(22, '李建滨', '后卫',null, null),",
    "(23, '金基熙','后卫',null, null),",
    "(24, '张璐', '中场',null, null),",
    "(25, '秦升',  '中场' ,null, null),",
    "(26, '莫雷诺', '中场',null, null),",
    "(27, '瓜林', '中场',null, null),",
    "(28, '曹赟定', '中场',null, null),",
    "(29, '登巴巴', '前锋',null, null),",
    "(30, '王寿挺', '中场',null, null),",
    "(31, '王赟', '中场',null, null),",
    "(32, '高迪', '前锋',null, null),",
    "(33, '王小林', '后卫',null, null),",
    "(34, '邱盛炯', '门将',null, null),",
    "(35, '马丁斯', '前锋',null, null),",
    "(36, '陶金', '后卫', null, null),",
    "(37, '韩镕泽', '门将', null, null),",
    "(38, '戴琳', '后卫', null, null),",
    "(39, '王彤', '后卫', null, null),",
    "(40, '多纳希门托', '后卫',null, null),",
    "(41, '郑铮', '后卫', null, null),",
    "(42, '吴兴涵', '中场' ,null, null),",
    "(43, '塔尔德利', '前锋' ,null, null),",
    "(44, '祖斯利尔', '中场',null, null),",
    "(45, '王永珀', '中场' ,null, null),",
    "(46, '蒿俊闵', '中场', null, null),",
    "(47, '阿洛伊西奥', '前锋',null, null),",
    "(48, '蒙蒂略', '中场',null, null),",
    "(49, '李微', '中场',null, null),",
    "(50, '刘彬彬', '中场',null, null),",
    "(51, '杨旭', '前锋',null, null),",
    "(52, '金敬道', '中场',null, null),",
    "(53, '刘震理', '门将', null, null),",
    "(54, '张弛', '门将', null, null),",
    "(55, '邓小飞', '门将', null, null),",
    "(56, '丁捷', '后卫', null, null),",
    "(57, '刘宇', '后卫', null, null),",
    "(58, '米洛维奇', '后卫', null, null),",
    "(59, '郑又荣', '中场', null, null),",
    "(60, '吴庆', '中场', null, null),",
    "(61, '徐洋', '中场', null, null),",
    "(62, '王栋', '中场', null, null),",
    "(63, '彭欣力', '中场', null, null),",
    "(64, '费尔南多', '中场', null, null),",
    "(65, '吉利奥蒂', '前锋', null, null),",
    "(66, '隋维杰', '门将', null, null),",
    "(67, '崔永哲', '中场', null, null),",
    "(68, '刘卫东', '前锋', null, null),",
    "(69, '维埃拉', '前锋', null, null),",
    "(70, '冯劲', '中场', null, null),",
    "(71, '谭望嵩', '后卫', null, null),",
    "(72, '隋东陆', '后卫', null, null)"
  ]
  let sql = command
  for (let i = 0; i < LEN; i++) {
    sql += _sql[i]
  }
  console.log(sql)
  return sql
}
const exec = async () => {
  const sql = generateSql()
  await mysql.query(sql)
  return Promise.resolve(true)
}
export default exec

import mysql from '../stores/mysql'
import { setId } from '../stores/jsondb'
const LEN = 72
const name = 'player'
const generateSql = () => {
  let command = 'INSERT INTO t_player VALUES'
  let _sql = [
    "(1, '曾诚', 1, null, null),",
    "(2, '梅方', 4, null,  null),",
    "(3, '冯潇霆', 4,null, null),",
    "(4, '荣昊', 4,null, null),",
    "(5, '王上源',3,null, null),",
    "(6, '郑智', 3,null, null),",
    "(7, '阿兰',  2 ,null, null),",
    "(8, '黄博文', 3,null, null),",
    "(9, '高拉特', 3,null, null),",
    "(10, '保利尼奥', 3,null, null),",
    "(11, '李源一', 2,null, null),",
    "(12, '刘殿座', 1,null, null),",
    "(13, '徐新', 3,null, null),",
    "(14, '李学鹏', 4,null, null),",
    "(15, '于汉超', 3,null, null),",
    "(16, '刘健', 3,null, null),",
    "(17, '廖力生', 3,null, null),",
    "(18, '郜林', 2,null, null),",
    "(19, '耿晓峰', 1, null, null),",
    "(20, '柏佳骏', 4, null, null),",
    "(21, '李运秋', 4,null, null),",
    "(22, '李建滨', 4,null, null),",
    "(23, '金基熙',4,null, null),",
    "(24, '张璐', 3,null, null),",
    "(25, '秦升',  3 ,null, null),",
    "(26, '莫雷诺', 3,null, null),",
    "(27, '瓜林', 3,null, null),",
    "(28, '曹赟定', 3,null, null),",
    "(29, '登巴巴', 2,null, null),",
    "(30, '王寿挺', 3,null, null),",
    "(31, '王赟', 3,null, null),",
    "(32, '高迪', 2,null, null),",
    "(33, '王小林', 4,null, null),",
    "(34, '邱盛炯', 1,null, null),",
    "(35, '马丁斯', 2,null, null),",
    "(36, '陶金', 4, null, null),",
    "(37, '韩镕泽', 1, null, null),",
    "(38, '戴琳', 4, null, null),",
    "(39, '王彤', 4, null, null),",
    "(40, '多纳希门托', 4,null, null),",
    "(41, '郑铮', 4, null, null),",
    "(42, '吴兴涵', 3 ,null, null),",
    "(43, '塔尔德利', 2 ,null, null),",
    "(44, '祖斯利尔', 3,null, null),",
    "(45, '王永珀', 3 ,null, null),",
    "(46, '蒿俊闵', 3, null, null),",
    "(47, '阿洛伊西奥', 2,null, null),",
    "(48, '蒙蒂略', 3,null, null),",
    "(49, '李微', 3,null, null),",
    "(50, '刘彬彬', 3,null, null),",
    "(51, '杨旭', 2,null, null),",
    "(52, '金敬道', 3,null, null),",
    "(53, '刘震理', 1, null, null),",
    "(54, '张弛', 1, null, null),",
    "(55, '邓小飞', 1, null, null),",
    "(56, '丁捷', 4, null, null),",
    "(57, '刘宇', 4, null, null),",
    "(58, '米洛维奇', 4, null, null),",
    "(59, '郑又荣', 3, null, null),",
    "(60, '吴庆', 3, null, null),",
    "(61, '徐洋', 3, null, null),",
    "(62, '王栋', 3, null, null),",
    "(63, '彭欣力', 3, null, null),",
    "(64, '费尔南多', 3, null, null),",
    "(65, '吉利奥蒂', 2, null, null),",
    "(66, '隋维杰', 1, null, null),",
    "(67, '崔永哲', 3, null, null),",
    "(68, '刘卫东', 2, null, null),",
    "(69, '维埃拉', 2, null, null),",
    "(70, '冯劲', 3, null, null),",
    "(71, '谭望嵩', 4, null, null),",
    "(72, '隋东陆', 4, null, null)"
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
  setId({ name, id: LEN + 1 })
  return Promise.resolve(true)
}
export default exec

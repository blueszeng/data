import Mock from 'mockjs'
import mysql from '../stores/mysql'
import { setId } from '../stores/jsondb'
const Random = Mock.Random
 //
const LEN = 2
const name = 'catgory'
const generateSql = () => {
  let command = 'INSERT INTO t_category VALUES'
  let _sql = [
    `(1, 1, '中超', 115, 3 ,'${Random.word()}.js',''),`,
    `(2, 1, '中甲', 115, 3 ,'${Random.word()}.js','')`
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
  setId({name, id: LEN + 1})
  return Promise.resolve(true)
}
export default exec

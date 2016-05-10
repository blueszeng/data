import mysql from '../stores/mysql'
import { setId } from '../stores/jsondb'
 //
const LEN = 4
const name = 'postion'
const generateSql = () => {
  let command = 'INSERT INTO t_team VALUES'
  let _sql = [
    "(1, '门将')",
    "(2, '前锋')",
    "(3, '中场')",
    "(4, '后卫')"
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

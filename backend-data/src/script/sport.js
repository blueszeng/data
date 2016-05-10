import mysql from '../stores/mysql'
import { setId } from '../stores/jsondb'
 //
const LEN = 2
const name = 'sport'
const generateSql = () => {
  let command = 'INSERT INTO t_sport VALUES'
  let _sql = [
    "(1, '足球')",
    "(2, '篮球')"
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

import mysql from '../stores/mysql'
import { setId } from '../stores/jsondb'
 //
const LEN = 2
const name = 'rule'
const generateSql = () => {
  let command = 'INSERT INTO t_rule VALUES'
  let _sql = [
    "(1, '第一名', '第一名有奖'),",
    "(2, '前三名', '前三名有奖')，",
    "(3, '前50％', '前50％有奖')"
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

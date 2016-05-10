import mysql from '../stores/mysql'
import { setId } from '../stores/jsondb'
//
const LEN = 2
const name = 'rulePrice'
const generateSql = () => {
  let command = 'INSERT INTO t_rule_price VALUES'
  let _sql = [
    "(1, 1, '规则价格名1','','aa.js'),",
    "(2, 2, '规则价格名2','','bb.js'),"
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

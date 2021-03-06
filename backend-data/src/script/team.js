import Mock from 'mockjs'
import mysql from '../stores/mysql'
import { setId } from '../stores/jsondb'
const Random = Mock.Random
const LEN = 4
const name = 'team'
const generateSql = () => {
  let url = []
  for (let i = 0; i < LEN; i++) {
    url.push(Random.url())
  }
  let command = 'INSERT INTO t_team VALUES'
  let _sql = [
    `(1, '广州恒大', '${url[0]}', null),`,
    `(2, '上海申花', '${url[1]}', null),`,
    `(3, '山东鲁能', '${url[2]}', null),`,
    `(4, '北京国安', '${url[3]}', null)`
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

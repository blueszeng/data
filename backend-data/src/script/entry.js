import Mock from 'mockjs'
import mysql from '../stores/mysql'
import { getId, setId } from '../stores/jsondb'
import { now } from './task/date'
const Random = Mock.Random
 //
const LEN = 1
const name = 'entry'
const Entry = {
  id: getId(name),
  contestId: Random.integer(1, getId('contest') - 1),
  userId: Random.integer(1, getId('user') - 1),
  createdTime: now(),
  updatedTime: now()
}

const generateSql = () => {
  let command = 'INSERT INTO t_entry VALUES'
  let _sql = [
    `(
       ${Entry.id},
       ${Entry.contestId},
       ${Entry.userId},
       ${Entry.createdTime},
       ${Entry.updatedTime}
     )`
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
  setId({name, id: getId(name) + 1})
  return Promise.resolve(true)
}
export default exec

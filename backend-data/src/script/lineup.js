import Mock from 'mockjs'
import mysql from '../stores/mysql'
import { getId, setId } from '../stores/jsondb'
const Random = Mock.Random
 //
const LEN = 1
const name = 'lineup'
const Lineup = {
  entryId: getId(name),
  playerId: Random.integer(1, getId('player') - 1),
  positionId: Random.integer(1, getId('postion') - 1)
}

const generateSql = () => {
  let command = 'INSERT INTO t_lineup VALUES'
  let _sql = [
    `(
       ${Lineup.entryId},
       ${Lineup.playerId},
       ${Lineup.positionId}
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

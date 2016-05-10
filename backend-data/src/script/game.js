import Mock from 'mockjs'
import mysql from '../stores/mysql'
import { getId, setId } from '../stores/jsondb'
import { now } from './task/date'
import { matchDayTime } from './config/config'
const Random = Mock.Random
 //
const LEN = 1
const name = 'game'
const generateSql = (matchDaySeason) => {
  const Game = {
    id: getId(name),
    categoryId: Random.integer(1, getId('category') - 1),
    hostTeamId: Random.integer(1, getId('team') - 1),
    guestTeamId: Random.integer(1, getId('team') - 1),
    name: Random.ctitle(3, 10),
    startTime: matchDayTime.startTime[matchDaySeason - 1],
    ext: '',
    createdTime: now(),
    updatedTime: now()
  }
  let command = 'INSERT INTO t_game VALUES'
  let _sql = [
    `(
       ${Game.id} ,
       ${Game.categoryId} ,
       ${Game.hostTeamId} ,
       ${Game.guestTeamId},
       '${Game.name}',
       ${Game.startTime},
       '${Game.startTime}',
       ${Game.createdTime},
       ${Game.updatedTime}
     )`
  ]
  let sql = command
  for (let i = 0; i < LEN; i++) {
    sql += _sql[i]
  }
  console.log(sql)
  return sql
}
const exec = async (matchDaySeason) => {
  const sql = generateSql(matchDaySeason)
  await mysql.query(sql)
  setId({name, id: getId(name) + 1})
  return Promise.resolve(true)
}
export default exec

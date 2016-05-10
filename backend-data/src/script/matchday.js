import Mock from 'mockjs'
import mysql from '../stores/mysql'
import { getId, setId } from '../stores/jsondb'
import { setTime } from './task/date'
import { matchDayTime } from './config/config'
const Random = Mock.Random
 //
const LEN = 2
const name = 'matchday'
const generateSql = () => {
  let _sql = []
  [0, 1].forEach((id) => {
    const startTime = matchDayTime.startTime[id]
    const betEndTime = matchDayTime.betEndTime[id]
    const MathDay = {
      id: getId(name),
      categoryId: Random.integer(1, getId('catgory') - 1),
      startTime: setTime(startTime.hours, startTime.minutes, startTime.second),
      betEndTime: setTime(betEndTime.hours, betEndTime.minutes, betEndTime.second)
    }
    _sql.push(`(
       ${MathDay.id},
       ${MathDay.categoryId},
       ${Random.pick(MathDay.startTime)},
       ${Random.pick(MathDay.betEndTime)}
     )`)
  })
  let command = 'INSERT INTO t_match_day VALUES'
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

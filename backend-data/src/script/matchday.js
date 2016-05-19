import Mock from 'mockjs'
import mysql from '../stores/mysql'
import { getId, setId, setMatchDayLen, getMatchDayLen } from '../stores/jsondb'
import { nowAddtime } from '../task/date'
const Random = Mock.Random
 //
let LEN = 2
const name = 'matchday'
const generateSql = () => {
  if (getMatchDayLen(name) === 0) {
    LEN = 4
  }
  let _sql = []
  let selectListSub = []
  for (let i = 0; i < LEN; i++) {
    selectListSub.push(i)
  }
  selectListSub.forEach((id, i) => {
    //
    const date = [15 * 60 + 30, 20 * 60 + 30, 39 * 60 + 30, 44 * 60 + 30]
    let index = i
    if (LEN === 2) {
      index = i + 2
    }
    const randtimer = date[index]
    const MathDay = {
      id: getId(name) + id,
      categoryId: 1,
      startTime: nowAddtime(randtimer),
      betEndTime: nowAddtime(randtimer + 30)
    }
    if (id === selectListSub[selectListSub.length - 1]) {
      _sql.push(`(
         ${MathDay.id},
         ${MathDay.categoryId},
         '${Random.pick(MathDay.startTime)}',
         '${Random.pick(MathDay.betEndTime)}'
       )`)
    } else {
      _sql.push(`(
          ${MathDay.id},
          ${MathDay.categoryId},
          '${Random.pick(MathDay.startTime)}',
          '${Random.pick(MathDay.betEndTime)}'
      ),`)
    }
  })
  let command = 'INSERT INTO t_match_day VALUES'
  let sql = command
  for (let i = 0; i < LEN; i++) {
    sql += _sql[i]
  }

  return sql
}
const exec = async () => {
  const sql = generateSql()
  console.log(sql)
  await mysql.query(sql)
  setId({name, id: getId(name) + LEN})
  setMatchDayLen({name, len: LEN})
  return Promise.resolve(true)
}
export default exec

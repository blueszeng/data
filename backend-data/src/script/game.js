import Mock from 'mockjs'
import mysql from '../stores/mysql'
import { getId, setId } from '../stores/jsondb'
import { now, setTime } from '../task/date'
import { matchDayTime } from '../config/config'
import { startGame } from '../game/game'
const Random = Mock.Random
const sTime = matchDayTime.startTime
const eTime = matchDayTime.startTime
 //
const LEN = 1
const name = 'game'
const generateSql = (matchDaySeason) => {
  const Game = {
    id: getId(name),
    categoryId: Random.integer(1, getId('catgory') - 1),
    hostTeamId: Random.integer(1, getId('team') - 1),
    guestTeamId: Random.integer(3, getId('team') - 1),
    matchDayId: (getId('matchday') - 3) + matchDaySeason,
    name: Random.ctitle(3, 10),
    startTime: setTime(sTime[matchDaySeason - 1].hours, sTime[matchDaySeason - 1].minutes,sTime[matchDaySeason - 1].second),
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
       ${Game.matchDayId},
       '${Game.name}',
       '${Game.startTime}',
       '${Game.ext}',
       '${Game.createdTime}',
       '${Game.updatedTime}'
     )`
  ]
  let sql = command
  for (let i = 0; i < LEN; i++) {
    sql += _sql[i]
  }
//  console.log(sql)
  return {
    sql,
    startinfo: {
      gameId: Game.id,
      hostTeamId: Game.hostTeamId,
      guetsTeamId: Game.guestTeamId,
      betEndTime: eTime[matchDaySeason - 1]
    }
  }
}
const exec = async (matchDaySeason) => {
  let sql = generateSql(matchDaySeason)
  const startinfo = sql.startinfo
  sql = sql.sql
//  await mysql.query(sql)
  setId({name, id: getId(name) + 1})
  startGame(startinfo.gameId, startinfo.hostTeamId, startinfo.guetsTeamId, startinfo.betEndTime)
  return Promise.resolve(true)
}

export default exec

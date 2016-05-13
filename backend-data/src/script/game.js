import Mock from 'mockjs'
import mysql from '../stores/mysql'
import { getId, setId } from '../stores/jsondb'
import { now, setTime } from '../task/date'
import { startGame } from '../game/game'
import { gameRunTime, mathDayCrerateNuberList } from '../config/config'
const Random = Mock.Random
const sTime = gameRunTime.startTime
const eTime = gameRunTime.endTime
 //
const LEN = 1
const name = 'game'
const generateSql = (gameIdNumber) => {
  const Game = {
    id: getId(name),
    categoryId: Random.integer(1, getId('catgory') - 1),
    hostTeamId: Random.integer(1, Math.floor((getId('team') - 1) / 2)),
    guestTeamId: Random.integer(Math.floor((getId('team') - 1) / 2) + 1, getId('team') - 1),
    matchDayId: (getId('matchday') - (mathDayCrerateNuberList.length + 1)) + gameIdNumber,
    name: '半场赛',
    startTime: setTime(sTime[gameIdNumber - 1].hours, sTime[gameIdNumber - 1].minutes, sTime[gameIdNumber - 1].second),
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
      endTime: eTime[gameIdNumber - 1]
    }
  }
}
const exec = async (gameIdNumber) => {
  let sql = generateSql(gameIdNumber)
  const startinfo = sql.startinfo
  await mysql.query(sql.sql)
  setId({name, id: getId(name) + 1})
  startGame(startinfo.gameId, startinfo.hostTeamId, startinfo.guetsTeamId, startinfo.endTime)
  return Promise.resolve(true)
}

export default exec

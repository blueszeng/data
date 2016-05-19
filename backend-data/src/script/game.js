import Mock from 'mockjs'
import mysql from '../stores/mysql'
import { getId, setId, getMatchDayLen } from '../stores/jsondb'
import { now } from '../task/date'
import { getMatchDayByMatchDayId } from '../model/player'
const Random = Mock.Random

 //
let LEN = 0
const name = 'game'
// const catgoryLen = mathDayCrerateNuberList
const generateSql = async () => {
  LEN = getMatchDayLen('matchday')
  const matchId = getId('matchday')
  const matchInfo = await getMatchDayByMatchDayId(matchId - LEN)
  let command = 'INSERT INTO t_game VALUES'
  let _sql = []

  matchInfo.forEach((matchday, i) => {
    const Game = {
      id: getId(name) + i,
      categoryId: 1,
      hostTeamId: Random.integer(1, Math.floor((getId('team') - 1) / 2)),
      guestTeamId: Random.integer(Math.floor((getId('team') - 1) / 2) + 1, getId('team') - 1),
      matchDayId: matchday.id,
      name: '半场赛',
      startTime: now(matchday.startTime),
      hostTeamScore: null,
      guestTeamScore: null,
      ext: '',
      createdTime: now(),
      updatedTime: now()
    }
    if (matchday === matchInfo[matchInfo.length - 1]) {
      _sql.push(`(
         ${Game.id} ,
         ${Game.categoryId} ,
         ${Game.hostTeamId} ,
         ${Game.guestTeamId},
         ${Game.matchDayId},
         '${Game.name}',
         '${Game.startTime}',
         ${Game.hostTeamScore},
         ${Game.guestTeamScore},
         '${Game.ext}',
         '${Game.createdTime}',
         '${Game.updatedTime}'
       )`)
    } else {
      _sql.push(`(
         ${Game.id} ,
         ${Game.categoryId} ,
         ${Game.hostTeamId} ,
         ${Game.guestTeamId},
         ${Game.matchDayId},
         '${Game.name}',
         '${Game.startTime}',
         ${Game.hostTeamScore},
         ${Game.guestTeamScore},
         '${Game.ext}',
         '${Game.createdTime}',
         '${Game.updatedTime}'
       ),`)
    }
  })
  let sql = command
  for (let i = 0; i < LEN; i++) {
    sql += _sql[i]
  }
//  console.log(_sql)
  return Promise.resolve(sql)
}
const exec = async () => {
  let sql = await generateSql()
  console.log(sql)
  await mysql.query(sql)
  setId({name, id: getId(name) + LEN})
  return Promise.resolve(true)
}

export default exec

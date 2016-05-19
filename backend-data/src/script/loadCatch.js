import Mock from 'mockjs'
import { catcheStoreHash, getCatche } from '../model/redis'
import insertToSql from './playerscore'
const Random = Mock.Random

const getfootballTeamCatchInfo = (team) => {
  const _team = {}
  for (let i = 0; i < team.length; i++) {
    const footballInfo = {
      shooting: Random.integer(1, 100),
      Penalty: Random.integer(1, 100),
      heat: Random.integer(1, 100)
    }
    _team[team[i].playerId] = JSON.stringify(footballInfo)
  }
  return _team
}

export const setTeamToCatch = (playerInfo, gameId) => {
  return async () => {
    const hostCatchInfo = getfootballTeamCatchInfo(playerInfo.hostPlayer.data)
    const guestCatchInfo = getfootballTeamCatchInfo(playerInfo.guestPlayer.data)
    await catcheStoreHash(`${gameId}-${playerInfo.hostPlayer.teamId}`, hostCatchInfo)
    await catcheStoreHash(`${gameId}-${playerInfo.guestPlayer.teamId}`, guestCatchInfo)
    return Promise.resolve(true)
  }
}
export const saveTeamScoreToSql = async (playerInfo, gameId) => {
  const hostTeamScoreList = await getCatche(`${gameId}-${playerInfo.hostPlayer.teamId}`)
  await insertToSql(hostTeamScoreList, gameId)
  const guestteamScoreList = await getCatche(`${gameId}-${playerInfo.guestPlayer.teamId}`)
  await insertToSql(guestteamScoreList, gameId)
  return Promise.resolve(true)
}

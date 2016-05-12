import Mock from 'mockjs'
import { getTeamPlayerByTeamId } from '../model/player'
import { catcheStoreHash, getCatche } from '../model/redis'
import insertToSql from './playerscore'
const Random = Mock.Random

let initInfo = {
  HostTeam: {},
  GuestTeam: {}

}
const getPlayerIdInit = async (teamId) => {
  const team = await getTeamPlayerByTeamId(teamId)
  return Promise.resolve(team)
}

export const InitCatch = async (gameId, hostTeamId, guetsTeamId) => {
  initInfo.HostTeam = await getPlayerIdInit(hostTeamId)
  initInfo.GuestTeam = await getPlayerIdInit(guetsTeamId)
  initInfo.gameId = gameId
  initInfo.hostTeamId = hostTeamId
  initInfo.guetsTeamId = guetsTeamId
  return Promise.resolve(true)
}

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

export const setTeamToCatch = async () => {
  const hostCatchInfo = getfootballTeamCatchInfo(initInfo.HostTeam)
  const guestCatchInfo = getfootballTeamCatchInfo(initInfo.GuestTeam)
  await catcheStoreHash(`${initInfo.gameId}-${initInfo.hostTeamId}`, hostCatchInfo)
  await catcheStoreHash(`${initInfo.gameId}-${initInfo.guetsTeamId}`, guestCatchInfo)
  return Promise.resolve(true)
}
export const saveTeamScoreToSql = async () => {
  const hostTeamScoreList = await getCatche(`${initInfo.gameId}-${initInfo.hostTeamId}`)
  await insertToSql(hostTeamScoreList, initInfo.gameId)
  const guetsteamScoreList = await getCatche(`${initInfo.gameId}-${initInfo.guetsTeamId}`)
  await insertToSql(guetsteamScoreList, initInfo.gameId)
  return Promise.resolve(true)
}

// import Mock from 'mockjs'
import { getTeamPlayerByTeamId } from '../model/player'
import { catcheStoreHash, getCatche } from '../model/redis'
import insertToSql from './playerscore'
//  const Random = Mock.Random

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
  const footballInfo = {
    id: 1,
    contestId: 1
  }
  for (let i = 0; i < team.length; i++) {
    _team[team[i].playerId] = JSON.stringify(footballInfo)
  }
  return _team
}

export const setTeamToCatch = async () => {
  const hostCatchInfo = getfootballTeamCatchInfo(initInfo.HostTeam)
  const guestCatchInfo = getfootballTeamCatchInfo(initInfo.GuestTeam)

  await catcheStoreHash(`${initInfo.gameId}-${initInfo.hostTeamId}`, hostCatchInfo)
  await catcheStoreHash(`${initInfo.gameId}-${initInfo.guetsTeamId}`, guestCatchInfo)
  console.log("--------------------->")
//  console.log (`${initInfo.gameId}-${initInfo.hostTeamId}`, `${initInfo.gameId}-${initInfo.guetsTeamId})
  return Promise.resolve(true)
}
export const saveTeamScoreToSql = async () => {
  const hostTeamScoreList = await getCatche(`${initInfo.gameId}-${initInfo.hostTeamId}`)
//  console.log(`${initInfo.gameId}-${initInfo.hostTeamId}`, hostTeamScoreList)
  await insertToSql(hostTeamScoreList, initInfo.gameId)
  const guetsteamScoreList = await getCatche(`${initInfo.gameId}-${initInfo.guetsTeamId}`)
  await insertToSql(guetsteamScoreList, initInfo.gameId)
  return Promise.resolve(true)
}

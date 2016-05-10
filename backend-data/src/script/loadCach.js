// import Mock from 'mockjs'
import { getTeamPlayerByTeamId } from '../model/player'
import { now } from './task/date'
import { catcheStoreHash } from '../model/redis'
//  const Random = Mock.Random

let initInfo = {
  HostTeam: {},
  GuestTeam: {}

}
const getPlayerIdInit = async (teamId) => {
  const team = await getTeamPlayerByTeamId(teamId)
  return team
}

export const InitCatch = (gameId, hostTeamId, guetsTeamId) => {
  initInfo.HostTeam = getPlayerIdInit(hostTeamId)
  initInfo.GuestTeam = getPlayerIdInit(guetsTeamId)
  initInfo.gameId = gameId
  initInfo.hostTeamId = hostTeamId
  initInfo.guetsTeamId = guetsTeamId
}

const getfootballTeamCatchInfo = (team) => {
  const _team = {}
  const footballInfo = {
    id: 1,
    contestId: 1,
    userId: 1,
    createdTime: now(),
    updatedTime: now()
  }
  for (let i = 0; i < team.length; i++) {
    _team[team[i]] = JSON.stringify(footballInfo)
  }
  return _team
}

export const setTeamToCatch = async () => {
  const hostCatchInfo = getfootballTeamCatchInfo(initInfo.HostTeam)
  const guestCatchInfo = getfootballTeamCatchInfo(initInfo.GuestTeam)
  catcheStoreHash(`${initInfo.gameId}-${initInfo.hostTeamId}`, hostCatchInfo)
  catcheStoreHash(`${initInfo.gameId}-${initInfo.guetsTeamId}`, guestCatchInfo)
}

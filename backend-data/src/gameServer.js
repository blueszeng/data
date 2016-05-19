
import { createonlyJob, createtimerJob } from './task/task'
import { getGameByMatchDaylen, getPlayerByTeamId, setGameScore } from './model/player'
import { getId, getMatchDayLen } from './stores/jsondb'
import { saveTeamScoreToSql, setTeamToCatch } from './script/loadCatch'
import _ from 'lodash'
import Mock from 'mockjs'
const Random = Mock.Random

let gameStartTimeList = []
let loadGameList = []
let clearTimeFlag = {
  loadflag: [],
  gameflag: []
}

const TimerGetGameStartTime = async () => {
  const len = getMatchDayLen({name: 'matchday'})
  const matchId = getId({name: 'matchday'})
  gameStartTimeList = await getGameByMatchDaylen(matchId - len)
}

const getPlayer = async (TeamId) => {
  const playerInfo = await getPlayerByTeamId(TeamId)
  let playerType = {}
  playerType['1'] = []
  playerType['2'] = []
  playerType['3'] = []
  playerType['4'] = []
  for (let player of playerInfo) {
    playerType[player.positionTypeId].push(player.id)
  }
  let players = {}
  players.teamId = TeamId
  players.data = []
  const Temp = [4, 2, 4, 1]
  Temp.forEach((number, i) => {
    const len = Random.integer(0, playerType[i + 1].length - 1)
    i = i + 1
    if (len + number <= playerType[i].length - 1) {
      for (let j = len; j < len + number; j++) {
        players.data.push({playerId: playerType[i][j]})
      }
    } else if (len - number >= 0) {
      for (let j = len; j > len - number; j--) {
        players.data.push({playerId: playerType[i][j]})
      }
    } else {
      for (let j = 0; j < number; j++) {
        players.data.push({playerId: playerType[i][j]})
      }
    }
  })
  return players
}

const isEqualTime = (oldTime, newTime) => { return oldTime < newTime }
const testStartingLineup = async () => {
  for (let key in gameStartTimeList) {
   // select game
    let value = gameStartTimeList[key]
    const oldTime = Date.parse(new Date(value.startTime)) / 1000 - 60
    const newTime = Date.parse(new Date()) / 1000
    if (isEqualTime(oldTime, newTime)) {
      const hostPlayer = await getPlayer(value.hostTeamId)
      const guestPlayer = await getPlayer(value.guestTeamId)
      loadGameList.push({id: key, gameId: value.id, startTime: value.startTime, data: {hostPlayer, guestPlayer}})
      clearTimeFlag.loadflag.push(key)
    }
  }
   // clear gameStartTimeList
  if (clearTimeFlag.loadflag.length > 0) {
    for (let gameSub of clearTimeFlag.loadflag) {
      delete gameStartTimeList[gameSub]
    }
    _.compact(gameStartTimeList)
    clearTimeFlag.loadflag = []
  }

  await CountdownGame()
}

const overGame = (playerInfo, gameId) => {
  return async (job) => {
    job.stop()
    await saveTeamScoreToSql(playerInfo, gameId)
    await setGameScore(gameId, Random.integer(1, 5), Random.integer(1, 5))
    Promise.resolve()
  }
}

const CountdownGame = async () => {
  for (let key in loadGameList) {
    let value = loadGameList[key]
    const oldTime = Date.parse(new Date(value.startTime)) / 1000
    const newTime = Date.now() / 1000
    const stopGameTimeTamp = Date.parse(new Date()) + 1 * 1000 * 5
    // Date.parse(new Date(value.startTime)) + 115 * 1000 * 60
    const stopGameTime = new Date(stopGameTimeTamp)
    if (isEqualTime(oldTime, newTime)) {
      clearTimeFlag.gameflag.push(key)
      // start game
      createtimerJob(setTeamToCatch(value.data, value.gameId)).then((job) => {
        createonlyJob(overGame(value.data, value.gameId),
          {
            second: stopGameTime.getSeconds(),
            minute: stopGameTime.getMinutes(),
            hour: stopGameTime.getHours()
          },
        job)
      })
    }
  }

  // clear gameStartTimeList
  if (clearTimeFlag.gameflag.length > 0) {
    for (let gameSub of clearTimeFlag.gameflag) {
      delete loadGameList[gameSub]
    }
    _.compact(loadGameList)
    clearTimeFlag.gameflag = []
  }
}
// everyday 9:00  dateabase load startTime
createtimerJob(TimerGetGameStartTime, {
  second: 0,
  minute: 0,
  hour: 9
})
createtimerJob(testStartingLineup)
createtimerJob(CountdownGame)

import { createtimerJob, createonlyJob } from '../task/task'
import { InitCatch, setTeamToCatch, saveTeamScoreToSql } from '../script/loadCatch'
import { gameRunTime } from '../config/config'
const startTimeobj = gameRunTime.startTime


export const initGameWaitStart = async (gameId, hostTeamId, guetsTeamId, endTime, gameIdNumber) => {


}

export const initGameWaitStart = async (gameId, hostTeamId, guetsTeamId, endTime, gameIdNumber) => {
  await InitCatch(gameId, hostTeamId, guetsTeamId)
  createonlyJob(
    async (job) => {
      createtimerJob(setTeamToCatch).then((job) => {
      //  倒计时控制关闭定时器
        createonlyJob(overGame,
          {
            second: endTime.second,
            minute: endTime.minutes,
            hour: endTime.hours
          },
        job)
      })
    },
    {
      second: startTimeobj[gameIdNumber - 1].second,
      minute: startTimeobj[gameIdNumber - 1].minutes,
      hour: startTimeobj[gameIdNumber - 1].hours
    })
}

export const overGame = async (job) => {
  job.stop()
  await saveTeamScoreToSql()
  Promise.resolve()
}

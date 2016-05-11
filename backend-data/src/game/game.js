import { createtimerJob, createonlyJob } from '../task/task'
import { InitCatch, setTeamToCatch, saveTeamScoreToSql } from '../script/loadCatch'
export const startGame = async (gameId, hostTeamId, guetsTeamId, betEndTime) => {
  await InitCatch(gameId, hostTeamId, guetsTeamId)
  createtimerJob(setTeamToCatch).then((job) => {
  //  倒计时控制关闭定时器
     // setTimeout(() => {
    createonlyJob(overGame,
      {
        second: betEndTime.second,
        minute: betEndTime.minutes,
        hour: betEndTime.hours
      },
    job)
//    } , 1000)
  })
}
export const overGame = async (job) => {
  job.stop()
  await saveTeamScoreToSql()
  Promise.resolve()
}

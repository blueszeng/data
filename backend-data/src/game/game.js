import { createtimerJob } from '../task/task'
import { InitCatch, setTeamToCatch, saveTeamScoreToSql } from '../script/loadCatch'
export const startGame = (gameId, hostTeamId, guetsTeamId) => {
  InitCatch(gameId, hostTeamId, guetsTeamId)
  createtimerJob(setTeamToCatch).then((job) => {
    // 倒计时控制关闭定时器
    //
  })
}
export const overGame = () => {
  saveTeamScoreToSql()
}

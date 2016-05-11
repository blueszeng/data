import corn from 'cron'
export const createtimerJob = async (command, {second = '*', minute = '*', hour = '*',
 day = '*', month = '*', week = '*' } = {}, matchDaySeason = 1, fristJob) => {
  const job = new corn.CronJob(`${second} ${minute} ${hour} ${day} ${month} ${week}`, async () => {
    await command(matchDaySeason, fristJob)
  }, () => {
    console.log('close timerJob ..')
  }, true, 'Asia/Shanghai')
  return Promise.resolve(job)
}

export const createonlyJob = async (command, {second = '*', minute = '*', hour = '*',
 day = '*', month = '*', week = '*' } = {}, matchDaySeason = 1, fristJob) => {
  console.log(`${second} ${minute} ${hour} ${day} ${month} ${week}`)
  const job = new corn.CronJob(`${second} ${minute} ${hour} ${day} ${month} ${week}`, async () => {
    await command(matchDaySeason, fristJob)
    job.stop()
  }, () => {
    console.log('close onlyJob ..')
  }, true, 'Asia/Shanghai')
  return Promise.resolve(job)
}

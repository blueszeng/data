import corn from 'cron'
export const createtimerJob = async (command, matchDaySeason = 1, {second = '*', minute = '*', hour = '*',
 day = '*', month = '*', week = '*' } = {}) => {
  const job = new corn.CronJob(`${second} ${minute} ${hour} ${day} ${month} ${week}`, async () => {
    await command(matchDaySeason)
  }, () => {
    console.log('close job ..')
  }, true, 'America/Los_Angeles')
  return Promise.resolve(job)
}

export const createonlyJob = async (command, {second = '*', minute = '*', hour = '*',
 day = '*', month = '*', week = '*' } = {}) => {
  const job = new corn.CronJob(`${second} ${minute} ${hour} ${day} ${month} ${week}`, async () => {
    await command()
    job.stop()
  }, () => {
    console.log('close job ..')
  }, true, 'America/Los_Angeles')
  return Promise.resolve(job)
}

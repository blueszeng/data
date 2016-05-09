import schedule from 'node-schedule'
export const createtimerJob = async (command, {second = '*', minute = '*', hour = '*',
 day = '*', month = '*', week = '*' } = {}) => {
  const job = schedule.scheduleJob(`${second} ${minute} ${hour} ${day} ${month} ${week}`, () => {
    command()
  })
  return Promise.resolve(job)
}


export const createonlyJob = async (command) => {
  command()
  return Promise.resolve(true)
}

import { createonlyJob } from './task/task'
// import team from './script/team'
// import player from './script/player'
// import teamPlayer from './script/team_player'
// second: 0-59
// minute: 0-59
// hour: 0-23
// day: 1-31
// month: 0-11
// week: 0-6
//

// createonlyJob(team)
// createonlyJob(player)
// createonlyJob(teamPlayer)

// import catgory from './script/catgory.js'
// createonlyJob(catgory)
//
import { now, nowAddtime } from './task/date'
console.log(now())
console.log(nowAddtime(60))
//
// loadSql.forEach((sql) => {
//   import  sqlScript from `./script/${sql}`
//   createJob(sqlScript, {minute: '1'})
// })

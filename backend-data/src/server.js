import { createonlyJob } from './task/task'
import team from './script/team'
import player from './script/player'
import teamPlayer from './script/team_player'

//
// Seconds: 0-59
// Minutes: 0-59
// Hours: 0-23
// Day of Month: 1-31
// Months: 0-11
// Day of Week: 0-6
//
// second: ''
// minute :'',
// hour: '',
// day: '',
// month: '',
// week: ''
//
createonlyJob(team)
createonlyJob(player)
createonlyJob(teamPlayer)

//
// loadSql.forEach((sql) => {
//   import  sqlScript from `./script/${sql}`
//   createJob(sqlScript, {minute: '1'})
// })

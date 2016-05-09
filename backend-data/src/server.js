import { createonlyJob } from './task/task'

import team from './script/team'
import player from './script/player'
import teamPlayer from './script/team_player'
// second: ''
// minute :'',
// hour: '',
// day: '',
// month: '',
// week: ''
createonlyJob(team)
createonlyJob(player)
createonlyJob(teamPlayer)

//
// loadSql.forEach((sql) => {
//   import  sqlScript from `./script/${sql}`
//   createJob(sqlScript, {minute: '1'})
// })

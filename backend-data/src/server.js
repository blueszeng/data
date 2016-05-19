// second: 0-59
// minute: 0-59
// hour: 0-23
// day: 1-31
// month: 0-11
// week: 0-6
import { createonlyJob, createtimerJob } from './task/task'
import { getName } from './stores/jsondb'
import { mathDayCrerateTime } from './config/config'

// 仅加载一次的数据
import team from './script/team'
import player from './script/player'
import teamPlayer from './script/team_player'
import catgory from './script/catgory'
import sport from './script/sport'
import postion from './script/postion'

// 定时加载的数据
import matchday from './script/matchday'
import game from './script/game'
const LoadList = {
  only: [
    { name: 'team', arg: team },
    { name: 'player', arg: player },
    { name: 'teamPlayer', arg: teamPlayer },
    { name: 'catgory', arg: catgory },
    { name: 'sport', arg: sport },
    { name: 'postion', arg: postion }
  ],
  timer: [
      { name: 'matchday',
        arg: matchday,
        time: { hour: mathDayCrerateTime.startTime[0].hours, minute: mathDayCrerateTime.startTime[0].minutes, second: mathDayCrerateTime.startTime[0].second }
      },
      { name: 'game',
        arg: game,
        time: { hour: mathDayCrerateTime.startTime[0].hours, minute: mathDayCrerateTime.startTime[0].minutes + 1, second: mathDayCrerateTime.startTime[0].second },
        gameIdNumber: 1
      }
  ]
}
LoadList.only.forEach((script) => {
  if (!getName(script.name)) {
    createonlyJob(script.arg)
    console.log(`add ${script.name} only job...`)
  }
})
LoadList.timer.forEach((script) => {
  createtimerJob(script.time, script.arg)
  console.log(`add ${script.name} timer job...`)
})

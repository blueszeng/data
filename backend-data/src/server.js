
// second: 0-59
// minute: 0-59
// hour: 0-23
// day: 1-31
// month: 0-11
// week: 0-6
import { createonlyJob, createtimerJob } from './task/task'
import { getName } from './stores/jsondb'

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
      { name: 'matchday', arg: matchday, time: { hour: 11, minute: 0, second: 0 } },
      { name: 'game', arg: game, time: { hour: 12, minute: 30, second: 0 }, matchDaySeason: 1 },
      { name: 'game', arg: game, time: { hour: 6, minute: 30, second: 0 }, matchDaySeason: 2 }
  ]
}
LoadList.only.forEach((script) => {
  if (!getName(script.name)) {
    createonlyJob(script.arg)
  }
})
LoadList.timer.forEach((script) => {
  createtimerJob(script.arg, script.time, script.matchDaySeason)
})
createonlyJob(matchday)
setTimeout(() => {
  createonlyJob(game)
}, 2000)

export const MYSQLURL = 'mysql://root@127.0.0.1/deerwar?debug=false&charset=utf8mb4&timezone=+0800&connectionLimit＝8&waitForConnections=true&queueLimit=0'
export const REDISURL = 'redis://127.0.0.1:6379/'

// 一天中有几场比赛列表
export const mathDayCrerateNuberList = [
  0,
  1
]
//  一天中添加比赛的时间
export const mathDayCrerateTime = {
  startTime: [
    {
      hours: 11,
      minutes: 30,
      second: 0
    }
  ]
}
// 一天中创建比赛对应 的启动时间，和结束时间 ，
// 游戏表中也对应此启动时间。可以做为启动游戏时间 和结束游戏时间
export const gameRunTime = {
  startTime: [
    {
      hours: 12,
      minutes: 30,
      second: 0
    },
    {
      hours: 18,
      minutes: 30,
      second: 0
    }
  ],
  betEndTime: [
    {
      hours: 14,
      minutes: 30,
      second: 0
    },
    {
      hours: 20,
      minutes: 30,
      second: 0
    }
  ]
}

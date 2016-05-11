export const MYSQLURL = 'mysql://root@127.0.0.1/deerwar?debug=false&charset=utf8mb4&timezone=+0800&connectionLimit＝8&waitForConnections=true&queueLimit=0'
export const REDISURL = 'redis://127.0.0.1:6379/'
export const onlyloadSql = ['team', 'team_player', 'player']
export const matchDayTime = {
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

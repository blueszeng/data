import mysql from '../stores/mysql'

export const getTeamPlayerByTeamId = async (teamId) => {
  const sql = `
    SELECT playerId from t_team_player
    WHERE  teamId = ?
  `
  const ret = await mysql.query(sql, [teamId])
  if (ret.length) {
    return Promise.resolve(ret)
  }
  return Promise.resolve([])
}


export const getMatchDayByMatchDayId = async (matchDayId) => {
  const sql = `
    SELECT startTime, id from t_match_day
    WHERE  id >= ?
  `
  const ret = await mysql.query(sql, [matchDayId])
  if (ret.length) {
    return Promise.resolve(ret)
  }
  return Promise.resolve([])
}

export const getGameByMatchDaylen = async (matchDaylen) => {
  const sql = `
    SELECT id, startTime, hostTeamId, guestTeamId from t_game
    WHERE  id >= ?
  `
  const ret = await mysql.query(sql, [matchDaylen])
  if (ret.length) {
    return Promise.resolve(ret)
  }
  return Promise.resolve([])
}
// SELECT t_player.id, t_team_player.positionTypeId from t_player join t_team_player
// on t_player.id = t_team_player.playerId
// WHERE  teamId =

export const getPlayerByTeamId = async (teamId) => {
  const sql = `
  SELECT t_player.id, t_player.positionTypeId  from t_player join  t_team_player
  on t_player.id = t_team_player.playerId
  WHERE  teamId = ?`
  const ret = await mysql.query(sql, [teamId])
  if (ret.length) {
    return Promise.resolve(ret)
  }
  return Promise.resolve([])
}
export const setGameScore = async (gameId, hostTeamScore, guestTeamScore) => {
  const sql = `
  UPDATE  t_game SET hostTeamScore = ? , guestTeamScore = ? WHERE id = ?`
  const ret = await mysql.query(sql, [hostTeamScore, guestTeamScore, gameId])
  if (ret.length) {
    return Promise.resolve(ret)
  }
  return Promise.resolve([])
}

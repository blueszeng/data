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

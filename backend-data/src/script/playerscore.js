import mysql from '../stores/mysql'

const putScoreSql = (sql, gameId) => {
  let command = 'INSERT INTO t_player_score VALUES'
  let _sql = []
  const arrySqlKey = Object.keys(sql)
  for (let key in arrySqlKey) {
    let sqlkey = arrySqlKey[key]
    if (Number(key) + 1 !== arrySqlKey.length) {
      _sql.push(`(${sqlkey},${gameId},'${sql[sqlkey]}'),`)
    } else {
      _sql.push(`(${sqlkey},${gameId},'${sql[sqlkey]}')`)
    }
  }
  sql = command
  for (let i = 0; i < arrySqlKey.length; i++) {
    sql += _sql[i]
  }
  console.log(sql)
  return sql
}
const exec = async (sql, gameId) => {
  const _sql = putScoreSql(sql, gameId)
  await mysql.query(_sql)
  return Promise.resolve(true)
}

export default exec

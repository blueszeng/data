import Mock from 'mockjs'
import mysql from '../stores/mysql'
import { getId, setId } from '../stores/jsondb'
const Random = Mock.Random
 //
const LEN = 1
const name = 'catgory'
const Catgory = {
  id: getId(name),
  sportId: [1, 2],
  name: ['中超', '皇马'],
  durationTime: [60, 90, 120],
  minGameToStartContest: [3, 4, 5, 6],
  script: Random.word()
}

const generateSql = () => {
  let command = 'INSERT INTO t_category VALUES'
  let _sql = [
    `(
      1, 1, '中超', 120, 4 ,'${Random.word()}.js'

       ${Catgory.id} ,${Random.pick(Catgory.sportId)},
       '${Random.pick(Catgory.name)}',
       ${Random.pick(Catgory.durationTime)},
       ${Random.pick(Catgory.minGameToStartContest)},
       '${Catgory.script}.js'
     )`
  ]
  let sql = command
  for (let i = 0; i < LEN; i++) {
    sql += _sql[i]
  }
  console.log(sql)
  return sql
}
const exec = async () => {
  const sql = generateSql()
  await mysql.query(sql)
  setId({name, id: getId(name) + 1})
  return Promise.resolve(true)
}
export default exec

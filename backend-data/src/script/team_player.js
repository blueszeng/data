
import mysql from '../stores/mysql'
import { setId } from '../stores/jsondb'
 //

const LEN = 72
const name = 'teamPlayer'
const generateSql = () => {
  let command = 'INSERT INTO t_team_player VALUES'
  let _sql = [
    '(1, 1),',
    '(1, 2),',
    '(1, 3),',
    '(1, 4),',
    '(1, 5),',
    '(1, 6),',
    '(1, 7),',
    '(1, 8),',
    '(1, 9),',
    '(1, 10),',
    '(1, 11),',
    '(1, 12),',
    '(1, 13),',
    '(1, 14),',
    '(1, 15),',
    '(1, 16),',
    '(1, 17),',
    '(1, 18),',
    '(2, 19),',
    '(2, 20),',
    '(2, 21),',
    '(2, 22),',
    '(2, 23),',
    '(2, 24),',
    '(2, 25),',
    '(2, 26),',
    '(2, 27),',
    '(2, 28),',
    '(2, 29),',
    '(2, 30),',
    '(2, 31),',
    '(2, 32),',
    '(2, 33),',
    '(2, 34),',
    '(2, 35),',
    '(2, 36),',
    '(3, 37),',
    '(3, 38),',
    '(3, 39),',
    '(3, 40),',
    '(3, 41),',
    '(3, 42),',
    '(3, 43),',
    '(3, 44),',
    '(3, 45),',
    '(3, 46),',
    '(3, 47),',
    '(3, 48),',
    '(3, 49),',
    '(3, 50),',
    '(3, 51),',
    '(3, 52),',
    '(3, 53),',
    '(3, 54),',
    '(4, 55),',
    '(4, 56),',
    '(4, 57),',
    '(4, 58),',
    '(4, 59),',
    '(4, 60),',
    '(4, 61),',
    '(4, 62),',
    '(4, 63),',
    '(4, 64),',
    '(4, 65),',
    '(4, 66),',
    '(4, 67),',
    '(4, 68),',
    '(4, 69),',
    '(4, 70),',
    '(4, 71),',
    '(4,72)'
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
  setId({ name, id: LEN + 1 })
  return Promise.resolve(true)
}
export default exec

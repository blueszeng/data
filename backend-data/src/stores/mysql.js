import mysql from 'promise-mysql'
import { MYSQLURL } from '../config/config'
const pool = mysql.createPool(MYSQLURL)

pool.on('connection', (connection) => {
  connection.on('error', (err) => {
    console.log('errr--->', err)
  })
  connection.on('end', (err) => {
    console.log('close--->', err)
  })
})

export default pool

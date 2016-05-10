import redis from 'redis'
import bluebird from 'bluebird'
import { REDISURL } from '../config/config'

bluebird.promisifyAll(redis.RedisClient.prototype)
bluebird.promisifyAll(redis.Multi.prototype)

const client = redis.createClient(REDISURL)

client.on('error', (err) => {
  console.log('Redis错误: %s', err)
})

client.on('connect', () => {
  console.log('Redis服务已连接')
})

client.on('ready', () => {
  console.log('Redis服务已准备好')
})

export default client

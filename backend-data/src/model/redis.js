import client from '../stores/redis'
export const catcheStoreHash = async (resultKey, result) => {
  return new Promise((resolve, reject) => {
    return Promise.all(Object.keys(result).map((key, i) => {
      return new Promise((hash_resolve) => {
        client.hset(resultKey, key, JSON.stringify(result[key]), (err, redis_res) => {
          return hash_resolve(redis_res)
          })
        })
      })
    ).then(() => {
        return resolve(resultKey)
    })
  })
}


export const getCatche = async (getKey) => {
  return new Promise((resolve, reject) => {
    client.hgetall(getKey, (err, redis_ret) => {
      if (err) {
        return reject('error')
      }
      if (Object.keys(redis_ret).length > 0) {
        return resolve(redis_ret)
      }

    })
  })
}

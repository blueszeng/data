import client from '../stores/mysql'
export const catcheStoreHash = async (resultKey, result) => {
  return new Promise((resolve, reject) => {
    return Promise.all(Object.keys(result).map((key, i) => {
        return new Promise((hash_resolve) => {
          client.hset(resultKey, key, result[key], (err, redis_res) => {
            return hash_resolve(redis_res)
            })
          })
        })
    }).then(() => {
        return reject(resultKey)
    })
  })
}


export const getCatche = async (getKey) => {
  return new Promise((resolve, reject) => {
    client.smembers(getKey, (err, redis_ret) => {
      if err
        return reject('error')
      if redis_ret.length > 0
          return resolve(redis_ret)
      })
  })
}

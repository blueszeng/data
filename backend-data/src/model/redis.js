import client from '../stores/redis'
export const catcheStoreHash = async (resultKey, result) => {
  let hashValue = []
  Object.keys(result).forEach((value) => {
    hashValue.push(value)
    hashValue.push(JSON.stringify(result[value]))
  })

  return new Promise((resolve, reject) => {
    client.hmset(resultKey, hashValue, (err, ret) => {
      if (err) {
        return reject('err')
      }
      return resolve(ret)
    })
  })
}

export const getCatche = async (getKey) => {
  return new Promise((resolve, reject) => {
    client.hgetall(getKey, (err, ret) => {
      if (err) {
        return reject('error')
      }
      if (Object.keys(ret).length > 0) {
        return resolve(ret)
      }
    })
  })
}

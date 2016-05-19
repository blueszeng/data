import client from '../stores/redis'
export const catcheStoreHash = async (resultKey, result) => {
  let hashValue = []
  Object.keys(result).forEach((value) => {
    hashValue.push(value)
    hashValue.push(JSON.stringify(result[value]))
  })
  // if (resultKey === '11-3') {
  //   console.log(resultKey, hashValue, hashValue.length)
  // }


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
    //  console.log(getKey, ret)
      if (Object.keys(ret).length > 0) {
        return resolve(ret)
      }
    })
  })
}

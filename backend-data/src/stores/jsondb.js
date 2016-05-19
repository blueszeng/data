import low from 'lowdb'
import storage from 'lowdb/file-sync'
const db = low('db.json', {storage})

export const setId = ({name, id}) => {
  console.log(name, id)
  const isExistsDb = db('table_id')
      .chain()
      .find({name})
  if (isExistsDb.value()) {
    return isExistsDb.assign({name, id})
      .value()
  }
  db('table_id').push({name, id})
}

export const getId = (name) => {
  const idObject = db('table_id').find({name})
  if (idObject && idObject['id']) {
    return idObject['id']
  }
  return 1
}

export const setMatchDayLen = ({name, len}) => {
  const isExistsDb = db('table_id')
      .chain()
      .find({name})
  if (isExistsDb.value()) {
    return isExistsDb.assign({name, len})
      .value()
  }
  db('table_id').push({name, len})
}

export const getMatchDayLen = (name) => {
  const idObject = db('table_id').find({name})
  if (idObject && idObject['len']) {
    return idObject['len']
  }
  return 0
}








export const getName = (name) => {
  const idObject = db('table_id').find({name})
  if (idObject && idObject['id']) {
    return idObject['name']
  }
  return null
}

export const setMatchDayId = ({name, matchdayId}) => {
  const isExistsDb = db('table_id')
      .chain()
      .find({name})
  if (isExistsDb.value()) {
    return isExistsDb.assign({name, matchdayId})
      .value()
  }
  db('table_id').push({name, matchdayId})
}

export const getMatchDayId = (name) => {
  const idObject = db('table_id').find({name})
  if (idObject && idObject['matchdayId']) {
    return idObject['matchdayId']
  }
  return 1
}

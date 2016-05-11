const formatDate = (now) => {
  let  year = now.getUTCFullYear()
  let  month = now.getUTCMonth() + 1
  let  date = now.getUTCDate()
  let  hour = now.getHours()
  let  minute = now.getUTCMinutes()
  let  second = now.getUTCSeconds()
  return year + '-' + month + '-' + date +' '+ hour + ':' + minute + ':' + second
}

export const now = () => {
  return formatDate(new Date())
}
export const nowAddtime = (minutes) => {
  const timestamp = minutes * 60 * 1000
  return formatDate(new Date(Date.now() + timestamp))
}
export const setTime = (hours, minutes, second) => {
  const date = new Date()
  date.setHours(hours)
  date.setMinutes(minutes)
  date.setSeconds(second)
  console.log("aaaaa->",date )
  return formatDate(date)
}

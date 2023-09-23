interface QueryObject {
  [key: string]: string | number | boolean
}

export default function sortObject(queryObject: QueryObject) {
  // sort by key
  try {
    const entry = Object.entries(queryObject)
    entry.sort((a, b) => {
      return a[0].localeCompare(b[0])
    })
    return Object.fromEntries(entry)
  } catch (e) {
    console.log('sortObject error', e)
  }
}

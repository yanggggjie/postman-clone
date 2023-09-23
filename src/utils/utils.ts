import { IEntryList } from '@/App.js'
import { v4 as uuidv4 } from 'uuid'

export function entryList2Object(entryList: IEntryList) {
  const obj = {}
  entryList.forEach((entry) => {
    obj[entry.key] = entry.value
  })
  return obj
}
export function object2EntryList(object: Record<string, string>) {
  return Object.keys(object).map((key, value) => {
    return {
      id: uuidv4(),
      key,
      value,
    }
  })
}

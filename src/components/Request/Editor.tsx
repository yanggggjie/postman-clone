import { clsx } from 'clsx'
import { Editor } from '@monaco-editor/react'
import { v4 as uuidv4 } from 'uuid'
import { IEntryList, ISetEntryList } from '@/App.js'
interface Props {
  entryList: IEntryList
  setEntryList: ISetEntryList
}
import useJSONValid from '@/store/useJSONValid.js'
function entryListToObject(entryList: IEntryList) {
  const obj = {}
  entryList.forEach((entry) => {
    obj[entry.key] = entry.value
  })
  return JSON.stringify(obj, null, 4)
}

function objectToEntryList(obj) {
  const entryList = []
  for (const key in obj) {
    entryList.push({
      id: uuidv4(),
      key,
      value: obj[key],
    })
  }
  return entryList
}

function Component({ entryList, setEntryList }: Props) {
  const JSONValid = useJSONValid()

  function handleChange(value: string) {
    try {
      setEntryList(objectToEntryList(JSON.parse(value)))
      JSONValid.setJSONValid(true)
    } catch (e) {
      JSONValid.setJSONValid(false)
    }
  }

  return (
    <div>
      <Editor
        defaultLanguage={'json'}
        className={clsx('w-full h-48')}
        value={entryListToObject(entryList)}
        onChange={handleChange}
      ></Editor>
    </div>
  )
}

export default Component

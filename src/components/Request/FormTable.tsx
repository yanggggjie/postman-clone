import { clsx } from 'clsx'
import { v4 as uuidv4 } from 'uuid'
import { IEntryList, ISetEntryList } from '@/App.js'
import FormItem from '@components/Request/FormItem.js'
interface Props {
  entryList: IEntryList
  setEntryList: ISetEntryList
}

function Component({ entryList, setEntryList }: Props) {
  function handleAddClick() {
    setEntryList((prev) => {
      return [
        ...prev,
        {
          id: uuidv4(),
          key: '',
          value: '',
        },
      ]
    })
  }
  return (
    <div className={clsx('flex flex-col items-center gap-2')}>
      {entryList.map((entry) => {
        return (
          <FormItem key={entry.id} entry={entry} setEntryList={setEntryList} />
        )
      })}
      <div className={clsx('w-full flex flex-row items-center')}>
        <button
          className={clsx(
            'p-1 px-5 border-main text-main hover:bg-red-100 border rounded',
            'transition-colors',
          )}
          onClick={handleAddClick}
        >
          add
        </button>
        <div className={clsx('grow')}></div>
      </div>
    </div>
  )
}

export default Component

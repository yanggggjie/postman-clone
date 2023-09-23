import { clsx } from 'clsx'
import { IEntry, ISetEntryList } from '@/App.js'
interface Props {
  entry: IEntry
  setEntryList: ISetEntryList
}

function Component({ entry, setEntryList }: Props) {
  const { id, key, value } = entry
  function handleKeyChange(e) {
    const newKey = e.target.value
    setEntryList((prev) => {
      return prev.map((item) => {
        if (item.id === id) {
          return { ...item, key: newKey }
        }
        return item
      })
    })
  }

  function handleValueChange(e) {
    const newValue = e.target.value
    setEntryList((prev) => {
      return prev.map((item) => {
        if (item.id === id) {
          return { ...item, value: newValue }
        }
        return item
      })
    })
  }

  function handleRemoveClick() {
    setEntryList((prev) => {
      return prev.filter((item) => {
        return item.id !== id
      })
    })
  }
  return (
    <div
      className={clsx(
        'w-full',
        'flex flex-row items-center justify-around gap-3',
      )}
    >
      <input
        className={clsx(
          'grow',
          'rounded-md border-gray-300',
          'hover:border-main',
        )}
        key={'inputKey'}
        type="text"
        value={key}
        onChange={handleKeyChange}
      />
      <input
        className={clsx(
          'grow',
          'rounded-md border-gray-300',
          'hover:border-main',
        )}
        key={'inputValue'}
        type="text"
        value={value}
        onChange={handleValueChange}
      />
      <button
        className={clsx(
          'p-2 rounded border border-red-500 text-red-500',
          'hover:bg-red-100',
        )}
        onClick={handleRemoveClick}
      >
        remove
      </button>
    </div>
  )
}

export default Component

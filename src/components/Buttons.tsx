import { clsx } from 'clsx'
import { IMethod } from '@/App.js'
import * as React from 'react'
interface Props {
  url: string
  setUrl: React.Dispatch<React.SetStateAction<string>>
  method: IMethod
  setMethod: React.Dispatch<React.SetStateAction<IMethod>>
  handleSendClick: () => void
}

function Component({ url, setUrl, method, setMethod, handleSendClick }: Props) {
  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    setUrl(e.target.value)
  }
  function handleMethodChange(e: React.ChangeEvent<HTMLSelectElement>) {
    setMethod(e.target.value as IMethod)
  }
  return (
    <div
      className={clsx(
        'p-2',
        'flex flex-row items-center justify-between gap-3',
      )}
      style={{}}
    >
      <select
        className={clsx('rounded border-main hover:text-main')}
        value={method}
        onChange={handleMethodChange}
      >
        <option value={'GET'}>GET</option>
        <option value={'POST'}>POST</option>
        <option value={'PUT'}>PUT</option>
        <option value={'PATCH'}>PATCH</option>
        <option value={'DELETE'}>DELETE</option>
      </select>
      <input
        className={clsx('grow', 'rounded hover:border-main')}
        type="text"
        value={url}
        onChange={handleInputChange}
      />
      <button
        className={clsx(
          'py-2 px-5',
          'bg-main hover:bg-main-dark text-white font-bold rounded',
        )}
        onClick={handleSendClick}
      >
        Send
      </button>
    </div>
  )
}

export default Component

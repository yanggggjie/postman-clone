import { clsx } from 'clsx'
import { IMethod } from '@/App.js'
import * as React from 'react'
interface Props {
  url: string
  method: IMethod
  setUrl: React.Dispatch<React.SetStateAction<string>>
  setMethod: React.Dispatch<React.SetStateAction<IMethod>>
  setSend: React.Dispatch<React.SetStateAction<boolean>>
}

function Component({ url, setUrl, method, setMethod, setSend }: Props) {
  function handleMethodChange(e: React.ChangeEvent<HTMLSelectElement>) {
    setMethod(e.target.value as IMethod)
  }
  function handleUrlChange(e: React.ChangeEvent<HTMLInputElement>) {
    setUrl(e.target.value)
  }

  function handleSendClick() {
    setSend(true)
  }
  return (
    <div>
      <select value={method} onChange={handleMethodChange}>
        <option value="GET">GET</option>
        <option value="POST">POST</option>
        <option value="PUT">PUT</option>
        <option value="PATCH">PATCH</option>
        <option value="DELETE">DELETE</option>
      </select>
      <input type="text" value={url} onChange={handleUrlChange} />
      <button onClick={handleSendClick}>Send</button>
    </div>
  )
}

export default Component

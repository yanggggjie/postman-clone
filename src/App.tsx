import { clsx } from 'clsx'
import Title from '@components/Title.js'
import Buttons from '@components/Buttons.js'
import Response from '@components/Response/Response.js'
import Request from '@components/Request/Request.js'
import { Dispatch, SetStateAction, useRef, useState } from 'react'
import axios from 'axios'
import { entryList2Object } from '@/utils/utils.js'
import { toast, Toaster } from 'sonner'
export type IMethod = 'GET' | 'POST' | 'PUT' | 'DELETE'

export interface IEntry {
  id: string
  key: string
  value: string
}

export type IEntryList = IEntry[]
export type ISetEntryList = Dispatch<SetStateAction<IEntryList>>

function Component() {
  const [url, setUrl] = useState<string>(
    'https://jsonplaceholder.typicode.com/todos/1',
  )
  const [method, setMethod] = useState<IMethod>('GET')

  async function handleSendClick() {
    const axiosConfig = {
      method: method,
      url: url,
      data: entryList2Object(requestBody),
      params: entryList2Object(requestParams),
      headers: entryList2Object(requestHeaders),
    }
    try {
      const res = await axios(axiosConfig)
      setResponseHeader(JSON.stringify(res.headers, null, 2))
      setResponseBody(JSON.stringify(res.data, null, 2))
    } catch (e) {
      setResponseHeader(JSON.stringify(e.response.headers, null, 2))
      setResponseBody(JSON.stringify(e.response.data, null, 2))
    }
  }

  const [requestParams, setRequestParams] = useState<IEntryList>([])
  const [requestHeaders, setRequestHeaders] = useState<IEntryList>([])
  const [requestBody, setRequestBody] = useState<IEntryList>([])

  const [responseBody, setResponseBody] = useState<string>(`{}`)
  const [responseHeader, setResponseHeader] = useState<string>(`{}`)

  return (
    <div className={clsx('w-screen h-screen overflow-hidden')}>
      <Title></Title>
      <Buttons
        url={url}
        setUrl={setUrl}
        method={method}
        setMethod={setMethod}
        handleSendClick={handleSendClick}
      ></Buttons>
      <Request
        requestParams={requestParams}
        setRequestParams={setRequestParams}
        requestHeaders={requestHeaders}
        setRequestHeaders={setRequestHeaders}
        requestBody={requestBody}
        setRequestBody={setRequestBody}
      ></Request>
      <Response
        responseBody={responseBody}
        responseHeader={responseHeader}
      ></Response>
      <Toaster></Toaster>
    </div>
  )
}

export default Component

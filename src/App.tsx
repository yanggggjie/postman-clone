import { clsx } from 'clsx'
import Title from '@components/Title.js'
import Buttons from '@components/Buttons.js'
import Request from '@components/Request/Request.js'
import Response from '@components/Response.js'
import { Dispatch, SetStateAction, useEffect, useState } from 'react'
import Test from '@components/Test.js'
interface Props {}

export interface IStrifyObject {
  [key: string]: string
}
export type ISetStrifyObject = Dispatch<SetStateAction<IStrifyObject>>

export type IMethod = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE'

function Component({}: Props) {
  const [url, setUrl] = useState<string>('')
  const [method, setMethod] = useState<IMethod>('GET')
  const [send, setSend] = useState<boolean>(false)

  const [RequestParams, setRequestParams] = useState({
    name: 'yang',
  })
  const [RequestHeaders, setRequestHeaders] = useState({})
  const [RequestBody, setRequestBody] = useState({})

  const [ResponseHeaders, setResponseHeaders] = useState({})
  const [ResponseBody, setResponseBody] = useState({})

  useEffect(() => {
    if (send) {
      console.log('send')
    }
    setSend(false)
  }, [send])

  return (
    <div>
      <Title></Title>
      <Buttons
        url={url}
        method={method}
        setUrl={setUrl}
        setMethod={setMethod}
        setSend={setSend}
      ></Buttons>
      <Request
        RequestParams={RequestParams}
        setRequestParams={setRequestParams}
        RequestHeaders={RequestHeaders}
        setRequestHeaders={setRequestHeaders}
        RequestBody={RequestBody}
        setRequestBody={setRequestBody}
      ></Request>
      <Response
        ResponseHeaders={ResponseHeaders}
        setResponseHeaders={setResponseHeaders}
        ResponseBody={ResponseBody}
        setResponseBody={setResponseBody}
      ></Response>
      <hr />
      <Test></Test>
    </div>
  )
}

export default Component

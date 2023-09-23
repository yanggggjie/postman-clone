import { clsx } from 'clsx'
import { IEntryList, ISetEntryList } from '@/App.js'
import { useEffect, useState } from 'react'
import FormTable from '@components/Request/FormTable.js'
import Editor from '@components/Request/Editor.js'
interface Props {
  requestParams: IEntryList
  setRequestParams: ISetEntryList
  requestHeaders: IEntryList
  setRequestHeaders: ISetEntryList
  requestBody: IEntryList
  setRequestBody: ISetEntryList
}

function Component({
  requestParams,
  setRequestParams,
  requestHeaders,
  setRequestHeaders,
  requestBody,
  setRequestBody,
}: Props) {
  const [tabList, setTabList] = useState([
    {
      name: 'Params',
      isActive: true,
    },
    {
      name: 'Headers',
      isActive: false,
    },
    {
      name: 'Body',
      isActive: false,
    },
  ])

  const nameMapContent = {
    Params: (
      <FormTable entryList={requestParams} setEntryList={setRequestParams} />
    ),
    Headers: (
      <FormTable entryList={requestHeaders} setEntryList={setRequestHeaders} />
    ),
    Body: <Editor entryList={requestBody} setEntryList={setRequestBody} />,
  }

  function handleTabClick(name: string) {
    setTabList((tabList) => {
      return tabList.map((tab) => {
        if (tab.name === name) {
          return {
            ...tab,
            isActive: true,
          }
        } else {
          return {
            ...tab,
            isActive: false,
          }
        }
      })
    })
  }

  return (
    <div className={clsx('m-2 rounded-xl border-2')}>
      <div className={clsx('flex flex-row items-center gap-3')}>
        {tabList.map((tab) => {
          return (
            <button
              key={tab.name}
              onClick={() => {
                handleTabClick(tab.name)
              }}
              className={clsx(
                tab.isActive && 'text-main border-main',
                'hover:text-main',
                'p-2',
                'border-b-4',
                '-mb-1 z-10',
              )}
            >
              {tab.name}
            </button>
          )
        })}
      </div>
      <div className={clsx('border-2')}></div>
      <div className={clsx('p-2')}>
        {tabList.map((tab) => {
          return (
            <div key={tab.name} className={clsx(!tab.isActive && 'hidden')}>
              {nameMapContent[tab.name]}
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Component

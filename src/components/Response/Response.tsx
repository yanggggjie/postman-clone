import { clsx } from 'clsx'
import { IEntryList, ISetEntryList } from '@/App.js'
import * as React from 'react'
import { Dispatch, SetStateAction, useState } from 'react'
import Editor from '@components/Response/Editor.js'
import Table from '@components/Response/Table.js'
interface Props {
  responseBody: string
  responseHeader: string
}

interface ITabItem {
  name: string
  isActive: boolean
}

function Component({ responseBody, responseHeader }: Props) {
  const [tabList, setTabList] = useState<ITabItem[]>([
    {
      name: 'Body',
      isActive: true,
    },
    {
      name: 'Header',
      isActive: false,
    },
  ])
  const nameMapContent = {
    Body: <Editor value={responseBody}></Editor>,
    Header: <Table value={responseHeader}></Table>,
  }
  function handleTabItemClick(name: string) {
    setTabList((prevState) => {
      return prevState.map((tabItem) => {
        if (tabItem.name === name) {
          return {
            ...tabItem,
            isActive: true,
          }
        } else {
          return {
            ...tabItem,
            isActive: false,
          }
        }
      })
    })
  }

  return (
    <div className={clsx('p-2')}>
      <h2 className={clsx('text-xl mb-3')}>Response</h2>
      <div className={clsx('border rounded-xl')}>
        <div className={clsx('')}>
          {tabList.map((tabItem) => {
            return (
              <button
                className={clsx(
                  tabItem.isActive && 'text-main border-main',
                  'hover:text-main',
                  'p-2',
                  'border-b-4 -mb-1',
                )}
                onClick={() => {
                  handleTabItemClick(tabItem.name)
                }}
                key={tabItem.name}
              >
                {tabItem.name}
              </button>
            )
          })}
        </div>
        <div className={clsx('border-2')}></div>
        <div className={clsx('mt-2')}>
          {tabList.map((tabItem) => {
            return (
              <div
                className={clsx(!tabItem.isActive && 'hidden')}
                key={tabItem.name}
              >
                {nameMapContent[tabItem.name]}
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Component

import { clsx } from 'clsx'
import { Editor } from '@monaco-editor/react'
interface Props {
  value: string
}

function Component({ value }: Props) {
  return (
    <div>
      <Editor
        options={{ readOnly: true }}
        className={clsx('w-full h-56')}
        value={value}
      ></Editor>
    </div>
  )
}

export default Component

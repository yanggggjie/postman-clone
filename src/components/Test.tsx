import { clsx } from 'clsx'
import { useState } from 'react'
interface Props {}

function B() {
  const [name, setName] = useState('')
  return (
    <div>
      <button
        onClick={() => {
          setName('yang')
        }}
      >
        click
      </button>
      {name}
    </div>
  )
}

function Component({}: Props) {
  const [Test, setTest] = useState(<B></B>)
  return <div>{Test}</div>
}

export default Component

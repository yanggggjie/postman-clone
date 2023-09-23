import { clsx } from 'clsx'
interface Props {
  value: string
}

function Component({ value }: Props) {
  const dataObject = JSON.parse(value)

  return (
    <div className={clsx('p-2')}>
      {Object.keys(dataObject).map((key) => {
        return (
          <div key={key} className={clsx('flex flex-row gap-3')}>
            <span>{key}</span>
            <span>{dataObject[key]}</span>
          </div>
        )
      })}
    </div>
  )
}

export default Component

import { clsx } from 'clsx'
interface Props {}

function Component({}: Props) {
  return (
    <div>
      <div className={clsx('border-4 border-main')}></div>
      <h1 className={clsx('p-2 text-xl', 'text-main font-bold')}>
        POSTMAN CLONE
      </h1>
      <div className={clsx('border-2')}></div>
    </div>
  )
}

export default Component

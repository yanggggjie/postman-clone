import { clsx } from 'clsx'
interface Props {}
import supabase from '../utils/supabase.js'

function Component({}: Props) {
  async function handleLogin() {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: 'github',
    })
    if (error) console.log(error)
    else console.log(data)
  }

  async function handleLogout() {
    const { error } = await supabase.auth.signOut()
    if (error) console.log(error)
    else console.log('success')
  }

  async function handleShowUser() {
    const { data, error } = await supabase.auth.getUser()
    if (error) console.log(error)
    else console.log(data)
  }

  return (
    <div className={clsx('flex flex-col gap-3 ')}>
      <button onClick={handleLogin}>login</button>
      <button onClick={handleLogout}>logout</button>
      <button onClick={handleShowUser}>show user info</button>
    </div>
  )
}

export default Component

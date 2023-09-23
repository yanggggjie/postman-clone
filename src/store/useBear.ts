import { create } from 'zustand'

interface BearStore {
  bears: number
  inc: () => void
  dec: () => void
  reset: () => void
}

export default create<BearStore>()((setState, getState) => {
  return {
    bears: 0,
    inc: () => {
      setState({
        bears: getState().bears + 1,
      })
    },
    dec: () => {
      setState({
        bears: getState().bears - 1,
      })
    },
    reset: () => {
      setState({
        bears: 0,
      })
    },
  }
})

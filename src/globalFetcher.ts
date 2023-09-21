import axios from 'axios'

async function fetcher(url: string) {
  const res = await axios.get(url)
  return res.data
}

export default fetcher

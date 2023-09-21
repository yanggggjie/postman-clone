export default function sortQueryOrder(url: string) {
  const _URL = new URL(url)
  _URL.searchParams.sort()
  return _URL.toString()
}

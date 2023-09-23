export default function sortQuery(url: string) {
  try {
    const _URL = new URL(url)
    _URL.searchParams.sort()
    return _URL.toString()
  } catch (e) {
    console.log('sortQuery error', e)
  }
}

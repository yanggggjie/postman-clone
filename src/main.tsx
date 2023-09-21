import './index.css'
import { SWRConfig } from 'swr'
import { BrowserRouter } from 'react-router-dom'
import globalFetcher from './globalFetcher.js'
import App from './App.js'
import ReactDOM from 'react-dom/client'
ReactDOM.createRoot(document.getElementById('root')!).render(
  // <React.StrictMode>
  <BrowserRouter>
    <SWRConfig
      value={{
        fetcher: globalFetcher,
        revalidateOnFocus: false,
      }}
    >
      <App />
    </SWRConfig>
  </BrowserRouter>,
  // </React.StrictMode>,
)

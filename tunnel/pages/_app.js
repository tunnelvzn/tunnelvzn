import '../styles/globals.scss'
import 'bootstrap/dist/css/bootstrap.css'
import { GlobalProvider } from '../comps/Global/useGlobalContext'
function MyApp({ Component, pageProps }) {
  return (
  <GlobalProvider>
    <Component {...pageProps} />
  </GlobalProvider>
  )
}

export default MyApp

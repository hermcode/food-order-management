import '../styles/globals.css'
import { FOMProvider } from '../context/FOMProvider'

export default function App({ Component, pageProps }) {
  return (
    <FOMProvider>
      <Component {...pageProps} />
    </FOMProvider>
  )
}

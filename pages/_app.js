import {Layout} from '../components'
import {Toaster} from 'react-hot-toast';
import { SSRProvider } from 'react-bootstrap';
import '../styles/globals.css'


function MyApp({ Component, pageProps }) {
  return (
    <SSRProvider>
    <Layout>
      <Toaster />
      <Component {...pageProps} />
    </Layout>
    </SSRProvider>
    )
}

export default MyApp

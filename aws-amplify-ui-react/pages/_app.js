import '../styles/globals.css'
import '../configureAmplify'
import '@aws-amplify/ui-react/styles.css';
import Navbar from './components/navbar';

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Navbar />
      <div className='py-8 px-16 bg-slate-100'>
        <Component {...pageProps} />
      </div>
    </div>
  )
}

export default MyApp

import '../styles/globals.css';
import AppContext from '../components/AppContext';

function MyApp({ Component, pageProps }) {

  return(
    <AppContext> 
  <Component {...pageProps} />
 </AppContext>
 )
}

export default MyApp

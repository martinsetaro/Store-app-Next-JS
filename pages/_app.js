import '../styles/globals.css';
import AppContext from '../pages/AppContext.js';

function MyApp({ Component, pageProps }) {

  return(
    <AppContext> 
  <Component {...pageProps} />
 </AppContext>
 )
}

export default MyApp

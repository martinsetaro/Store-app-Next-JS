import Head from "next/head";
import Header from './Header';
import Footer from './Footer';

export default function Layout({children,title,description=""}) {
  return (
   <>
   <Head>
    <title>{title}</title>
    <meta name="description" content={description}/>
    <meta name="author" content="Jorge Martin Setaro" />
    
   </Head>
   <Header/>
   {children}
   <Footer/>

   </>
  )
}

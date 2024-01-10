import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from './components/Layout';
import style from "@/styles/App.module.css"

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <div className={style.main}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
    
  );
}

export default MyApp;

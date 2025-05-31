import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.scss';
import styles from './index.module.scss';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return <div className={styles['world-explorer-cont']}><Component {...pageProps} /></div>;
} 
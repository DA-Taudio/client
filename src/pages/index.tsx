import Products from '@/components/HomePage/Products';
import Sliders from '@/components/HomePage/Sliders';
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>T-Audio</title>
      </Head>
      <Sliders />
      <Products />
    </>
  );
}

import Head from 'next/head';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Filters from '../components/Filters';
import Footer from '../components/Footer';

export default function Home(){
  return (<>
    <Head><title>EOz</title></Head>
    <Header/>
    <Hero/>
    <Filters/>
    <Footer/>
  </>);
}
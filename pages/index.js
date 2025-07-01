import Head from 'next/head';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Filters from '../components/Filters';
import ProductCarousel from '../components/ProductCarousel';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Head>
        <title>EOz - Your Smart Home Solution</title>
      </Head>
      <Header />
      <main>
        <Hero />
        <Filters />
        <ProductCarousel />
        <Testimonials />
      </main>
      <Footer />
    </>
  );
}
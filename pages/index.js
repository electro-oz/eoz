import Head from 'next/head';
import Header from '../components/AnnouncementBanner';
import Header from '../components/Header';
import HeroCarousel from '../components/HeroCarousel';
import Filters from '../components/Filters';
import UseCases from '../components/UseCases';
import TestimonialsCarousel from '../components/TestimonialsCarousel';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Head>
        <title>EOz - Your Smart Home Solution</title>
      </Head>
      <Header />
      <HeroCarousel />
      <Filters />
      <UseCases />
      <TestimonialsCarousel />
      <Footer />
    </>
  );
}

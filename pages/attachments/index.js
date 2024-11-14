import Image from 'next/image';
import Navbar from "./components/navbar";
import Banner from "./components/Banner";
import Second from "./components/second";
import AttachmentHelp from './components/Attachmenthelp';
import CallBackSection from './components/callsection';
import CarEarningDashboard from './components/CarEarningsDashboard';
import Faq from './components/Faq';
import Footer from './components/Footer';
import CarEarningsSection from './components/CarEarningsSection';
import Sliderpage from './components/Slider';
import CarFeatures from './components/Carfeatures';

export default function Home() {
  return (
    <div className='text-white '>
      <Navbar />
      <Banner />
      <Second />
      <AttachmentHelp />
      <Sliderpage />
      <CarFeatures />
      <CallBackSection />
      <CarEarningDashboard />
      <CarEarningsSection />
      <Faq />
      <Footer />
    </div>
  );
}

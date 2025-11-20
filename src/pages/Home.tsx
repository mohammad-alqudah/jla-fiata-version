import Navbar from '../components/Navbar';
import Slider from '../components/Slider';
import About from '../components/About';
import Courses from '../components/Courses';
import News from '../components/News';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Letter from '../components/Letter';
import Fiata from '../components/Fiata';

export default function Home() {
  return (
   <>
        <Navbar />
       <div className='container mx-auto'>
          <Slider />
          <Letter />
          <News />
          <Fiata/>
          <Courses />
          <Contact />
       </div>
        <Footer />
      
   </>
  );
}

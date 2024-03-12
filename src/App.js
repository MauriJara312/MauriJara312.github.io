
import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import DemoNavbar from './components/DemoNavbar'

function App() {
  return (
    <div className='font-nunito flex flex-wrap justify-center bg-customWhite overflow-hidden'>
      <div className='flex justify-center'>

      <Navbar/>

       </div>

       <div className='flex flex-col justify-center mt-5'>

      <Home/>

      <About/>

      <Projects/>

      <Contact/>

      <Footer/>

      </div>
    </div>
  );
}

export default App;

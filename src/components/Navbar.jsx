import React, { useState } from 'react'
import { FaBars, FaDownload, FaTimes } from "react-icons/fa";
import { Link } from 'react-scroll';
import pdf from '../assets/cv.pdf'

export default function Navbar() {

  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const [pdfOpen, setpdfOpen] = useState(false);

  const togglePdf = () => {
    setpdfOpen(!pdfOpen);
  };

  return (
    
    <nav className='flex font-semibold justify-around w-screen p-1 max-xl:p-0 shadow-md text-2xl mx-auto fixed bg-customWhite top-0 z-10'>
        
        <div onClick={togglePdf} className='flex flex-wrap cursor-pointer my-2 justify-center '>

          <h1 className='p-3  hover:-translate-y-1 transition-all '>Resume</h1>
          <FaDownload className='text-2xl translate-y-3 hover:translate-y-4 transition-all'/>
          
          {pdfOpen?
          
          <div>

          <button className=' z-10 fixed top-0 right-0 shadow-lg my-20 mx-12 rounded-full border-black border-2 bg-slate-400' onClick={togglePdf}>
          <FaTimes className='size-8'/>
          </button>

          <iframe className='w-screen h-screen fixed top-0 right-0' src={pdf} frameborder="0"></iframe>

          </div>



          :
            <p className='hidden'></p>
        }



        </div> 


    <ul className='flex p-3 space-x-8 max-md:hidden' >
      
        <li className='cursor-pointer hover:-translate-y-1 transition-all' >
          <Link spy={true} smooth={true} offset={2} duration={500} to="Home">Home</Link>
          </li>
          
        <li className='cursor-pointer hover:-translate-y-1 transition-all' >
          <Link spy={true} smooth={true} offset={-75} duration={500} to="About">About</Link>
          </li>

        <li className='cursor-pointer hover:-translate-y-1 transition-all' >
          <Link spy={true} smooth={true} offset={-50} duration={500} to="Projects">Projects</Link>
          </li>

        <li className='cursor-pointer hover:-translate-y-1 transition-all' >
          <Link spy={true} smooth={true} offset={0} duration={500} to="Contact">Contact</Link>
          </li>

    </ul>

        

      {isOpen ?
        (

          <div>

          <div onClick={toggleNavbar} className='md:hidden'>

          {isOpen ? (<FaTimes size={30} />)
                  : (<FaBars />)}

          </div>

            <ul className='text-4xl py-60 flex flex-wrap text-center fixed top-0 -left-0 w-screen h-screen transition-all bg-customWhite md:hidden' >
            
            <div onClick={toggleNavbar} className='fixed top-0 right-0 m-14 md:hidden'>

            {isOpen ? (<FaTimes  />)
                    : (<FaBars />)}

            </div>

            <li className=' w-screen cursor-pointer' >
              <Link spy={true} smooth={true} offset={2} duration={500} onClick={toggleNavbar} to="Home">Home</Link>
              </li>
              
            <li className=' w-screen cursor-pointer' >
              <Link spy={true} smooth={true} offset={-75} duration={500} onClick={toggleNavbar} to="About">About</Link>
              </li>

            <li className=' w-screen cursor-pointer' >
              <Link spy={true} smooth={true} offset={-50} duration={500} onClick={toggleNavbar} to="Projects">Projects</Link>
              </li>

            <li className=' w-screen cursor-pointer' >
              <Link spy={true} smooth={true} offset={0} duration={500} onClick={toggleNavbar} to="Contact">Contact</Link>
              </li>

            </ul>

          </div>




        )
        :
        (

          <div onClick={toggleNavbar} className='md:hidden p-5'>

          {isOpen ? (<FaTimes size={30} />)
                  : (<FaBars size={30} />)}

        </div>

        )
        }


    </nav>
  )
}

import React from 'react'
import fmh from '../assets/findMeaHome.png'
import oldPortfolio from '../assets/oldPortfolio.png'

export default function Projects() {
  return (
    <div id="Projects" className='flex flex-wrap justify-center font-semibold max-xl:py-40 gap-5  max-xl:-m-0'>


        <h1 className='w-screen text-center my-16 text-4xl'>Projects</h1>

        {/* projects */}


        <div className='flex w-8/12 text-lg max-md:text-base border rounded-2xl max-xl:flex-col shadow-md'>
            
       
            <div className='m-8'>

                <h1 className='text-center m-4'>Find me a home</h1>

                <img className='rounded-2xl shadow-lg' src={fmh} alt="fmh" />

            </div>
            
            <div className='text-center max-lg:text-left m-8'>

                <p className='m-8 mt-16 max-xl:mt-0'>
                    Application developed through scrum methodology with 8 developers.

                    Its objective is to act as an intermediary between animal shelters and people.

                    It also has an e-commerce function oriented to the pets.

                    I worked mainly on the backend managing information about pet users and products.
                </p>

                <div className='flex flex-wrap justify-center m-8'>

                    <img src="https://skillicons.dev/icons?i=js,react,redux,css,html&theme=light" alt="tech" />
                    
                    <img src="https://skillicons.dev/icons?i=nodejs,postgres,express,git&theme=light" className='ml-2 max-xl:m-4'  alt="tech" />
                
                </div>

                <div className='flex justify-evenly m-'>

                <a className='hover:shadow-md p-4 rounded-3xl' target="_blank" href="https://proyecto-final-6jxzmv8cc-carolinambb.vercel.app/">
                        Deploy
                    </a>

                <a className='hover:shadow-md p-4 rounded-3xl' target="_blank" href="https://github.com/Carolinambb/proyecto-final--Find-Me-A-Home">
                        Code
                    </a>

                </div>



            </div>
            
        </div>


        <div className='flex w-8/12 text-lg max-md:text-base border rounded-2xl max-xl:flex-col shadow-md'>
            
       
            <div className='m-8'>

                <h1 className='text-center m-4'>Old Portfolio</h1>

                <img className='rounded-2xl max-h-96 shadow-lg' src={oldPortfolio} alt="fmh" />

            </div>
            
            <div className='text-center max-lg:text-left m-8'>

                <p className='m-8 mt-16 max-xl:mt-0'>

                    Application that showcases my skills, education and experience focused on displaying animations and great reactivity. 
                
                </p>

                <div className='flex flex-wrap justify-center m-8'>

                    <img src="https://skillicons.dev/icons?i=js,react,css,html&theme=light" alt="tech" />
                    
                    <img src="https://skillicons.dev/icons?i=tailwind,mui,git&theme=light" className='ml-2 max-xl:m-4'  alt="tech" />
                
                </div>

                <div className='flex justify-evenly m-'>

                <a className='hover:shadow-md p-4 rounded-3xl' target="_blank" href="https://maurijara312.github.io/portfolio/">
                        Deploy
                    </a>

                <a className='hover:shadow-md p-4 rounded-3xl' target="_blank" href="https://github.com/MauriJara312/portfolio">
                        Code
                    </a>

                </div>



            </div>
            
        </div>

        {/* projects */}

        <div className='flex flex-wrap text justify-center mt-28'>
            <h1 className='text-4xl text-center m-28 max-md:m-10'>New projects soon...</h1>
            <img className='rounded-full h-3/5 max-md:h-2/5 shadow-2xl border-2 ' src="https://media1.tenor.com/m/GOj9ZF_-ZOcAAAAC/cat.gif" alt="" />
        </div>

    </div>
  )
}

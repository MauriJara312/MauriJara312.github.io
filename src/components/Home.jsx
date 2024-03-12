import React from 'react'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import profile from '../assets/profile.png'

export default function Home() {
  return (
    <div id="Home" className='flex flex-wrap justify-center max-xl:pt-24 pt-48'>
        <div className='justify-center flex-wrap flex'>
        <img class="justify-center text-center hover:scale-105 transition-all m-4 mr-8 shadow-sm flex max-lg:w-72h-72 h-80 border-opacity-70 border-4 border-black rounded-full animate-morph" src={profile} alt="Profile"/>
            <div className='flex-row p-5'>
                <h1 className='m-2 font-semibold  max-md:text-2xl text-5xl max-xl:text-center'>Full-Stack Web Developer</h1>
                  <p className='m-5 text-pretty text-xl  max-md:text-lg max-xl:text-center'>Hi, I'm Mauricio Jara. A full-stack JavaScript Developer based in Vilnus, Lithuania.📍</p>
                
                <div className='flex justify-start max-xl:justify-center'>
                  <a aria-label="github" rel="noreferrer" target="_blank" href="https://github.com/MauriJara312">
                  <FaGithub className='hover:scale-110 transition-all text-5xl m-3 cursor-pointer'/>
                  </a>
                  <a aria-label="linkedin" rel="noreferrer" target="_blank" href="https://www.linkedin.com/in/mauri-jara/">
                  <FaLinkedin className='hover:scale-110 transition-all text-5xl m-3 cursor-pointer'/>
                  </a>
                    
                </div>
            </div>
        </div>
        
        <div>

        <h1 className='mt-8 font-bold text-center text-3xl max-md:my-10'>Tech - Stack</h1>

        <ul class='flex justify-center flex-wrap gap-3'>
  
            <li class='text-lg font-semibold md:w-48 md:h-48 flex mx-4 my-2 justify-center items-center hover:-translate-y-2.5 duration-300 transition-transform delay-75'>
              <img src='https://skillicons.dev/icons?i=typescript&theme=light' alt='skillimg'/>
              <img src='https://skillicons.dev/icons?i=javascript&theme=light' alt='skillimg'/>
              <div class="overlay">
                    <p>💻 Languages</p>
                </div>
            </li>
          
            <li class='text-lg font-semibold md:w-48 md:h-48 flex mx-4 my-2 justify-center items-center hover:-translate-y-2.5 duration-300 transition-transform delay-75'>
                <img src='https://skillicons.dev/icons?i=react,redux,tailwind,materialui&theme=light' alt='skillimg'/>
                <div class="overlay">
                    <p>🎨 Client side</p>
                </div>
            </li>
                 
              <li class='text-lg font-semibold md:w-48 md:h-48 flex mx-4 my-2 justify-center items-center hover:-translate-y-2.5 duration-300 transition-transform delay-75'>
              <img src='https://skillicons.dev/icons?i=nodejs,express,postman&theme=light' alt='skillimg'/>
              <div class="overlay">
                    <p>📟 Server side</p>
              </div>
            </li>

              <li class='text-lg font-semibold md:w-48 md:h-48 flex mx-4 my-2 justify-center items-center hover:-translate-y-2.5 duration-300 transition-transform delay-75'>
              <img src='https://skillicons.dev/icons?i=postgres,mysql,sequelize&theme=light' alt='skillimg'/>
              <div class="overlay">
                    <p>💽 Data storage</p>
              </div>
            </li>
                        
              <li class='text-lg font-semibold md:w-48 md:h-48 flex mx-4 my-2 justify-center items-center hover:-translate-y-2.5 duration-300 transition-transform delay-75'>
              <img src='https://skillicons.dev/icons?i=git,github,npm&theme=light' alt='skillimg'/>
              <div class="overlay">
                    <p>⚙️ Tools</p>
              </div>
            </li>
             
              <li class='text-lg font-semibold md:w-48 md:h-48 flex mx-4 my-2 justify-center items-center hover:-translate-y-2.5 duration-300 transition-transform delay-75'>
              <img src='https://skillicons.dev/icons?i=vercel,heroku&theme=light' alt='skillimg'/>
              <div class="overlay">
                    <p>🖼️ Platforms</p>
              </div>
            </li>

        </ul>
                  
        </div>
    </div>
  )
}

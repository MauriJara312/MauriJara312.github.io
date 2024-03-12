import React from 'react'
import bgImage from '../assets/aboutBg.jpg'

export default function About() {
  return (
<div id="About" class="relative  flex pt-44">
    
    <div class="flex inset-0  -translate-x-40 max-md:-translate-x-0 -translate-y-10 max-lg:-translate-y-0 max-md:mb-96">
        <img  class="object-cover rounded-2xl shadow-lg size-fit max-md:h-3/4 h-3/5" src='https://images.pexels.com/photos/1181271/pexels-photo-1181271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt="Background"/>
    </div>
    
  
    <div class="max-md:translate-x-0  translate-x-40 font-semibold translate-y-10 w-3/5 absolute rounded-2xl shadow-lg text-black p-8 bg-white bg-opacity-80">
        <h1 class="text-3xl font-bold  max-md:text-2xl mb-4">Hello, My name is Mauricio Jara</h1>

        <p class="text-lg  max-md:text-base mb-4">
            A developer based in Vilnius who loves to build digital products with polished experiences.
        </p>
        <p class="text-lg  max-md:text-base mb-4">
            My areas of interest include problem-solving, software development, user Experience, data science and analytics.
        </p>
        <p class="text-lg  max-md:text-base">
            Always looking for a challenging position in an organization where my skills will find ample opportunities for improvement and team growth.
        </p>
    </div>
</div>
  )
}

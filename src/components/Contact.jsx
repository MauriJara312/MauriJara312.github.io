import React from 'react'

export default function Contact() {
  return (
    <div id="Contact" className='flex-col  flex text-center mt-14 max-md:px-8'>

        <div>

        <h1 className='text-4xl font-semibold max-md:text-base'>Interested in what I have to offer?</h1>

        <div className='flex-col text-center font-semibold text-xl max-md:text-base'>

            <p className='m-5'>I am currently available to join a team or company.</p>
            <p className='m-5'>Additionally, I am looking for collaborations to develop apps and expand my</p>
            <p className='m-5'>expertise as a full stack developer. Please feel free to contact me for any questions.</p>

        </div>

        </div>

        <div className='flex justify-center'>

        <div className='flex justify-evenly w-2/12 max-md:w-4/6'>

            <a className='hover:shadow-md rounded-lg' target="_blank" href="mailto:mauri13jara@gmail.com">
                <img src="https://skillicons.dev/icons?i=gmail&theme=light" alt="" />
            </a>
            <a className='hover:shadow-md rounded-lg' target="_blank" href="https://www.linkedin.com/in/mauri-jara/">
                <img src="https://skillicons.dev/icons?i=linkedin&theme=light" alt="" />
            </a>
            <a className='hover:shadow-md rounded-lg' target="_blank" href="https://github.com/MauriJara312">
                <img src="https://skillicons.dev/icons?i=github&theme=light" alt="" />
            </a>

        </div>


        </div>



    </div>

    
  )
}

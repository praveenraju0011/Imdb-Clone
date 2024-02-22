import React from 'react'

const Banner = () => {
  return (
    <div 
      // Read more about responsive design here: https://tailwindcss.com/docs/responsive-design
      className='h-[20vh] md:h-[60vh] bg-center bg-no-repeat flex items-end'
      style={{
        backgroundImage: `url(https://assets.mspimages.in/gear/wp-content/uploads/2023/05/john-wick-chapter-4.jpg)`
      }}
    >
      {/* Read more about tailwind color here: https://tailwindcss.com/docs/customizing-colors */}
      <div className='text-xl md:text-3xl bg-gray-900 bg-opacity-60 text-white text-center p-4 w-full'>
        John Wick
      </div>
      
    </div>
  )
}

export default Banner


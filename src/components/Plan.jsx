import React from 'react'
import Planer1 from '../assets/Planer1.jpeg'
import Planer2 from '../assets/Planer2.jpeg'
import Planer3 from '../assets/Planer3.jpeg'
import Planer4 from '../assets/Planer4.jpeg'
import Planer5 from '../assets/Planer5.jpeg'


const Plan = () => {
  return (
    <div className='max-w-[1100px] m-auto py-16 px-4 grid lg:grid-cols-2 gap-4'>
        <div className='grid grid-cols-2 grid-rows-6 h-[80vh]'>
            <img className='row-span-3 object-cover w-full h-full p-2' src={Planer1} alt="/" />
            <img className='row-span-2 object-cover w-full h-full p-2' src={Planer2} alt="/" />
            <img className='row-span-2 object-cover w-full h-full p-2' src={Planer3} alt="/" />
            <img className='row-span-3 object-cover w-full h-full p-2' src={Planer4} alt="/" />
            <img className='row-span-2 object-cover w-full h-full p-2' src={Planer5} alt="/" />
        </div>
        <div className='flex flex-col h-full justify-center'>
            <h3 className='text-5xl md:text-6xl font-bold'>Plan Your Next Trip</h3>
            <p className='text-2xl py-6'>Luxurious, spacious and simply special.</p>
            <p className='pb-6'>The Grand Cabanas (Sea View) are tropical teak lofts with generous living spaces that pays tribute to traditional rural living of Ngapali, paired with modern amenities and facilities.</p>
            <div>
                <button className='border-black mr-4 hover:shadow-xl'>Read More</button>
                <button className='bg-black text-white border-black hover:shadow-xl'>Book Your Trip</button>
            </div>
        </div>
    </div>
  )
}

export default Plan
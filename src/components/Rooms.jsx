import React from 'react'
import Room1 from '../assets/Room1.jpeg'
import Room2 from '../assets/Room2.jpeg'
import Room3 from '../assets/Room3.jpeg'

const Rooms = () => {
  return (
    <div className='max-w-[1100px] h-[500px] bg-blue-100 mx-auto my-20 pt-16 lg:mb-[20%] md:mb-[35%] px-4 grid lg:grid-cols-3 gap-4'>
        <div className='lg:top-20 relative lg:col-span-1 col-span-2'>
            <h3 className='text-2xl font-bold'>Fine Interior Rooms</h3>
            <p className='pt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum qui ducimus sint, maxime atque obcaecati?</p>
        </div>
        <div className='grid grid-cols-2 col-span-2 gap-2'>
            <img className='object-cover w-full h-full' src={Room1} alt="" />
            <img className='row-span-2 object-cover w-full h-full' src={Room2} alt="" />
            <img className='object-cover w-full h-full' src={Room3} alt="" />
        </div>
    </div>
  )
}

export default Rooms
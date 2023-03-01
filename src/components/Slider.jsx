import React,{useState} from 'react'
import Slider1 from '../assets/Slider1.jpeg'
import Slider2 from '../assets/Slider2.jpeg'
import Slider3 from '../assets/Slider3.jpeg'
import Slider4 from '../assets/Slider4.jpeg'
import {SlArrowLeft,SlArrowRight} from 'react-icons/sl'
import {RxDotFilled} from 'react-icons/rx'

const Slider = () => {
    const sliders = [
        {
            imageslider: Slider1,
            title: 'Steak',
        },
        {
            imageslider: Slider2,
            title: 'Purple Lady'
        },
        {
            imageslider: Slider3,
            title: 'Buffet',
        },
        {
            imageslider: Slider4,
            title: 'SpecialChefs'
        }
    ];

    const [currentIndex, setCurrentIndex] = useState(0)

    const preSlide = () => {
        const isFirstSlider = currentIndex === 0
        const newIndex = isFirstSlider ? sliders.length - 1 : currentIndex - 1
        setCurrentIndex(newIndex)
    }

    const nextSlide = () => {
        const isLastSlide = currentIndex === sliders.length - 1
        const newIndex = isLastSlide ? 0 : currentIndex + 1
        setCurrentIndex(newIndex)
    }

    const goToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex)
    }

  return (
    <div className='max-w-[1100px] h-[580px] w-full m-auto py-16 px-4 relative group'>
        <div className='w-full h-full rounded-2xl bg-center bg-cover duration-500' style={{backgroundImage: `url(${sliders[currentIndex].imageslider})`}}></div>

        <div className='absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 group-hover:bg-black/20 text-white cursor-pointer'>
            <SlArrowLeft onClick={preSlide} size={30}/>
        </div>
        <div className='absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 group-hover:bg-black/20 text-white cursor-pointer'>
            <SlArrowRight onClick={nextSlide} size={30}/>
        </div>

        <div className='flex top-4 justify-center py-2'>
            {sliders.map((slider,slideIndex) => (
                <div className='text-2xl cursor-pointer' key={slideIndex} onClick={() => goToSlide(slideIndex)}>
                    <RxDotFilled/>
                </div>
            ))}
        </div>
    </div>
  );
};

export default Slider;
import React from 'react';
import { Carousel } from 'flowbite-react';
export default function FirstCarousel() {
    return (
        <Carousel className='h-[300px] bg-cover bg-no-repeat bg-center'>
          <div>  <img className='object-cover h-full w-full'
                alt="..."
                src="carosel/Image1.jpg"
            /></div>
            <div >
                <img className='object-cover '
                    alt="..."
                    src="carosel/Image2.jpg"
                /></div>
        </Carousel>
    )
}
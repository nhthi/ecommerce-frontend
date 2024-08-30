import React, { useRef, useState } from 'react'
import AliceCarousel from 'react-alice-carousel'
import HomeSectionCard from '../HomeSectionCard/HomeSectionCard'
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowLeft';
import 'react-alice-carousel/lib/alice-carousel.css';
import { Button } from '@mui/material';

const HomeSectionCarousel = ({ data, sectionName }) => {
    const [activeIndex, setActiveIndex] = useState(0)
    const carouselRef = useRef(null);
    const responsive = {
        0: { items: 1 },
        720: { items: 3 },
        1024: { items: 5 },
    }
    
    const slideNext = () => {
        if (carouselRef.current) {
            carouselRef.current.slideNext();
        }
    };

    const slidePrev = () => {
        if (carouselRef.current) {
            carouselRef.current.slidePrev();
        }
    };

    const syncActiveIndex = ({ item }) => { setActiveIndex(item) }

    console.log(activeIndex);

    const items = data.map((item, index) => <HomeSectionCard key={index} product={item} />)

    return (
        <div className='px-4 lg:px-8 '>
            <h2 className='text-2xl font-extrabold text-gray-800 py-5'>{sectionName}</h2>
            <div className='relative p-5'>
                <AliceCarousel
                    ref={carouselRef}
                    disableButtonsControls
                    mouseTracking
                    activeIndex={activeIndex}
                    items={items}
                    responsive={responsive}
                    disableDotsControls
                    onSlideChanged={syncActiveIndex}
                />
                {activeIndex !== 0 && <Button
                    onClick={slidePrev}
                    variant='contained'
                    className='z-50'
                    sx={{
                        position: 'absolute', top: '8rem', left: '0rem', transform: 'translateX(-50%) rotate(90deg)',
                        bgcolor: 'white'
                    }}
                    aria-label='previous'
                >
                    <KeyboardArrowLeftIcon sx={{ transform: 'rotate(-90deg)', color: 'black' }} />
                </Button>}
                {activeIndex !== items.length - 5 && <Button
                    onClick={slideNext}
                    variant='contained'
                    className='z-50'
                    sx={{
                        position: 'absolute', top: '8rem', right: '0rem', transform: 'translateX(50%) rotate(90deg)',
                        bgcolor: 'white'
                    }}
                    aria-label='next'
                >
                    <KeyboardArrowRightIcon sx={{ transform: 'rotate(90deg)', color: 'black' }} />
                </Button>}
            </div>
        </div>
    )
}

export default HomeSectionCarousel

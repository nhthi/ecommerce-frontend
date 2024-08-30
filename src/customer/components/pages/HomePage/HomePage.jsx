import React, { useEffect } from 'react'
import MainCarousel from '../../HomeCarousel/MainCarousel'
import HomeSectionCarousel from '../../HomeSectionCarousel/HomeSectionCarousel'
import { products } from '../../HomeSectionCarousel/productData'
import 'aos/dist/aos.css';
import Aos from 'aos';


const HomePage = () => {
  useEffect(() => {
    Aos.init({
      duration: 800,
      once: true, // Thời gian animation (ms)
    });
  }, []);
  return (
    <div className=''>
      <MainCarousel />
      <div className='px-5 py-20 lg:px-10 space-y-10 flex flex-col justify-center'>
        <div className='' data-aos="fade-in" data-aos-delay="300" data-aos-once="true">
          <HomeSectionCarousel data={products} sectionName={'Áo khoác Jeans'} />
        </div>
        <div className='' data-aos="fade-in" data-aos-delay="300" data-aos-once="true">
          <HomeSectionCarousel data={products} sectionName={'Áo khoác Jeans'} />
        </div>
        <div className='' data-aos="fade-in" data-aos-delay="300" data-aos-once="true">
          <HomeSectionCarousel data={products} sectionName={'Áo khoác Jeans'} />
        </div>
        <div className='' data-aos="fade-in" data-aos-delay="300" data-aos-once="true">
          <HomeSectionCarousel data={products} sectionName={'Áo khoác Jeans'} />
        </div>
        <div className='' data-aos="fade-in" data-aos-delay="300" data-aos-once="true">
          <HomeSectionCarousel data={products} sectionName={'Áo khoác Jeans'} />
        </div>
      </div>
    </div>
  )
}

export default HomePage

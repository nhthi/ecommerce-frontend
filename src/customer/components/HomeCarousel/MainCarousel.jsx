import React from 'react'
import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css';
const items = [
    <img
        className='h-[80vh] w-full object-cover'

        src='https://media.istockphoto.com/id/1215950177/vi/anh/2-asain-trung-qu%E1%BB%91c-v%C3%A0-malay-n%E1%BB%AF-mua-s%E1%BA%AFm-trong-m%E1%BB%99t-c%E1%BB%ADa-h%C3%A0ng-qu%E1%BA%A7n-%C3%A1o-v%C3%A0-c%E1%BB%91-g%E1%BA%AFng-tr%C3%AAn-qu%E1%BA%A7n-%C3%A1o-m%E1%BB%9Bi.jpg?s=2048x2048&w=is&k=20&c=-3MhcomD0iZjZWyKe84KYTE8zmw-QaocmgXQnf-xw2w='
        alt=''
        role='presentation'
    />,
    <img
        className='h-[80vh] w-full object-cover '
        src='https://images.pexels.com/photos/325876/pexels-photo-325876.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        alt=''
        role='presentation'
    />,
    <img
        className='h-[80vh] w-full object-cover'
        alt=""
        src='https://images.pexels.com/photos/1884583/pexels-photo-1884583.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        role='presentation'
    />,
    <img
        className='h-[80vh] w-full object-cover '
        src='https://images.pexels.com/photos/298863/pexels-photo-298863.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        alt=''
        role='presentation'
    />,
    <img
        className='h-[80vh] w-full object-cover object-top '
        src='https://wallpaperaccess.com/full/318911.jpg'
        alt=''
        role='presentation'
    />,
]



const MainCarousel = () => {
    return (
        <div className='-mt-8 w-full'>
            <AliceCarousel

                mouseTracking
                items={items}
                autoPlay
                autoPlayInterval={1000}
                disableButtonsControls
                infinite
                
                renderDotsItem={({ isActive }) => (
                    <div
                        style={{
                            width: 10,
                            height: 10,
                            borderRadius: '50%',
                            backgroundColor: isActive ?  '#00cec9':'#b2bec3' , // Màu sắc khi active và không active
                            margin: '0 4px',
                        }}
                    />
                )}
            />
        </div>
    )
}

export default MainCarousel

import { useState } from 'react';
import Download from './Download';
import { LazyLoadImage, trackWindowScroll } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';


const Result = ({ images, isHistory = false }) => {
    const [currentImage, setCurrentImage] = useState(null);


    return (
        <>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4 bg-white'>
                {images?.map((image, i) => (
                    <div key={i} className='overflow-hidden rounded-md h-[400px] w-full border'>
                        <LazyLoadImage
                            key={i}
                            onClick={(e) => {
                                e.stopPropagation();
                                setCurrentImage(image)
                            }}
                            src={image.webformatURL}
                            className='block cursor-pointer object-cover h-full'
                            alt=""
                            height='100%'
                            width='100%'
                            effect='blur'
                            loading='lazy'
                        >
                        </LazyLoadImage>
                    </div>
                ))}
                {
                    currentImage && <Download
                        image={currentImage}
                        isHistory={isHistory}
                        close={() => setCurrentImage(null)} />
                }
            </div>
        </>
    )
}

export default trackWindowScroll(Result);
import React, { useEffect, useState } from 'react';
import "./slideshow.css"
import image1 from "./slide1.jpg";
import image2 from "./slide2.jpg";
import image3 from "./slide3.jpg";
import image4 from "./slide4.jpg";
import image5 from "./slide5.jpg";


function Slideshow(props) {
    const imageGallery = [image1, image2, image3, image4, image5];
    const imageTitles = ["Design 1", "Design 2", "Design 3", "Design 4", "Design 5"];
    const imageDesc = ["Solitaire engagement rings are a classic, elegant design comprised of a band and one solitary diamond. A Solitaire ring represents one–one eternal love for the one woman in your life.", "diamond ring", "diamond bracelet", "gift ideas", "laest bracelet designs"];
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) =>
            (prevIndex + 1) % imageGallery.length
        );
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? imageGallery.length - 1 : prevIndex - 1
        );
    };

    return (
        <div className='mainContainer'>
            <div className='imgContainer'>
                {imageGallery.map((image, index) => (
                    <img key={index} className={`${'slide'} ${index === currentIndex ? 'activeSlide' : ''}`} src={image} />
                ))}
            </div>
            <div className='text'>
                <h1>{imageTitles[currentIndex]}</h1>
                <p>{imageDesc[currentIndex]}</p>
            </div>
            <div className="arrows">
                <div className="arrow prev" onClick={prevSlide}>
                    <span className="svg svg-arrow-left">
                        <svg version="1.1" id="svg4-Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="14px" height="26px" viewBox="0 0 14 26" enableBackground="new 0 0 14 26" xmlSpace="preserve">
                            <path d="M13,26c-0.256,0-0.512-0.098-0.707-0.293l-12-12c-0.391-0.391-0.391-1.023,0-1.414l12-12c0.391-0.391,1.023-0.391,1.414,0s0.391,1.023,0,1.414L2.414,13l11.293,11.293c0.391,0.391,0.391,1.023,0,1.414C13.512,25.902,13.256,26,13,26z" />
                        </svg>
                    </span>
                </div>
                <div className="arrow next" onClick={nextSlide}>
                    <span className="svg svg-arrow-right">
                        <svg version="1.1" id="svg5-Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="14px" height="26px" viewBox="0 0 14 26" enableBackground="new 0 0 14 26" xmlSpace="preserve">
                            <path d="M1,0c0.256,0,0.512,0.098,0.707,0.293l12,12c0.391,0.391,0.391,1.023,0,1.414l-12,12c-0.391,0.391-1.023,0.391-1.414,0s-0.391-1.023,0-1.414L11.586,13L0.293,1.707c-0.391-0.391-0.391-1.023,0-1.414C0.488,0.098,0.744,0,1,0z" />
                        </svg>
                    </span>
                </div>
            </div>
        </div>
    );
}

export default Slideshow;

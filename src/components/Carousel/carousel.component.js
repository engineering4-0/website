import React, { useState, useEffect } from "react";
import "./carousel.css";
// const items = [1, 2, 3, 4, 5];

const Carousel = ({ images = [] }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleClick = (index) => {
    setActiveIndex(index);
  };
  useEffect(() => {
    function updateCurrentImage(){
      setActiveIndex( currentIndex => {
        let nextIndex = currentIndex + 1;
        if (nextIndex >= images.length) {
          return 0
        }
        return nextIndex
      })
    }
    let carouselInterval = setInterval(() => {
      updateCurrentImage()
    }, 2000);
  
    return () => {
      clearInterval(carouselInterval)
    }
  }, [images.length])
  
  return (
    <>
      {images.length ? (
        <>
          <div className="carousel-container">
            {images.map((item, index) => (
              <img
                className="carousel-item"
                key={index}
                src={images[activeIndex]}
                alt={`carousel-item-${activeIndex}`}
              />
            ))}
            <div className="slider-container">
              {images.map((item, index) => (
                <button
                  className={`slider-button ${
                    index === activeIndex ? "active" : ""
                  }`}
                  key={index}
                  onClick={() => handleClick(index)}
                />
              ))}
            </div>
          </div>
        </>
      ) : (
        <h1>No images found</h1>
      )}
    </>
  );
};

export default Carousel;

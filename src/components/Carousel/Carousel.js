import React, { useState, useEffect } from 'react';

function Carousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const images = [
    { src: 'https://budokanwebsite.s3.amazonaws.com/wp-content/uploads/2020/01/01005229/sliderfinal-5.jpg', alt: 'Descripción de imagen 1' },
    { src: 'https://budokanwebsite.s3.amazonaws.com/wp-content/uploads/2020/01/01005514/sliderfinal-4.jpg', alt: 'Descripción de imagen 2' },
    { src: 'https://budokanwebsite.s3.amazonaws.com/wp-content/uploads/2016/01/01005632/sliderfinal-3.jpg', alt: 'Descripción de imagen 3' },
    { src: 'https://budokanwebsite.s3.amazonaws.com/wp-content/uploads/2020/01/01005514/sliderfinal-4.jpg', alt: 'Descripción de imagen 4' }
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentSlide((currentSlide + 1) % images.length);
    }, 4000);

    return () => clearInterval(intervalId);
  }, [currentSlide, images.length]);

  //const nextSlide = () => {
    //setCurrentSlide((currentSlide + 1) % images.length);
    //<button onClick={nextSlide}>Anterior</button>
  //};

  //const prevSlide = () => {
    //setCurrentSlide(currentSlide === 0 ? images.length - 1 : currentSlide - 1);
    //<button onClick={prevSlide}>Siguiente</button>

 // };

  return (
    <div className="carousel">
      <img src={images[currentSlide].src} alt={images[currentSlide].alt} />
      
    </div>
  );
}

export default Carousel;

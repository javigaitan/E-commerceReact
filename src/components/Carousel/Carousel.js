import React, { useState, useEffect } from 'react';

function Carousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const images = [
    { src: '../img/sliderfinal-3.jpg', alt: 'Descripción de imagen 1' },
    { src: '../img/sliderfinal-4.jpg', alt: 'Descripción de imagen 2' },
    { src: '../img/sliderfinal-5.jpg', alt: 'Descripción de imagen 3' },
    { src: '../img/sliderfinal-3.jpg', alt: 'Descripción de imagen 4' }
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentSlide((currentSlide + 1) % images.length);
    }, 4000);

    return () => clearInterval(intervalId);
  }, [currentSlide, images.length]);

  const nextSlide = () => {
    setCurrentSlide((currentSlide + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? images.length - 1 : currentSlide - 1);
  };

  return (
    <div className="carousel">
      <img src={images[currentSlide].src} alt={images[currentSlide].alt} />
      <button onClick={prevSlide}>Anterior</button>
      <button onClick={nextSlide}>Siguiente</button>
    </div>
  );
}

export default Carousel;

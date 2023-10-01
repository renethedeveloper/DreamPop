import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import "./index.css"

const CarouselContext = () => {
  const responsive = {
    0: { items: 1 },
    568: { items: 5 },
    1024: { items: 6 },
  };

  const items = [
    <div className="item">
      <img src="/images/7pXvW1W.jpg" alt="image" />
    </div>,
    <div className="item">
      <img src="/images/DrawnKristy.jpg" alt="kristy" />
    </div>,
    <div className="item">
      <img src="/images/GreenHeadBandNagel.jpeg" alt="greenheadband" />
    </div>,
    <div className="item">
      <img src="/images/NewVector.jpg" alt="nagel" />
    </div>,
    <div className="item">
      <img src="/images/red-acrylic-chair.jpeg" alt="chair" />
    </div>,
     <div className="item">
     <img src="/images/red-acrylic-chair.jpeg" alt="chair" />
   </div>,
    <div className="item">
    <img src="/images/red-acrylic-chair.jpeg" alt="chair" />
  </div>,
  ];

  return (
    <div>
      <AliceCarousel
        mouseTracking
        items={items}
        responsive={responsive}
        controlsStrategy="alternate"
      />
    </div>
  );
};

export default CarouselContext;

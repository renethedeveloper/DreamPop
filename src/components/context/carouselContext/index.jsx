import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import "./index.css";

const responsive = {
  0: { items: 1 },
  568: { items: 2 },
  768: { items: 3 },
  1024: { items: 4 },
};

const items = [
  <img  id="thumbnail" key="image1" src="/images/7pXvW1W.jpg" alt="image" />,
  <img id="thumbnail"  key="image2" src="/public/images/leatherChair.jpeg" alt="leatherChair" />,
  <img id="thumbnail"  key="image3" src="/public/images/tableSet.jpeg" alt="table" />,
  <img id="thumbnail"  key="image4" src="/public/images/glassSideTable.jpeg" alt="sideTable" />,
  <img id="thumbnail"  key="image5" src="/public/images/glassTable.jpeg" alt="glassTable" />,
  <img id="thumbnail" key="image6" src="/public/images/pinkChair.jpeg" alt="pinkChair" />,
  <img id="thumbnail" key="image7" src="/public/images/MirrorTowers.jpeg" alt="mirrorTowers" />,
];

const CarouselContext = () => {
  return (
    <div className='carousel'>
      <AliceCarousel
        mouseTracking
        items={items}
        responsive={responsive}
        controlsStrategy="alternate"
      />
    </div>
  )
}

export default CarouselContext;

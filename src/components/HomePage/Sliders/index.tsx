import { Carousel } from 'antd';
import React from 'react';
import { useListSlider } from './services/hooks/useListSlider';
import Image from 'next/image';
import styled from 'styled-components';
const CarouselWrapper = styled(Carousel)`
  .slick-dots {
    bottom: 100px;
    left: -80%;
  }

  .slick-dots li {
    margin: 0 10px; /* Adjust the spacing between dots */
  }

  .slick-dots li button {
    width: 25px;
    height: 6px;
    border-radius: 5px;
  }

  .slick-dots li.slick-active button {
    background: white;
    width: 35px;
  }
`;
const Sliders = () => {
  const { listSlider, isLoading } = useListSlider({
    pagination: {
      limit: 1000,
      page: 1
    }
  });

  return (
    <div className=" bg-white">
      <CarouselWrapper autoplay>
        {listSlider?.map(item => (
          <div>
            <img
              src={`${process.env.NEXT_PUBLIC_MEDIA_ENDPOINT}${item.mediaId?.url || ''}`}
              className="w-full h-screen object-contain bg-black"
            />
          </div>
        ))}
      </CarouselWrapper>
    </div>
  );
};

export default Sliders;

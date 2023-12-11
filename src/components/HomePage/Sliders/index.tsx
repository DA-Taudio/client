import { Carousel } from 'antd';
import React from 'react';
import { useListSlider } from './services/hooks/useListSlider';
import Image from 'next/image';

const Sliders = () => {
  const { listSlider, isLoading } = useListSlider({
    pagination: {
      limit: 1000,
      page: 1
    }
  });

  console.log(listSlider);
  return (
    <div className=" bg-white">
      <Carousel autoplay>
        {listSlider?.map(item => (
          <div>
            <img
              src={`${process.env.NEXT_PUBLIC_MEDIA_ENDPOINT}${item.mediaId?.url || ''}`}
              className="w-full h-[500px] object-contain bg-black"
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Sliders;

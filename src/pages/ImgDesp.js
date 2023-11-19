import React from "react";
import ImageCarousel from "../components/ImageCarousel";
import Heading from "../components/Heading";
import { useLocation } from "react-router-dom";




function ImgDesp() {
  const location = useLocation();
  const image = location.state?.data || 'Issue in Fetching';

  

  return (
    <div className='w-[96%] rounded-[9px] border border-[rgba(0,105,140,0.2)] p-2 mx-auto my-[60px] pt-[54px] place-items-center'>
      <Heading name={image?.title} />
      
      {image  && (
        <ImageCarousel images={image?.img} />
      )}
    </div>
  );
}

export default ImgDesp;

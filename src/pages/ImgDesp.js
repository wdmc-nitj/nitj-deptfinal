import React from "react";
import ImageCarousel from "../components/ImageCarousel";
import useFetch from "../hooks/useFetch";
import { useParams } from "react-router-dom";

function ImgDesp() {
  const dept = useParams()?.dept;
  const itemId = useParams()?.itemId;
  const cool = useFetch(`/dept/${dept}/Infrastructure`).data;
  const image = cool && cool.find((item) => item._id === itemId);

  return (
    <div className="container p-5 m-auto flex justify-center items-center">
      <div className="my-10 px-4 py-4 xl:flex items-center rounded-lg overflow-hidden border w-full">
        {/* Left side with ImageCarousel */}
        <div className="xl:w-1/2">
          <ImageCarousel image={image} />
        </div>
        {/* Right side with Heading and Description */}
        <div className="xl:w-1/2">
          <div className="text-center p-5">
            {image?.title && (
              <div className="bg-[#0054A6] rounded-full mb-4 p-2 inline-block">
                <h1 className="text-2xl px-3 xl:text-left font-bold text-white">{image.title}</h1>
              </div>
            )}
            {image?.imgdesp && <p className="text-left text-gray-700">{image.imgdesp}</p>}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ImgDesp;

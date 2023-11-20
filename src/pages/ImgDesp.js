import React from "react";
import ImageCarousel from "../components/ImageCarousel";
import Heading from "../components/Heading";
import { useParams } from "react-router-dom";
import Loading from "../components/Loading";
import useFetch from "../hooks/useFetch";




function ImgDesp() {

  const id = useParams().itemId
  const dept = useParams().dept
  const { data, loading } = useFetch(`/dept/${dept}/Infrastructure/${id}`);
  

  return (
    loading? <Loading></Loading>:
    <div className='w-[96%] rounded-[9px] border border-[rgba(0,105,140,0.2)] p-2 mx-auto my-[60px] pt-[54px] place-items-center'>

      <Heading name={data?.title} />
      <div className='flex flex-col'>
        <div className='mt-0 m-2 w-full rounded-md flex overflow-hidden'>
          <div className='relative w-full overflow-hidden'>
            <div className='relative px-[200px] bg-center flex items-center transition-all justify-center'>
              { (
                <img
                  src={data?.mainImage}
                  className='w-full h-auto aspect-video sm:max-h-[450px] block align-middle rounded-md'
                  alt='Lab Image'
                />
                )}
            </div>
          </div>
        </div>
        <div className='container  m-auto flex justify-center items-center'>
          <div className='px-4 xl:flex items-center rounded-lg overflow-hidden border w-full'>
            <div className='xl:w-full'>
              <div className='text-center p-5'>
                {(
                  <p className='text-left text-gray-700'>{data?.desc}</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      {(data?.incharge ||data?.location ) && <div className="p-[30px] my-[5px]  ">
        <div className="bg-gray-600 p-[20px] rounded flex justify-around items-center">      { data?.incharge&& <div className='text-white text-[20px]'>Incharge: <span className="font-extrabold">{data?.incharge}</span></div>}
                { data?.location&& <div className='text-white text-[20px]'>location: <span className="font-extrabold">{data?.location}</span></div>}</div>
     </div> }
      {data?.images  &&  data?.images.map((image) =>{
        
        return <ImageCarousel data={image} />
      }
      )}
    </div>
  );
}

export default ImgDesp;

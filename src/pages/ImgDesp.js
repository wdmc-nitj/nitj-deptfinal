import React, { useEffect, useState } from "react";
import ImageCarousel from "../components/ImageCarousel";
import Heading from "../components/Heading";
import { useParams } from "react-router-dom";
import Loading from "../components/Loading";
import useFetch from "../hooks/useFetch";
import OpenPdf from "./OpenPdf";

function LabSyllabus({data , loading}){
  const [state,setState]= useState("");
  useEffect(()=>{
      setState(data[0]?.link);
      return ()=>{}
  },[data]);
  return (
      <div className='w-[98%] rounded-[9px] border border-[rgba(0,105,140,0.2)] p-2 mx-1 xl:mx-3 my-[60px] pt-[54px] place-items-center'>
          <Heading name="Lab Manual" />
          {!loading?<div className='shadow shadow-blue-400 md:m-4 pb-2'>
              <div className='flex items-center w-full py-3 font-medium text-lg px-4 shadow-md shadow-blue-200'>
                  <div className='flex w-fit items-center border border-gray-300 text-gray-900 text-sm p-2 rounded'>
                      <label htmlFor="states" className="mr-2">Programme :</label>
                      <select id="states" className="border-none outline-none"  onChange={(e)=>{
                          setState(e.target.value);
                      }}>
                          {data?.map((e)=>{
                              return <option value={e?.link}>{e?.type}</option>
                          })}
                      </select>
                  </div>
              </div>
              <OpenPdf link={state} />
          </div>:<Loading/>}
          
      </div>
  )
}

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
                  src={data?.img}
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
     <LabSyllabus loading={loading} data={data?.syllabus}/>
    </div>
  );
}

export default ImgDesp;

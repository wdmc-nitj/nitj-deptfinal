import { React } from "react";
import { useLocation } from 'react-router-dom';
import useFetch from "../hooks/useFetch";
import Heading from "../components/Heading";
import Loading from "../components/Loading";
import { useNavigate } from "react-router-dom";
function Infrastructure() {
  const navigate = useNavigate();
  const url = useLocation();
  const dept = url.pathname.split('/')[2];
  const { data, loading } = useFetch(url.pathname + '?q=Infrastructure');

  const handleImageClick = (item) => {
    navigate(`/dept/${dept}/Imgdesp/${item._id}`);
  };


  return (
    <div className='w-[96%] rounded-[9px] border border-[rgba(0,105,140,0.2)] p-2 mx-auto sm:mx-3 mt-[60px] pt-[54px] place-items-center'>
      <Heading name="Infrastructure" />
      {!loading ? <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 sm:m-4 sm:p-2 place-items-center gap-4 antialiased text-gray-900">
        {
          data ? data.map((item, i) => {
            return (
              item.type === "Infrastructure" && <div key={i} className='w-full my-4 sm:mx-4 p-2'>
                <div className="w-full h-60 sm:h-72 border-2 object-cover object-center relative rounded-lg shadow-md bg-grey overflow-hidden group "  onClick={() => handleImageClick(item)}>
                      <img
                        src={item?.img}
                        alt="Infrastructure"
                        className="w-full h-full object-cover object-center rounded-lg group-hover:scale-110 shadow-md duration-500"
                      />
                      {item?.title && <div className="absolute cursor-pointer z-10 p-2 inset-0 flex items-center justify-center text-xl font-bold text-white bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 duration-300 transition">
                        { item.title}
                      </div>}
                    </div>

                    <div className=" z-20 relative px-4 -mt-7 md:-mt-9">
                      <div className="max-w-fit mx-auto bg-white flex items-center  justify-center p-4 sm:p-6 rounded-lg shadow-lg">
                        <h4 title={item?.title} className="text-xl cursor-pointer font-semibold uppercase leading-tight truncate">{item?.title}</h4>
                      </div>
                    </div>
                  </div>
            )
          }) : <h1>Data not Available</h1>
        }
      </div> : <Loading />}

    </div>
  )



}





export default Infrastructure


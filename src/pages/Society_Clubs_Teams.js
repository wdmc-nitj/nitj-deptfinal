import React, { useEffect, useState } from 'react'
import useFetch from '../hooks/useFetch';
import { useParams } from 'react-router-dom';
import Heading from '../components/Heading';
import Loading from '../components/Loading';
import { openInNewWindow } from '../helper';
const Society_Clubs_Tems = () => {
  const { data, loading } = useFetch(`/dept/${useParams()?.dept}/SocietyClubs`);
  const scrollNextPage = (id) => {
    const gallery = document.querySelector(id);
    const gallery_scroller = gallery.querySelector('.cards');
    gallery_scroller.scrollBy(320, 0);
  }
  const scrollPrevPage = (id) => {
    const gallery = document.querySelector(id);
    const gallery_scroller = gallery.querySelector('.cards');
    gallery_scroller.scrollBy(-320, 0);
  }
  const [Club, setClub] = useState(false)
  const [Soceity, setSoceity] = useState(false)
  const [Team, setTeam] = useState(false)
  const Intialize = () => {
    data?.map((item) => {
      item.type === "Club" && setClub(true)
      item.type === "Societies" && setSoceity(true)
      item.type === "Team" && setTeam(true)
    })
  }
  useEffect(() => {
    Intialize()
  })

  return (
    <div className='w-[98%] rounded-[9px] border border-[rgba(0,105,140,0.2)] p-2 mx-1 xl:mx-3 my-[60px] pt-[54px] place-items-center'>

      <Heading name="Society/Clubs/Teams" />
      {!loading ? <div className="w-full mt-12 px-6 mx-auto">
        {
          Soceity && <section className="mb-20 text-center">
            <h2 className="text-5xl font-bold mb-16">Departments <u className="text-blue-600">Societies</u></h2>
            <div id='scrollcontrol' className='w-full'>
              <div className="cards w-full flex snap-x overflow-x-auto scrollhide delay-200 scroll-smooth gap-x-6 px-3 pt-[80px] pb-4">
                {
                  data.filter((e) => e.type === "Societies")?.map((item, i) => {
                    return (
                      <div key={i} className="mb-0 w-80 h-full">
                        <div className="w-full rounded-lg shadow shadow-blue-500 h-full bg-white">
                          <div className="flex justify-center w-full">
                            <div className="flex justify-center -mt-[75px]" >
                              <img src={item?.img} className="rounded-full mx-auto shadow-lg border-2 border-blue-500 w-32 h-32" alt=""
                              />
                            </div>
                          </div>
                          <div className="p-3 w-80">
                            <h5 className="text-lg font-bold mb-4">{item?.title}</h5>
                            <p className="text-justify mb-6 overflow-y-auto max-h-[170px] px-2 scrollbar">{item?.description}</p>
                            <ul className="list-inside flex mx-auto justify-center">
                            {item?.TwitterUrl && <div onClick={()=>openInNewWindow(item?.TwitterUrl)} className="px-2">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-4 h-4 text-blue-600">
                                  <path fill="currentColor"
                                    d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" />
                                </svg>
                              </div>}
                              { item?.FacebookUrl && <div onClick={()=>openInNewWindow(item.FacebookUrl)}>
                            <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 48 48" width="30px" height="30px">
                              <linearGradient id="Ld6sqrtcxMyckEl6xeDdMa" x1="9.993" x2="40.615" y1="9.993" y2="40.615" gradientUnits="userSpaceOnUse">
                                <stop offset="0" stop-color="#2aa4f4"/><stop offset="1" stop-color="#007ad9"/></linearGradient>
                                
                                <path fill="url(#Ld6sqrtcxMyckEl6xeDdMa)" d="M24,4C12.954,4,4,12.954,4,24s8.954,20,20,20s20-8.954,20-20S35.046,4,24,4z"/><path fill="#fff" d="M26.707,29.301h5.176l0.813-5.258h-5.989v-2.874c0-2.184,0.714-4.121,2.757-4.121h3.283V12.46 c-0.577-0.078-1.797-0.248-4.102-0.248c-4.814,0-7.636,2.542-7.636,8.334v3.498H16.06v5.258h4.948v14.452 C21.988,43.9,22.981,44,24,44c0.921,0,1.82-0.084,2.707-0.204V29.301z"/></svg>
                              </div>}
                             {item?.LinkedinUrl &&  <div onClick={()=>openInNewWindow(item?.LinkedinUrl)} className="px-2">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-4 h-4 text-blue-600">
                                  <path fill="currentColor"
                                    d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z" />
                                </svg>
                              </div>}
                             {item?.InstagramUrl && <a onClick={()=>openInNewWindow(item.InstagramUrl)} className="px-2">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-4 h-4 text-blue-600">
                                  <path fill="currentColor"
                                    d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                                </svg>
                              </a>}
                            </ul>
                          </div>
                        </div>
                      </div>
                    )
                  })
                }
              </div>
              <div className='flex gap-x-2'>
                <button className='w-8 h-8 flex flex-0 items-center justify-center object-cover border-2 font-extrabold rounded active:translate-y-[2px] rotate-180' onClick={() => scrollPrevPage('#scrollcontrol')}>
                  <svg focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className='fill-slate-600 '><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"></path></svg>
                </button>
                <button className='w-8 h-8 flex flex-0 items-center justify-center object-cover border-2 font-extrabold rounded active:translate-y-[2px]' onClick={() => scrollNextPage('#scrollcontrol')}>
                  <svg focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className='fill-slate-600'><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"></path></svg>
                </button>
              </div>
            </div>
          </section>
        }

        {
          Club && <section className="mb-20 text-center">
            <h2 className="text-5xl font-bold mb-16">Departments <u className="text-blue-600">Clubs</u></h2>
            <div id='scrollcontrol3' className='w-full'>
              <div className="cards w-full flex snap-x overflow-x-auto scrollhide delay-200 scroll-smooth gap-x-6 px-3 pt-[80px] pb-4">
                {
                  data.filter((e) => e.type === "Club")?.map((item, i) => {
                    return (
                      <div key={i} className="mb-0 w-80 h-full">
                        <div className="w-full rounded-lg shadow shadow-blue-500 h-full bg-white">
                          <div className="flex justify-center w-full">
                            <div className="flex justify-center -mt-[75px]" >
                              <img src={item?.img} className="rounded-full mx-auto shadow-lg border-2 border-blue-500 w-32 h-32" alt=""
                              />
                            </div>
                          </div>
                          <div className="p-3 w-80">
                            <h5 className="text-lg font-bold mb-4">{item?.title}</h5>
                            <p className="text-justify mb-6 overflow-y-auto max-h-[180px] px-2 scrollbar">{item?.description}</p>
                            <ul className="list-inside flex mx-auto justify-center">
                              {item?.TwitterUrl && <div onClick={()=>openInNewWindow(item?.TwitterUrl)} className="px-2">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-4 h-4 text-blue-600">
                                  <path fill="currentColor"
                                    d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" />
                                </svg>
                              </div>}
                              { item?.FacebookUrl && <div onClick={()=>openInNewWindow(item.FacebookUrl)}>
                            <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 48 48" width="30px" height="30px">
                              <linearGradient id="Ld6sqrtcxMyckEl6xeDdMa" x1="9.993" x2="40.615" y1="9.993" y2="40.615" gradientUnits="userSpaceOnUse">
                                <stop offset="0" stop-color="#2aa4f4"/><stop offset="1" stop-color="#007ad9"/></linearGradient>
                                
                                <path fill="url(#Ld6sqrtcxMyckEl6xeDdMa)" d="M24,4C12.954,4,4,12.954,4,24s8.954,20,20,20s20-8.954,20-20S35.046,4,24,4z"/><path fill="#fff" d="M26.707,29.301h5.176l0.813-5.258h-5.989v-2.874c0-2.184,0.714-4.121,2.757-4.121h3.283V12.46 c-0.577-0.078-1.797-0.248-4.102-0.248c-4.814,0-7.636,2.542-7.636,8.334v3.498H16.06v5.258h4.948v14.452 C21.988,43.9,22.981,44,24,44c0.921,0,1.82-0.084,2.707-0.204V29.301z"/></svg>
                              </div>}
                             {item?.LinkedinUrl &&  <div onClick={()=>openInNewWindow(item?.LinkedinUrl)} className="px-2">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-4 h-4 text-blue-600">
                                  <path fill="currentColor"
                                    d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z" />
                                </svg>
                              </div>}
                             {item?.InstagramUrl && <a onClick={()=>openInNewWindow(item.InstagramUrl)} className="px-2">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-4 h-4 text-blue-600">
                                  <path fill="currentColor"
                                    d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                                </svg>
                              </a>}
                            </ul>
                          </div>
                        </div>
                      </div>
                    )
                  })
                }
              </div>
              <div className='flex gap-x-2'>
                <button className='w-8 h-8 flex flex-0 items-center justify-center object-cover border-2 font-extrabold rounded active:translate-y-[2px] rotate-180' onClick={() => scrollPrevPage('#scrollcontrol3')}>
                  <svg focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className='fill-slate-600 '><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"></path></svg>
                </button>
                <button className='w-8 h-8 flex flex-0 items-center justify-center object-cover border-2 font-extrabold rounded active:translate-y-[2px]' onClick={() => scrollNextPage('#scrollcontrol3')}>
                  <svg focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className='fill-slate-600'><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"></path></svg>
                </button>
              </div>
            </div>
          </section>
        }

        {
          Team && <section className="mb-20 text-center">
            <h2 className="text-5xl font-bold mb-16">Departments <u className="text-blue-600">Team</u></h2>
            <div id='scrollcontrol2' className='w-full'>
              <div className="cards w-full flex snap-x overflow-x-auto scrollhide delay-200 scroll-smooth gap-x-6 px-3 pt-[80px] pb-4">
                {
                  data.filter((e) => e.type === "Team")?.map((item, i) => {
                    return (
                      <div key={i} className="mb-0 w-80 h-full">
                        <div className="w-full rounded-lg shadow shadow-blue-500 h-full bg-white">
                          <div className="flex justify-center w-full">
                            <div className="flex justify-center -mt-[75px]" >
                              <img src={item?.img} className="rounded-full mx-auto shadow-lg border-2 border-blue-500 w-32 h-32" alt=""
                              />
                            </div>
                          </div>
                          <div className="p-3 w-80">
                            <h5 className="text-lg font-bold mb-4">{item?.title}</h5>
                            <p className="mb-6 overflow-y-auto max-h-[180px] px-2 scrollbar">{item?.description}</p>
                            <ul className="list-inside flex mx-auto justify-center">
                            {item?.TwitterUrl && <div onClick={() => openInNewWindow(item?.TwitterUrl)} className="px-2">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-4 h-4 text-blue-600">
                                  <path fill="currentColor"
                                    d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" />
                                </svg>
                              </div>}
                            {true && <div onClick={()=>openInNewWindow(item?.TwitterUrl)} className="px-2">
                       { item?.FacebookUrl && <div onClick={()=>openInNewWindow(item.FacebookUrl)}>
                            <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 48 48" width="30px" height="30px">
                              <linearGradient id="Ld6sqrtcxMyckEl6xeDdMa" x1="9.993" x2="40.615" y1="9.993" y2="40.615" gradientUnits="userSpaceOnUse">
                                <stop offset="0" stop-color="#2aa4f4"/><stop offset="1" stop-color="#007ad9"/></linearGradient>
                                
                                <path fill="url(#Ld6sqrtcxMyckEl6xeDdMa)" d="M24,4C12.954,4,4,12.954,4,24s8.954,20,20,20s20-8.954,20-20S35.046,4,24,4z"/><path fill="#fff" d="M26.707,29.301h5.176l0.813-5.258h-5.989v-2.874c0-2.184,0.714-4.121,2.757-4.121h3.283V12.46 c-0.577-0.078-1.797-0.248-4.102-0.248c-4.814,0-7.636,2.542-7.636,8.334v3.498H16.06v5.258h4.948v14.452 C21.988,43.9,22.981,44,24,44c0.921,0,1.82-0.084,2.707-0.204V29.301z"/></svg>
                              </div>}
                              </div>}
                             {item?.LinkedinUrl &&  <div onClick={()=>openInNewWindow(item?.LinkedinUrl)} className="px-2">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-4 h-4 text-blue-600">
                                  <path fill="currentColor"
                                    d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z" />
                                </svg>
                              </div>}
                             {item?.InstagramUrl && <a onClick={()=>openInNewWindow(item.InstagramUrl)} className="px-2">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-4 h-4 text-blue-600">
                                  <path fill="currentColor"
                                    d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                                </svg>
                              </a>}
                            </ul>
                          </div>
                        </div>
                      </div>
                    )
                  })
                }
              </div>
              <div className='flex gap-x-2'>
                <button className='w-8 h-8 flex flex-0 items-center justify-center object-cover border-2 font-extrabold rounded active:translate-y-[2px] rotate-180' onClick={() => scrollPrevPage('#scrollcontrol2')}>
                  <svg focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className='fill-slate-600 '><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"></path></svg>
                </button>
                <button className='w-8 h-8 flex flex-0 items-center justify-center object-cover border-2 font-extrabold rounded active:translate-y-[2px]' onClick={() => scrollNextPage('#scrollcontrol2')}>
                  <svg focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className='fill-slate-600'><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"></path></svg>
                </button>
              </div>
            </div>
          </section>
        }
      </div> : <Loading />}

    </div>
  )
}

export default Society_Clubs_Tems

import React, { useEffect, useState } from 'react'
import BaseTable from '../pages/BaseTable';
import useFetch from '../hooks/useFetch'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import Otherprofilelink from '../forms/facultyprofile/Otherprofilelink';
import ResearchProfile from '../forms/facultyprofile/ResearchProfile';
// import downloadpdf from './Img/download.png'
import Exceldownloadpdf from './Img/Exceldownload.png'
import axios from 'axios';
import { SERVER_URL } from '../config/server';
import PersonalDetails from '../forms/facultyprofile/PersonalDetails';
import default_avatar from './Img/default_avatar.jpg';
import exportFromJSON from 'export-from-json';
import Loading from './Loading'
function Profile({ peopleType }) {

  let navigate = useNavigate()
  const dept = useParams()?.dept;
  var id = useLocation().pathname.split('/').at(-1);
  var token = "";

  if (document.cookie) {
    var initialArr = document.cookie.split(';');
    if (initialArr.length) {
      var values = initialArr.find(cookie => cookie.trim().startsWith('nitjsession='));

      if (values) {
        token = values.split('=')[1];
      }
    }
  }
  const { data, loading } = useFetch(`/dept/${dept}/${peopleType}/${id}/${token}`);
  const [isLogin, setIsLogin] = useState(false);
  const [facultyEditable, setFacultyEditable] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    setIsLogin(data?.validation?.login);
    setFacultyEditable(data?.validation?.isFaculty);
    if(localStorage.getItem('activeTab')) {
      setActive(Number(localStorage.getItem('activeTab')))
    }
  }, [data])

  const map = {
    'Personal Details': 'publications',
    'Profile Links': 'personal_link',
    'Journal Publications': 'journal',
    'Conference Publications': 'conference_publications',
    'Research Profile': 'research_profile',
    'Research Projects': 'research_project',
    'Book/Chapter Publications': 'book_publications',
    'Events Organized': 'event',
    'Professional Affiliations': 'affiliations',
    'PhD Supervised': 'phd_supervised',
    'PG Dissertation Guided': 'phd_dissertion',
    'Patents': 'patent',
    'Admin. Responsiblities': 'admin_responsibility',
    'Award and Honours': 'awards'
  };

  const Link = [{
    Title: 'Personal Details'
  }, {
    Title: 'Profile Links'
  }, {
    Title: 'Research Profile'
  }, {
    Title: 'Journal Publications',
    thead: ['Year', 'Name', 'Aurthor + Title', 'Link'],
    feild: ['Year', 'Name', 'Aurthor + Title', 'Link']
  }, {
    Title: 'Conference Publications',
    thead: ['Year', 'Conference', 'Publication', 'Link'],
    feild: ['Year', 'Publisher', 'Title', 'Link']
  }, {
    Title: 'Book/Chapter Publications',
    thead: ['Type', 'Title', 'Publisher', 'Authors', 'ISBN/ISSN', 'Year'],
    feild: ['Type', 'Title', 'Publisher', 'Authors', 'ISBN/ISSN', 'Year']
  }, {
    Title: 'Research Projects',
    thead: ['Role', 'Project Type', 'Title', 'Funding Agency', 'From', 'To', 'Amount', 'Status', 'Co-Investigator'],
    feild: ['Role', 'Project Type', 'Title', 'Funding Agency', 'From', 'To', 'Amount', 'Status', 'Co-investigator']
  }, {
    Title: 'Events Organized',
    thead: ['Category', 'Type', 'Title', 'Venue', 'From', 'To', 'Designation'],
    feild: ['Category', 'Type', 'Title', 'Venue', 'From', 'To', 'Designation']
  }, {
    Title: 'Professional Affiliations',
    thead: ['Designation', 'Organisation'],
    feild: ['Designation', 'Organisation']
  }, {
    Title: 'PhD Supervised',
    thead: ['Scholar Name', 'Research Topic', 'Status', 'Year', 'Co-Supervisor'],
    feild: ['Scholar Name', 'Research Topic', 'Status', 'Year', 'Co-Supervisor']
  }, {
    Title: 'PG Dissertation Guided',
    thead: ['Student Name', 'Dissertation Title', 'Status', 'Year', 'Co-Supervisor'],
    feild: ['Co-Supervisor', 'Dissertation Title', 'Status', 'Year', 'Student Name']
  }, {
    Title: 'Patents',
    thead: ['Name', 'Reg./Ref. No.', 'Date of Award/Filling', 'Organization', 'Status'],
    feild: ['Name', 'Reg./Ref. No.', 'Date of Award/Filling', 'Organization', 'Status']
  }, {
    Title: 'Admin. Responsiblities',
    thead: ['Position Held', 'Organization', 'From', 'To'],
    feild: ['Position Held', 'Organization', 'From', 'To']
  }, {
    Title: 'Award and Honours',
    thead: ['Title', 'Activity', 'Given by', 'Year'],
    feild: ['Title', 'Activity', 'Given by', 'Year']
  }];

  const [active, setActive] = useState(0);
  const [edit, setEdit] = useState(false);
  const [update, setUpdate] = useState(false)
  const [loginOpen, setLoginOpen] = useState(false);
  const [Editfeild, setEditfeild] = useState(-1);
  const setedit = () => { setEdit(true); SetEditfeild(-1); }
  const setview = () => { setEdit(false); SetEditfeild(-1); }
  // Handle the Edit functions in the table
  const SetEditfeild = (i) => { setEditfeild(i); }
  const HandleEdit = (i) => {
    setUpdate(true);
    setedit();
    SetEditfeild(i);
  }

  const setActiveHelper = (index) => {
    localStorage.setItem('activeTab',index);
    setActive(index);
  }
  
  const ExportToExcel = () => {
    var Data = [];
    Data = data?.data[0][map[Link[active].Title]];

    exportFromJSON({ data: Data, fileName: Link[active].Title, exportType: exportFromJSON.types.xls })
  }
  const logout = async (e) => {
    try {
      window.location.reload();
      var token = "";
      if (document.cookie) {
        var initialArr = document.cookie.split(';');
        if (initialArr.length) {
          var values = initialArr.find(cookie => cookie.trim().startsWith('nitjsession='));

          if (values) {
            token = values.split('=')[1];
            document.cookie = `nitjsession=;Expires=Thu, 01 Jan 1970 00:00:01 GMT;path=/;`;
          }
        }
      }
      const response = await axios.get(`${SERVER_URL}/dept/${dept}/logout/${token}`, { withCredentials: true });
      navigate(`/dept/${dept}/Faculty`);
    } catch (error) {
    }
  }
  const scrollNextPage = () => {
    const gallery = document.querySelector('#scrollcontrol');
    const gallery_scroller = gallery.querySelector('.cards');
    gallery_scroller.scrollBy(200, 0);
  }
  const scrollPrevPage = () => {
    const gallery = document.querySelector('#scrollcontrol');
    const gallery_scroller = gallery.querySelector('.cards');
    // const gallery_item_size = gallery_scroller.querySelector('div').clientWidth;
    gallery_scroller.scrollBy(-200, 0);
  }



  return (
    <div className='w-full px-auto text-sm sm:text-base'>
      {
      !loading?data?.data?.map((item) => {
        return (
          <div key={item?._id} className="block lg:mt-10 py-4 w-[98%] mx-auto">
            <div className="relative flex flex-col flex-auto w-full min-w-0 p-4 overflow-hidden break-words border shadow-md rounded-2xl bg-white/80 bg-clip-border mb-4 draggable mx-auto" draggable="true">
              <div className="flex relative items-center justify-between -mx-3">
                <div className="flex w-[calc('100%-9rem')]">
                  <div className="flex-none w-auto max-w-full px-3">
                    <div className="w-20 h-20 xl:w-24 xl:h-24 flex-grow-0 flex-shrink-0">
                      <img src={item ? item.img : default_avatar} className="w-full h-full object-cover object-left-top rounded-xl shadow-xl flex-grow-0 flex-shrink-0" alt='...' />
                    </div>
                  </div>
                  <div className="flex-none w-auto max-w-full px-3 my-auto">
                    <div className="h-full">
                      <h5 className="mb-1 text-xl font-semibold">{item?.name}</h5>
                      {/* <p title={item?.position} className="text-zinc-500 mb-0 font-medium leading-normal w-96 xl:w-full whitespace-nowrap overflow-hidden">{item?.position}</p> */}
                    </div>
                  </div>
                </div>
                <div className='absolute z-30 top-0 right-0 flex sm:hidden'>
                  <button className={"w-8 h-8 flex flex-0 items-center justify-center object-cover font-extrabold active:translate-y-[2px] "} onClick={() => setLoginOpen(!loginOpen)}>
                    <i className="fa-solid fa-ellipsis-vertical"></i>
                  </button>
                </div>
                <div className={"items-center justify-center bg-white z-20 h-full absolute right-0 mx-2 duration-200 " + (loginOpen ? 'flex w-40 opacity-100' : 'hidden sm:flex opacity-0 sm:opacity-100')}>
                  <div className='flex w-full items-center justify-center'>
                    <button onClick={() => { !isLogin ? navigate(`/dept/${dept}/login`) : logout() }} className={"bg-[#0054A6] ml-2 text-white text-base duration-500 w-20 xl:w-24 py-2 px-3 text-center shadow-md border border-[#FFD66E]  rounded hover:-translate-y-1 hover:scale-110"}>
                      {!isLogin ? "Login" : "Logout"}
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="flex flex-wrap justify-center">
                <div className="w-full md:px-4">
                  <div id='scrollcontrol' className='m-2 relative shadowp'>
                    <div className='cards scrollhide flex items-center snap-x h-14 border-t border-b m-2 overflow-x-auto overflow-y-hidden'>
                      {Link.map((Item, i) => {
                        return (
                          <div key={i+item._id} className={"border snap-center shrink-0 w-max rounded-xl px-3 py-1.5 m-1 cursor-pointer hover:text-purple-600 active:scale-95 duration-150 " + (active === i ? 'border-slate-800 text-purple-700 font-semibold' : '')} onClick={() => { setActiveHelper(i); setview() }}>{Item?.Title}</div>
                        )
                      })}
                    </div>
                    <button className='absolute top-[25%] -left-3 w-8 h-8 flex flex-0 items-center justify-center object-cover border-2 font-extrabold rounded-full active:translate-y-[2px] rotate-180' onClick={scrollPrevPage}>
                      <svg focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className='fill-blue-600 '><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"></path></svg>
                    </button>
                    <button className='absolute top-[25%] -right-4 w-8 h-8 flex flex-0 items-center justify-center object-cover border-2 font-extrabold rounded-full active:translate-y-[2px]' onClick={scrollNextPage}>
                      <svg focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className='fill-blue-600'><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"></path></svg>
                    </button>
                  </div>
                </div>
                <div className='w-[98%] my-2 duration-200 shadow-md'>
                  <div className="flex justify-between items-center my-2 shadow-lg py-2 rounded-t border">
                    <div className="text-base sm:text-lg font-semibold px-3 py-1">{Link[active]?.Title}</div>
                    <div className='flex items-center justify-center mx-2'>
                      <span title='Download Excel File' className={"cursor-pointer px-3 h-6 active:scale-95 " + (active > 2 ? '' : 'hidden')} onClick={() => ExportToExcel()}>
                        <img className='h-full' src={Exceldownloadpdf} alt='Download Excel File' />
                      </span>
                      {isLogin && facultyEditable && Link[active]?.Title !== 'Personal Details' && <>
                        <span title='View as Table' className={"cursor-pointer px-3 " + (edit ? '' : 'hidden ')} onClick={() => setview()}><i className="fa-solid fa-eye-slash"></i></span>
                        <span className={"cursor-pointer px-3 " + (edit ? 'hidden ' : '') + (isLogin ? '' : 'hidden')}><i className="fa-solid fa-eye"></i></span>
                        <span title='Add new data' className={'cursor-pointer px-3'} onClick={() => setedit()}><i className="fa-solid fa-pen-to-square"></i></span>
                      </>}
                    </div>
                  </div>
                  <div className='p-2 mt-4'>
                    {active === 0 && <PersonalDetails edit={edit} data={data?.data[0]} />}
                    {active === 1 && <Otherprofilelink edit={edit} isLogin={facultyEditable} data={data?.data[0]} token={token} />}
                    {active === 2 && <ResearchProfile edit={edit} isLogin={facultyEditable} data={data?.data[0]['research_profile']} faculty={data?.data[0]} token={token} />}
                    {active > 2 && <BaseTable edit={edit} tablehead={Link[active].thead} faculty={data?.data[0]} data={data?.data[0][map[Link[active].Title]]} Editfeild={Editfeild} HandleEdit={HandleEdit} feild={Link[active].feild} isLogin={facultyEditable} title={map[Link[active].Title]} token={token} />}
                    {/* <BaseTable edit={edit} /> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
      }):<Loading/>
      }
    </div>
  );

}

export default Profile
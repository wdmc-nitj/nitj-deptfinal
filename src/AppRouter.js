import Footer from './components/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AllPlacement from './components/AllPlacement';
import Error from './pages/Errorpage';
import Homepage from './pages/Homepage';
import HodMessage from './pages/HodMessage';
import VisionandMission from './pages/VisionandMission';
import Syllabus from './pages/Syllabus';
import Infrastructure from './pages/Infrastructure'
import AcadCordinator from './pages/AcadCordinator';
import Menu from './components/Menu';
import ContactUs from './pages/ContactUs';
import Achievements from './pages/Achievements';
import Programme from './pages/Programme';
import Faculty from './pages/Faculty';
import Staff from './pages/Staff';
import Students from './pages/Students';
import Alumni from './pages/Alumni';
import PhdScholar from './pages/PhdScholar';
import Profile from './components/Profile';
import FacultyLogin from './pages/FacultyLogin';
import ResearchArea from './pages/ResearchArea';
import ResearchLab from './pages/ResearchLab';
import DepartmentLab from './pages/DepartmentLab';
import Publications from './pages/Publications';
import Projects from './pages/Projects';
import Consultancy from './pages/Consultancy';
import AfterForgotPass from './pages/AfterForgotPass';
import ChangePass from './pages/ChangePass';
import Society_Clubs_Teams from './pages/Society_Clubs_Teams';
import AcademicCalender from './pages/AcademicCalender';
import Timetable from './pages/Timetable';
import Navbar from './components/Navbar';
import { useState } from 'react';
const AppRouter = () => {
  
  window.scrollTo(0,0);
  const [menu, setMenu] = useState(false);
  // const ProtectorRoute=({children})=>{
  //   const dept=useLocation().pathname.split('/')[2];

  //     if(dept in departments){
  //       return children;
  //     }else{
  //       return <Navigate to={"/dept/errorpage"}/>
  //     }
  //   }
  
  
  return (
    <>
      <div className='max-w-[1700px] mx-auto'>
        <Router>
          <div className='sticky top-0 z-40 flex-none w-full mx-auto bg-white'>
            {/* <NewNavbar SetScrollupmenu={SetScrollupmenu} /> */}
            <Navbar menu = {menu} setMenu={setMenu}/>
          </div>

          <div className="w-full mx-auto max-w-8xl">
            <div className='lg:flex'>
              <aside className='inset-0 z-20 h-fit lg:h-auto flex-none fixed top-[4rem] lg:top-0 w-full lg:static lg:overflow-y-visible lg:pt-0 lg:w-[19rem] lg:block shadow lg:ml-2'>
                <Menu menu = {menu} setMenu={setMenu} />
              </aside> 
              <main className='flex-auto w-full min-w-0 lg:static lg:max-h-full lg:overflow-visible min-h-screen'>
                <div className="w-full flex mt-0">
                  <Routes>
                    <Route path='/dept/:dept/Home/' element={<Homepage />} />
                    <Route path='/dept/:dept/Home/:id' element={<Homepage />} />
                    <Route path='/dept/:dept/Placement' element={<AllPlacement />} />
                    <Route path='/*' element={<Error />} />
                    {/* About us */}
                    <Route path='/dept/:dept/MessageofHOD' element={<HodMessage />} />
                    <Route path='/dept/:dept/MissionandVision' element={<VisionandMission />} />
                    <Route path='/dept/:dept/Infrastructure' element={<Infrastructure />} />
                    <Route path='/dept/:dept/contactus' element={<ContactUs />} />
                    <Route path='/dept/:dept/Achievement' element={<Achievements />} />
                    {/* Academic */}
                    <Route path='/dept/:dept/Syllabus' element={<Syllabus/>} />
                    <Route path='/dept/:dept/Timetable' element={<Timetable/>} />
                    <Route path='/dept/:dept/Acadcord' element={<AcadCordinator />} />
                    <Route path='/dept/:dept/Programme' element={<Programme />} />
                    <Route path='/dept/:dept/AcademicCalender' element={<AcademicCalender />} />
                    {/* Person */}
                    <Route path='/dept/:dept/Faculty' element={<Faculty />} />
                    <Route path='/dept/:dept/Faculty/:id' element={<Profile peopleType="Faculty" />} />
                    <Route path='/dept/:dept/Staff' element={<Staff />} />
                    <Route path='/dept/:dept/Student' element={<Students />} />
                    {/* <Route path='/dept/:dept/Alumni' element={<Alumni />} /> */}
                    <Route path='/dept/:dept/PhdScholar' element={<PhdScholar />} />
                    <Route path='/dept/:dept/PhdScholar/:id' element={<Profile peopleType="PhdScholar" />} />
                    <Route path='/dept/:dept/login/:status' element={<FacultyLogin />} />
                    <Route path='/dept/:dept/login/*' element={<FacultyLogin />} />
                    <Route path='/dept/:dept/onClickForgotPass/*' element={<AfterForgotPass />} />
                    <Route path='/dept/:dept/confirmation/:token/:status' element={<ChangePass />} />
                    <Route path='/dept/:dept/confirmation/:token' element={<ChangePass />} />


                    {/* ResearchArea */}
                    <Route path='/dept/:dept/ResearchArea' element={<ResearchArea />} />
                    <Route path='/dept/:dept/ResearchLab' element={<ResearchLab />} />
                    <Route path='/dept/:dept/DepartmentLab' element={<DepartmentLab />} />
                    <Route path='/dept/:dept/Publications' element={<Publications />} />
                    <Route path='/dept/:dept/Projects' element={<Projects />} />
                    <Route path='/dept/:dept/Consultancy' element={<Consultancy />} />
                    <Route path='/dept/:dept/SocietyClubs' element={<Society_Clubs_Teams />} />

                  </Routes>
                </div>
              </main>
            </div>
          </div>
          <div className='w-full pt-2'>
            <Footer />
          </div>
        </Router>
      </div>
    </>
  )
};


export default AppRouter;

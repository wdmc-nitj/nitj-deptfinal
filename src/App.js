import './App.css';
import AppRouter from './AppRouter';
function App() {
  const departments={
    "it":"Information Technology",
    "cse":"Computer Science and Engineering",
    "bt":"Bio Technology",
    "ce":"Civil Engineering",
    "ch":"Chemical Engineering",
    "ece":"Electronics And Communication Engineering",
    "ee":"Electrical And Electronics Engineering",
    "ice":"Instrumentation And Control Engineering",
    "me":"Mechanical Engineering",
    "ipe":"Industrial And Production Enginnering",
    "ma":"Mathematics",
    "phy":"Physics",
    "tt":"Textile Technology",
    "hum":"Humanities & Management",
    "cy":"Chemistry",
    'cee':'Center for Energy and Environment','cai':'Center for Artificial Intelligence',
  }
  const arr= window.location.pathname.split('/');
  arr.forEach((ele,i)=>{
    if(ele==="dept"){
      document.title= departments[arr[i+1]];
    }
  })
  return (
    <>
      <AppRouter/>
    </>
  );
}

export default App;

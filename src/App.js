import './App.css';
import AppRouter from './AppRouter';
import { departments } from './config/server';
function App() {
  
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

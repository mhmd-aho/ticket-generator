import Login from './login'
import desktopBg from '/src/assets/images/background-desktop.png';
import tabBg from '/src/assets/images/background-tablet.png'
import phoneBg from '/src/assets/images/background-mobile.png';
import logo from '/src/assets/images/logo-full.svg'
import topPattern from '/src/assets/images/pattern-lines.svg'
import bottomLeft from '/src/assets/images/pattern-squiggly-line-bottom-desktop.svg'
import topRight from '/src/assets/images/pattern-squiggly-line-top.svg'
import circle from '/src/assets/images/pattern-circle.svg'
import { useEffect, useState } from 'react';
import Ticket from './ticket';
function App() {
  const [login , setLogin] = useState(()=>{
    const savedLogin = localStorage.getItem('login');
    return savedLogin? JSON.parse(savedLogin) : false;
  });
  useEffect(()=>{
    localStorage.setItem('login',JSON.stringify(login))
  },[login])
  const [bg,setBg] = useState();
  const [data,setData]= useState(()=>{
    const saved = localStorage.getItem('data');
    return saved ? JSON.parse(saved): {}}
  )
  useEffect(() => {
  localStorage.setItem('data', JSON.stringify(data));
}, [data]);
  useEffect(()=>{
    const updateBackground=()=>{
      const width = window.innerWidth;
      if(width >= 1440){
        setBg(desktopBg);
      }else if(width < 1440 && width > 375){
        setBg(tabBg);
      }else if(width <= 375){
        setBg(phoneBg)
      }
    }
    updateBackground();
    window.addEventListener('resize',updateBackground);
    return ()=>window.removeEventListener('resize',updateBackground);
  },[])
  return (
    <main style={{backgroundImage:`url(${bg})`}}   className={`bg-center bg-cover w-screen h-screen overflow-hidden grid place-items-center`} >
      <div className='h-full w-full relative col-start-1 row-start-1'>
        <img src={logo} className='absolute top-8 left-1/2 transform -translate-x-1/2 w-2/5 sm:w-auto'/>
        <img src={topPattern}  className='absolute top-0 left-1/2 transform -translate-x-1/2  overflow-hidden w-11/12 h-auto' />
        <img src={bottomLeft}  className='absolute bottom-0  sm:left-0 -left-20 w-96 sm:w-1/2 h-auto ' />
        <img src={topRight} className=' absolute top-5 sm:top-16 right-0 w-1/4 h-auto' />
        <img src={circle} className=' absolute top-1/2 right-1/4 w-44 invisible sm:visible' />
        <img src={circle} className=' absolute -top-20 left-16 w-44 invisible sm:visible' />
      </div>
      {
        login ?
        <Ticket data={data} />:<Login setLogin={setLogin} setData={setData}/>
      }
      
    </main>
  )
}

export default App

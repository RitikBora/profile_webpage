import { RecoilRoot } from 'recoil';
import './App.css'
import { Appbar } from './components/Appbar'
import { Footer } from './components/Footer'
import { Landing } from './components/Landing'

function App() {
  return (
   <RecoilRoot>
       <div className='flex flex-col h-screen'>
        <div className='flex-1 bg-amber-50'>
          <Appbar/>
          <Landing/> 
        </div>
        <div className='h-1/6 bg-green-700 rounded-t-lg border-t border-green-700 '>
          <Footer/>
        </div>
      </div>
   </RecoilRoot>
  );
}

export default App;
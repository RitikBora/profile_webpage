import './App.css'
import { Appbar } from './components/Appbar'
import { Footer } from './components/Footer'
import { Landing } from './components/Landing'

function App() {
  return (
    <div className='flex flex-col h-screen'>
      <div className='flex-1 bg-amber-50'>
        <Appbar/>
        <Landing/> 
      </div>
      <div className='h-1/4 bg-green-700 rounded-t-lg border-t border-green-700'>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
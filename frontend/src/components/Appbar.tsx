import { useRecoilState } from 'recoil';
import { selectedPageAtom } from '../recoil/atom';


export function Appbar() {
  const [selectedPage , setSelectedPage] = useRecoilState(selectedPageAtom);

  function changePage(page : string)
  {
    setSelectedPage(page);
  }

  return (
    <div className='flex justify-between pt-2 relative'> 
      <div className="flex pl-48">
        <img src="bora_logo.png" alt="BoraLogo" width='75px' height='75px' />
        <a href="https://www.linkedin.com/in/ritikbora" target="_blank" className="flex">
          <div className="text-lg font-bold pt-5">
            Ritik
          </div>
          <div className="text-lg pt-5 pl-1">
            Bora
          </div>
        </a>
      </div>
      <div className="flex justify-between w-1/3 pt-5 relative">
        <div className={`${selectedPage === "home" ? "font-bold": "font-medium"}  hover:font-bold cursor-pointer`}  onClick={() => changePage("home")}>
          Home
        </div>
        <div className={`${selectedPage === "projects" ? "font-bold": "font-medium"} hover:font-bold  cursor-pointer`} onClick={() => changePage("projects")}>
            Projects
        </div>
        <div className={`${selectedPage === "contact" ? "font-bold": "font-medium"} hover:font-bold  cursor-pointer`} onClick={() => changePage("testimonials")}>
          Testimonials
        </div>
        <div className={`${selectedPage === "contact" ? "font-bold": "font-medium"} hover:font-bold  cursor-pointer`} onClick={() => changePage("contact")}>
          Contact
        </div>
      </div>
      <div> </div>
    </div>  
  )
}

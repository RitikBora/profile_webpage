import { useRecoilValue } from "recoil"
import { selectedPageAtom } from "../recoil/atom"

export function Footer() {

  const selectedPage = useRecoilValue(selectedPageAtom);
  return (
    <div className="text-amber-50 text-2xl font-semibold w-1/2 ml-48 mt-10">
       {
         selectedPage == 'home' ? <p>
           I'm probably the most passionate developer you would ever get to work with. If you have some great projects that need 
           some amazing skills. I'm your guy.
         </p> : <p className="">
          Made with <span className="text-red-500 ">&hearts;</span> in India
      </p>
       }
    </div>
  )
}

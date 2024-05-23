import { useRecoilValue } from "recoil";
import { Home } from "./Home";
import { selectedPageAtom } from "../recoil/atom";
import { Projects } from "./Projects";
import { Contact } from "./Contact";

export function Landing() {

  const selectedPage = useRecoilValue(selectedPageAtom);  

  return (
    <div className="ml-48 pb-20 mt-16">
      {(() => {
        switch (selectedPage) {
          case 'home':
            return <Home />;
          case 'projects':
            return <Projects />;
          case 'contact' :
            return <Contact />  
        }
      })()}
    </div>
  )
}
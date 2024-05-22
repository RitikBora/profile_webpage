
export function Appbar() {

  return (
    <div className='flex justify-between pt-2'> 
        <div className="flex pl-48 mb-16">
            <img src="bora_logo.png" alt="BoraLogo" width='75px' height='75px' />
            <div className="text-lg font-bold pt-5">
                Ritik
            </div>
            <div className="text-lg  pt-5 pl-1">
                Bora
            </div>
        </div>
        <div className="flex justify-between w-1/3 pt-5">
            <div className="font-semibold hover:font-bold cursor-pointer">
              Home 
            </div>
            <div className="font-semibold hover:font-bold cursor-pointer">
              Projects
            </div>
            <div className="font-semibold hover:font-bold cursor-pointer">
              Contact
            </div>
        </div>
        <div> </div>
    </div>  
  )
}


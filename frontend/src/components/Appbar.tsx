import React from 'react';

export function Appbar() {
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
        <a className="font-semibold hover:font-bold cursor-pointer" target="_blank" href="https://github.com/RitikBora">
          Github
        </a>
        <div className="font-semibold hover:font-bold cursor-pointer relative group">
          <div className="group">
            Projects
            <div className="absolute top-full left-0 bg-white text-black px-4 py-2 rounded-lg hidden group-hover:block z-10">
              Projects Popup
            </div>
          </div>
        </div>
        <div className="font-semibold hover:font-bold cursor-pointer relative group">
          <div className="group">
            Contact
            <div className="absolute top-full left-0 bg-white text-black px-4 py-2 rounded-lg hidden group-hover:block z-10">
              Contacts Popup
            </div>
          </div>
        </div>
      </div>
      <div> </div>
    </div>  
  )
}

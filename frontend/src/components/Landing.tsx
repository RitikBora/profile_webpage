export function Landing() {

  return (
    <div className="ml-48 pb-20 mt-16">
        <img src="hi_there.png" alt="Hello There"  />
        <div className="flex">
            <div className="m-4">
                <div className="text-7xl">
                    I'm Ritik Bora.
                </div>
                <div className="text-7xl pt-10">
                    A Software Developer
                </div>
                <div className="text-6xl pt-5 text-gray-500">
                    based in India .
                </div>
            </div>
        
        </div>
        <div className=" absolute top-20 bottom-0 right-0 overflow-hidden  mr-20">
            <div className="relative top-20 right-20">
                <img src="profilePhoto.png" alt="" width="450px" height="450px" className=""/>
            </div>
        </div>

    </div>
  )
}
export function Landing() {

  return (
    <div className="ml-48 pb-20">
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
        <div className=" absolute bottom-0 right-0 overflow-hidden">
            <div className="relative -top-10 -right-10">
                <img src="profilePhoto.png" alt="" width="800px" height="750px" className=""/>
            </div>
        </div>

    </div>
  )
}
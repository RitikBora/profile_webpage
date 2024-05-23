export function Home()
{
    return(
       <div>
        <img src="hi_there.png" alt="Hello There"  />
        <div className="flex">
            <div className="mr-4 ml-4 mt-16">
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
        <div className=" absolute right-10 top-48 overflow-hidden  mr-20" style={{paddingTop: '4px'}}>
            <div className="">
                <img src="profilePhoto.png" alt="" width="480px" height="480px" className=""/>
            </div>
        </div>

    </div>
    )
}
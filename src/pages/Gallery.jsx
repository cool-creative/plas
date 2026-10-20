


const images = [{main: '1', vig: '5'}, {main: '2', vig: '7'}, {main: '3', vig: '8'}];

export default function Gallery(){
    return (
        <div className="w-full h-fit bg-white p-8 pt-20">
            
            <div className="top-text w-full flex  items-center border-b border-gray-400 pb-4 mb-8"> 
                <h2 className="text-black text-4xl ">Gallery</h2>
            </div>
            {
                images.map(imgC => {
                    return (
                        <div 
                         style={{clipPath: 'polygon(0 0, 0 100%, 100% 100%, 100% 0)'}} 
                         className="h-fit w-full relative flex flex-col items-center overflow-hidden"
                        >

                            <div className="w-full h-full relative ">
                                <img className="w-full h-[90vh] object-cover" src={`/ass-${imgC.main}.webp`}/>  
                            </div>

                            <div className=" h-[20vw] w-[35vw] fixed top-[calc(50%-10vw)] ">
                                <img style={{clipPath: 'polygon(10% 0%, 100% 0%, 100% 90%, 90% 100%, 0% 100%, 0% 10%)'}} className="w-full h-full object-cover" src={`/ass-${imgC.vig}.webp`}/>    
                            </div>

                        </div>
                    )
                })
            }
        </div>
        
    )
}
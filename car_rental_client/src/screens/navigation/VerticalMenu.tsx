import { useState, useEffect } from "react"

const VerticalMenu = () => {
    const [openMenu, setOpenMenu] = useState(false);
    const [render, setRender] = useState([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40]);
    useEffect(() => { setRender([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40]) }, [openMenu])
    return (
        <div className='w-full h-full overflow-auto'>
            {!openMenu && (
                <div className="w-full h-full flex items-center justify-end px-4">
                    <span className="text-black font-bold text-2xl p-2" onClick={() => setOpenMenu(true)}>=</span>
                </div>
            )}
            {openMenu && (
                <>
                    <div className="w-full h-auto fixed top-0 left-0">
                        <div className="w-2/12 min-h-screen h-auto float-left backdrop-blur-[1px]"></div>
                        <div className="w-10/12 min-h-screen h-auto float-right bg-white shadow-xl shadow-gray">
                            <div className="w-full h-12 flex items-center justify-end px-4 bg-red">
                                <span className="text-black font-bold text-2xl p-2" onClick={() => setOpenMenu(false)}>x</span>
                            </div>
                            <div className="h-[100rem] bg-navy overflow-auto">
                                {render.map((data)=>{
                                    return (<p>{data}</p>)
                                })}
                            </div>
                        </div>
                    </div>
                </>
            )}
        </div>
    )
}

export default VerticalMenu
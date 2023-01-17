import anoushehPicture from '../../assets/crew/image-anousheh-ansari.png';
import douglasPicture from '../../assets/crew/image-douglas-hurley.png';
import markPicture from '../../assets/crew/image-mark-shuttleworth.png';
import victorPicture from '../../assets/crew/image-victor-glover.png';

import { useState } from 'react';
import data from '../../data/data.json';
const Crew = () => {
    const [douglas, mark, victor, anousheh] = data.crew;
    const [currentSelection, setCurrentSelection] = useState(anousheh);
    return (
        <main className='w-full md:w-4/5 flex flex-col justify-center m-auto'>
            <div className='md:h-1/6 xl:h-1/4 custom-height-title flex flex-row items-center justify-center md:justify-start'>
                <div>
                    <span className="text-xl md:text-2xl text-slate-600 tracking-widest">02</span>
                </div>
                <div className="ml-4 flex justify-start">
                    <h1 className="text-xl md:text-2xl text-white font-light tracking-widest">MEET YOUR CREW</h1>
                </div>
            </div>
            <div className='md:h-5/6 h-3/4 custom-height-content flex flex-col-reverse md:flex-col xl:flex-row'>
                <div className='w-full xl:w-2/4 max-[767px]:h-3/5 md:h-2/5 xl:h-auto flex flex-col-reverse md:flex-col justify-evenly'>
                    <div className='custom-height-90'>
                        <div className='h-1/6 md:h-1/4 flex items-center text-slate-400 text-xl text-xl md:text-2xl xl:text-3xl space justify-center xl:justify-start'>{currentSelection.role.toUpperCase()}</div>
                        <div className='h-1/6 md:h-1/4 flex items-center text-white text-2xl md:text-3xl xl:text-4xl space justify-center xl:justify-start'>{currentSelection.name.toUpperCase()}</div>
                        <div className='h-4/6 max-[413px]:h-auto md:h-2/4 xl:h-auto w-full max-[767px]:w-11/12 max-[767px]:m-auto  xl:w-3/5 flex items-center text-slate-300 text-xl text-center xl:text-left font-thin justify-center xl:justify-start'>{currentSelection.bio}</div>
                    </div>
                    <div className='custom-height-10 max-[413px]:flex max-[413px]:justify-center max-[413px]:items-center'>
                        <div className='flex flex-row justify-center xl:justify-start'>
                            <div onClick={() => setCurrentSelection(douglas)} className={`w-3 h-3 cursor-pointer ${currentSelection.name === "Douglas Hurley" ? "bg-white" : "bg-slate-600"} hover:bg-[#A6AAB5] transition-all rounded-full mr-5`}></div>
                            <div onClick={() => setCurrentSelection(mark)} className={`w-3 h-3 cursor-pointer ${currentSelection.name === "Mark Shuttleworth" ? "bg-white" : "bg-slate-600"} hover:bg-[#A6AAB5] transition-all rounded-full mr-5`}></div>
                            <div onClick={() => setCurrentSelection(victor)} className={`w-3 h-3 cursor-pointer ${currentSelection.name === "Victor Glover" ? "bg-white" : "bg-slate-600"} hover:bg-[#A6AAB5] transition-all rounded-full mr-5`}></div>
                            <div onClick={() => setCurrentSelection(anousheh)} className={`w-3 h-3 cursor-pointer ${currentSelection.name === "Anousheh Ansari" ? "bg-white" : "bg-slate-600"} hover:bg-[#A6AAB5] transition-all rounded-full`}></div>
                        </div>
                    </div>
                </div>
                <div className='w-full xl:w-2/4 max-[767px]:h-2/5 md:h-3/5 xl:h-auto flex justify-center'>
                    <img src={currentSelection.name === "Douglas Hurley" ? douglasPicture : currentSelection.name === "Mark Shuttleworth" ? markPicture : currentSelection.name === "Victor Glover" ? victorPicture : anoushehPicture} className="w-3/5 md:w-9/12 xl:w-auto object-contain max-[767px]:border-b max-[767px]:border-[#616476] " alt="" />
                </div>
            </div>
        </main>
    )
}

export default Crew;
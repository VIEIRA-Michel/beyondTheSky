import anoushehPicture from '../../assets/crew/image-anousheh-ansari.png';
import douglasPicture from '../../assets/crew/image-douglas-hurley.png';
import markPicture from '../../assets/crew/image-mark-shuttleworth.png';
import victorPicture from '../../assets/crew/image-victor-glover.png';

import { useState } from 'react';
import data from '../../data/data.json';
const Crew = () => {
    const [douglas, mark, victor, anousheh] = data.crew;
    const [currentSelection, setCurrentSelection] = useState(anousheh);
    // console.log(moon);
    // console.log(currentSelection);
    console.log(currentSelection);
    console.log(currentSelection.name);
    return (
        <main className='w-4/5 flex flex-col justify-center m-auto'>
            <div className='h-1/4 flex flex-row items-center'>
                <div>
                    <span className="text-2xl text-slate-600 tracking-widest">02</span>
                </div>
                <div className="ml-4 flex justify-start">
                    <h1 className="text-2xl text-white font-light tracking-widest">MEET YOUR CREW</h1>
                </div>
            </div>
            <div className='h-3/4 flex flew-row'>
                <div className='w-2/4 flex flex-col justify-evenly'>
                    <div className='h-2/4'>
                        <div className='h-1/4 flex items-center text-slate-400 text-3xl space'>{currentSelection.role.toUpperCase()}</div>
                        <div className='h-1/4 flex items-center text-white text-5xl space'>{currentSelection.name.toUpperCase()}</div>
                        <div className='h-2/4 w-2/4 flex items-center text-slate-300 text-xl font-thin'>{currentSelection.bio}</div>
                    </div>
                    <div>
                        <div className='flex flex-row'>
                            <div onClick={() => setCurrentSelection(douglas)} className={`w-3 h-3 cursor-pointer ${currentSelection.name === "Douglas Hurley" ? "bg-white" : "bg-slate-600"} rounded-full mr-5`}></div>
                            <div onClick={() => setCurrentSelection(mark)} className={`w-3 h-3 cursor-pointer ${currentSelection.name === "Mark Shuttleworth" ? "bg-white" : "bg-slate-600"} rounded-full mr-5`}></div>
                            <div onClick={() => setCurrentSelection(victor)} className={`w-3 h-3 cursor-pointer ${currentSelection.name === "Victor Glover" ? "bg-white" : "bg-slate-600"} rounded-full mr-5`}></div>
                            <div onClick={() => setCurrentSelection(anousheh)} className={`w-3 h-3 cursor-pointer ${currentSelection.name === "Anousheh Ansari" ? "bg-white" : "bg-slate-600"} rounded-full`}></div>
                        </div>
                    </div>
                </div>
                <div className='w-2/4 flex justify-center'>
                    <img src={currentSelection.name === "Douglas Hurley" ? douglasPicture : currentSelection.name === "Mark Shuttleworth" ? markPicture : currentSelection.name === "Victor Glover" ? victorPicture : anoushehPicture} alt="" />
                </div>
            </div>
        </main>
    )
}

export default Crew;
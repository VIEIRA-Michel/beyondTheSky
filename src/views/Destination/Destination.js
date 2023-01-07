import europaImage from '../../assets/destination/image-europa.png';
import marsImage from '../../assets/destination/image-mars.png';
import moonImage from '../../assets/destination/image-moon.png';
import titanImage from '../../assets/destination/image-titan.png';

import data from '../../data/data.json';
import { useState } from 'react';

const Destination = () => {
    // const { destinations } = data;
    const [moon, mars, europa, titan] = data.destinations;
    const [currentSelection, setCurrentSelection] = useState(moon);
    // console.log(moon);
    console.log(currentSelection);
    return (
        <main className="flex flex-col justify-evenly items-center">
            <div className="w-full flex flex-row w-full justify-center">
                <div className='flex flex-row items-center'>
                    <div>
                        <span className="text-2xl text-slate-400 tracking-widest">01</span>
                    </div>
                    <div className="ml-4 flex justify-start">
                        <h1 className="text-2xl text-white font-light tracking-widest">PICK YOUR DESTINATION</h1>
                    </div>
                </div>
                <div className='w-3/6'></div>
            </div>
            <div className='w-full flex flex-row'>
                <div className='w-3/5 h-full flex flex-col justify-evenly items-center'>
                    <div className="flex w-3/5 justify-center">
                        <img src={currentSelection === moon ? moonImage : currentSelection === mars ? marsImage : currentSelection === europa ? europaImage : titanImage} alt="" className='w-8/12' />
                    </div>
                </div>
                <div className='w-2/5 h-full flex flex-col justify-between'>
                    <div className='w-full'>
                        <nav className='w-full'>
                            <ul className='flex flex-row w-full'>
                                <li className='text-white font-thin text-xl tracking-widest mr-8'><a href="#Destination" onClick={() => setCurrentSelection(moon)} className={`cursor-pointer pb-2.5  border-b-2 border-transparent ${currentSelection.name === "Moon" ? "border-white" : ""}`}>MOON</a></li>
                                <li className='text-white font-thin text-xl tracking-widest mr-8'><a href="#Destination" onClick={() => setCurrentSelection(mars)} className={`cursor-pointer pb-2.5  border-b-2 border-transparent ${currentSelection.name === "Mars" ? "border-white" : ""}`}>MARS</a></li>
                                <li className='text-white font-thin text-xl tracking-widest mr-8'><a href="#Destination" onClick={() => setCurrentSelection(europa)} className={`cursor-pointer pb-2.5  border-b-2 border-transparent ${currentSelection.name === "Europa" ? "border-white" : ""}`}>EUROPA</a></li>
                                <li className='text-white font-thin text-xl tracking-widest mr-8'><a href="#Destination" onClick={() => setCurrentSelection(titan)} className={`cursor-pointer pb-2.5  border-b-2 border-transparent ${currentSelection.name === "Titan" ? "border-white" : ""}`}>TITAN</a></li>
                            </ul>
                        </nav>
                    </div>
                    <div className=''>
                        <h2 className='text-8xl text-white space'>{currentSelection.name.toUpperCase()}</h2>
                    </div>
                    <div className='w-4/6'>
                        <p className='text-slate-200 text-2xl font-thin tracking-wide'>{currentSelection.description}</p>
                    </div>
                    <div className='w-4/6 border-t border-slate-700 flex flex-row justify-between'>
                        <div className='w-11/12 flex flex-row justify-between mt-7'>
                            <div>
                                <div className='text-white text-sm font-thin tracking-widest'>AVG. DISTANCE</div>
                                <div className='text-white text-2xl space mt-2'>{currentSelection.distance.toUpperCase()}</div>
                            </div>
                            <div>
                                <div className='text-white text-sm font-thin tracking-widest'>EST. TRAVEL TIME</div>
                                <div className='text-white text-2xl space mt-2'>{currentSelection.travel.toUpperCase()}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main >
    );
}

export default Destination;
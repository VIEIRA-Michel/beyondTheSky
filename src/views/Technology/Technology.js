import { useState } from "react";
import data from '../../data/data.json';
import launchPicture from '../../assets/technology/image-launch-vehicle-portrait.jpg';
import spaceportPicture from '../../assets/technology/image-spaceport-portrait.jpg';
import spacePicture from '../../assets/technology/image-space-capsule-portrait.jpg';

const Technology = () => {
    const [launch, spaceport, space] = data.technology;
    const [currentSelection, setCurrentSelection] = useState(launch);

    return (
        <main className='w-4/5 flex flex-col justify-center m-auto'>
            <div className='h-1/4 flex flex-row items-center'>
                <div>
                    <span className="text-2xl text-slate-600 tracking-widest">03</span>
                </div>
                <div className="ml-4 flex justify-start">
                    <h1 className="text-2xl text-white font-light tracking-widest">SPACE LAUNCH 101</h1>
                </div>
            </div>
            <div className='h-3/4 flex flew-row'>
                <div className='w-4/6 flex flex-col justify-evenly'>

                    <div className="h-3/5 flex flex-row">
                        <div className="w-1/6 flex flex-col justify-between">
                            <div onClick={() => setCurrentSelection(launch)} className={`h-20 w-20 rounded-full flex justify-center items-center cursor-pointer ${currentSelection.name === "Launch vehicle" ? "bg-white" : "bg-transparent text-white border border-slate-600 "}`}><span className="space text-3xl">1</span></div>
                            <div onClick={() => setCurrentSelection(spaceport)} className={`h-20 w-20 rounded-full flex justify-center items-center cursor-pointer ${currentSelection.name === "Spaceport" ? "bg-white" : "bg-transparent text-white border border-slate-600 "}`}><span className="space text-3xl">2</span></div>
                            <div onClick={() => setCurrentSelection(space)} className={`h-20 w-20 rounded-full flex justify-center items-center cursor-pointer ${currentSelection.name === "Space capsule" ? "bg-white" : "bg-transparent text-white border border-slate-600 "}`}><span className="space text-3xl">3</span></div>
                        </div>
                        <div className="w-5/6 flex flex-col justify-between">
                            <div className="text-white text-xl font-thin tracking-widest">THE TERMINOLOGY</div>
                            <div className="text-white text-5xl space">LAUNCH VEHICLE</div>
                            <div className="text-white text-xl font-thin w-1/2">{currentSelection.description}</div>
                        </div>
                    </div>
                </div>
                <div className='w-2/6 flex justify-center items-center'>
                    <img src={currentSelection.name === "Launch vehicle" ? launchPicture : currentSelection.name === "Spaceport" ? spaceportPicture : spacePicture} className="absolute right-0" alt="" />
                </div>
            </div>
        </main>
    )
};

export default Technology;
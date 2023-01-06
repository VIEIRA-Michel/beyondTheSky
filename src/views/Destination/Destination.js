import europa from '../../assets/picture/image-europa.png';
import mars from '../../assets/picture/image-mars.png';
import moon from '../../assets/picture/image-moon.png';
import titan from '../../assets/picture/image-titan.png';

const Destination = () => {

    return (
        <main className="flex flex-row items-center">
            <div className='w-2/4 h-full flex flex-col justify-evenly items-center'>
                <div className="flex flex-row w-full justify-center">
                    <div>
                        <span className="text-2xl text-slate-400 tracking-widest">01</span>
                    </div>
                    <div className="ml-5 flex justify-start">
                        <h1 className="text-2xl text-white font-light tracking-widest">PICK YOUR DESTINATION</h1>
                    </div>
                </div>
                <div className="flex w-full justify-center ml-28">
                    <img src={mars} alt="" className='w-3/5' />
                </div>
            </div>
            <div className='w-2/4 h-full flex flex-col justify-center'>
            </div>
        </main>
    );
}

export default Destination;
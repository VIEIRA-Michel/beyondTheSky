import logo from '../../assets/icon/logo.svg';

const Header = () => {
    const backgroundNavbar = {
        backgroundColor: "rgba(122,122,122, 0.1)",
        backdropFilter: "blur(10px)",

    };


    return (
        <header className="">
            <div className='flex flex-row items-center relative justify-between h-32 pt-9'>
                <div className='flex flex-col items-center justify-center ml-10 w-auto'>
                    <div className="">
                        <img src={logo} alt="" />
                    </div>
                    {/* <div className="">
                    <h1>Beyond the sky</h1>
                </div> */}
                </div>
                {/* <div className='flex flex-col absolute bg-slate-700 w-2/5 h-px left-36 z-20'>
            </div> */}
                <nav className='flex justify-center items-center h-full w-3/5' style={backgroundNavbar}>
                    <ul className='w-10/12 h-full flex flex-row justify-center items-center z-10'>
                        <li className='w-1/4 h-full text-slate-50 flex justify-center items-center'><a href="#home" className='h-full flex items-center cursor-pointer border-b-2 border-transparent focus:border-white'><span className='pr-3 font-medium'>00</span><span className='font-thin tracking-widest'>HOME</span></a></li>
                        <li className='w-1/4 h-full text-slate-50 flex justify-center items-center'><a href="#home" className='h-full flex items-center cursor-pointer border-b-2 border-transparent focus:border-white'><span className='pr-3 font-medium'>01</span><span className='font-thin tracking-widest'>DESTINATION</span></a></li>
                        <li className='w-1/4 h-full text-slate-50 flex justify-center items-center'><a href="#home" className='h-full flex items-center cursor-pointer border-b-2 border-transparent focus:border-white'><span className='pr-3 font-medium'>02</span><span className='font-thin tracking-widest'>CREW</span></a></li>
                        <li className='w-1/4 h-full text-slate-50 flex justify-center items-center'><a href="#home" className='h-full flex items-center cursor-pointer border-b-2 border-transparent focus:border-white'><span className='pr-3 font-medium'>03</span><span className='font-thin tracking-widest'>TECHNOLOGY</span></a></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header;
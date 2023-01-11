import logo from '../../assets/icon/logo.svg';
import burgerMenu from '../../assets/icon/icon-hamburger.svg';
const Header = () => {
    const backgroundNavbar = {
        backgroundColor: "rgba(122,122,122, 0.1)",
        backdropFilter: "blur(10px)",

    };


    return (
        <header className="">
            <div className='h-full md:h-32 flex flex-row items-center relative justify-between  md:pb-9 xl:pb-0 xl:pt-9 '>
                <div className='md:w-2/5 flex flex-col items-center justify-center ml-5 md:ml-10'>
                    <div className="w-full">
                        <img src={logo} className='h-10 md:h-auto' alt="" />
                    </div>
                </div>
                <div className='mr-5 md:hidden'>
                    <img src={burgerMenu} alt="" />
                </div>
                <nav className='hidden sm:flex justify-center items-center h-full w-3/5' style={backgroundNavbar}>
                    <ul className='w-10/12 h-full flex flex-row justify-center items-center z-10'>
                        <li className='w-1/4 h-full text-slate-50 flex justify-center items-center'><a href="#home" className='h-full flex items-center text-xl cursor-pointer border-b-2 border-transparent focus:border-white'><span className='hidden lg:block pr-3 font-medium'>00</span><span className='font-thin tracking-widest'>HOME</span></a></li>
                        <li className='w-1/4 h-full text-slate-50 flex justify-center items-center'><a href="#home" className='h-full flex items-center text-xl cursor-pointer border-b-2 border-transparent focus:border-white'><span className='hidden lg:block pr-3 font-medium'>01</span><span className='font-thin tracking-widest'>DESTINATION</span></a></li>
                        <li className='w-1/4 h-full text-slate-50 flex justify-center items-center'><a href="#home" className='h-full flex items-center text-xl cursor-pointer border-b-2 border-transparent focus:border-white'><span className='hidden lg:block pr-3 font-medium'>02</span><span className='font-thin tracking-widest'>CREW</span></a></li>
                        <li className='w-1/4 h-full text-slate-50 flex justify-center items-center'><a href="#home" className='h-full flex items-center text-xl cursor-pointer border-b-2 border-transparent focus:border-white'><span className='hidden lg:block pr-3 font-medium'>03</span><span className='font-thin tracking-widest'>TECHNOLOGY</span></a></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header;
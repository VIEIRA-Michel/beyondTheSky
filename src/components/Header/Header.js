import logo from '../../assets/icon/logo.svg';
import burgerMenu from '../../assets/icon/icon-hamburger.svg';
import closeMenu from '../../assets/icon/icon-close.svg';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const Header = () => {
    const [toggleMenu, setToggleMenu] = useState(false);
    let currentLocation = useLocation().pathname;
    return (
        <header className="">
            <div className='h-full md:h-32 flex flex-row items-center relative justify-between  md:pb-9 xl:pb-0 xl:pt-9 '>
                <div className='md:w-2/5 flex flex-col items-center justify-center ml-5 md:ml-10'>
                    <div className="w-full relative flex items-center">
                        <img src={logo} className='h-10 md:h-auto' alt="" />
                        <div className='hidden xl:block absolute w-5/6 h-px -right-7 bg-[#616476] z-10'></div>
                    </div>
                </div>
                <div onClick={() => setToggleMenu(!toggleMenu)} className='mr-5 md:hidden cursor-pointer'>
                    <img src={burgerMenu} alt="" />
                </div>
                <nav className={`${!toggleMenu ? "hidden" : ""} max-[767px]:fixed max-[767px]:inset-y-0 max-[767px]:right-0 md:flex justify-center items-center h-full w-3/5 backgroundNavbar`}>
                    <div className={`${!toggleMenu ? "hidden" : "min-[768px]:hidden"} custom-w-h-close-burgerMenu flex justify-end items-center`}>
                        <img onClick={() => setToggleMenu(false)} className="cursor-pointer max-[767px]:h-fit" src={closeMenu} alt="" />
                    </div>
                    <ul className='w-10/12 max-[767px]:w-full h-full max-[767px]:h-2/5 flex flex-row max-[767px]:flex-col justify-center items-center z-10'>
                        <li onClick={() => setToggleMenu(false)} className='w-1/4 max-[767px]:w-full h-full text-slate-50 flex justify-center items-center'><Link to={'/'} className={`h-full max-[767px]:w-4/5 flex items-center text-xl cursor-pointer border-b-2 ${currentLocation === "/" ? "border-white" : "border-transparent"} transition-all hover:border-[#A6AAB5]`}><span className='max-[767px]:block hidden xl:block pr-3 font-medium'>00</span><span className='font-thin tracking-widest'>HOME</span></Link></li>
                        <li onClick={() => setToggleMenu(false)} className='w-1/4 max-[767px]:w-full h-full text-slate-50 flex justify-center items-center'><Link to={'/destination'} className={`h-full max-[767px]:w-4/5 flex items-center text-xl cursor-pointer border-b-2 ${currentLocation === "/destination" ? "border-white" : "border-transparent"} transition-all hover:border-[#A6AAB5]`}><span className='max-[767px]:block hidden xl:block pr-3 font-medium'>01</span><span className='font-thin tracking-widest'>DESTINATION</span></Link></li>
                        <li onClick={() => setToggleMenu(false)} className='w-1/4 max-[767px]:w-full h-full text-slate-50 flex justify-center items-center'><Link to={'/crew'} className={`h-full max-[767px]:w-4/5 flex items-center text-xl cursor-pointer border-b-2 ${currentLocation === "/crew" ? "border-white" : "border-transparent"} transition-all hover:border-[#A6AAB5]`}><span className='max-[767px]:block hidden xl:block pr-3 font-medium'>02</span><span className='font-thin tracking-widest'>CREW</span></Link></li>
                        <li onClick={() => setToggleMenu(false)} className='w-1/4 max-[767px]:w-full h-full text-slate-50 flex justify-center items-center'><Link to={'/technology'} className={`h-full max-[767px]:w-4/5 flex items-center text-xl cursor-pointer border-b-2 ${currentLocation === "/technology" ? "border-white" : "border-transparent"} transition-all hover:border-[#A6AAB5]`}><span className='max-[767px]:block hidden xl:block pr-3 font-medium'>03</span><span className='font-thin tracking-widest'>TECHNOLOGY</span></Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header;
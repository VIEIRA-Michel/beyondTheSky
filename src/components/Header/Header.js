import logo from '../../assets/icon/logo.svg';

const Header = () => {
    const backgroundColor = {
        backgroundColor: "rgba(122,122,122, 0.1)",
        backdropFilter: "blur(10px)",

    };
    return (
        <header className="flex flex-row items-center relative justify-between bg-transparent mt-7 h-20">
            <div className='flex flex-row items-center justify-center ml-20'>
                <div className="">
                    <img src={logo} alt="" />
                </div>
                <div className="">
                    <h1>Beyond the sky</h1>
                </div>
            </div>
            <nav className='flex items-center h-full w-3/5' style={backgroundColor}>
                <ul className='flex flex-row justify-center z-10'>
                    <li className='mx-10 text-slate-50'><span className='pr-3 font-bold'>00</span><span className='font-thin'>Home</span></li>
                    <li className='mx-10 text-slate-50'><span className='pr-3 font-bold'>01</span><span className='font-thin'>Planet</span></li>
                    <li className='mx-10 text-slate-50'><span className='pr-3 font-bold'>02</span><span className='font-thin'>Technology</span></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;
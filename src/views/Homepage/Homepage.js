const Homepage = () => {
    return (
        <main className="min-h-full flex flex-col xl:flex-row items-center">
            <div className='w-5/6 xl:w-2/4 h-3/5 xl:h-3/5 flex flex-col justify-evenly items-center'>
                <div className="w-full xl:w-2/4 h-3/4 flex flex-col justify-evenly items-center xl:items-start">
                    <h3 className='h-1/6 text-white text-base md:text-xl font-light tracking-widest'>SO, YOU WANT TO TRAVEL TO</h3>
                    <h2 className='h-2/6 text-white text-7xl md:text-8xl space'>SPACE</h2>
                    <p className="h-3/6 custom-width text-white text-base font-thin text-center xl:text-left">Let's face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we'll give you a truly out of this world experience!</p>
                </div>
            </div>
            <div className='w-full xl:w-2/4 h-2/5 xl:h-auto flex flex-col justify-start xl:justify-center items-center'>
                <button className="bg-white max-[413px]:w-2/5 max-[413px]:h-3/5 w-44 h-44 rounded-full">
                    <span className="max-[413px]:text-xl text-2xl space">EXPLORE</span>
                </button>
            </div>
        </main>
    )
}

export default Homepage;
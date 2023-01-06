const Homepage = () => {
    return (
        <main className="min-h-full flex flex-row items-center">
            <div className='w-2/4 flex flex-col justify-evenly items-center'>
                <div className="w-2/5 h-3/4 flex flex-col justify-evenly">
                    <h3 className='text-white text-2xl font-light tracking-widest'>SO, YOU WANT TO TRAVEL TO</h3>
                    <h2 className='text-white text-9xl space'>SPACE</h2>
                    <p className="text-white text-xl font-thin">Let's face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we'll give you a truly out of this world experience!</p>
                </div>
            </div>
            <div className='w-2/4 flex flex-col justify-center'>
                <div className="h-2/4 flex justify-center items-center">
                    <div className="h-1/2">
                        <button className="bg-white w-44 h-44 rounded-full"><span className="text-2xl space">EXPLORE</span></button>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Homepage;
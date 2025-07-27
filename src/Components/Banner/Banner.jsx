const Banner = ({handleNavbar}) => {
    return (
        <div>
            {/* banner section */}
            <div className="bg-[url(/public/assets/media/bg-shadow.png)] h-[550px] bg-[#131313] bg-no-repeat max-w-7xl mx-auto mt-5 flex flex-col items-center justify-center space-y-5 rounded-2xl">

                <img src="/assets/media/banner-main.png" alt="banner logo" />
                <h2 className="font-bold text-4xl text-white">Assemble Your Ultimate Dream 11 Cricket Team</h2>
                <p className="font-[Inter,sans-serif] text-2xl text-[rgba(255,255,255,0.7)]">Beyond Boundaries Beyond Limits</p>
                <div className="border-2 border-[#E7FE29] w-[170px] mx-auto flex justify-center p-1 rounded-lg">
                    <button onClick={handleNavbar} className="btn bg-[#E7FE29] border-0 rounded-lg text-[#131313] font-bold ">Claim Free Credit</button>
                </div>

            </div>
        </div>
    );
};

export default Banner;
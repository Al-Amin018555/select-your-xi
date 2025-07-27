
function App() {

  return (
    <div>
      <nav>
        <div>
          <div className="navbar shadow-sm">
            <div className="p-3 flex items-center justify-between w-7xl mx-auto">
              <div>
                <a><img src="/assets/media/logo.png" alt="" /></a>
              </div>
              <div>
                <ul className="menu flex items-center menu-horizontal px-1 text-[rgba(19,19,19,0.7)]">
                  <li><a>Link</a></li>
                  <li><a>Fixture</a></li>
                  <li><a>Teams</a></li>
                  <li><a>Schedules</a></li>
                  <li>
                    <button className="w-[125px] btn btn-ghost flex items-center">
                      <div className="text-[#131313] font-semibold">
                        <span>0</span> coin
                      </div>
                      <div>
                        <img className="" src="/assets/media/dollar.png" alt="" />

                      </div>
                    </button>
                  </li>
                </ul>
              </div>

            </div>

          </div>
        </div>
      </nav>

      {/* banner section */}
      <div className="bg-[url(/public/assets/media/bg-shadow.png)] h-[550px] bg-[#131313] bg-no-repeat max-w-7xl mx-auto mt-5 flex flex-col items-center justify-center space-y-5 rounded-2xl">

        <img src="/assets/media/banner-main.png" alt="banner logo" />
        <h2 className="font-bold text-4xl text-white">Assemble Your Ultimate Dream 11 Cricket Team</h2>
        <p className="font-[Inter,sans-serif] text-2xl text-[rgba(255,255,255,0.7)]">Beyond Boundaries Beyond Limits</p>
        <div className="border-2 border-[#E7FE29] w-[170px] mx-auto flex justify-center p-1 rounded-lg">
          <button class="btn bg-[#E7FE29] border-0 rounded-lg text-[#131313] font-bold ">Claim Free Credit</button>
        </div>

      </div>
    </div>
  )
}

export default App

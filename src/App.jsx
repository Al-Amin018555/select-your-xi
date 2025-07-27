import Banner from "./Components/Banner/Banner"

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

      <Banner></Banner>
      {/* newsletter section */}
      <div className="max-w-7xl mx-auto border-[1px] rounded-2xl mt-5 border-black p-5">
        <div className="bg-[url(/assets/media/bg-shadow.png)] h-[330px] bg-[rgba(255,255,255,0.15)] flex flex-col space-y-3 justify-center items-center rounded-2xl">

          <h3 className="text-3xl font-bold text-[#131313]">Subscribe to our Newsletter</h3>
          <p className="font-[Inter,sans-serif] text-[rgba(19,19,19,0.7)] font-medium text-[20px]">Get the latest updates and news right in your inbox!</p>

          <div className="flex gap-2">
            <input type="text" className="w-[400px]" placeholder="Enter your email" class="input" />
            <button class="btn w-[140px]">Subscribe</button>
          </div>

        </div>

      </div>

      {/* footer section */}
      <div className="bg-[#06091A] mt-10 p-20 relative">
        <img src="/assets/media/logo.png" className="mx-auto w-[140px]" alt="" />
        <footer class="footer text-white max-w-7xl mx-auto sm:footer-horizontal p-10">
          <nav>
            <h6 class="footer-title text-white">About Us</h6>
            <p>We are a passionate team <br /> dedicated to providing the best <br /> services to our customers.</p>
          </nav>
          <nav>
            <h6 class="footer-title">Quick Links</h6>
            <ul className="space-y-3">
              <ol>Home</ol>
              <ol>Services</ol>
              <ol>About</ol>
              <ol>Contact</ol>
            </ul>
          </nav>
          <nav>
            <h6 class="footer-title">Subscribe</h6>
            <p className="mb-3">Subscribe to our newsletter for the <br /> latest updates.</p>
            <div class="grid grid-flow-col gap-4">

              <div class="join rounded-2xl">
                <div>
                  <label class="input validator join-item">
                    <input type="email" className="rounded-lg text-[rgba(19,19,19,0.4)]" placeholder="Enter your email" required />
                  </label>
                  <div class="validator-hint hidden">Enter valid email address</div>
                </div>
                <button class="btn btn-neutral join-item">Subscribe</button>
              </div>
            </div>
          </nav>
        </footer>

      </div>
    </div>
  )
}

export default App

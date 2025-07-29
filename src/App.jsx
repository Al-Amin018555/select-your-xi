import { useEffect, useState } from "react";
import Banner from "./Components/Banner/Banner"
import Navbar from "./Components/Navbar/Navbar"
import Players from "./Components/Players/Players";

function App() {
  const [coins, setCoins] = useState(0);
  const [players, setPlayers] = useState([]);
  const [activeButton, setActiveButton] = useState(null);

  useEffect(() => {
    fetch('data.json')
      .then(res => res.json())
      .then(data => setPlayers(data))
  }, [])

  const handleClaimCoin = (addedCoins) => {
    const totalCoins = coins + addedCoins;
    setCoins(totalCoins)

  }

  const handleAvailableCoin = (biddingPrice) => {
    console.log(biddingPrice)
    if (coins < biddingPrice) {
      alert("you do not have enough coin")
    }
  }
  const handleClick = (buttonName) => {
    setActiveButton(buttonName);
  }

  // console.log(status)
  return (
    <div>
      <Navbar coins={coins}></Navbar>
      <Banner handleClaimCoin={handleClaimCoin}></Banner>

      <Players activeButton={activeButton} handleClick={handleClick} handleAvailableCoin={handleAvailableCoin} players={players}></Players>

      {/* newsletter section */}
      <div className="max-w-7xl mx-auto border-[1px] rounded-2xl mt-5 border-black p-5">
        <div className="bg-[url(/assets/media/bg-shadow.png)] h-[330px] bg-[rgba(255,255,255,0.15)] flex flex-col space-y-3 justify-center items-center rounded-2xl">

          <h3 className="text-3xl font-bold text-[#131313]">Subscribe to our Newsletter</h3>
          <p className="font-[Inter,sans-serif] text-[rgba(19,19,19,0.7)] font-medium text-[20px]">Get the latest updates and news right in your inbox!</p>

          <div className="flex gap-2">
            <input type="text" className="w-[400px] input" placeholder="Enter your email" />
            <button className="btn w-[140px]">Subscribe</button>
          </div>

        </div>

      </div>

      {/* footer section */}
      <div className="bg-[#06091A] mt-10 p-20 relative">
        <img src="/assets/media/logo-footer.png" className="mx-auto w-[140px]" alt="" />
        <footer className="footer text-white max-w-7xl mx-auto sm:footer-horizontal p-10">
          <nav>
            <h6 className="footer-title text-white">About Us</h6>
            <p>We are a passionate team <br /> dedicated to providing the best <br /> services to our customers.</p>
          </nav>
          <nav>
            <h6 className="footer-title">Quick Links</h6>
            <ul className="space-y-3">
              <ol>Home</ol>
              <ol>Services</ol>
              <ol>About</ol>
              <ol>Contact</ol>
            </ul>
          </nav>
          <nav>
            <h6 className="footer-title">Subscribe</h6>
            <p className="mb-3">Subscribe to our newsletter for the <br /> latest updates.</p>
            <div className="grid grid-flow-col gap-4">

              <div className="join rounded-2xl">
                <div>
                  <label className="input validator join-item">
                    <input type="email" className="rounded-lg text-[rgba(19,19,19,0.4)]" placeholder="Enter your email" required />
                  </label>
                  <div className="validator-hint hidden">Enter valid email address</div>
                </div>
                <button className="btn btn-neutral join-item">Subscribe</button>
              </div>
            </div>
          </nav>
        </footer>
        <small className="mt-15 text-[rgba(255,255,255,0.6)] text-center flex justify-center">@2024 Your Company All Rights Reserved.</small>
      </div>
    </div>
  )
}

export default App

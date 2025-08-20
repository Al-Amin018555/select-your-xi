import { useEffect, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import Banner from "./Components/Banner/Banner"
import Navbar from "./Components/Navbar/Navbar"
import Players from "./Components/Players/Players";

function App() {
  const [coins, setCoins] = useState(0);
  const [players, setPlayers] = useState([]);
  const [activeButton, setActiveButton] = useState(null);
  const [selectedPlayers, setSelectedPlayers] = useState([]);

  const showToastMessage = (message) => {
    toast.success(message, {
      position: "top-right"
    });
    
  };

  useEffect(() => {
    fetch('data.json')
      .then(res => res.json())
      .then(data => setPlayers(data))
  }, [])

  const handleClaimCoin = (addedCoins) => {
    const totalCoins = coins + addedCoins;
    setCoins(totalCoins)

  }

  const handleDeletePlayer = (id) => {
    // console.log('kare dlt korba?')
    const remainingPlayer = selectedPlayers.filter(player => player.playerId !== id );
    setSelectedPlayers(remainingPlayer);
  }

  const handleChoosePlayer = (biddingPrice, player) => {
    if (selectedPlayers.length >= 6) {
      alert('You can pick only 6 players');
      // showToastMessage('You can pick only 6 players');
      return
    }
    const isExitPlayer = selectedPlayers.find(plr => plr.playerId === player.playerId)
    if (isExitPlayer) {
      alert('player already selected');
      return
    }

    console.log(player);
    if (biddingPrice <= coins) {
      const remainingCoins = coins - biddingPrice;
      setCoins(remainingCoins);
      const newPlayer = [...selectedPlayers, player];
      setSelectedPlayers(newPlayer)
      // console.log(selectedPlayers)
    //   showToastMessage()
    //  <ToastContainer />
    }
    else {
      alert("you do not have enough coin")
    }
  }
  // console.log(selectedPlayers);

  const handleClick = (buttonName) => {
    setActiveButton(buttonName);
  }

  // console.log(status)
  return (
    <div>
      <Navbar coins={coins}></Navbar>
      <Banner handleClaimCoin={handleClaimCoin}></Banner>

      <Players handleDeletePlayer={handleDeletePlayer} showToastMessage={showToastMessage} activeButton={activeButton} 
      handleClick={handleClick} handleChoosePlayer={handleChoosePlayer} selectedPlayers={selectedPlayers} players={players}></Players>

       {/* <ToastContainer /> */}
      {/* newsletter section */}
      <div className="lg:max-w-7xl mx-auto border-[1px] rounded-2xl mt-5 border-black p-5">
        <div className="bg-[url(/assets/media/bg-shadow.png)] h-[330px] bg-[rgba(255,255,255,0.15)] flex flex-col space-y-3 justify-center items-center rounded-2xl">

          <h3 className="text-2xl lg:text-3xl font-bold text-[#131313]">Subscribe to our Newsletter</h3>
          <p className="font-[Inter,sans-serif] text-[rgba(19,19,19,0.7)] font-medium text-sm lg:text-[20px]">Get the latest updates and news right in your inbox!</p>

          <div className="flex flex-col lg:flex-row gap-2">
            <input type="text" className="w-[350px] lg:w-[400px] input" placeholder="Enter your email" />
            <button className="btn w-[140px] mx-auto bg-[#E7FE29] ">Subscribe</button>
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
                <button className="btn btn-neutral bg-[#E7FE29] text-[#131313] join-item">Subscribe</button>
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

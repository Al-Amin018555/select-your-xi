import Player from "../Player/Player";
import SelectedPlayers from "../SelectedPlayers/SelectedPlayers";
import './Players.css';

const Players = ({ handleDeletePlayer, showToastMessage, selectedPlayers, activeButton, handleClick, players, handleChoosePlayer }) => {

    return (
        <div>
            {/* players section */}
            <div className="flex justify-between mt-10 max-w-7xl mx-auto">
                <h3 className="font-bold text-[28px] text-[#131313]">{activeButton === 'selected' ? `Selected Players (${selectedPlayers.length}/6)` : 'Available Players'}</h3>
                <div>
                    <button onClick={() => handleClick('available')} className={`btn ${activeButton === 'available' ? 'active' : ''}`}
                    >Available</button>
                    <button onClick={() => handleClick('selected')} className={`btn ${activeButton === 'selected' ? 'active' : ''}`}>Selected <span>({0 + selectedPlayers.length})</span></button>
                </div>
            </div>

            <div className={`${activeButton === 'selected' ? 'hidden' : ''} max-w-7xl mx-auto mt-5 grid gap-5 grid-cols-3`}>
                {
                    players.map((player, idx) => <Player showToastMessage={showToastMessage} handleChoosePlayer={handleChoosePlayer} key={idx} player={player}></Player>)

                }
            </div>

            <div className={`${activeButton === 'selected' ? 'max-w-7xl mt-10 mx-auto space-y-4' : 'hidden'}`}>
                {
                    selectedPlayers.map((player, idx) => <SelectedPlayers key={idx} handleDeletePlayer={handleDeletePlayer} player={player}></SelectedPlayers>)
                }
                <div className={`${selectedPlayers.length > 0 ? 'border-2 border-[rgba(19,19,19,0.4)] mt-5 w-[165px] text-center  p-1 rounded-xl':'hidden'}`}>
                    <button onClick={()=>handleClick('addMorePlayer')} className="btn bg-[#E7FE29] border-0 rounded-lg text-[#131313] font-bold ">Add More Player</button>
                </div>

            </div>
        </div>
    );
};

export default Players;
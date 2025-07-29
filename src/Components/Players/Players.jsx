import Player from "../Player/Player";
import './Players.css';

const Players = ({ activeButton, handleClick, players, handleAvailableCoin }) => {

    return (
        <div>
            {/* players section */}
            <div className="flex justify-between mt-10 max-w-7xl mx-auto">
                <h3 className="font-bold text-[28px] text-[#131313]">Available Players</h3>
                <div>
                    <button onClick={() => handleClick('button1')} className={`btn ${activeButton === 'button1' ? 'active' : ''}`}
                    >Available</button>
                    <button onClick={() => handleClick('button2')} className={`btn ${activeButton === 'button2' ? 'active' : ''}`}>Selected (<span>0</span>)</button>
                </div>
            </div>

            <div className="max-w-7xl mx-auto mt-5 grid gap-5 grid-cols-3">
                {
                    players.map((player, idx) => <Player handleAvailableCoin={handleAvailableCoin} key={idx} player={player}></Player>)

                }
            </div>

        </div>
    );
};

export default Players;
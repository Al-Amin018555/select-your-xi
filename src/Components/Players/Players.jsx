import Player from "../Player/Player";

const Players = ({ players }) => {

    return (
        <div className="max-w-7xl mx-auto mt-5 grid gap-5 grid-cols-3">
            {
                players.map(player => <Player player={player}></Player>)
            }
        </div>
    );
};

export default Players;
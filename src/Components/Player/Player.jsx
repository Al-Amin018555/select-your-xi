import { ToastContainer, toast } from 'react-toastify';
const Player = ({ player, handleChoosePlayer, showToastMessage }) => {
    // console.log(player)
    const { image, name, country, role, battingType, bowlingType, biddingPrice } = player;
    return (
        <div className="">
            <div className="card bg-base-100 p-4 shadow-sm">
                <figure>
                    <img className="w-[370px] h-[250px] "
                        src={image}
                        alt="" />
                </figure>
                <div className="card-body p-0">
                    <div className="flex gap-2 items-center mt-4">
                        <img className="w-[28px]" src="/public/assets/media/player-icon.png" alt="" />
                        <h2 className="card-title">{name}</h2>

                    </div>
                    <div className="flex">
                        <p>{country}</p>
                        <div className="badge badge-outline">{role}</div>
                    </div>
                    <div className="divider mt-1 mb-1"></div>
                    <p>{role}</p>
                    <div className="flex justify-between">
                        <p>{battingType}</p>
                        <p className="text-right">{bowlingType}</p>

                    </div>
                    <div className="card-actions flex items-center">
                        <p>Price: ${biddingPrice}</p>
                        <div>
                            <button onClick={() => {
                                handleChoosePlayer(biddingPrice, player)
                                // showToastMessage()
                            }
                            } className="btn">Choose Player</button>
                           
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Player;
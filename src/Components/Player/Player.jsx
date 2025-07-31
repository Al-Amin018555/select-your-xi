const Player = ({ player, handleChoosePlayer}) => {
    // console.log(player)
    const { image, name, country, role, battingType, bowlingType, biddingPrice } = player;
    return (
        <div className="">
            <div className="card bg-base-100 p-4 shadow-sm">
                <figure>
                    <img className="w-[370px] h-[250px] rounded-xl"
                        src={image}
                        alt="" />
                </figure>
                <div className="card-body p-0">
                    <div className="flex gap-2 items-center mt-4">
                        <img className="w-[28px]" src="/public/assets/media/player-icon.png" alt="" />
                        <h2 className="card-title font-semibold text-[20px] text-[#131313]">{name}</h2>

                    </div>
                    <div className="flex justify-between mt-1">
                        <div className='flex gap-2 items-center'>
                            <img src="/public/assets/media/flag.gif" className='w-[20px]' alt="" />
                            <p>{country}</p>

                        </div>
                        <div className="badge badge-outline">{role}</div>
                    </div>
                    <div className="divider mt-1 mb-1"></div>

                    <p className='font-bold text-[#131313]'>{role}</p>
                    <div className="flex justify-between font-bold text-[#131313]">
                        <p>{battingType}</p>
                        <p className="text-right">{bowlingType}</p>

                    </div>
                    <div className="card-actions flex items-center">
                        <p className='font-bold text-[#131313]'>Price: ${biddingPrice}</p>
                        <div>
                            <button onClick={() => {
                                handleChoosePlayer(biddingPrice, player)
                                
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
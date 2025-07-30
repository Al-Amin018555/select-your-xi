const SelectedPlayers = ({ player }) => {
    const { image, name, role, price } = player;
    return (
        <div className="">
            <div className="flex items-center justify-between shadow-lg rounded-lg p-4">
                <div className="flex items-center gap-3">
                    <div>
                        <img src={image} className="w-[80px] rounded-lg" alt="" />
                    </div>
                    <div>
                        <p className="font-semibold text-2xl text-[#131313]">{name}</p>
                        <p className="text-[rgba(19,19,19,0.6)]">{role}</p>
                        <p>{price}</p>
                    </div>

                </div>
                <div>
                    <button className="btn"> <img src="/assets/media/delete1.png" className="w-[24px]" alt="" />
                    </button>

                </div>
            </div>

        </div>
    );
};

export default SelectedPlayers;
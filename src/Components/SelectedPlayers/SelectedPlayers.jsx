const SelectedPlayers = ({player}) => {
    const {image,name,role,price} = player;
    return (
        <div className="flex items-center gap-2 border-2 rounded-lg space-y-3 p-3">
            <div>
                <img src={image} className="w-[80px] rounded-lg" alt="" />
            </div>
            <div>
                <p>{name}</p>
                <p>{role}</p>
                <p>{price}</p>
            </div>
            
        </div>
    );
};

export default SelectedPlayers;
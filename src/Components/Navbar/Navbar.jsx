const Navbar = ({ coins }) => {
    return (
        <nav className="sticky top-0">
            <div className="navbar bg-white shadow-lg">
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
                                <div className="w-[125px] btn btn-ghost flex items-center">
                                    <div className="text-[#131313] font-semibold">
                                        <span>{coins}</span> coin
                                    </div>
                                    <div>
                                        <img className="" src="/assets/media/dollar.png" alt="" />

                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>

                </div>

            </div>

        </nav>
    );
};

export default Navbar;
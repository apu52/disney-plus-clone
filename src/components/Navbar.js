import React from "react";
import DisneyLogo from "../assets/images/logo.svg";
import HomeIcon from "../assets/images/HomeIcon";
import SearchIcon from "../assets/images/SearchIcon";
import WatchlistIcon from "../assets/images/WatchlistIcon";
import OriginalsIcon from "../assets/images/OriginalsIcon";
import MoviesIcon from "../assets/images/MoviesIcon";
import SeriesIcon from "../assets/images/SeriesIcon";
import { Link } from "react-router-dom";

const Navbar = () => {
    // navitem-hover:bg-gradient-to-r navitem-hover:from-white navitem-hover:to-white
    const NavItem = (props) => {
        return (
            <div className="relative flex cursor-pointer items-center space-x-3 navitem-hover:w-full">
                <span className="absolute right-0 bottom-[-5px] left-[-7px] h-[3px] w-0 rounded-sm bg-white transition-all duration-150 ease-linear">{props.children}</span>
            </div>
        );
    };

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 w-full overflow-hidden bg-body-bg ">
            <div className="container mx-auto flex items-center justify-between sm:px-10 p-1 sm:py-3">
                <div className="flex items-center justify-evenly flex-wrap sm:gap-16 gap-2">
                    <>
                        <Link to="/">
                            <img
                                className="w-28"
                                src={DisneyLogo}
                                alt="Logo-Disney"
                            />
                        </Link>
                        <button className="transparent rounded border border-white bg-black bg-opacity-60 sm:px-5 sm:py-2 p-1 text-lg uppercase tracking-wider text-white transition-colors duration-200 ease-linear hover:bg-white hover:text-black">
                            Login
                        </button>
                    </>
                    <div className="sm:gap-10 gap-2 flex flex-row flex-wrap ">
                        <NavItem>
                            <HomeIcon width={"36"} />
                            <p>Home</p>
                        </NavItem>

                        <NavItem>
                            <SearchIcon width={"36"} />
                            <p>Search</p>
                        </NavItem>

                        <NavItem>
                            <WatchlistIcon width={"36"} />
                            <p>Watchlist</p>
                        </NavItem>

                        <NavItem>
                            <OriginalsIcon width={"36"} />
                            <p>Originals</p>
                        </NavItem>

                        <NavItem>
                            <MoviesIcon width={"36"} />
                            <p>Movies</p>
                        </NavItem>

                        <NavItem>
                            <SeriesIcon width={"36"} />
                            <p>Series</p>
                        </NavItem>
                    </div>

                </div>
            </div>
        </nav>
    );
};

export default Navbar;

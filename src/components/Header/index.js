import React from "react";
import {FaPlayCircle} from "react-icons/fa";
import Link from "next/link";

function Header() {
    return <header className={"flex justify-between items-center h-20 bg-blend-hue "}>
        <AppLogo/>
        <Navbar/>
    </header>
}


const AppLogo = () => {
    return <Link href={"/"} className={"flex items-center justify-center gap-4 text-2xl font-bold text-white "}>
        <FaPlayCircle /> MOVIFY
    </Link>
}

const Navbar = () => {
    return <nav>
        <ul className={"flex items-center justify-center gap-12 text-white font-bold tracking-widest"}>
            <NavBarListItem title={"Movies"}/>
            <NavBarListItem title={"Series"}/>
            <NavBarListItem title={"Kids"}/>
        </ul>
    </nav>
}


/*
.logo {
    display: flex;
    align-items: center;
    gap: 8px;
    letter-spacing: -1px;
}
}*/

const NavBarListItem = ({title, path="/"}) => {
    return <li>
        <Link href={path}> {title} </Link>
    </li>
}







export default Header
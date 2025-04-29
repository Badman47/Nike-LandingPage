
import { hamburger } from "../assets/icons"
import { headerLogo } from "../assets/images"
import { navLinks } from "../constants/constants"


//Nav component:
const Nav = () => {
    return (
        <header className="px-20 py-8 absolute z-10 w-full">
            <nav className="flex justify-between items-center max-w-1440px">
                <a href="/">
                    <img
                        src={headerLogo}
                        alt="Logo"
                        width={130}
                        height={40}
                    ></img>
                </a>
                <ul className="flex-1 flex justify-end items-center gap-14 max-lg:hidden">
                    {navLinks.map((item) => (
                        <li key={item.label}>
                            <a href={item.href}
                                className="text-gray-600 text-lg font-medium">
                                {item.label}
                            </a>
                        </li>
                    ))}
                </ul>
                <div className="hidden max-lg:block">
                    <img src={hamburger} alt="Hamburger logo" width={25} height={25}></img>
                </div>
            </nav>
        </header>
    )
}

export default Nav
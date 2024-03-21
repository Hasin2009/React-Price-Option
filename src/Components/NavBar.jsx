import { useState } from "react";
import Link from "./Link";
import { LuMenuSquare} from "react-icons/lu";
import { IoCloseOutline } from "react-icons/io5";


const NavBar = () => {
    const [open, setOpen] = useState(false)
    const routes = [
        { id: 1, path: '/', name: 'Home' },
        { id: 2, path: '/about', name: 'About' },
        { id: 3, path: '/services', name: 'Services' },
        { id: 4, path: '/contact', name: 'Contact' },
        { id: 5, path: '/404', name: 'NotFound' },
      ];
      

    return (
        <nav>
            <div className="md:hidden text-2xl pt-2 pl-4 bg-gray-300" onClick={() => setOpen(!open)}>
                {
                    open === true ? 
                    <IoCloseOutline></IoCloseOutline> : <LuMenuSquare></LuMenuSquare>
                }
            
            </div>
            <ul className={`md:flex duration-1000 absolute md:static
            ${open ? 'top-12' : '-top-32'}
            pl-4`}>
            {
                routes.map(route => <Link key={route.id} route={route}></Link>)
            }
            </ul>
        </nav>
    );
};

export default NavBar;
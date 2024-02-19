import Link from "next/link";
import { useRouter } from "next/router";
// import { menuItemsData } from "./menuItemsData";
import { useState } from "react";

export const menuItemsData = [
  {
    title: 'Home',
    url: '/',
  },
  {
    title: 'About',
    url: '/about',
  },
  {
    title: 'Services',
    url: '/services',
  },
  {
    title: 'Contact',
    url: '/contact',
  },
];

export default function Navbar (props: { class: string; }) {
  const router = useRouter();
  const [isNavbar, setIsNavbar] = useState(false);
  return (
    <>
      <a onClick={() => setIsNavbar(!isNavbar)} href="#" className="md:hidden absolute right-5 top-4 w-8 h-8 flex items-center justify-center bg-black text-white rounded-md text-3xl pb-0.5">+</a>
      <div onClick={() => setIsNavbar(!isNavbar)} className={isNavbar ? "open toggle-overlay" : "toggle-overlay"}></div>
      <div className={ (isNavbar ? "open" : "") + " nav-mobile md:inline-flex" }>
        <ul className="flex -mr-6">
          {menuItemsData.map((menu, index) =>{
            return(
              <li className="px-6" key={index}>
                <Link 
                  className={router.pathname == menu.url ? "md:text-blue-600 active" : "md:text-black md:hover:text-blue-600 transition-all"}
                  href={menu.url}
                  onClick={() => setIsNavbar(!isNavbar)}
                >
                  {menu.title}
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
    </>
  )
}
"use client"
import React,{useState} from "react";
import { Icon } from '@iconify/react';
import Image from "next/image";
import { Avatar } from 'flowbite-react';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    let Links =[
        {name:"Accueil",link:"/"},
        {name:"Films",link:"/allEvents"},
        {name:"Séries",link:"/about"},
        {name:"Boutique",link:"/boutique"},
        {name:"Contact",link:"/detailEven"},
    ]
    const toggleMenu = () => {
    console.log("Toggle menu called");
    setMenuOpen(!menuOpen);
    };
  return (
    <>
        <div className='flex h-16 relative items-center justify-around bg-[#05115A] w-full '>
            <div className=''>
                <Image
                    alt="logo"
                    src="/logo.png"
                    className="h-14 w-14"
                    height={200}
                    width={200} />
            </div>
            <div className=''>
                <ul className={`flex text-white bg-slate-900 opacity-90 md:bg-transparent  flex-col absolute left-0 z-[10] md:static md:flex-row items-center md:justify-around w-full transition-all duration-500 ease-in  ${menuOpen? 'top-16 opacity-100':'top-[-490px] md:opacity-100 opacity-0'}`}  >
                    {
                        Links.map((link)=>(
                            <li key={link.name} className={`mx-4 md:my-0 my-4`} >
                                <a href={link.link} className=" hover:text-slate-400 duration-500">{link.name}</a>
                            </li>
                        ))
                    }
                </ul>
            </div>
            <div className='flex items-center'>
                <button className="text-white text-xs w-14 border p-1 rounded-full">SignIn</button>
                {/* <div className='ms-4 bg-red-600 rounded-full h-10 w-10'> */}
                <div className="mx-4 mr-12">
                        <Avatar img="/images/Babilon23.webp" rounded status="busy" statusPosition="top-right" />
                </div>
                <div onClick={()=>setMenuOpen(!menuOpen)} className="ms-4 text-white text-3xl absolute right-6 top-4 cursor-pointer md:hidden ">
                    <Icon icon={menuOpen? "iconamoon:close-duotone":"iconamoon:menu-burger-horizontal"} />
                </div>
            </div>
        </div>
    </>
  )
}

export default Navbar
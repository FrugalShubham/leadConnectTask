"use client";
import Link from "next/link";
import Logo from "../img/logo.png";
import Image from "next/image";
import Phone from "../img/phone.svg";
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";

const Navbar = () => {
  return (
    <div className='nav' style={{display:"flex",alignItems:"center",width:"100%",justifyContent:"space-between",alignItems:'center',padding:"0px 20px"}}>
                   <Image src={Logo} alt="Logo" style={{ width: "100px" }} />
        <ul className='navlink_wrapper'>
<li >
<p className="navlink" style={{display:'flex'}}>Server<span className='arrow up'><IoIosArrowUp/></span><span className='arrow down'><IoIosArrowDown/></span></p>
<ul className='sub-links-wrapper'>
    <li>All Services</li>
    <li>Career</li>
    <li>About</li>
</ul>
            </li>
            <li >
<p className="navlink" style={{display:'flex'}}>About US<span className='arrow up'><IoIosArrowUp/></span><span className='arrow down'><IoIosArrowDown/></span></p>
<ul className='sub-links-wrapper'>
<li>All Type</li>
    <li>Careers</li>
    <li>About</li>
</ul>
            </li>
            <li >
<p className="navlink">OUR BLOG</p>
            </li>
            <li >
<p className="navlink">CAREES@MYMENTOR</p>
            </li>
        </ul>
        <div className="hidden md:flex gap-x-6 text-black ">
              <div className="hidden md:flex gap-x-2 text-black ">
                <Image src={Phone} alt="Phone" style={{ width: "15px" }} />
                <p style={{ alignContent: "center", fontWeight:'bold' }}>(+91) 9451948074</p>
              </div>
              <button className="bg-red-700  hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                Quick Enquiry
              </button>
            </div>
    </div>
  )


};

export default Navbar;

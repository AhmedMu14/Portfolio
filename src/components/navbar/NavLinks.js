import React from 'react';
import { Link } from 'react-router-dom';
import { FaLinkedin, FaInstagram} from "react-icons/fa"
import {BiEnvelope} from "react-icons/bi"
import {BsGithub} from "react-icons/bs"

const NavLinks = ({handleNav}) => {
  return (
    <ul className='nav-links'>
        <li onClick={handleNav} ><Link  to="https://www.instagram.com/ahmedmu04/" target='_blank' className='nav-link'><FaInstagram /></Link></li>
        <li onClick={handleNav} ><Link  to="https://www.linkedin.com/in/ahmedmu14/" target='_blank' className='nav-link'><FaLinkedin /></Link></li>
        <li onClick={handleNav} ><Link  to="https://github.com/AhmedMu14" target='_blank' className='nav-link'><BsGithub /></Link></li>
        <li onClick={handleNav} ><a  href="ahmedmujahid2004@gmail.com" target='_blank' className='nav-link' rel="noreferrer"><BiEnvelope /></a></li>
  </ul>
  )
};

export default NavLinks;

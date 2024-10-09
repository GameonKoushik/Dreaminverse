import React from 'react';
import { Link } from 'react-router-dom';
import '../homepage.css';
import Poster from '../assets/Poster.jpg';
import CompanyLogo from '../assets/Companylogo.png';

const Home = () => {

    const openPlayStore = () => {
        window.open('https://play.google.com/store/apps/details?id=com.DreamInverse.GreatFoodMatch3&pcampaignid=web_share', '_blank');
    };

    return (
        <>
            <div className='head'>
                <div className='links'>
                    <Link className='link' to="/">Home</Link>
                    <Link className='link' to="/games">Games</Link>
                    <img src={CompanyLogo} alt="CompanyLogo" className='company-logo' />
                    <h1 className='company-name-link' >Dreaminverse</h1>
                </div>
            </div>

            <div className='mid'>
                <div className='image-container'>
                    <img src={Poster} alt="Poster" className='feature-graphic' />
                    <button className='play-now-button' onClick={openPlayStore}>Play now</button>
                </div>
            </div>

            <div className='foot'>
                <Link className='privacypolicylink' to="/privacy-policy">PrivacyPolicy</Link>
            </div>
        </>
    );
};

export default Home;



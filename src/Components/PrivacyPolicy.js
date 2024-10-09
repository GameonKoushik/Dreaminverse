import React from 'react';
import { Link } from 'react-router-dom';
import '../homepage.css';
import '../privacypolicy.css';
import CompanyLogo from '../assets/Companylogo.png';

const Privacy = () => {
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
            <div class="privacy-policy-container">
                <div class="privacy-policy-content">
                    <h1>Privacy Policy</h1>
                    <h3>Introduction</h3>
                    <p>
                        This Privacy Policy explains how dreaminverse collects, uses, discloses, and protects your information when you use our games available through the playstore. By using our Game, you agree to the collection and use of information in accordance with this policy.
                    </p>
                    <h3>Information We Collect</h3>
                        <ul>
                            <li>
                                <strong>Personal Information:</strong> We may collect information that identifies you personally, such as your name, email address, and any other information you provide when you create an account or use certain features of the Game.
                            </li>
                            <li>
                                <strong>Device Information:</strong> We collect information about the device you use to access the Game, including hardware model, operating system version, unique device identifiers, and mobile network information.
                            </li>
                            <li>
                                <strong>Usage Information:</strong> We collect information about how you use our Game, such as your progress, scores, and in-game purchases.
                            </li>
                            <li>
                                <strong>Log Data:</strong> When you access the Game, our servers may automatically log certain information, including your IP address, browser type, and the time and date of your use.
                            </li>
                        </ul>
                    <h3>How We Use Your Information</h3>
                    <h10>We use the information we collect for various purposes, including:</h10>
                        <ul>
                            <li>To provide, maintain, and improve the Game</li>
                            <li>To personalize your experience and respond to your inquiries</li>
                            <li>To process transactions and send you related information</li>
                            <li>To monitor and analyze usage patterns to improve our services</li>
                            <li>To send you updates, special offers, and other information related to the Game (you can opt out at any time)</li>
                            <li>To detect, prevent, and address technical issues and fraudulent activity</li>
                        </ul>
                    <h3>How We Use Your Information</h3>
                    <h10>We do not sell, trade, or otherwise transfer your personal information to outside parties, except in the following situations:</h10>
                        <ul>
                            <li>Service Providers: We may share your information with third-party companies and individuals to facilitate our Game, provide services on our behalf, or perform Game-related services.</li>
                            <li>Legal Requirements: We may disclose your information if required to do so by law or in response to valid requests by public authorities.</li>
                        </ul>
                    <h3>Security</h3>
                    <p>
                        We take the security of your personal information seriously and use reasonable measures to protect it from unauthorized access, disclosure, or misuse. However, no method of transmission over the internet or electronic storage is 100% secure.
                    </p>
                    <h3>Children’s Privacy</h3>
                    <p>
                        Our Game is not intended for use by children under the age of 13. We do not knowingly collect personally identifiable information from children under 13. If we become aware that we have collected personal information from a child, we will take steps to delete that information.
                    </p>
                    <h3>Your Rights</h3>
                    <p>
                        You have the right to access, update, or delete your personal information at any time. You can contact us at astraverse1@gmail.com to exercise your rights.
                    </p>
                    <h3>Changes to This Privacy Policy</h3>
                    <p>
                        We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. We encourage you to review this Privacy Policy periodically for any changes.
                    </p>
                    <h3>Contact Us</h3>
                    <p>
                        If you have any questions about this Privacy Policy, please contact us at:
                        Email: astraverse1@gmail.com
                    </p>


                </div>
            </div>

        </>
    );
};

export default Privacy;
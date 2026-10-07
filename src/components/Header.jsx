import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import { faCircleChevronLeft, faCircleChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const HamburgerNavbar = () => {
    const [isSticky, setIsSticky] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [activeSubMenu, setActiveSubMenu] = useState(null);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
        setActiveSubMenu(null);
    };

    const handleSubMenuClick = (index) => {
        if (activeSubMenu === index) {
            setActiveSubMenu(null);
        } else {
            setActiveSubMenu(index);
        }
    };

    const handleBackClick = () => {
        setActiveSubMenu(null);
    };
    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            setIsSticky(scrollTop > 0);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <div className={`menu-bar${isOpen ? ' active' : ''}`}>
                <div class="menu-buttons-code">
                    {/* <div class="button-header-popup">
                        <NavLink href="#">Meet the Champions</NavLink>
                    </div> */}
                    <div class="button-header-popup">
                        <a href="/german-gateway"><img src="images/homepage/german_icon.svg" />German Gateway</a>
                    </div>
                    <div class="button-header-popup">
                        <a href="https://www.curtina.in/_mobile/login.aspx?AppId=RIS" target="_blank"><img src="images/homepage/1icon.svg" />Student Login</a>
                    </div>
                    {/* <div class="button-header-popup">
                        <a href="/admission" target="_blank"><img src="images/homepage/admission_icon.svg" />Admission Form</a>
                    </div> */}
                    <div class="button-header-popup">
                        <a href="https://www.curtina.in/ris/forms/frmAlumni_AE_JQ.aspx" target="_blank"><img src="images/homepage/2icon.svg" />Enroll Alumni</a>
                    </div>
                    <div class="button-header-popup">
                        <a href="https://www.curtina.in/RIS/forms/frmStdPayOnline.aspx" target="_blank"><img src="images/homepage/3icon.svg" />Pay Fee</a>
                    </div>
                    <div class="button-header-popup">
                        <a href="https://www.curtina.in/_web/FrmfindTC.aspx" target="_blank"><img src="images/homepage/1icon.svg" />Search TC</a>
                    </div>

                    <button type="button" className="header-hamburger close" onClick={toggleMenu}>
                        <span class="one-collapes"></span>
                        <span class="tree-collapes"></span>
                    </button>

                </div>

                <ul className="open-menu">
                    <li>
                        <NavLink href="/" onClick={() => handleSubMenuClick(0)}>Home<span></span></NavLink>
                    </li>
                    <li>
                        <NavLink href="#" onClick={() => handleSubMenuClick(1)}>About Us<span><FontAwesomeIcon icon={faCircleChevronRight} /></span></NavLink>
                    </li>
                    <li>
                        <a href="/achievements">Achievements<span></span></a>
                    </li>
                    <li>
                        <a href="/cbse-mandatory">CBSE<span></span></a>
                    </li>
                    <li>
                        <NavLink href="#" onClick={() => handleSubMenuClick(3)}>Academics<span><FontAwesomeIcon icon={faCircleChevronRight} /></span></NavLink>
                    </li>
                    <li>
                        <NavLink href="#" onClick={() => handleSubMenuClick(4)}>Activities<span><FontAwesomeIcon icon={faCircleChevronRight} /></span></NavLink>
                    </li>
                    <li>
                        <NavLink href="#" onClick={() => handleSubMenuClick(5)}>International Endeavour<span><FontAwesomeIcon icon={faCircleChevronRight} /></span></NavLink>
                    </li>
                    <li>
                        <a href="/sports">Sports<span></span></a>
                    </li>
                    
                    <li>
                        <a href="/gallery">Gallery<span></span></a>
                    </li>
                    {/* <li>
                        <a href="#" onClick={() => handleSubMenuClick(7)} >Sports<span><FontAwesomeIcon icon={faCircleChevronRight} /></span></a>
                    </li> */}
                    <li>
                        <a href="/contact">Contact Us<span></span></a>
                    </li>
                </ul>

                <div class="static-code">
                    <img src="images/homepage/home-kids.jpg" alt="coder" />
                </div>

                <div class="flex-items-code">
                    <div className="menu-info">
                        <ul>
                            <li><a href="tel:7807849222"><img src="images/homepage/sidebar-phone.svg" />7807849222</a></li>
                            <li><a href="mailto:rainbowschoolnagrota@gmail.com"><img src="images/homepage/sidebar-email.svg" />rainbowschoolnagrota@gmail.com</a></li>
                        </ul>
                    </div>

                    <div className="header-social-icons">
                        <ul>
                            <li><a href="https://www.facebook.com/rainbowhimachal" target="_blank"><img src="/images/homepage/Facebook.svg" alt="Logo" width={40} height={40} /></a></li>
                            <li><a href="https://www.instagram.com/reel/CeNLcD5lHtp/?igshid=YmMyMTA2M2Y%3D" target="_blank"><img src="/images/homepage/Instagram.svg" alt="Logo" width={40} height={40} /></a></li>
                            <li><a href="https://twitter.com/rainbowhimachal" target="_blank"><img src="/images/homepage/Twitter.svg" alt="Logo" width={40} height={40} /></a></li>
                            <li><a href="https://www.youtube.com/channel/UCrc8uThFoxuCWUCo-T1bGbA" target="_blank"><img src="/images/homepage/Youtube.svg" alt="Logo" width={40} height={40} /></a></li>
                        </ul>
                    </div>

                    <div className="view-details">
                        <a href="https://www.google.com/maps/place/Rainbow+International+School/@32.1208293,76.3661026,15z/data=!4m6!3m5!1s0x391b4c3310ece7df:0xeda7a0e8084c748c!8m2!3d32.1110289!4d76.3788251!16s%2Fg%2F11b77r_7pd?entry=ttu" target="_blank"><img src="images/homepage/sidebar-location.svg" />View Directions</a>
                    </div>

                </div>
            </div>
            <div className={`new-header-create ${isSticky ? 'sticky' : ''}`}>
                <div className="container">
                    <div className="main-colum-fx">
                        <div className="logo-new">
                            <a href="/" > <img src="images/homepage/Logo.png" /></a>
                        </div>

                        <div className="manu-toggle">

                            <div class="button-header-popup">
                                <a href="/german-gateway"><img src="images/homepage/german_icon.svg" />German Gateway</a>
                            </div>
                            {/* <div class="button-header-popup">
                                <a href="/admission"><img src="images/homepage/admission_icon.svg" />Admission Form</a>
                            </div> */}
                            <div class="button-header-popup">
                                <a href="https://www.curtina.in/_mobile/login.aspx?AppId=RIS" target="_blank"><img src="images/homepage/1icon.svg" />Student Login</a>
                            </div>
                            <div class="button-header-popup">
                                <a href="https://www.curtina.in/ris/forms/frmAlumni_AE_JQ.aspx" target="_blank"><img src="images/homepage/2icon.svg" />Enroll Alumni</a>
                            </div>
                            <div class="button-header-popup">
                                <a href="https://www.curtina.in/RIS/forms/frmStdPayOnline.aspx" target="_blank"><img src="images/homepage/3icon.svg" />Pay Fee</a>
                            </div>

                            <button type="button" className="header-hamburger" onClick={toggleMenu}>
                                <span></span>
                                <span></span>
                                <span></span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className={`sub-menu-item${activeSubMenu !== null ? ' active' : ''}`}>

                <p class="back-sub-menu" onClick={handleBackClick}>Back</p>

                {activeSubMenu === 1 && (
                    <ul className="sub-menu">
                        <li><a href="/teaching-staff">Teaching Staff</a></li>
                        <li><a href="/house-system">House System</a></li>
                    </ul>
                )}
                {activeSubMenu === 3 && (
                    <ul className="sub-menu">
                        <li><a href="/curriculum">Curriculum </a></li>
                        <li><a href="/planners-of-syllabus">Planners of Syllabus (Session 2023-24)</a></li>
                        <li><a href="/results">Result</a></li>
                        <li><a href="/calender">Calender</a></li>
                        <li><a href="/datesheets">Datesheets</a></li>
                        <li><a href="/transfer-certificate">Transfer Certificates</a></li>
                    </ul>
                )}
                {activeSubMenu === 4 && (
                    <ul className="sub-menu">
                        <li><a href="/pre-primary">Pre Primary</a></li>
                        <li><a href="/primary">Primary</a></li>
                        <li><a href="/middle-wing">Middle Wing</a></li>
                        <li><a href="/secondary">Secondary</a></li>
                        <li><a href="/excursions">Excursions</a></li>
                    </ul>
                )}
                {activeSubMenu === 5 && (
                    <ul className="sub-menu">
                        <li><a href="/microsoft">Microsoft</a></li>
                        <li><a href="/british-council">British Council</a></li>
                    </ul>
                )}
                {/* {activeSubMenu === 7 && (
                    <ul className="sub-menu">
                        <li><a href="/atal-tinkering">Atal Tinkering</a></li>
                        <li><a href="/table-tennis">Table Tennis</a></li>
                        <li><a href="/gymnastics">Gymnastics</a></li>
                        
                    </ul>
                )} */}
            </div>

        </>
    );
};

export default HamburgerNavbar;
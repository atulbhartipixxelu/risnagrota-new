import React, { useEffect, useState, useMemo } from 'react';
import { NavLink } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import SliderEventsBanner from '../components/BannerSliderEvents'
import CollaborationSliderHome from '../components/CollaborationSlider';
import AnnualFunctionTwo from '../components/Annualfunction';
import AwardSection from '../components/AwardsSection';
import AnnualFunction from '../components/Annualfunction';
import GalleryData from '../components/HomePageData/galleryHome'
import CourseDetail from '../components/HomePageData/course-detail'

const FACEBOOK_KINJAL_WATCH = 'https://www.facebook.com/watch?v=2141945653257846';

/** Instagram page/reel links must use /embed/ for iframes */
function getStudentSpeaksEmbedSrc(url) {
    if (!url || typeof url !== 'string') return url;
    const reel = url.match(/instagram\.com\/reel\/([^/?#]+)/i);
    if (reel && !url.includes('/embed')) {
        return `https://www.instagram.com/reel/${reel[1]}/embed/`;
    }
    const post = url.match(/instagram\.com\/p\/([^/?#]+)/i);
    if (post && !url.includes('/embed')) {
        return `https://www.instagram.com/p/${post[1]}/embed/`;
    }
    return url;
}

const STUDENT_SPEAKS_VIDEOS = [
    { name: 'Manvi Mishra', src: 'https://www.youtube.com/embed/3u42vNuCfr8?si=kqj5ypobNHG_9R2H' },
    { name: 'Somya', src: 'https://www.youtube.com/embed/XPAeR0J34fU?si=smHS0Xz0aK4kqL-F' },
    { name: 'Angel', src: 'https://www.youtube.com/embed/0JFXsolz_bY?si=su6iURzOS6QkVG6a' },
    { name: 'Aahana', src: 'https://www.youtube.com/embed/cW6kiXj3Sng?si=_SVlGUYv-GIbPZck' },
    {
        name: 'Kinjal Koundal',
        src: `https://www.facebook.com/plugins/video.php?href=${encodeURIComponent(FACEBOOK_KINJAL_WATCH)}&show_text=false&width=1280&height=720`,
    },
    {
        name: 'Anwita Jaitly',
        variant: 'instagramLink',
        href: 'https://www.instagram.com/reel/DXRYev3FWta/?utm_source=ig_web_copy_link&igsh=NTc4MTIwNjQ2YQ==',
        posterSrc: 'images/homepage/instagram-girl.png',
        iconSrc: 'images/homepage/inst-icon.svg',
    },
];

function Modal({ isOpen, onClose, imageUrl }) {
    if (!isOpen) return null;

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <span className="close" onClick={onClose}>&times;</span>
                <img src={imageUrl} alt="modal" className='design-media-popup' />
            </div>
        </div>
    );
}

function Homepage() {

    const [modalOpen, setModalOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState('');

    const openModal = (imageSrc) => {
        setSelectedImage(imageSrc);
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
    };


    const [isOpen, setIsOpen] = useState(false);

    const togglePopup = () => {
        setIsOpen(!isOpen);
    };

    // Initialize state to manage open state for popups
    const [popupOpen, setPopupOpen] = useState({});

    // Function to toggle popup open state based on ID
    const togglesPopup = (id) => {
        setPopupOpen(prevState => ({
            ...prevState,
            [id]: !prevState[id]
        }));
    };

    useEffect(() => {
        const videoElement = document.getElementById("myVideo");
        videoElement.removeAttribute("controls");

        document.body.classList.add('homepage');
        return () => {
            document.body.classList.remove('homepage');
        };
    }, []);


    const settings = {
        dots: false,
        arrows: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    };


    const settings_cool = {
        dots: false,
        arrows: true,
        infinite: true,
        speed: 5000,
        cssEase: 'linear', // Define the CSS easing function
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 0,
        initialSlide: 1,



        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    };

    const studentSpeaksSliderSettings = useMemo(
        () => ({
            dots: true,
            arrows: true,
            infinite: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 4500,
            pauseOnHover: true,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: { slidesToShow: 2, slidesToScroll: 1 },
                },
                {
                    breakpoint: 768,
                    settings: { slidesToShow: 1, slidesToScroll: 1 },
                },
            ],
        }),
        []
    );

    return (
        <div className="homepage new">

            <div className="banner-video">
                <video loop autoPlay muted width="100%" height="900" id="myVideo">
                    <source src="video/hero-video-home-2022-fall.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>

            {/* <div className='slider_events_banner'>
                <div className='container'>
                    <SliderEventsBanner/>
                </div>
            </div> */}

            <div className="about-item">
                <div className="container mt-5">
                    <div id="collapseOne" className="v-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#about">
                        <div className="about-body">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="about-img">
                                        <img src="images/homepage/about-new.png" alt="about" />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div class="about-new">
                                        <span>GET TO KNOW US</span>
                                        <h2 className='title-new'>Rainbow International School</h2>
                                        <p>Rainbow International School, Nagrota Bagwan is one of the best schools in Himachal Pradesh, providing the highest quality and truly international standards of education. School holds firm in its belief that students do their best and teaching becomes productive when research is underlined as a criteria for scholarship, systematically guided by dedicated and quality teaching.</p>
                                    </div>
                                    <div className="col-frames">
                                        <NavLink className="nav-link" to="/teaching-staff">Read More</NavLink>
                                        <NavLink className="nav-link" to="https://www.facebook.com/rainbowhimachal" target='_blank'>Visit us</NavLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        
            <div className='awards_detail'>
                <div className='container'>
                    <AwardSection />
                </div>
            </div>



                <div className='awards_detail chager-detail'>
                <div className='container'>
                    <CourseDetail />
                </div>
            </div>

            

            {/* Myriad Colors of Rainbow Start */}

            <section className="myriad-section">
                <div className='container'>
                    <div className='myraid-heading'>
                        <h2 className='title-new'>Myriad Colors of Rainbow</h2>
                    </div>
                    <div className='row myriad-col'>
                        <div className='col-md-3'>
                            <div class="section-myraid-box">
                                <img src="images/homepage/principal.png" alt="about" />
                                <h3>About</h3>
                                <p>Nestled among the serene beauty of Dhauladhar, Rainbow International School stands as a beacon of excellence, nurturing minds and shaping Future.</p>
                            </div>
                        </div>


                        <div className='col-md-3'>
                            <div class="section-myraid-box colur-change">
                                <a onClick={() => togglesPopup('principalPopupatal')}>
                                    <div className='among-code'><img src="images/homepage/lab.png" alt="about" /></div>
                                </a>
                                <h3>Atal Tinkering Lab/Robotics Innovation Hub</h3>
                                <p>Through Robotics,we embark on a journey of innovation forging connection between technology and human ingenuity</p>

                                {/* Modal Popup */}
                                {popupOpen['principalPopupatal'] && (
                                    <div className="popup">
                                        <div className="popup-content">
                                            <span className="close" onClick={() => togglesPopup('principalPopupatal')}>&times;</span>
                                            <img src={`images/atal-images/2-IMG.JPG`} onClick={() => openModal(`images/atal-images/2-IMG.JPG`)} alt=''/>
                                            <img src={`images/atal-images/3-IMG.JPG`} onClick={() => openModal(`images/atal-images/3-IMG.JPG`)} />
                                            <img src={`images/atal-images/4-IMG.JPG`} onClick={() => openModal(`images/atal-images/4-IMG.JPG`)} />
                                            <img src={`images/atal-images/6-IMG.JPG`} onClick={() => openModal(`images/atal-images/6-IMG.JPG`)} />
                                        </div>
                                    </div>
                                )}

                                <Modal isOpen={modalOpen} onClose={closeModal} imageUrl={selectedImage} className="design-popup" />

                            </div>
                        </div>

                        <div className='col-md-3'>
                            <div class="section-myraid-box">
                                <a onClick={() => togglesPopup('principalPopupatalWeightlifting')}>
                                    <img src="images/homepage/khalo.png" alt="about" />
                                </a>
                                <h3>Khelo India Residential Academy for Weightlifting</h3>

                                {/* Modal Popup */}
                                {popupOpen['principalPopupatalWeightlifting'] && (
                                    <div className="popup">
                                        <div className="popup-content">
                                            <span className="close" onClick={() => togglesPopup('principalPopupatalWeightlifting')}>&times;</span>
                                            <img src={`images/Weightlifting/Weightlifting-2.JPG`} onClick={() => openModal(`images/Weightlifting/Weightlifting-2.JPG`)} />
                                            <img src={`images/Weightlifting/Weightlifting-4.JPG`} onClick={() => openModal(`images/Weightlifting/Weightlifting-4.JPG`)} />
                                            <img src={`images/Weightlifting/Weightlifting-5.JPG`} onClick={() => openModal(`images/Weightlifting/Weightlifting-5.JPG`)} />
                                            <img src={`images/Weightlifting/Weightlifting-6.JPG`} onClick={() => openModal(`images/Weightlifting/Weightlifting-6.JPG`)} />
                                        </div>
                                    </div>
                                )}
                                <Modal isOpen={modalOpen} onClose={closeModal} imageUrl={selectedImage} className="design-popup" />


                            </div>
                        </div>

                        <div className='col-md-3'>
                            <div class="section-myraid-box colur-change">
                                <a onClick={() => togglesPopup('principalPopupKhelo')}>
                                    <div className='among-code'><img src="images/homepage/tech.png" alt="about" /></div>
                                </a>
                                <h3>Khelo India Residential Academy for Table-Tennis</h3>

                                {/* Modal Popup */}
                                {popupOpen['principalPopupKhelo'] && (
                                    <div className="popup">
                                        <div className="popup-content">
                                            <span className="close" onClick={() => togglesPopup('principalPopupKhelo')}>&times;</span>
                                            <img src={`images/table-tennis/3-table-tennis.JPG`} onClick={() => openModal(`images/table-tennis/3-table-tennis.JPG`)} />
                                            <img src={`images/table-tennis/5-table-tennis.jpg`} onClick={() => openModal(`images/table-tennis/5-table-tennis.jpg`)} />
                                            <img src={`images/table-tennis/6-table-tennis.jpeg`} onClick={() => openModal(`images/table-tennis/6-table-tennis.jpeg`)} />
                                            <img src={`images/table-tennis/7-table-tennis.jpg`} onClick={() => openModal(`images/table-tennis/7-table-tennis.jpg`)} />
                                        </div>
                                    </div>
                                )}

                            </div>
                        </div>

                        <div className='col-md-3'>
                            <div class="section-myraid-box">
                                <a onClick={() => togglesPopup('principalPopupGymnastics')}>
                                    <div className='among-code'> <img src="images/homepage/gym.png" alt="about" /></div>
                                </a>
                                <h3>Gymnastics Academy</h3>

                                {/* Modal Popup */}
                                {popupOpen['principalPopupGymnastics'] && (
                                    <div className="popup">
                                        <div className="popup-content">
                                            <span className="close" onClick={() => togglesPopup('principalPopupGymnastics')}>&times;</span>
                                            <img src={`images/gymnastics/4-GYM.jpg`} onClick={() => openModal(`images/gymnastics/4-GYM.jpg`)} />
                                            <img src={`images/gymnastics/6-GYM.jpg`} onClick={() => openModal(`images/gymnastics/6-GYM.jpg`)} />
                                            <img src={`images/gymnastics/7-GYM.jpg`} onClick={() => openModal(`images/gymnastics/7-GYM.jpg`)} />
                                            <img src={`images/gymnastics/8-GYM.jpg`} onClick={() => openModal(`images/gymnastics/8-GYM.jpg`)} />
                                        </div>
                                    </div>
                                )}
                                <Modal isOpen={modalOpen} onClose={closeModal} imageUrl={selectedImage} className="design-popup" />
                            </div>
                        </div>

                        <div className='col-md-3'>
                            <div class="section-myraid-box colur-change">
                                <a onClick={() => togglesPopup('principalPopupCricket')}>
                                    <img src="images/homepage/ckt.png" alt="about" />
                                </a>
                                <h3>Cricket Sub-Centre for HPCA Himachal Pradesh Cricket Association</h3>

                                {/* Modal Popup */}
                                {popupOpen['principalPopupCricket'] && (
                                    <div className="popup">
                                        <div className="popup-content">
                                            <span className="close" onClick={() => togglesPopup('principalPopupCricket')}>&times;</span>
                                            <img src={`images/cricket/cricket-1.jpg`} onClick={() => openModal(`images/cricket/cricket-1.jpg`)} />
                                            <img src={`images/cricket/cricket-2.jpg`} onClick={() => openModal(`images/cricket/cricket-2.jpg`)} />
                                            <img src={`images/cricket/cricket-3.jpg`} onClick={() => openModal(`images/cricket/cricket-3.jpg`)} />
                                            <img src={`images/cricket/cricket-6.png`} onClick={() => openModal(`images/cricket/cricket-6.png`)} />
                                        </div>
                                    </div>
                                )}
                                <Modal isOpen={modalOpen} onClose={closeModal} imageUrl={selectedImage} className="design-popup" />


                            </div>
                        </div>

                        <div className='col-md-3'>
                            <div class="section-myraid-box">
                                <a onClick={() => togglesPopup('principalPopupEDUCO')}>
                                    <img src="images/homepage/student.png" alt="about" />
                                </a>
                                <h3>German language EDUCO PREMIUM PARTNER SCHOOLS</h3>

                                {/* Modal Popup */}
                                {popupOpen['principalPopupEDUCO'] && (
                                    <div className="popup">
                                        <div className="popup-content">
                                            <span className="close" onClick={() => togglesPopup('principalPopupEDUCO')}>&times;</span>
                                            <img src={`images/EDUCO/EDUCO-1.jpg`} onClick={() => openModal(`images/EDUCO/EDUCO-1.jpg`)} />
                                            <img src={`images/EDUCO/EDUCO-3.jpg`} onClick={() => openModal(`images/EDUCO/EDUCO-3.jpg`)} />
                                            <img src={`images/EDUCO/EDUCO-4.JPG`} onClick={() => openModal(`images/EDUCO/EDUCO-4.JPG`)} />
                                            <img src={`images/EDUCO/EDUCO-2.jpg`} onClick={() => openModal(`images/EDUCO/EDUCO-2.jpg`)} />
                                        </div>
                                    </div>
                                )}
                                <Modal isOpen={modalOpen} onClose={closeModal} imageUrl={selectedImage} className="design-popup" />

                            </div>
                        </div>

                        <div className='col-md-3'>
                            <div class="section-myraid-box colur-change">
                                <a onClick={() => togglesPopup('principalPopupCambridge')}>
                                    <img src="images/homepage/cambridge.jpg" alt="cambridge" />
                                </a>
                                <h3>Cambridge Based Learning</h3>

                                {/* Modal Popup */}
                                {popupOpen['principalPopupCambridge'] && (
                                    <div className="popup">
                                        <div className="popup-content">
                                            <span className="close" onClick={() => togglesPopup('principalPopupCambridge')}>&times;</span>
                                            <img src={`images/homepage/img-cam.JPG`} onClick={() => openModal(`images/homepage/img-cam.JPG`)} />
                                            <img src={`images/homepage/cam-1.jpg`} onClick={() => openModal(`images/homepage/cam-1.jpg`)} />
                                            <img src={`images/homepage/cam-2.jpg`} onClick={() => openModal(`images/homepage/cam-2.jpg`)} />
                                            <img src={`images/homepage/cam-3.jpg`} onClick={() => openModal(`images/homepage/cam-3.jpg`)} />
                                        </div>
                                    </div>
                                )}
                                <Modal isOpen={modalOpen} onClose={closeModal} imageUrl={selectedImage} className="design-popup" />

                            </div>
                        </div>


                        <div className='col-md-3'>
                            <div class="section-myraid-box">
                                <a onClick={() => togglesPopup('principalPopupMicrosoft')}>
                                    <img src="images/homepage/micr.png" alt="about" />
                                </a>
                                <h3>Microsoft Showcase School</h3>

                                {/* Modal Popup */}
                                {popupOpen['principalPopupMicrosoft'] && (
                                    <div className="popup">
                                        <div className="popup-content">
                                            <span className="close" onClick={() => togglesPopup('principalPopupMicrosoft')}>&times;</span>
                                            <img src={`images/microsoft/microsoft-1.png`} onClick={() => openModal(`images/microsoft/microsoft-1.png`)} />
                                            <img src={`images/microsoft/microsoft-2.jpg`} onClick={() => openModal(`images/microsoft/microsoft-2.jpg`)} />
                                            <img src={`images/microsoft/microsoft-3.jpeg`} onClick={() => openModal(`images/microsoft/microsoft-3.jpeg`)} />
                                            <img src={`images/microsoft/microsoft-4.jpg`} onClick={() => openModal(`images/microsoft/microsoft-4.jpg`)} />
                                        </div>
                                    </div>
                                )}
                                <Modal isOpen={modalOpen} onClose={closeModal} imageUrl={selectedImage} className="design-popup" />


                            </div>
                        </div>

                        <div className='col-md-3'>
                            <div class="section-myraid-box colur-change">
                                <a onClick={() => togglesPopup('principalPopupBritish')}>
                                    <img src="images/homepage/brit.png" alt="about" />
                                </a>
                                <h3>British Council</h3>

                                {/* Modal Popup */}
                                {popupOpen['principalPopupBritish'] && (
                                    <div className="popup">
                                        <div className="popup-content">
                                            <span className="close" onClick={() => togglesPopup('principalPopupBritish')}>&times;</span>
                                            <img src={`images/british/british-2.jpg`} onClick={() => openModal(`images/british/british-2.jpg`)} />
                                            <img src={`images/british/british-3.jpg`} onClick={() => openModal(`images/british/british-3.jpg`)} />
                                            <img src={`images/british/british-4.jpg`} onClick={() => openModal(`images/british/british-4.jpg`)} />
                                            <img src={`images/british/british-7.JPG`} onClick={() => openModal(`images/british/british-7.JPG`)} />
                                        </div>
                                    </div>
                                )}
                                <Modal isOpen={modalOpen} onClose={closeModal} imageUrl={selectedImage} className="design-popup" />


                            </div>
                        </div>

                        <div className='col-md-3'>
                            <div class="section-myraid-box">
                                <a onClick={() => togglesPopup('principalPopupHorse')}>
                                    <img src="images/horse-riding/horse-riding-5.jpg" alt="riding" />
                                </a>
                                <h3>Horse Riding</h3>

                                {/* Modal Popup */}
                                {popupOpen['principalPopupHorse'] && (
                                    <div className="popup">
                                        <div className="popup-content">
                                            <span className="close" onClick={() => togglesPopup('principalPopupHorse')}>&times;</span>
                                            <img src={`images/horse-riding/horse-riding-1.jpg`} onClick={() => openModal(`images/horse-riding/horse-riding-1.jpg`)} />
                                            <img src={`images/horse-riding/horse-riding-2.jpg`} onClick={() => openModal(`images/horse-riding/horse-riding-2.jpg`)} />
                                            <img src={`images/horse-riding/horse-riding-3.jpg`} onClick={() => openModal(`images/horse-riding/horse-riding-3.jpg`)} />
                                            <img src={`images/horse-riding/horse-riding-4.jpg`} onClick={() => openModal(`images/horse-riding/horse-riding-4.jpg`)} />
                                        </div>
                                    </div>
                                )}
                                <Modal isOpen={modalOpen} onClose={closeModal} imageUrl={selectedImage} className="design-popup" />


                            </div>
                        </div>

                        <div className='col-md-3'>
                            <div class="section-myraid-box colur-change">
                                <a onClick={() => togglesPopup('principalPopupSwimming')}>
                                    <img src="images/swimming/2-swim.jpg" alt="about" />
                                </a>
                                <h3>Swimming</h3>

                                {/* Modal Popup */}
                                {popupOpen['principalPopupSwimming'] && (
                                    <div className="popup">
                                        <div className="popup-content">
                                            <span className="close" onClick={() => togglesPopup('principalPopupSwimming')}>&times;</span>
                                            <img src={`images/swimming/1-swim.JPG`} onClick={() => openModal(`images/swimming/1-swim.JPG`)} />
                                            <img src={`images/swimming/2-swim.jpg`} onClick={() => openModal(`images/swimming/2-swim.jpg`)} />
                                            <img src={`images/swimming/4-swim.JPG`} onClick={() => openModal(`images/swimming/4-swim.JPG`)} />
                                            <img src={`images/swimming/5-swim.JPG`} onClick={() => openModal(`images/swimming/5-swim.JPG`)} />
                                        </div>
                                    </div>
                                )}
                                <Modal isOpen={modalOpen} onClose={closeModal} imageUrl={selectedImage} className="design-popup" />

                            </div>
                        </div>

                        <div className='col-md-3'>
                        </div>

                        <div className='col-md-3'>
                            <div class="section-myraid-box">
                                <a onClick={() => togglesPopup('principalPopupSky')}>
                                    <img src="images/sky/sky-4.jpg" alt="about" />
                                </a>
                                <h3>Sky Observatory</h3>

                                {/* Modal Popup */}
                                {popupOpen['principalPopupSky'] && (
                                    <div className="popup">
                                        <div className="popup-content">
                                            <span className="close" onClick={() => togglesPopup('principalPopupSky')}>&times;</span>
                                            <img src={`images/sky/sky-1.jpg`} onClick={() => openModal(`images/sky/sky-1.jpg`)} />
                                            <img src={`images/sky/sky-2.jpg`} onClick={() => openModal(`images/sky/sky-2.jpg`)} />
                                            <img src={`images/sky/sky-3.jpg`} onClick={() => openModal(`images/sky/sky-3.jpg`)} />
                                            <img src={`images/sky/sky-5.jpg`} onClick={() => openModal(`images/sky/sky-5.jpg`)} />
                                        </div>
                                    </div>
                                )}
                                <Modal isOpen={modalOpen} onClose={closeModal} imageUrl={selectedImage} className="design-popup" />
                            </div>
                        </div>

                        <div className='col-md-3'>
                            <div class="section-myraid-box colur-change">
                                <a onClick={() => togglesPopup('principalPopuplabs')}>
                                    <img src="images/homepage/Anveshika-Lab.png" alt="about" />
                                </a>
                                <h3>Anveshika Lab</h3>

                                {/* Modal Popup */}
                                {popupOpen['principalPopuplabs'] && (
                                    <div className="popup">
                                        <div className="popup-content">
                                            <span className="close" onClick={() => togglesPopup('principalPopuplabs')}>&times;</span>
                                            <img src={`images/lab/lab-1.jpg`} onClick={() => openModal(`images/lab/lab-1.jpg`)} />
                                            <img src={`images/lab/lab-2.jpg`} onClick={() => openModal(`images/lab/lab-2.jpg`)} />
                                            <img src={`images/lab/lab-3.jpg`} onClick={() => openModal(`images/lab/lab-3.jpg`)} />
                                            <img src={`images/lab/lab-4.jpg`} onClick={() => openModal(`images/lab/lab-4.jpg`)} />
                                        </div>
                                    </div>
                                )}
                                <Modal isOpen={modalOpen} onClose={closeModal} imageUrl={selectedImage} className="design-popup" />


                            </div>
                        </div>

                        <div className='col-md-3'>
                        </div>



                    </div>
                </div>
            </section>

            {/* Myriad Colors of Rainbow End */}


{/* Annual Function */}
<div className='annual_function_ft'>
    <div className='container'>
        <GalleryData />
    </div>
</div>


{/* Annual Function */}
<div className='annual_function_ft'>
    <div className='container'>
        <AnnualFunctionTwo />
    </div>
</div>



            {/* Management’s Desk Start */}

            <div className='management-section'>
                <div className='container'>
                    <div class="mangement-content">
                        <h2 className='title-new'>Management’s Desk</h2>
                    </div>
                    <div className='row'>
                        <div className='col-md-6'>
                            <div class="principal-director">
                                <img src="images/staff-images/principle3.jpg" alt="about" />
                            </div>
                            <div class="management-heading">
                                <h4>Director's Message</h4>
                                <p>At Rainbow, we believe in the transformation power of education. It is our collective mission to inspire and empower every individual who walks through our doors. As we navigate the ever-evolving landscape of learning, Our commitment to excellence remains unwavering.</p>
                            </div>
                        </div>
                        <div className='col-md-6'>
                            <div class="principal-director">
                                <img src="images/homepage/Director.png" alt="about" />
                            </div>
                            <div class="management-heading">
                                <h4>Principal's Message</h4>
                                <p>Rainbow strives to become a benchmark of excellence in all vistas of education and is committed to prepare today's youth as confident, smart, solution - oriented young leaders of tomorrow. Working towards revolutionising education as part of New Education Policy, students learn discovery based, inquiry based and analysis based methods. The array of technologies boosts the understanding of concepts.  Our success lies in witnessing our students flourish with flying colours.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Management’s Desk End */}


            {/* Video Section Start */}

            <div className="banner-video">
                <video loop autoPlay muted width="100%" height="900" id="myVideo">
                    <source src="video/parvani-journey.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
            {/* Video Section End */}


            {/* What parents think about schoolS Section Start */}

            <div className='parents-thing'>
                <div className='container'>
                    <div className='heading-parents'>
                        <h2 className='title-new'>Student Speaks</h2>
                    </div>
                    <div className="student-speaks-slider">
                        <Slider {...studentSpeaksSliderSettings}>
                            {STUDENT_SPEAKS_VIDEOS.map((video, index) => (
                                <div key={`${video.name}-${video.variant || video.caption || index}`}>
                                    <div className='design-parents-video'>
                                        <div className="testimonial-video">
                                            {video.variant === 'instagramLink' ? (
                                                <a
                                                    href={video.href}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="student-speaks-instagram-card"
                                                    aria-label={`${video.name} — open on Instagram`}
                                                >
                                                    <div className="student-speaks-embed student-speaks-embed--poster">
                                                        <img
                                                            src={video.posterSrc}
                                                            alt=""
                                                            className="student-speaks-poster-img"
                                                        />
                                                        <span className="student-speaks-ig-icon" aria-hidden="true">
                                                            <img src={video.iconSrc || 'images/homepage/Instagram.svg'} alt="" />
                                                        </span>
                                                    </div>
                                                </a>
                                            ) : (
                                                <div className="student-speaks-embed">
                                                    <iframe
                                                        src={getStudentSpeaksEmbedSrc(video.src)}
                                                        title={`${video.name}${video.caption ? ` — ${video.caption}` : ''}`}
                                                        frameBorder="0"
                                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                                        referrerPolicy="strict-origin-when-cross-origin"
                                                        allowFullScreen
                                                    />
                                                </div>
                                            )}
                                        </div>
                                        <h4>{video.name}</h4>
                                        {video.caption ? <p>{video.caption}</p> : null}
                                    </div>
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
            </div>

            {/* What parents think about schoolS Section End */}


            {/* Parents Think About School Section Start */}

            <section className='parents-section'>
                <div className="container">
                    <div className='heading-parents'>
                        <h2 className='title-new'>What Parents Think About School!</h2>
                    </div>
                    <div className='row'>
                        <div className='col-md-4'>
                            <div className='testimonial-coder'>
                                <img src='images/parents/parents-1.png' alt="view" />
                            </div>
                        </div>
                        <div className='col-md-4'>
                            <div className='testimonial-coder'>
                                <img src='images/parents/parents-2.png' alt="view" />
                            </div>
                        </div>
                        <div className='col-md-4'>
                            <div className='testimonial-coder'>
                                <img src='images/parents/parents-3.png' alt="view" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Parents Think About School Section End */}


            {/* What parents think about schoolS Section Start */}

            <div className='parents-thing'>
                <div className='container'>
                    <div className='heading-parents'>
                        <h2 className='title-new'>Parents speak</h2>
                    </div>
                    <div className='row'>
                        <div className='col-md-6'>
                            <div className='design-parents-video'>
                                <div class="testimonial-video">
                                    <iframe width="100%" height="410" src="https://www.youtube.com/embed/LEEpR0chbOA" title="PARENTS REVIEWS" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-6'>
                            <div className='design-parents-video'>
                                <div class="testimonial-video">
                                    <iframe width="100%" height="410" src="https://www.youtube.com/embed/bLkIMAY2jv8" title="PARENTS REVIEWS.." frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            {/* What parents think about schoolS Section End */}


            {/* Rainbow Alumni Section Start */}

            <div className='homepage-new-slider'>
                <div className='container'>
                    <div className='heading-parents'>
                        <h2 className='title-new'>Rainbow Alumni</h2>
                    </div>
                    <CollaborationSliderHome />
                    <div className="alumni-viewmore">
                        <NavLink className="nav-link" to="/alumni">View More</NavLink>
                    </div>
                </div>
            </div>

            {/* Rainbow Alumni Section End */}

            {/* RIS Collaboration with Section Start */}
            <div className='Collaboration'>
                <div className='heading-parents'>
                    <h2 className='title-new'>In Collaboration with</h2>
                </div>
                <div className='row design-parents-video'>
                    <div className='slider-pret'>
                        <img src="images/brand-logo/RIS-01.svg" alt="RIS" />
                    </div>
                    <div className='slider-pret'>
                        <img src="images/brand-logo/RIS-02.svg" alt="RIS" />
                    </div>
                    <div className='slider-pret'>
                        <img src="images/brand-logo/RIS-03.svg" alt="RIS" />
                    </div>
                    <div className='slider-pret'>
                        <img src="images/brand-logo/RIS-04.svg" alt="RIS" />
                    </div>
                    <div className='slider-pret'>
                        <img src="images/brand-logo/RIS-05.svg" alt="RIS" />
                    </div>
                    <div className='slider-pret'>
                        <img src="images/brand-logo/RIS-06.svg" alt="RIS" />
                    </div>
                    <div className='slider-pret'>
                        <img src="images/brand-logo/RIS-07.svg" alt="RIS" />
                    </div>
                    <div className='slider-pret'>
                        <img src="images/brand-logo/RIS-08.svg" alt="RIS" />
                    </div>
                    <div className='slider-pret'>
                        <img src="images/brand-logo/RIS-09.svg" alt="RIS" />
                    </div>
                </div>
            </div>

          


        </div>
    );
}

export default Homepage;
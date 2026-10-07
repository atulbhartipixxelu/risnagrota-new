// GermanGateway.jsx

import { height } from '@fortawesome/free-solid-svg-icons/fa0';
import React, { useEffect, useState } from 'react';

function Modal({ isOpen, onClose, imageUrl }) {
    if (!isOpen) return null;

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <span className="close" onClick={onClose}>&times;</span>
                <img src={imageUrl} alt="modal" />
            </div>
        </div>
    );
}

function GermanGateway() {
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState('');

    const openModal = (imageSrc) => {
        setSelectedImage(imageSrc);
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
    };

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className={'german-gateway'}>
            {/* Academics Banner */}
            <section className="academics-banner">
                <img src="images/banner-images/academics-banner.jpg" alt="Academics_Banner" />
            </section>

            {/* Overview */}
            <section className="overview">
                <div className="container">
                    <div className="overview-box">
                        <p className="para-18 gd">At Rainbow International School, we're proud to offer German language classes through our German Language Department since 2015. Currently, over 600 students from grades 5 to 12 are learning German as a hobby, guided by two dedicated teachers. Our students are excelling in German proficiency and communication skills.</p>
                        <p className="para-18">We also provide international Goethe Fit A1, A2, B1, and B2 certificate courses, giving our students globally recognized qualifications. What sets us apart is that we're the only school in Himachal Pradesh offering German language education from A1 to B2 levels.</p>
                        <p className="para-18">Beyond language learning, our department opens doors to exciting career opportunities in foreign languages and higher education prospects in Germany. We're not just teaching a language; we're shaping futures and global perspectives.</p>
                    </div>
                </div>
            </section>

{/* Student Scholarship Section */}
        <section className='student_awards_german new-list-des'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-6'>
                            <div className='image_awards_ger'>
                            <img src="images/German/swatik.jpg" alt="Aadwik"/>
                            </div>
                        </div>
                        <div className='col-md-6'>
                            <div className='Scholarship_content'>
                                <p><strong>Celebrating innovation and excellence! </strong></p>
                                <p>Prisha Guleria, Viren Chaudhary, and Aadwik Sood (Class IX Aster) have achieved national-level success and qualified for the International Round of Goethe KIKUK 2.0 – Artificial Intelligence: Creative and Critical.</p>
                                <p>Under the mentorship of Mr. Ravindra Singh, they created remarkable AI-generated artworks for the project <b>“ My Future with AI – Neurolingua.</b></p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

{/* Student Scholarship Section */}
         <section className='student_awards_german new-list-des design-grman-list'>
                <div className='container'>
                    <div className='row'>
                         <div className='col-md-6'>
                            <div className='image_awards_ger'>
                            <img src="images/German/german-2026.jpeg" alt="german"/>
                            </div>
                        </div>
                        <div className='col-md-6'>
                            <div className='Scholarship_content'>
                                <p><strong>Aadwik Sood Secures Second Position in National Round of International German Olympiad (IDO 2026)</strong></p>
                               <p>Heartiest congratulations to Aadwik Sood of Class IX for securing Second Position (B1 Category) in the National Round of the International German Olympiad, organized by the Goethe-Institut.</p>
                               <p>The competition was conducted in multiple rigorous stages—beginning with the online round on 17th January, followed by the second round at Goethe-Institut New Delhi on 26th January, and concluding with the final round held from 4th to 5th February 2026.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section> 

        {/* Student Scholarship Section */}
        <section className='student_awards_german'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-4'>
                            <div className='image_awards_ger'>
                            <img src="images/German/amay_sharma.jpg" alt="amay_sharma"/>
                            </div>
                        </div>
                        <div className='col-md-8'>
                            <div className='Scholarship_content'>
                                <p>Six Students Selected for Scholarship to Germany from India – Rainbowite Amay Sharma Shines Among Them! 🎉</p>
                                <p>Heartfelt congratulations to Amay Sharma for securing a spot in the prestigious ( Germany Plus Scholarship 2025) ✨ Out of thousands of students across India, only six were selected—and Amay proudly represents Himachal Pradesh on this incredible journey from 25th June to 14th July 2025.</p>
                                <p>This achievement reflects our commitment to excellence in German language education and paves the way for global learning and cultural exchange in Germany.</p>
                                <p>Wishing Amay all the best for this once-in-a-lifetime experience! 🌍💫🏆</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            {/* Image Gallery */}
            <div className="atal-tink-images">
                <div className="container">
                    <h2 className='title-new'>German Gallery</h2>
                    <div className="atal-gallery">
                        <img src="images/German/2025_german_01.jpeg" alt="german11" onClick={() => openModal(`images/German/2025_german_01.jpeg`)} />
                        <img src="images/German/2025_german_02.jpeg" alt="german11" onClick={() => openModal(`images/German/2025_german_02.jpeg`)} />
                        <img src="images/German/2025_german_03.jpeg" alt="german11" onClick={() => openModal(`images/German/2025_german_03.jpeg`)} />
                        <img src="images/German/2025_german_04.jpeg" alt="german11" onClick={() => openModal(`images/German/2025_german_04.jpeg`)} />
                        <img src="images/German/2025_german_05.jpeg" alt="german11" onClick={() => openModal(`images/German/2025_german_05.jpeg`)} />
                        <img src="images/German/german-1.jpg" alt="german1" onClick={() => openModal(`images/German/german-1.jpg`)} />
                        <img src="images/German/german-2.jpg" alt="german2" onClick={() => openModal(`images/German/german-2.jpg`)} />
                        <img src="images/German/german-3.jpg" alt="german3" onClick={() => openModal(`images/German/german-3.jpg`)} />
                        <img src="images/German/german-4.jpg" alt="german4" onClick={() => openModal(`images/German/german-4.jpg`)} />
                        <img src="images/German/german-5.jpg" alt="german5" onClick={() => openModal(`images/German/german-5.jpg`)} />
                        <img src="images/German/german-6.jpg" alt="german6" onClick={() => openModal(`images/German/german-6.jpg`)} />
                        <img src="images/German/german-7.jpg" alt="german7" onClick={() => openModal(`images/German/german-7.jpg`)} />
                        <img src="images/German/german-8.jpg" alt="german8" onClick={() => openModal(`images/German/german-8.jpg`)} />
                        <img src="images/German/german-9.jpg" alt="german9" onClick={() => openModal(`images/German/german-9.jpg`)} />
                        <img src="images/German/german-10.jpg" alt="german10" onClick={() => openModal(`images/German/german-10.jpg`)} />
                        <img src="images/German/german-11.jpg" alt="german11" onClick={() => openModal(`images/German/german-11.jpg`)} />
                    </div>
                </div>
            </div>

            {/* Modal */}
            <Modal isOpen={modalOpen} onClose={closeModal} imageUrl={selectedImage} />



           {/* Student Intro */}

           <section className='student_intro_german'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-6'>
                            <div className='image_preset'>
                                <img src="images/German/Detail_german_image.jfif" alt="Academics_Banner" />
                            </div>
                        </div>
                        <div className='col-md-6'>
                            <div className='Student_reasons'>
                                <h2>Rainbow Stars to Shine in Germany: Three Students Bag Prestigious Scholarships</h2>
                                <p>Three students from Rainbow International School have been selected for prestigious scholarships to study in Germany. Manvika Chaudhary and Rudransh Sharma will attend a fully-sponsored two-week German language course at the Goethe-Institut, Göttingen, in June 2025, following their outstanding performance in the B1 exam held in New Delhi.</p>
                                <p>Amay Sharma has also earned the “Germany Plus” scholarship, which includes a three-week cultural and academic tour of cities like Berlin and Bonn, where he will represent India in various international activities. </p>
                                <span>Rainbow International School proudly stands as the only institution in Himachal Pradesh whose students consistently excel in international German language examinations from A1 to B2 levels, earning prestigious global scholarships year after year. To celebrate this outstanding achievement, a special felicitation ceremony was held at the school. Principal Dr  Chhavi Kashyap extended heartfelt congratulations to the students and their parents, applauding their hard work and dedication. He also commended Mr  Ravindra Singh, Head of the German Department, for his unwavering guidance and exceptional mentorship that played a key role in this success.</span>
                                <span>Adding to the moment of pride,  Ms  Mohita Miglani  Project Manager at the Goethe-Institut, New Delhi  conveyed her warm wishes and congratulated the school and its students on this remarkable accomplishment. </span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>



        </div>


    );
}

export default GermanGateway;
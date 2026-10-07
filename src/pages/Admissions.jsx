import React, { useEffect } from 'react';
import { NavLink } from "react-router-dom";
import AdmissionForm from '../components/AdmissionForm';

function Admissions() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (

        <div className={'admissionpage'}>

            {/* ----- Admission Banner ----- */}

            <section className="academics-banner">
                <img src="images/banner-images/admission.jpg" alt="Admission_Banner" />
            </section>

            {/* ----- Admission Banner ----- */}

            {/* ----- Overview ----- */}

            <section className="overview">
                <div className="container">
                    <div className="overview-box">
                        <h2 className="hdng-h2"> Admission Form</h2>
                    </div>
                </div>
            </section>



            <section className="admission-gd">
                <div className="container">
                    <div className='main_img_form'>

                        <div className='view_image_vactor'>
                            <img src="images/admission_image.jpg" alt="view" />
                        </div>

                        <div className="admission-app-hdng">
                            <div className="form_admission_design">
                                <AdmissionForm />
                            </div>
                        </div>
                        
                    </div>
                </div>
            </section>

            {/* ----- Admission Application ----- */}


        </div>

    )
}


export default Admissions
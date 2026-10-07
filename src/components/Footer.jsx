import React from "react";
import { NavLink } from "react-router-dom";
import { faPhoneVolume, faEnvelopeOpenText, faMapLocationDot } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import AdmissionPopup from '../components/AdmissionPopup';

function Footer() {
    return (

        <div className={'site-footer newdesign-homepage'}>

            <div className="latest-footer">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <p className="tc">Terms & Conditions | Privacy Policy | Refund & Cancellation | Terms & Conditions for Online Registration</p>
                        </div>
                        <div className="col-md-6">
                            <p className="copyright">© 2023 Rainbow International School Nagrota – All Rights Reserved</p>
                        </div>
                    </div>
                </div>
            </div>

            <section className='popup_admission'>
                <div className='container'>
                    <AdmissionPopup/>
                </div>
            </section>

        </div>

    )
}
export default Footer
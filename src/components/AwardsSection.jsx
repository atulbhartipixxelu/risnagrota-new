import AwardImage from "../assets/images/awards_himancahl.png";
import AwardVideo from "../assets/images/award_video.mp4";
import AwardVideo2 from "../assets/video/admission.mp4";
const AwardsSchool = () => {
  return (
    <section className="awards_school">
      <div className="container">
<div className="slider-video-content" >
    <div className="slider-csi">
        <div className="video_imag_ctn">
            <video className="video" src={AwardVideo2} autoPlay muted loop playsInline ></video>
        </div>
        <div className="popup_design_op">
          <p><strong>🌈🏫 Join the Rainbow family!</strong><br></br>
            Admissions Open for a journey of knowledge, values, and success.
          </p>
        </div>
    </div>
    <div className="slider-csi">
        <div className="video_imag_ctn">
            <video className="video" src={AwardVideo} autoPlay muted loop playsInline ></video>
        </div>
        <div className="popup_design_op">
          {/* <img src={AwardImage} alt="awards_himancahl" /> */}
          <p><strong>Congratulations!!!</strong><br></br>
            Rainbow International School receives the "True Pioneer in Education " Award by Tribune Trust Himachal Achiever Award in Recognition for setting new benchmarks in Education.
            Principal, Dr. Chhavi Kashyap selected for the prestigious " Pioneer in Education awargd " for exceptional leadership and innovative contributions.
          </p>
        </div>
    </div>
</div>
        

      </div>
    </section>
  );
};

export default AwardsSchool;

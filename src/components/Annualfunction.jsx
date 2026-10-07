
import AnnualVideo1 from "../assets/images/Rainbow-Annual-Day-1.mp4";
import AnnualVideo2 from "../assets/images/Rainbow-Annual-Day-2.mp4";
const AnnualFunction = () => {
  return (
    <section className="annual_function">
      <div className="container">

        <h2 className="section_title">Annual Function Highlights</h2>

        <div className="video_grid">

          {/* ✅ Video Card 1 */}
          <div className="video_card">
            <video
              className="annual_video"
              src={AnnualVideo1}
              controls
              playsInline
              loop
              autoPlay
              muted
            ></video>

            <div className="caption">
              <h4>Day 1</h4>
              <p>
                Our Canvas of Creativity—painting the stage with talent, passion and imagination.
              </p>
            </div>
          </div>

          {/* ✅ Video Card 2 */}
          <div className="video_card">
            <video
              className="annual_video"
              src={AnnualVideo2}
              controls
              playsInline
              loop
              autoPlay
              muted
            ></video>

            <div className="caption">
              <h4>Day 2</h4>
              <p>
                Witness our young achievers rise high on the Wings of Excellence.” Glimpses of Annual function
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AnnualFunction;

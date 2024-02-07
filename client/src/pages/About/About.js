import React from "react";
import "./About.css";
import Jump from "react-reveal/Jump";
const About = () => {
  return (
    <>
      <Jump>
        <div className="about" id="about">
          <div className="row">
            <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-img">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzHQv_th9wq3ivQ1CVk7UZRxhbPq64oQrg5Q&usqp=CAU"
                alt="profile_pic"
              />
            </div>
            <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-content">
              <h1>About me</h1>
              <p>
                Hi! I am Hariom Singh, a passionate developer and designer
                belongs to UttarPradesh. I am curious and passionate individual,
                who is eager to learn and dive deep into the subject matter. To
                work hard with total dedications, devotion and discipline so
                that the organization grows resulting in my growth. If needed,
                to mould my self according to the needs of the organization to
                face the challenges offered by the competitors and overcome
                those challenges and carve a niche for myself and the
                organization in this competitive world.
              </p>
            </div>
          </div>
        </div>
      </Jump>
    </>
  );
};

export default About;

import "./Hero.css";
import profile from "../../img/profile.jpeg";
import Note from "../../img/note.svg";
import details from "./details";
import {TbNotes} from 'react-icons/tb'

const Hero = () => {
  const pdf = [
    {
      link: "Check Up Results.pdf",
      img: Note,
    },
    {
      link: "Check Up Results.pdf",
      img: Note,
    },
    {
      link: "Medical Prescription.pdf",
      img: Note,
    },
    {
      link: "Dental X-Ray Result.pdf",
      img: Note,
    },
  ];
  
  return (
    <div className="container">
      <div className="hero-l">
        <div className="hero-l_top">
          <img src={profile} alt="profile pic" className="profile_pic" />
          <div className="details">
            <h1>Diane Cooper</h1>
            <p className="email-text">diane.cooper@example.com</p>
            <div className="divide">
              <div className="past">
                <span className="d-num">15</span>
                <span className="d-text">past</span>
              </div>
              <hr className="divide_hr" />
              <div className="upcomming">
                <span className="d-num">02</span>
                <span className="d-text">upcomming</span>
              </div>
            </div>
          </div>
          <button className="btn hero_btn">Send Message</button>
        </div>
        <div className="hero-l_bottom">
          <h5>Files / Documents</h5>
          <div className="pdf">
          {pdf.map(({ img, link }) => {
            return (
              <div className="all_pdf">
                <img src={img} alt="pdf" className="pdf_img" />
                <span className="pdf_text">{link}</span>
              </div>
            );
          })}
          </div>
        </div>
      </div>
      <div className="hero-r">
        <div className="hero-r_top">
          {
            details.map(({TOP,BOTTOM})=>{
              return(
                <div className="detail">
                  <span className="d-top">{TOP}</span>
                  <span className="d-bottom">{BOTTOM}</span>
                </div>
              )
            })
          }
        </div>
        <div className="hero-r_bottom">
          <div className="hero-r_bottom-1st">
            <div className="active appt">
              Upcomming Appointments
            </div>
            <div className="past-appt appt">
              past Appointments
            </div>
            <div className="medical-appt appt">
              medical records
            </div>
          </div>
          <div className="hero-r_bottom-2nd">
            <div className="top_2nd">
              <div className="top-head_2nd top_head">Root canal treatment</div>
              <div className="top-head_2nd top_head active" >show previous treatments</div>
            </div>
            <hr className="hero-hr" />
            <div className="bottom_2nd">
                <div className="treatment_det-1 t-dets">
                 <div className="treatment-t t-det ">
                 <h1 className="date">26 Nov ‘19</h1>
                  <span className="time det-text">09.00 - 10.00</span>
                 </div>
                  <hr className="divide_hr" />
                  <div className="treatment-c t-det">
                  <span className="treatment det-text">Treatment</span>
                  <span className="treatment-d d-text">Open access</span>
                  </div>
                  <hr className="divide_hr" />
                  <div className="doctor t-det">
                  <span className="dr det-text">Dentist</span>
                  <span className="dr_name d-text">Drg. Adam H.</span>
                  </div>
                  <div className="doctor t-det">
                  <span className="dr det-text">Nurse</span>
                  <span className="dr_name d-text">Jessicamila</span>
                  </div>
                  <div className="note">
                    <span><TbNotes className="n-icon"/></span>
                    <span>Note</span>
                  </div>

                </div>
                <div className="treatment_det-2 t-dets">
                <div className="treatment-t t-det">
                 <h1 className="date">12 Nov ‘19</h1>
                  <span className="time det-text">09.00 - 10.00</span>
                 </div>
                  <hr className="divide_hr" />
                  <div className="treatment-c t-det">
                  <span className="treatment det-text">Treatment</span>
                  <span className="treatment-d d-text">Root Canal</span>
                  </div>
                  <hr className="divide_hr" />
                  <div className="doctor t-det">
                  <span className="dr det-text">Dentist</span>
                  <span className="dr_name d-text">Drg. Adam H.</span>
                  </div>
                  <div className="doctor t-det">
                  <span className="dr det-text">Nurse</span>
                  <span className="dr_name d-text">Jessicamila</span>
                  </div>
                  <div className="note">
                    <span><TbNotes className="n-icon"/></span>
                    <span>Note</span>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

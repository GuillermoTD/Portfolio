import Footer from "../components/Footer";
import Header from "../components/Header";
import aboutbg from "../img/projectbg4.jpg";
import {skills} from "../utilities"

const About = () => {
  return (
    <div className="About">
      <Header/>
      <div className="About_Hero">
        <img src={aboutbg} alt="" />
        <div className="About_Hero_Box">
          <h2>About</h2>
          <h3>Im a Front-End Developer</h3>
        </div>
      </div>
      <div className="About_Container">
        <div className="About_Container_SelfDescription">
          <h2>Who am i?</h2>
          <p>
            Hello, my name is Guillermo Tapia and I am a front-end developer, I
            love to read, learn and practice everything related to web
            development.
          </p>
        </div>

        <div className="About_Container_SkillContainer">
          <h2>Skills</h2>
          <p>Technologies which I have worked with</p>
          <div className="About_Container_SkillContainer_Box">
          {
            skills.map((skill,index)=>{
              return <img src={skill} alt={skill} key={index}/>
            })
          }
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};
export default About;

// import { Link } from "react-router-dom";
import { useRef } from "react";
import Header from "../components/Header";
import herobg from "../img/bg1.jpg";
import { TypeAnimation } from "react-type-animation";
import { Link } from "react-router-dom";
const Home = () => {
  const typedAnimation = useRef(null);

  return (
    <div className="Home">
      <Header />
      <div className="Home_Hero">
        <img src={herobg} alt="" className="Home_Hero_Image" />
        <div className="Home_Hero_Box">
          <div className="Home_Hero_Box_Greeting">
            Hi, My name is{" "}
            <p ref={typedAnimation}>
              <TypeAnimation
                sequence={[
                  // Same substring at the start will only be typed out once, initially
                  "Guillermo Tapia",
                  1000, // wait 1s before replacing "Mice" with "Hamsters"
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </p>
          </div>
          <h1 className="Home_Hero_Box_Title">Front-end Developer</h1>
          <div className="Home_Hero_Box_Buttons">
            <Link className=" Home_Hero_Box_Buttons Home_Hero_Button_Box_Active" to="/projects">Projects</Link>

            <Link className="Home_Hero_Box_Buttons" to="/contacts">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;

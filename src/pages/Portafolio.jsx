import Footer from "../components/Footer";
import Header from "../components/Header";
import projectbg from "../img/projectbg2.jpg";
import { projects } from "../utilities";
const Projects = () => {
  return (
    <div className="Projects">
      <Header/>
      <div className="Projects_Hero">
        <img src={projectbg} alt="" className="Projects_Hero_Image" />
        <div className="Projects_Hero_Box">
          <h2>Projects</h2>
          <p>Some of my most recent works</p>
        </div>
      </div>

      <div className="Projects_Container">
        {projects.map((project,index) => (
          <div className="Projects_Container_Item" key={index}>
            <a href={project.url}>
              <img
                src={project.image}
                alt={project.name}
                className="Projects_Container_Item_Image"
              />
            </a>

            <div className="Projects_Container_Item_Title">
              <h3>{project.name}</h3>
              <div className="Projects_Container_Item_Title_Icons">
                <a href={project.url}>
                  <i className="fa-solid fa-eye"></i>
                </a>
              </div>
            </div>

            <p className="Projects_Container_Item_Description">
              {project.description}
            </p>
          </div>
        ))}
      </div>
      <Footer/>
    </div>
  );
};
export default Projects;

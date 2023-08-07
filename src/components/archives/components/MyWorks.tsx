import ReactIcon from "../assets/images/icons/react-icon.png";
import VueIcon from "../assets/images/icons/vue-icon.png";
import AngularIcon from "../assets/images/icons/angular-icon.png";
// import { PROJECTS } from "../../../utils/globals/projects";
// import Project from "./Project";

const MyWorks: React.FC = () => {
  return (
    <section className="main main--light-brown">
      <div className="main-content">
        <div>
          <h1 className="heading">My Works</h1>
          <p className="text-center lg:text-left">
            Here are a few projects I've worked on.
          </p>
        </div>
        <div className="flex justify-center lg:justify-start gap-x-8">
          <img className="icon" src={ReactIcon} alt="React JS icon" />
          <img className="icon" src={VueIcon} alt="Vue JS icon" />
          <img className="icon" src={AngularIcon} alt="Angular JS icon" />
        </div>
      </div>

      {/* <div className="py-12">
        {PROJECTS.map(({ frontend, projects }) => (
          <Project frontend={frontend} projects={projects} />
        ))}
      </div> */}
    </section>
  );
};

export default MyWorks;

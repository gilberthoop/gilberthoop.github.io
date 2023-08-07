import ReactProjects from "./projects/ReactProjects";
import VueProjects from "./projects/VueProjects";
import AngularProjects from "./projects/AngularProjects";

const MyProjects: React.FC = () => {
  return (
    <section className="p-6 md:pb-20 lg:px-24 xl:px-44">
      <h1 className="heading heading-main">Projects</h1>

      <div>
        <ReactProjects />
        <VueProjects />
        <AngularProjects />
      </div>
    </section>
  );
};

export default MyProjects;

import { ANGULAR_PROJECTS } from "../../utils/globals/projects";
import Card from "../cards/Card";

const AngularProjects: React.FC = () => {
  return (
    <section className="grid__section py-20">
      {ANGULAR_PROJECTS.map(({ link, title, description, image, color }) => (
        <div className="w-full">
          <Card
            link={link}
            title={title}
            description={description}
            backgroundImage={image}
            backgroundColor={color}
          />
        </div>
      ))}

      <header className="w-full">
        <h1 className="subheading subheading--red uppercase text-center sm:text-left">
          Angular JS
        </h1>
        <p className="py-2 md:py-5">
          I've helped non-profit organizations develop their website for their
          cause by implementing web design and development principles to deliver
          mobile-first responsive web pages and optimizing its communication
          platforms, speeding up the response time by as much as 90%.
        </p>
      </header>
    </section>
  );
};

export default AngularProjects;

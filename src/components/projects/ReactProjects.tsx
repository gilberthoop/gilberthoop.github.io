import { REACT_PROJECTS } from "../../utils/globals/projects";
import Card from "../cards/Card";

const ReactProjects: React.FC = () => {
  return (
    <section className="grid__section py-8 md:py-14">
      {REACT_PROJECTS.map(({ link, title, description, image, color }) => (
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

      <div>
        <h1 className="subheading subheading--cyan w-full md:w-1/2 uppercase text-center sm:text-left">
          React JS
        </h1>
        <p className="w-full md:w-1/2 py-2 block sm:hidden">
          By leveraging my expertise in Typescript, React, and Redux, I ensure
          seamless functionality and added new features to enhance the overall
          user experience on various systems such as product quotation,
          purchasing, registration and client portals.
        </p>
      </div>

      <div className="hidden sm:block">
        <p className="py-2">
          By leveraging my expertise in Typescript, React, and Redux, I ensure
          seamless functionality and added new features to enhance the overall
          user experience on various systems such as product quotation,
          purchasing, registration and client portals.
        </p>
      </div>
    </section>
  );
};

export default ReactProjects;

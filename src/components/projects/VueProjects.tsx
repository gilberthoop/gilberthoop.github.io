import { VUE_PROJECTS } from "../../utils/globals/projects";
import Card from "../cards/Card";

const VueProjects: React.FC = () => {
  return (
    <section className="grid__section py-4">
      <header className="w-full">
        <h1 className="subheading subheading--green uppercase text-center sm:text-left">
          Vue JS
        </h1>
        <p className="py-2 md:py-5">
          With Vue, Vuex, Pinia and Nuxt, I play a pivotal role in developing
          and enhancing customer-facing vehicle selling, financing and
          purchasing applications. led the frontend engineering for the We Buy
          Your Car feature, which introduced a vehicle appraisal platform and
          became the pioneer of this service in Canada.
        </p>

        <p className="py-3 block sm:hidden xl:block">
          I also do volunteer work for the ministry of Singles for Christ
          Canada. The value I bring consists of registration and payment systems
          for their annual nation conference, which also incldues a landing page
          and web portal.
        </p>
      </header>

      {VUE_PROJECTS.map(({ link, title, description, image, color }) => (
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
      <div className="col-span-2 hidden sm:block xl:hidden">
        <p>
          I also do volunteer work for the ministry of Singles for Christ
          Canada. The value I bring consists of registration and payment systems
          for their annual nation conference, which also incldues a landing page
          and web portal.
        </p>
      </div>
    </section>
  );
};

export default VueProjects;

import MeDesktop from "../assets/images/me/uptown1.jpeg";
import MeMobile from "../assets/images/me/uptown2.jpeg";
import { ABOUT_ME } from "../utils/globals/bio";

const Bio: React.FC = () => {
  const aboutMe = ABOUT_ME;

  return (
    <section className="px-10 py-16 md:px-10 lg:p-24 xl:px-44 flex flex-col md:flex-row gap-x-12 items-center">
      <div className="w-full md:w-4/12">
        <picture>
          <source media="(min-width: 768px)" srcSet={MeDesktop}></source>
          <img src={MeMobile} alt="Me" />
        </picture>
      </div>
      <div className="w-full md:w-8/12 py-6 md:py-0">
        <h1 className="subheading">Hi, I'm Will. Nice to meet you!</h1>
        <div className="py-2 lg:py-6">
          {aboutMe.map((detail) => (
            <p className="py-3">{detail}</p>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Bio;

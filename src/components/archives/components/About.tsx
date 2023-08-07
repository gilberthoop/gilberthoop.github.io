import { ABOUT_ME } from "../../../utils/globals/bio";
import devguy from "../assets/images/devguy.gif";

const About: React.FC = () => {
  const aboutMe = ABOUT_ME;

  return (
    <section className="main main-content">
      <section className="main__section main__section--left">
        <h1 className="heading pb-4 lg:pb-8">About Me</h1>
        <div>
          {aboutMe.map((info) => (
            <p className="py-4">{info}</p>
          ))}
        </div>
      </section>
      <section className="main__section main__section--right items-center pt-0 lg:pt-20">
        <div className="media media--slanted">
          <img src={devguy} alt="Dev guy" />
        </div>
      </section>
    </section>
  );
};

export default About;

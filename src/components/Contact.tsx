import MeImg from "../assets/images/me/uptown3.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faInstagram,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

const Contact: React.FC = () => {
  return (
    <section className="px-10 pt-12 md:px-10 lg:p-24 xl:px-40">
      <h1 className="heading heading-main heading-main--centered">
        Get to know me more.
      </h1>
      <section className="flex justify-between flex-col md:flex-row gap-y-10 md:gap-x-20 py-10 md:p-14">
        <section className="w-full md:w-1/2">
          <picture>
            <img src={MeImg} alt="Me" />
          </picture>
        </section>
        <section className="w-full md:w-1/2 flex flex-col justify-center items-center gap-y-12">
          <div className="text-center lg:text-left">
            <h1 className="uppercase">Email</h1>
            <p>williamgilbertgo@gmail.com</p>
          </div>
          <div className="heading flex flex-row lg:justify-start gap-x-14 text-4xl sm:text-5xl">
            <FontAwesomeIcon
              className="cursor-pointer"
              icon={faLinkedin}
              onClick={() =>
                window.open(
                  "https://www.linkedin.com/in/william-gilbert-go-5b25b819a/",
                  "_blank"
                )
              }
            />
            <FontAwesomeIcon
              className="cursor-pointer"
              icon={faGithub}
              onClick={() =>
                window.open("https://github.com/gilberthoop", "_blank")
              }
            />
            <FontAwesomeIcon
              className="cursor-pointer"
              icon={faInstagram}
              onClick={() =>
                window.open("https://www.instagram.com/gilberthoop/", "_blank")
              }
            />
          </div>
        </section>
      </section>
    </section>
  );
};

export default Contact;

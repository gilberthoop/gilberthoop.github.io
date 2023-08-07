import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import CoverImgDesktop from "../assets/images/devcover.jpeg";
import CoverImgMobile from "../assets/images/devcover-mobile.jpeg";

const Introduction: React.FC = () => {
  function handleButtonClick() {
    window.open("https://github.com/gilberthoop", "_blank");
  }

  return (
    <section className="intro-container bg-shaded-white">
      <section className="intro-container__left-section p-12 lg:px-18">
        <header className="heading text-center">
          <h1 className="heading-main heading-main--large">William Go</h1>
          <button className="button-handle" onClick={handleButtonClick}>
            William Go / Frontend Engineer
            <span className="ml-2">
              <FontAwesomeIcon icon={faGithub} />
            </span>
          </button>
        </header>
      </section>
      <section className="intro-container__right-section">
        <picture>
          <source media="(min-width: 768px)" srcSet={CoverImgDesktop}></source>
          <img src={CoverImgMobile} alt="Workspace" />
        </picture>
      </section>
    </section>
  );
};

export default Introduction;

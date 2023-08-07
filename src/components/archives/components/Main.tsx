import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import multimedia from "../assets/images/multimedia.gif";

const Main: React.FC = () => {
  return (
    <section className="main main-content justify-start h-screen">
      <section className="main__section main__section--left">
        <h1 className="heading">Welcome to My Web Portfolio</h1>
        <button className="button-handle">
          William Go / Frontend Engineer
          <span className="ml-2">
            <FontAwesomeIcon icon={faGithub} />
          </span>
        </button>
      </section>
      <section className="main__section main__section--right">
        <img className="media media--rounded" src={multimedia} alt="Dev guy" />
      </section>
    </section>
  );
};

export default Main;

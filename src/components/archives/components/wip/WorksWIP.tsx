import { useState } from "react";
import VueIconButton from "../buttons/VueIconButton";

const WorksWIP: React.FC = () => {
  const [vueIconClicked, setVueIconClicked] = useState(true);
  const [reactIconClicked, setReactIconClicked] = useState(false);
  const [angularIconClicked, setAngularIconClicked] = useState(false);

  const handleVueIconClick = () => {
    setVueIconClicked(true);
    setReactIconClicked(false);
    setAngularIconClicked(false);
    console.log("Vue icon clicked!");
  };

  return (
    <section className="main main-content main--light-brown">
      <section className="main__section main__section--left">
        <h1 className="heading pb-4 lg:pb-8">My Works</h1>
        <p>
          Click on the icons to browse my works with the Frontend
          framework/library.
        </p>
      </section>
      <section className="main__section main__section--right pt-0 lg:pt-20">
        <div className="icon__container">
          <VueIconButton
            isClicked={vueIconClicked}
            onVueIconClick={handleVueIconClick}
          />
          <VueIconButton
            isClicked={reactIconClicked}
            onVueIconClick={handleVueIconClick}
          />
          <VueIconButton
            isClicked={angularIconClicked}
            onVueIconClick={handleVueIconClick}
          />
        </div>
      </section>
    </section>
  );
};

export default WorksWIP;

import { useState } from "react";

interface CardProps {
  link: string;
  title: string;
  description: string;
  backgroundImage: string;
  backgroundColor: string;
}

const CardFlex: React.FC<CardProps> = ({
  link,
  title,
  description,
  backgroundImage,
  backgroundColor,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const onWebsiteClick = () => {
    window.open(link, "_blank");
  };

  const cardBackgroundStyling = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundColor: backgroundColor,
  };

  const cardOverlayStyling = {
    opacity: isHovered ? 1 : 0,
    backgroundColor: backgroundColor,
  };

  const cardFadeInStyling = {
    opacity: isHovered ? 1 : 0,
  };

  return (
    <div
      className="card card--with-backgroundimg"
      style={cardBackgroundStyling}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="card__overlay" style={cardOverlayStyling}></div>
      <div className="card__content">
        <h2 className="card__title">{title}</h2>
        <p
          className="card__description card__description--desktop-only"
          style={cardFadeInStyling}
        >
          {description}
        </p>
        <button
          className="card__button card__description card__description--no-transition"
          style={cardFadeInStyling}
          onClick={onWebsiteClick}
        >
          Visit website
        </button>
      </div>
    </div>
  );
};

export default CardFlex;

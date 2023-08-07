import VueIcon from "../../assets/images/icons/vue-icon.png";

interface VueIconButtonProps {
  isClicked: boolean;
  onVueIconClick: () => void;
}

const VueIconButton: React.FC<VueIconButtonProps> = ({
  isClicked,
  onVueIconClick,
}) => {
  const clickedStyle = {
    alignSelf: "flex-end",
  };

  const unclickedStyle = {
    alignSelf: "flex-start",
  };

  const currentStyle = isClicked ? clickedStyle : unclickedStyle;

  return (
    <div
      style={currentStyle}
      className="icon icon-vue"
      onClick={onVueIconClick}
    >
      <img src={VueIcon} />
    </div>
  );
};

export default VueIconButton;

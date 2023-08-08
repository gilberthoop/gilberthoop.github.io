import SFCTNC2023 from "../../assets/images/projects/react/poster.jpeg";
import OBE from "../../assets/images/projects/react/obe.png";
import WBYC from "../../assets/images/projects/vue/wbyc.png";
import ACD from "../../assets/images/projects/vue/acd.png";
import SFCTNC2022 from "../../assets/images/projects/vue/sfctnc2022.png";
import IDL from "../../assets/images/projects/angular/idl.png";

export const REACT_PROJECTS = [
  {
    link: "https://sfctncbreakthrough.vercel.app/",
    title: "SFC True North Conference 2023: Breakthrough",
    description: "2023 Conference website for CFC-Singles for Christ Canada",
    image: SFCTNC2023,
    color: "#234D71",
  },
  {
    link: "https://obe.com/",
    title: "Oldcastle BuildingEnvelope",
    description:
      "The leading supplier of value-added, glazing-focused products and services",
    image: OBE,
    color: "#3b5b15",
  },
];

export const VUE_PROJECTS = [
  {
    link: "https://www.canadadrives.ca/sell-my-car",
    title: "We Buy Your Car",
    description:
      "Skip the hassle of selling your car privately. Get your instant online offer and sell your car to Canada Drives today!",
    image: WBYC,
    color: "#004b7d",
  },
  {
    link: "https://www.autocreditdeals.ca/",
    title: "AutoCredit Deals",
    description: "An Easier Way to Get a Car",
    image: ACD,
    color: "#0d7d68",
  },
  {
    link: "https://github.com/gilberthoop/truenorthconference-sfc",
    title: "SFC True North Conference 2022",
    description: "2022 Conference website for CFC-Singles for Christ Canada",
    image: SFCTNC2022,
    color: "#181d84",
  },
];

export const ANGULAR_PROJECTS = [
  {
    link: "https://idl.org.pe/",
    title: "Instituto de Defensa Legal",
    description: "Peru’s Legal Institute of Defense website",
    image: IDL,
    color: "#004b7d",
  },
];

export const PROJECTS = [
  {
    frontend: "React JS",
    projects: [
      {
        title: "SFC True North Conference 2023: Breakthrough",
        description:
          "2023 Conference website for CFC-Singles for Christ Canada",
        image: "/src/assets/images/projects/react/poster.jpeg",
        color: "#234D71",
      },
      {
        title: "Oldcastle BuildingEnvelope",
        description:
          "The leading supplier of value-added, glazing-focused products and services",
        image: "/src/assets/images/projects/react/obe.png",
        color: "#3b5b15",
      },
    ],
  },
  {
    frontend: "Vue JS",
    projects: [
      {
        title: "We Buy Your Car",
        description:
          "Skip the hassle of selling your car privately. Get your instant online offer and sell your car to Canada Drives today!",
        image: "/src/assets/images/projects/vue/wbyc.png",
        color: "#004b7d",
      },
      {
        title: "AutoCredit Deals",
        description: "An Easier Way to Get a Car",
        image: "/src/assets/images/projects/vue/acd.png",
        color: "#0d7d68",
      },
      {
        title: "SFC True North Conference 2022",
        description:
          "2022 Conference website for CFC-Singles for Christ Canada",
        image: "/src/assets/images/projects/vue/sfctnc2022.png",
        color: "#181d84",
      },
    ],
  },
  {
    frontend: "Angular JS",
    projects: [
      {
        title: "Instituto de Defensa Legal",
        description: "Peru’s Legal Institute of Defense website",
        image: "/src/assets/images/projects/angular/idl.png",
        color: "#004b7d",
      },
    ],
  },
];

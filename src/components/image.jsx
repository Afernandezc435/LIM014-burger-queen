import React from "react";

import { ReactComponent as Cocina } from "../img/cocina.svg";
import { ReactComponent as Mozo } from "../img/mozo.svg";
import { ReactComponent as Logo } from "../img/logoBQ.svg";

const ImageProject = ({ nombre }) => {
  switch (nombre) {
    case "cocina":
      return <Cocina />;
    case "mozo":
      return <Mozo />;
    case "logo":
      return <Logo />;
    default:
      break;
  }
};

export default ImageProject;

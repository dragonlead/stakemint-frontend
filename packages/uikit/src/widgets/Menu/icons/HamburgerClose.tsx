import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 24 24" {...props}>
      <path
        d="M11 0H20V2H11zM11 8H20V10H11zM14 4H20V6H14zM11 5L6 0 6 4 0 4 0 6 6 6 6 10z"
        transform="translate(-165.000000, -408.000000) translate(177.000000, 420.000000) scale(-1, 1) translate(-177.000000, -420.000000) translate(165.000000, 408.000000) translate(2.000000, 7.000000)"
      />
    </Svg>
  );
};

export default Icon;

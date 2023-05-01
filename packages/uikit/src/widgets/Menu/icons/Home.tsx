import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 24 24" {...props}>
      <path
        d="M12.971 2.54L21 7v13c0 .552-.448 1-1 1h-7v-5c0-.552-.448-1-1-1s-1 .448-1 1v5H4c-.552 0-1-.448-1-1V7l8.029-4.46c.604-.336 1.338-.336 1.942 0zM12 4.288L5 8.177V19h4v-3c0-1.657 1.343-3 3-3s3 1.343 3 3v3h4V8.177l-7-3.89z"
        transform="translate(-24.000000, -132.000000) translate(0.000000, 72.000000) translate(0.000000, 48.000000) translate(24.000000, 12.000000)"
      />
    </Svg>
  );
};

export default Icon;

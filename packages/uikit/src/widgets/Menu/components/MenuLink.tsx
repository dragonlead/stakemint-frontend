import React, { AnchorHTMLAttributes, useContext } from "react";
import { MenuContext } from "../context";

const MenuLink: React.FC<AnchorHTMLAttributes<HTMLAnchorElement>> = ({ href, ...otherProps }) => {
  const isHttpLink = href?.startsWith("http");
  const { linkComponent } = useContext(MenuContext);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const Tag: any = isHttpLink ? "a" : linkComponent;
  // eslint-disable-next-line no-unneeded-ternary
  const props = isHttpLink ? { href, target: "_blank" } : { to: href ? href : "/" };
  return <Tag {...props} {...otherProps} />;
};

export default MenuLink;

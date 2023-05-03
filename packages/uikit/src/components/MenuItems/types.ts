/* eslint-disable @typescript-eslint/no-explicit-any */
import { ElementType } from "react";
import { BoxProps } from "../Box";
import { DropdownMenuItems } from "../DropdownMenu/types";
import { Colors } from "../../theme/types";

interface LinkStatus {
  text: string;
  color: keyof Colors;
}

export type MenuItemsType = {
  label: string;
  href: string;
  icon?: ElementType<any>;
  // icon?: string;
  fillIcon?: ElementType<any>;
  items?: DropdownMenuItems[];
  disabled?: boolean;
  showOnMobile?: boolean;
  showItemsOnMobile?: boolean;
  calloutClass?: string;
  initialOpenState?: boolean;
  status?: LinkStatus;
};

export interface MenuItemsProps extends BoxProps {
  items: MenuItemsType[];
  activeItem?: string;
  activeSubItem?: string;
}

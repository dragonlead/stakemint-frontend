import noop from "lodash/noop";
import { LinkStatus } from "./types";
import { MenuItemsType } from "../../components/MenuItems/types";
import {
  SwapIcon,
  SwapFillIcon,
  EarnIcon,
  EarnFillIcon,
  TrophyIcon,
  TrophyFillIcon,
  MoreIcon,
  DropdownMenuItems,
} from "../../components";
import { DropdownMenuItemType } from "../../components/DropdownMenu/types";

export const status: { NEW: LinkStatus; SOON: LinkStatus; LIVE: LinkStatus } = {
  LIVE: {
    text: "LIVE",
    color: "failure",
  },
  SOON: {
    text: "SOON",
    color: "warning",
  },
  NEW: {
    text: "NEW",
    color: "success",
  },
};

export const links: MenuItemsType[] = [
  {
    label: "Trade",
    href: "/swap",
    icon: SwapIcon,
    fillIcon: SwapFillIcon,
    items: [
      {
        label: "Exchange",
        href: "/swap",
      },
      {
        label: "Liquidity",
        href: "/liquidity",
      },
      {
        label: "Charts",
        href: "/charts",
        iconName: "Chart",
        isMobileOnly: true,
      },
    ],
  },
  {
    label: "Earn",
    href: "/earn",
    icon: EarnIcon,
    fillIcon: EarnFillIcon,
    items: [
      {
        label: "Earn",
        href: "/earn",
      },
      {
        label: "Yield Farms",
        href: "/farms",
      },
      {
        label: "Syrup pools",
        href: "/pools",
      },
    ],
  },
  {
    label: "Win",
    href: "/",
    icon: TrophyIcon,
    fillIcon: TrophyFillIcon,
    items: [
      {
        label: "Win",
        href: "/",
      },
      {
        label: "Predictions",
        href: "/",
        status: status.LIVE,
      },
      {
        label: "Lottery",
        href: "/",
      },
    ],
  },
  {
    label: "",
    href: "/",
    icon: MoreIcon,
    items: [
      {
        label: "Info & Analytics",
        href: "/",
      },
      {
        label: "IFO Token Sales",
        href: "/",
        status: status.SOON,
      },
      {
        type: DropdownMenuItemType.DIVIDER,
      },
      {
        label: "NFT Collectibles",
        href: "/",
      },
      {
        label: "Team Leaderboard",
        href: "/",
      },
      {
        type: DropdownMenuItemType.DIVIDER,
      },
      {
        label: "Blog",
        href: "/",
      },
      {
        label: "Docs & Guides",
        href: "/",
        type: DropdownMenuItemType.EXTERNAL_LINK,
      },
    ],
  },
];

export const userMenulinks: DropdownMenuItems[] = [
  {
    label: "Wallet",
    onClick: noop,
    type: DropdownMenuItemType.BUTTON,
  },
  {
    label: "Transactions",
    type: DropdownMenuItemType.BUTTON,
  },
  {
    type: DropdownMenuItemType.DIVIDER,
  },
  {
    type: DropdownMenuItemType.BUTTON,
    disabled: true,
    label: "Dashboard",
  },
  {
    type: DropdownMenuItemType.BUTTON,
    disabled: true,
    label: "Portfolio",
  },
  {
    label: "Profile",
    href: "/profile",
  },
  {
    type: DropdownMenuItemType.EXTERNAL_LINK,
    href: "https://pancakeswap.finance",
    label: "Link",
  },
  {
    type: DropdownMenuItemType.DIVIDER,
  },
  {
    type: DropdownMenuItemType.BUTTON,
    onClick: noop,
    label: "Disconnect",
  },
];

export const linksVertical = [
  {
    label: "Home",
    icon: "HomeIcon",
    href: "/",
  },
  {
    label: "Trade",
    icon: "TradeIcon",
    items: [
      {
        label: "Exchange",
        href: "https://exchange.crosswise.finance",
      },
      {
        label: "Liquidity",
        href: "https://exchange.crosswise.finance/#/pool",
      },
    ],
  },
  {
    label: "Earn",
    icon: "EarnIcon",
    items: [
      {
        label: "Farms",
        icon: "FarmIcon",
        href: "/farms",
        status: status.LIVE,
      },
      {
        label: "Pools",
        icon: "PoolIcon",
        href: "/syrup",
      },
    ],
  },
  // {
  //   label: "Lottery",
  //   icon: "TicketIcon",
  //   href: "/lottery",
  // },
  // {
  //   label: "NFT",
  //   icon: "NftIcon",
  //   href: "/nft",
  // },
  // {
  //   label: "Team Battle",
  //   icon: "TeamBattleIcon",
  //   href: "/competition",
  //   status: status.SOON,
  // },
  // {
  //   label: "CardIcon",
  //   icon: "CardIcon",
  //   href: "/competition",
  //   status: status.SOON,
  // },
  // {
  //   label: "ExplorerIcon",
  //   icon: "ExplorerIcon",
  //   href: "/competition",
  //   status: status.SOON,
  // },
  // {
  //   label: "StatisticIcon",
  //   icon: "StatisticIcon",
  //   href: "/competition",
  //   status: status.SOON,
  // },
  // {
  //   label: "SettingsIcon",
  //   icon: "SettingsIcon",
  //   href: "/competition",
  //   status: status.SOON,
  // },
  // {
  //   label: "LotteryIcon",
  //   icon: "LotteryIcon",
  //   href: "/competition",
  //   status: status.SOON,
  // },
  // {
  //   label: "Profile & Teams",
  //   icon: "GroupsIcon",
  //   status: status.LIVE,
  //   items: [
  //     {
  //       label: "Leaderboard",
  //       href: "/teams",
  //       status: status.NEW,
  //     },
  //     {
  //       label: "YourProfile",
  //       href: "/",
  //     },
  //   ],
  //   calloutClass: "rainbow",
  // },
  // {
  //   label: "Info",
  //   icon: "InfoIcon",
  //   items: [
  //     {
  //       label: "Overview",
  //       href: "https://crosswise.info",
  //     },
  //     {
  //       label: "Tokens",
  //       href: "https://crosswise.info/tokens",
  //     },
  //     {
  //       label: "Pairs",
  //       href: "https://crosswise.info/pairs",
  //     },
  //     {
  //       label: "Accounts",
  //       href: "https://crosswise.info/accounts",
  //     },
  //   ],
  // },
  // {
  //   label: "IFO",
  //   icon: "IfoIcon",
  //   items: [
  //     {
  //       label: "Next",
  //       href: "/ifo",
  //     },
  //     {
  //       label: "History",
  //       href: "/ifo/history",
  //     },
  //   ],
  // },
  // {
  //   label: "More",
  //   icon: "MoreIcon",
  //   items: [
  //     {
  //       label: "Voting",
  //       href: "https://voting.crosswise.finance",
  //     },
  //     {
  //       label: "Github",
  //       href: "https://github.com/crosswise",
  //     },
  //     {
  //       label: "Docs",
  //       href: "https://docs.crosswise.finance",
  //     },
  //     {
  //       label: "Blog",
  //       href: "https://crosswise.medium.com",
  //     },
  //   ],
  // },
];

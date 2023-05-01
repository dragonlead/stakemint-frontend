import React, { useContext } from "react";
import styled, { keyframes } from "styled-components";
import Flex from "../../../components/Box/Flex";
import { HamburgerCloseIcon, HamburgerIcon, LogoIcon, LogoWithTextIcon } from "../../../components/Svg";
import { MenuContext } from "../context";
import MenuButton from "./MenuButton";

interface Props {
  isPushed: boolean;
  togglePush: () => void;
  href: string;
}

const blink = keyframes`
  0%,  100% { transform: scaleY(1); }
  50% { transform:  scaleY(0.1); }
`;

const StyledToggleMenu = styled.div`
  display: flex;
  align-items: center;
  display: none;

  ${({ theme }) => theme.mediaQueries.lg} {
    display: block;
  }
`;

const StyledLink = styled("a")`
  display: flex;
  .mobile-icon {
    width: 32px;
    ${({ theme }) => theme.mediaQueries.lg} {
      display: none;
    }
  }
  .desktop-icon {
    width: 160px;
    display: none;
    ${({ theme }) => theme.mediaQueries.lg} {
      display: block;
    }
  }
  .eye {
    animation-delay: 20ms;
  }
  &:hover {
    .eye {
      transform-origin: center 60%;
      animation-name: ${blink};
      animation-duration: 350ms;
      animation-iteration-count: 1;
    }
  }
`;

const Logo: React.FC<React.PropsWithChildren<Props>> = ({ isPushed, togglePush, href }) => {
  const { linkComponent } = useContext(MenuContext);
  const isAbsoluteUrl = href.startsWith("http");
  const innerLogo = (
    <>
      <LogoIcon className="mobile-icon" />
      <LogoWithTextIcon className="desktop-icon" />
    </>
  );

  return (
    <Flex alignItems="center">
      <StyledToggleMenu>
        <MenuButton aria-label="Toggle menu" onClick={togglePush} mr="24px">
          {isPushed ? (
            <HamburgerCloseIcon width="24px" color="textSubtle" />
          ) : (
            <HamburgerIcon width="24px" color="textSubtle" />
          )}
        </MenuButton>
      </StyledToggleMenu>
      {isAbsoluteUrl ? (
        <StyledLink as="a" href={href} aria-label="Stakemint home page">
          {innerLogo}
        </StyledLink>
      ) : (
        <StyledLink href={href} as={linkComponent} aria-label="Stakemint home page">
          {innerLogo}
        </StyledLink>
      )}
    </Flex>
  );
};

export default React.memo(Logo);

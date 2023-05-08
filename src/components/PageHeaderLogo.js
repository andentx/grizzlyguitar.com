import * as React from "react";

import { Link as GatsbyLink } from "gatsby";

import styled from "styled-components";

const StyledLink = styled(GatsbyLink)`
  position: relative;

  :focus-visible {
    outline: none;
  }

  :focus-visible::before {
    content: "";
    position: absolute;
    top: -2px;
    right: -2px;
    bottom: -2px;
    left: -2px;
    border: 2px solid var(--focus-color);
    border-radius: 10px;
  }
`;

const LogoContainer = styled.div`
  color: var(--text-color);

  :hover {
    color: var(--text-color-hover);
  }
  :active {
    color: var(--text-color-hover);
  }
  :visited {
    color: var(--text-color);
  }

  height: 100%;
  width: min(316px, 75vw);

  display: flex;

  margin: 0rem 0.25rem;

  cursor: pointer;

  z-index: 1000;

  svg {
    path {
      fill: white;
      transition: fill 200ms;
    }
  }

  :hover {
    svg {
      path {
        fill: var(--text-color-hover);
      }
    }
  }
`;

const PageHeaderLogo = () => {
  return (
    <>
      <StyledLink to="/" aria-label="home" id="headerLogo">
        <LogoContainer>Grizzly Guitar</LogoContainer>
      </StyledLink>
    </>
  );
};

export default PageHeaderLogo;

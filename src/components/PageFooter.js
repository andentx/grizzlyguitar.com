import * as React from "react";

import styled from "styled-components";

const Footer = styled.footer`
  background-color: var(--page-footer-background-color);
  color: var(--text-color);

  width: 100%;

  padding: 1rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const PageFooter = () => {
  return <Footer></Footer>;
};

export default PageFooter;

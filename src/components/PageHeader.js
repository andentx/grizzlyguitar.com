import * as React from "react";

import styled from "styled-components";

import PageHeaderLogo from "./PageHeaderLogo";
import PageNavigation from "./Navigation/PageNavigation";

const Header = styled.header`
  background-color: var(--page-header-background-color);

  height: 4rem;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
`;

const HeaderInnerContent = styled.div`
  height: 3rem;
  width: 2000px;

  padding: 0 0.5rem;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const PageHeader = () => {
  return (
    <Header>
      <HeaderInnerContent>
        <PageHeaderLogo />
        <PageNavigation />
      </HeaderInnerContent>
    </Header>
  );
};

export default PageHeader;

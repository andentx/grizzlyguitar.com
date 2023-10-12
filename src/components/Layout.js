import * as React from "react";
import styled from "styled-components";
import PageHeader from "../components/PageHeader";
import PageFooter from "../components/PageFooter";
import { NavigationProvider } from "../context/navigation_context";

const PageContainer = styled.div`
  min-height: 100vh;
  min-height: 100dvh;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

const MainContent = styled.main`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;

  flex-grow: 1;
`;

const Layout = ({ children }) => {
  return (
    <>
      <NavigationProvider>
        <PageContainer>
          <PageHeader />
          <MainContent>{children}</MainContent>
          <PageFooter />
        </PageContainer>
      </NavigationProvider>
    </>
  );
};

export default Layout;

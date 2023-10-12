import * as React from "react";
import PageHeaderLogo from "./PageHeaderLogo";
import PageNavigation from "./Navigation/PageNavigation";

const PageHeader = () => {
  return (
    <header className="flex items-center justify-center w-full h-16 bg-gray-800">
      <div className="flex items-center w-full h-12 px-4 py-0 max-w-7xl">
        <PageHeaderLogo />
        <PageNavigation />
      </div>
    </header>
  );
};

export default PageHeader;

import * as React from "react";
import { Link } from "gatsby";

const PageHeaderLogo = () => {
  return (
    <>
      <Link to="/" aria-label="home" id="headerLogo">
        Grizzly Guitar
      </Link>
    </>
  );
};

export default PageHeaderLogo;

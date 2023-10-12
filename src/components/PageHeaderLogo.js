import * as React from "react";
import { Link } from "gatsby";

const PageHeaderLogo = () => {
  return (
    <>
      <div className="flex items-center flex-grow h-12 ">
        <Link
          to="/"
          aria-label="home"
          id="headerLogo"
          className="rounded-md focus:ring focus:ring-amber-400 focus:ring-offset-4 focus:ring-offset-gray-800 focus:outline-none "
        >
          Grizzly Guitar
        </Link>
      </div>
    </>
  );
};

export default PageHeaderLogo;

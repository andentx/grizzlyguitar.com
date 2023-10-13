import * as React from "react";
import { Link } from "gatsby";

const ViewServicesMenu = () => {
  return (
    <>
      <div className="bg-white">
        <div className="relative px-6 pb-32 sm:px-12 lg:px-16">
          <div className="relative flex flex-col items-center max-w-3xl mx-auto text-center">
            <Link
              to="/services"
              className="block w-auto px-8 py-3 text-base font-medium text-white transition-colors ease-in-out bg-gray-800 border border-transparent rounded-md shadow hover:text-amber-400 hover:bg-gray-900 focus:ring-amber-400 focus:outline-none focus:ring-4"
            >
              View all services
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default ViewServicesMenu;

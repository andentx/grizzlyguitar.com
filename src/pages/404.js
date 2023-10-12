import * as React from "react";
import { Link } from "gatsby";
import { ArrowLongLeftIcon } from "@heroicons/react/20/solid";
import Layout from "../components/Layout";

const NotFoundPage = () => {
  return (
    <>
      <Layout>
        <div className="grid min-h-full grid-cols-1 grid-rows-[1fr,auto,1fr] bg-white lg:grid-cols-[max(50%,36rem),1fr]">
          <main className="w-full px-6 py-24 mx-auto max-w-7xl sm:py-32 lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:px-8">
            <div className="max-w-lg">
              <p className="text-base font-semibold leading-8 text-gray-600">
                404
              </p>
              <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                Page not found
              </h1>
              <p className="mt-6 text-base leading-7 text-gray-600">
                Sorry, we couldn't find the page you're looking for.
              </p>
              <div className="mt-10">
                <Link
                  to="/"
                  className="inline-flex items-center p-2 mb-8 text-sm font-semibold leading-7 text-gray-600 transition-colors ease-in-out rounded-md hover:text-black focus:outline-none focus:ring focus:ring-amber-400"
                >
                  <ArrowLongLeftIcon
                    className="w-5 h-5 mr-2"
                    aria-hidden="true"
                  />
                  <span>Back to home</span>
                </Link>
              </div>
            </div>
          </main>
        </div>
      </Layout>
    </>
  );
};

export default NotFoundPage;

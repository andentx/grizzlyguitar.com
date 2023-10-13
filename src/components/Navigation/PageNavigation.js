import React, { useEffect, useRef } from "react";
import { Link } from "gatsby";
import styled, { createGlobalStyle } from "styled-components";
import CartButton from "../CartButton";
import { useNavigationContext } from "../../context/navigation_context";
import { navLinks } from "../../data/navLinks";
import { openIcon, closeIcon } from "./NavIcon.module.css";

const Global = createGlobalStyle`
 @media screen and (max-width: 700px) {
     html,
     body {
         max-height: ${({ isMobileNavOpen }) =>
           isMobileNavOpen ? "100vh" : "none"};
         overflow-y: ${({ isMobileNavOpen }) =>
           isMobileNavOpen ? "hidden" : "auto"};
     }
 }
 `;

const MobileNavigation = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  height: 100vh;
  height: 100dvh;
  width: 100vw;

  display: flex;

  z-index: 40;

  transition: transform 300ms;

  transform: ${({ isOpen }) => (isOpen ? "translateX(0)" : "translateX(100%)")};

  @media screen and (min-width: 700px) {
    display: none;
  }
`;

const PageNavigation = () => {
  const { isMobileNavOpen, closeMobileNavigation, openMobileNavigation } =
    useNavigationContext();

  const bodyElementsRef = useRef(null);
  const bodyElementsSelectorRef = useRef("main *, #headerLogo, footer *");

  useEffect(() => {
    const bodyElements = document.querySelectorAll(
      bodyElementsSelectorRef.current
    );
    bodyElementsRef.current = bodyElements;
  }, []);

  useEffect(() => {
    if (bodyElementsRef.current) {
      const bodyElements = bodyElementsRef.current;
      bodyElements.forEach((element) => {
        if (isMobileNavOpen) {
          element.setAttribute("tabindex", "-1");
        } else {
          element.removeAttribute("tabindex");
        }
      });
    }
  }, [isMobileNavOpen]);

  return (
    <>
      <Global isMobileNavOpen={isMobileNavOpen} />

      <nav className="items-center hidden h-full 700px:flex ">
        <ul className="flex items-center h-full ">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className="flex items-center justify-center mr-2 text-white rounded-md "
            >
              <Link
                to={link.url}
                className="p-2 transition-colors ease-in-out rounded-md focus:ring focus:ring-amber-400 focus:outline-none hover:text-amber-400 active:text-amber-500"
                activeClassName="text-amber-400"
              >
                {link.text}
              </Link>
            </li>
          ))}
        </ul>
        <CartButton tabIndex={0} />
      </nav>

      <button
        className="relative z-50 h-full p-2 bg-transparent border-none rounded-md cursor-pointer w-14 focus:outline-none focus:ring focus:ring-amber-400 700px:hidden"
        onClick={isMobileNavOpen ? closeMobileNavigation : openMobileNavigation}
        aria-label={`${
          isMobileNavOpen ? "close navigation menu" : "open navigation menu"
        }`}
      >
        <div className={`${isMobileNavOpen ? closeIcon : openIcon}`}></div>
      </button>

      <MobileNavigation isOpen={isMobileNavOpen}>
        <div
          onClick={closeMobileNavigation}
          aria-hidden="true"
          className="z-40 flex h-full w-3/10"
        />
        <div className="z-40 flex flex-col items-center justify-center h-full backdrop-blur-lg bg-gray-800/80 w-7/10">
          <ul>
            {navLinks.map((link) => (
              <li
                key={link.id}
                className="mb-8 text-3xl text-white last-of-type:mb-6"
              >
                <Link
                  to={link.url}
                  onClick={closeMobileNavigation}
                  className="p-2 transition-colors ease-in-out rounded-md focus:ring focus:ring-amber-400 focus:outline-none hover:text-amber-400 active:text-amber-500"
                  activeClassName="text-amber-400"
                  tabIndex={isMobileNavOpen ? 0 : -1}
                >
                  {link.text}
                </Link>
              </li>
            ))}
          </ul>
          <CartButton tabIndex={isMobileNavOpen ? 0 : -1} />
        </div>
      </MobileNavigation>
    </>
  );
};

export default PageNavigation;

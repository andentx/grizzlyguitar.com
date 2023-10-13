import React, { createContext, useContext, useReducer } from "react";
import navigation_reducer from "../reducers/navigation_reducer";
import { MOBILE_NAV_OPEN, MOBILE_NAV_CLOSE } from "../actions";

const NavigationContext = createContext();

const initialState = {
  isMobileNavOpen: false,
};

export const NavigationProvider = ({ children }) => {
  const [state, dispatch] = useReducer(navigation_reducer, initialState);

  const openMobileNavigation = () => {
    dispatch({ type: MOBILE_NAV_OPEN });
  };
  const closeMobileNavigation = () => {
    dispatch({ type: MOBILE_NAV_CLOSE });
  };

  return (
    <NavigationContext.Provider
      value={{
        ...state,
        openMobileNavigation,
        closeMobileNavigation,
      }}
    >
      {children}
    </NavigationContext.Provider>
  );
};

export const useNavigationContext = () => {
  return useContext(NavigationContext);
};

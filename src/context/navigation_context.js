import React, { useContext, useReducer } from "react";
import reducer from "../reducers/navigation_reducer";
import { MOBILE_NAV_OPEN, MOBILE_NAV_CLOSE } from "../actions";

const initialState = {
  isMobileNavOpen: false,
};

const NavigationContext = React.createContext();

export const NavigationProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

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

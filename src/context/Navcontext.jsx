import React, { createContext, useState } from "react";

export const Navbarcontext = createContext();
const Navcontext = ({ children }) => {
  const [navOpen, setnavOpen] = useState(false);
  return (
    <div>
      <Navbarcontext.Provider value={[navOpen, setnavOpen]}>
        {children}
      </Navbarcontext.Provider>
    </div>
  );
};

export default Navcontext;

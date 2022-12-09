import React, { createContext, useState } from "react";

type Props = {
  children: React.ReactNode;
};

export const GlobalContext = createContext<GlobalContextProps>(
  {} as GlobalContextProps
);

const GlobalProvider: React.FC<Props> = ({ children }) => {
  const [isToggleTheme, setIsToggleTheme] = useState<boolean>(true);
  const [isToggleTranslate, setIsToggleTranslate] = useState<boolean>(false);

  const state: GlobalContextProps = {
    isTheme: { isToggleTheme, setIsToggleTheme },
    isTranslate: { isToggleTranslate, setIsToggleTranslate },
  };

  return (
    <GlobalContext.Provider value={state}>{children}</GlobalContext.Provider>
  );
};

export default GlobalProvider;

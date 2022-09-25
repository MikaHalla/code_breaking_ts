import { createContext, ReactNode, useState } from 'react';

type AppContext = {
  gameSettings: {
    rows: number;
    repeatColors: boolean;
    colors: number;
    colorOptions: number;
  };
};

type AppProviderProps = {
  children: ReactNode;
};

const AppContext = createContext({} as AppContext);

export const AppProvider = ({ children }: AppProviderProps) => {
  const [gameSettings, setGameSettings] = useState({
    rows: 8,
    repeatColors: false,
    colors: 5,
    colorOptions: 8,
  });
  return (
    <AppContext.Provider
      value={{
        gameSettings,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;

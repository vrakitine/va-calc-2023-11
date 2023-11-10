import React, { createContext, useContext, useState, ReactNode } from "react";

// Define the context
interface AppContextType {
  currentAction: string;
  setCurrentAction: React.Dispatch<React.SetStateAction<string>>;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

// Create a provider component
export function AppProvider({ children }: { children: ReactNode }) {
  const [currentAction, setCurrentAction] = useState<string>("Action_init");

  return (
    <AppContext.Provider value={{ currentAction, setCurrentAction }}>
      {children}
    </AppContext.Provider>
  );
}

// Create a custom hook for using the context
export function useAppContext() {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error("useAppContext must be used within an AppProvider");
  }
  return context;
}

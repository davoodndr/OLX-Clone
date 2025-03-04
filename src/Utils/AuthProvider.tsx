
import React, { createContext, ReactNode, useState } from "react";
import { logout } from "../Firebase";


interface AuthContextType{
  isLogged: boolean;
  setLogState: (value:string) => void;
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{children: ReactNode}> = ({children}) => {

  const [isLogged, setIsLogged] = useState<boolean>(false);

  const setLogState = (value:string) => {
    if(value === 'logged'){
      setIsLogged(true);
    }else{
      logout();
      setIsLogged(false);
    }
  };

  return (
    <AuthContext.Provider value={{ isLogged, setLogState }}>
      {children}
    </AuthContext.Provider>
  );
}

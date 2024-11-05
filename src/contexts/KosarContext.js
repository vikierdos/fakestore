import { createContext, useState } from "react";

export const KosarContext = createContext("");

export const KosarProvider = ({ children }) => {
    function kosarba(adat){
            if(!kosarLista.includes(adat)){
                const kosarListaB = [...kosarLista]
                kosarListaB.push(adat);
                setKosarLista([...kosarListaB]);
            }
        
    };
    

    const [kosarLista, setKosarLista] = useState([]);

    return (
      <KosarContext.Provider value={{ kosarLista, kosarba }}>
        {children}
      </KosarContext.Provider>
    );
  };

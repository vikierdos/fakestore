/*  1. create context
    2. provider
    2.5 Provider és a context összekötése
    3. körbeölelés
    4. felhasználás a komponensekben */
    
import { createContext, useEffect, useState } from "react";
import { myAxios } from "./MyAxios";

export const ApiContext = createContext("");

export const ApiProvider = ({ children }) => {
  const [termekLista, setTermekLista] = useState([]);

  const getAdat = async (vegpont) => {
    try {
      const response = await myAxios.get(vegpont);
      setTermekLista(response.data);
    } catch (err) {
      console.log("Hiba történt az adatok lekérésekor");
    } finally {
    }
  };

  /* asszinkron hívások kezelése useEffect hook */
  useEffect(() => {
    getAdat("/products");
  }, []);

  return (
    <ApiContext.Provider value={{ termekLista }}>
      {children}
    </ApiContext.Provider>
  );
};

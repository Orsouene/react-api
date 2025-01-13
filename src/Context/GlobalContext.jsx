// importo axios
import axios from "axios";

import { createContext, useState, useEffect } from "react";
// Creazione d'un contesto
const GlobalContext = createContext();
const myUrl = "http://localhost:3000";
const endPoint = "/posts";

const GlobalProvider = ({ children }) => {
  // lo stato per memorizzare la lista di dolci
  const [dolceList, setDolceList] = useState([]);
  //   il hook che vieni eseguito al primo rendering delcomponente (recupera dati )
  useEffect(getData, []);

  function getData() {
    axios
      .get(myUrl + endPoint)
      .then((res) => {
        console.log(res.data);
        setDolceList(res.data);
      })
      .catch((error) => console.error(error));
  }
  return (
    // un componente per fonire dati ai figli
    <GlobalContext.Provider value={{ dolceList }}>
      {children}
    </GlobalContext.Provider>
  );
};

export { GlobalProvider, GlobalContext };

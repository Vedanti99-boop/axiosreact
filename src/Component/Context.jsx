import React from "react";
import { useState } from "react";
import { useContext } from "react";
import { useEffect } from "react";
import axios from "axios";

const API = "https://jsonplaceholder.typicode.com/photos";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {

  const [oData, setData] = useState([]);
  const [error,setError]=useState("")

  useEffect(() => {
    axios
    .get(API)
    .then((res) => setData(res.data)
    .catch((error)=>setError(error.message))
    );
  },[]);

  return (
    <AppContext.Provider value={{ oData, setData,error }}>
      {children}
    </AppContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppProvider, AppContext, useGlobalContext };

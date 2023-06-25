import { createContext, useEffect, useState } from "react";
import { api } from "../services/api";
import { Form } from "react-router-dom";

export const TechContext = createContext({});

export const TechProvider = ({ children }) => {
  const [techList, setTechList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const loadTechData = async () => {
      try {
        const token = localStorage.getItem("@TOKEN");
        setIsLoading(true);
        const { data } = await api.post("/sessions", data, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setTechList(data);
        console.log(techList);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    loadTechData();
  }, []);

  const createTech = async (currentData) => {
    try {
      const token = localStorage.getItem("@TOKEN");
      const { data } = await api.post("/users/techs", currentData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <TechContext.Provider value={{ isLoading, techList, createTech }}>
      {children}
    </TechContext.Provider>
  );
};

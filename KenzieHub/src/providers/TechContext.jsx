import { createContext, useEffect, useState } from "react";
import { api } from "../services/api";

export const TechContext = createContext({});

export const TechProvider = ({ children }) => {
  const [techList, setTechList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // a hora que montar, carrega as tecnologias (lê da  api)
  useEffect(() => {
    const loadTechData = async () => {
      const token = localStorage.getItem("@TOKEN");
      try {
        setIsLoading(true);
        const { data } = await api.get("/profile", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setTechList(data.techs);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
        console.log(techList);
      }
    };
    loadTechData();
  }, []);

  const createTech = async (formData) => {
    try {
      const token = localStorage.getItem("@TOKEN");
      //Atualizando o backend ('banco de dados')
      const { data } = await api.post("/users/techs", formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      //Atualizando front
      setTechList((techList) => [...techList, data]);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  // DELETE /users/techs/:tech_id

  const deleteTech = async (techId) => {
    try {
      const token = localStorage.getItem("@TOKEN");
      //Atualiza o back (requisição sempre atualiza back)
      await api.delete(`/users/techs/${techId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      //atualiza front
      setTechList((techList) => techList.filter((tech) => tech.id !== techId));
    } catch (error) {
      console.log(error);
    }
  };

  const updateTech = async (techId, formData) => {
    try {
      const token = localStorage.getItem("@TOKEN");

      await api.put(`/users/techs/${techId}`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setTechList((techList) =>
        techList.map((tech) =>
          tech.id === techId ? { ...tech, ...formData } : tech
        )
      );
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <TechContext.Provider
      value={{ isLoading, techList, createTech, deleteTech, updateTech }}
    >
      {children}
    </TechContext.Provider>
  );
};

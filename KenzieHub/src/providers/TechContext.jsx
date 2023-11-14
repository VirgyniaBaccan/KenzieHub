import { createContext, useEffect, useState } from "react";
import { api } from "../services/api";

export const TechContext = createContext({});

export const TechProvider = ({ children }) => {
  const [techList, setTechList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isCreateOpen, setIsCreateOpen] = useState(false);
  const [isChanging, setIsChanging] = useState(null);

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
        }
      };
      loadTechData();
    }, []);

  const createTech = async (formData) => {
    try {
      const token = localStorage.getItem("@TOKEN");
      const { data } = await api.post("/users/techs", formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setTechList((techList) => [...techList, data]);
    } catch (error) {
      console.log(error);
    } finally {
      setIsCreateOpen(false);
    }
  };

  const deleteTech = async (techId) => {
    try {
      const token = localStorage.getItem("@TOKEN");
      await api.delete(`/users/techs/${techId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
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
    } finally {
      setIsChanging(false);
    }
  };

  return (
    <TechContext.Provider
      value={{
        isLoading,
        techList,
        createTech,
        deleteTech,
        updateTech,
        isCreateOpen,
        setIsCreateOpen,
        isChanging,
        setIsChanging,
      }}
    >
      {children}
    </TechContext.Provider>
  );
};

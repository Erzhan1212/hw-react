import { useState, useEffect } from "react";

import { toast } from "react-toastify";
import { axiosInstance } from "../config/axiosInstance";

export const useTourAPI = () => {
  const [tour, setTours] = useState([]);

  const fetchTours = async () => {
    try {
      const { data } = await axiosInstance.get("/tours");
      toast.success("Успешно!");
      setTours(data);
    } catch (error) {
      toast.error(error.message);
    }
  };

  useEffect(() => {
    fetchTours();
  }, []);

  // };

  return [tour];
};

import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import type { IPlants } from "../../types/typePlants";

export const Plants = () => {
  const { isLoading, isError, error, data: plants } = useQuery<IPlants[]>({
    queryKey: ["Plants"],
    queryFn: async () => {
      const response = await axios.get<IPlants[]>(import.meta.env.VITE_API_URL);
      return response.data;
    }
  })

  console.log(import.meta.env.VITE_API_URL)

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error: {error.message}</p>;

  const generatePlants = () => {
    return plants?.map((plant) => (
      <li key={plant.id}>
        <h1>{plant.name}</h1>
        <p>{plant.about}</p>
        <p>{plant.rating}</p>
        <img src={plant.image} alt="image" />
      </li>
    ))
  }
  
  return (
    <ul>
      {generatePlants()}
    </ul>
  );
}
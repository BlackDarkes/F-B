import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import type { ReactNode } from "react";

interface IPlants {
  id: number
  name: string
  about: string
  rating: string
  image: string
}

function App() {
  const { isLoading, isError, error, data: plants } = useQuery<IPlants[]>({
    queryKey: ["plants"],
    queryFn: async () => {
      const resolve = await axios.get<IPlants[]>("http://localhost:8000/plants");
      return resolve.data;
    }
  })

  if (isLoading) return <p>Loading....</p>
  if (isError) return <p>Error: {error.message}</p>

  const generatePlants = (): ReactNode => {
    return plants?.map((plant) => (
      <li key={plant.id}>
        <img src={plant.image} alt="image" />
        <p>{plant.rating}</p>
        <h1>{plant.name}</h1>
        <h3>{plant.about}</h3>
      </li>
    ))
  }

  return (
    <ul>
      {generatePlants()}
    </ul>
  )
}

export default App

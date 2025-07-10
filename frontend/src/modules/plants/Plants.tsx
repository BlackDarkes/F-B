import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import type { IPlants } from "../../types/typePlants";
import { Plant } from "./components/plants/Plant";
import { Container } from "../../components/container/Container";
import { ButtonNavigate } from "./components/buttonNavigate.tsx/ButtonNavigate";
import { useSlider } from "../../hooks/useSlider";

export const Plants = () => {
  const {
    isLoading,
    isError,
    error,
    data: plants,
  } = useQuery<IPlants[]>({
    queryKey: ["Plants"],
    queryFn: async () => {
      const response = await axios.get<IPlants[]>(import.meta.env.VITE_API_URL);
      return response.data;
    },
  });

  const { sliderRef, currentSlide, scrollToPrev, scrollToNext } = useSlider(300);

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error: {error.message}</p>;

  return (
    <section className='py-[60px]'>
      <Container className='flex flex-col gap-y-[30px]'>
        <ul
          ref={sliderRef}
          className='flex snap-x gap-x-[30px] overflow-x-auto scroll-smooth [-ms-overflow-style:none] [scrollbar-width:none]'
        >
          {plants?.map((plant) => (
            <Plant key={plant.id} plant={plant} />
          ))}
        </ul>
        <ButtonNavigate
          currentCount={currentSlide}
          currentAdd={scrollToNext}
          currentRemove={scrollToPrev}
        />
      </Container>
    </section>
  );
};

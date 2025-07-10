import type { IPlants } from "../../../../types/typePlants";

export const Plant = ({ plant }: { plant: IPlants }) => {
  return (
    <li className='w-[255px] shrink-0 snap-start'>
      <div className='relative bg-[#0B1919] p-[30px_16px]'>
        <h3 className='absolute top-[16px] left-[16px] h-[24px] w-[24px] rounded-[50%] border-1 text-center leading-[100%] text-[#899D9D] select-none'>
          {plant.rating}
        </h3>
        <img src={plant.image} alt='' />
      </div>
      <div className='flex flex-col items-start justify-between h-[313px] border-1 border-[#0B1919] p-[16px_16px_24px_16px]'>
        <div>
          <h2 className='pb-[8px] text-[24px] text-[white]'>{plant.name}</h2>
          <p className='pb-[16px] text-[#899D9D]'>{plant.about}</p>
        </div>
        <button
          style={{ fontWeight: "400" }}
          type='button'
          className='border-1 p-[11px_29px] text-[#BAE249] outline-0 hover:bg-[#BAE249] hover:text-[#0B1919] focus-visible:outline-1 focus-visible:outline-offset-[3px] focus-visible:outline-[#83A440] active:text-[#688B05]'
        >
          Подробнее
        </button>
      </div>
    </li>
  );
};

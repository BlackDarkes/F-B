import IconArrow from "@/assets/icons/arrow.svg?react";

export const DescriptionBlock = () => {
  return (
    <div className='max-[1024px]:translate-y-[10px]'>
      <h1 className='block w-[min(100%,688px)] pb-[16px] text-[clamp(3rem,2.25rem+1.71vw,3.75rem)] leading-[100%] text-white max-[1024px]:py-[30px]'>
        Крупнейшая коллекция природных артефактов
      </h1>
      <p className='w-[min(100%,688px)] pb-[24px] leading-[150%] text-white max-[1024px]:hidden'>
        Являясь всего лишь частью общей картины, интерактивные прототипы, которые представляют собой
        яркий пример европейского типа политической и социальной культуры.
      </p>
      <button
        type='button'
        className='flex items-center gap-x-[8px] outline-1 outline-offset-[5px] outline-transparent duration-400 focus-visible:outline-[#83A440]'
      >
        Исследовать <IconArrow className='w-[43px]' />
      </button>
    </div>
  );
};

import IconSearch from "@/assets/icons/search.svg?react";
import IconLogIn from "@/assets/icons/log-in.svg?react";

export const Buttons = () => {
  return (
    <section className='flex items-center gap-x-[64px] max-[1024px]:gap-x-[32px]'>
      <button
        type='button'
        className='outline-0 transition-colors duration-400 hover:text-[#BAE249] focus-visible:shadow-[0_0_0_1px_#83A440]'
      >
        <IconSearch className='h-[24px] w-[24px]' />
      </button>
      <button
        type='button'
        className='outline-0 duration-400 hover:text-[#BAE249] focus-visible:shadow-[0_0_0_1px_#83A440]'
      >
        <IconLogIn className='h-[24px] w-[24px]' />
      </button>
    </section>
  );
};

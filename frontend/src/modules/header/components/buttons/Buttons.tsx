import IconSearch from "@/assets/icons/search.svg?react";
import IconLogIn from "@/assets/icons/log-in.svg?react";

export const Buttons = () => {
  return (
    <section className='flex items-center gap-x-[64px] max-[1024px]:gap-x-[32px]'>
      <button
        type='button'
        className='text-[#BAE249] outline-0 transition-colors duration-400 hover:text-[#91ac46] focus-visible:shadow-[0_0_0_1px_#83A440] active:text-[#688B05]'
      >
        <IconSearch className='h-[24px] w-[24px]' />
      </button>
      <button
        type='button'
        className='text-[#BAE249] outline-0 duration-400 hover:text-[#91ac46] focus-visible:shadow-[0_0_0_1px_#83A440] active:text-[#688B05]'
      >
        <IconLogIn className='h-[24px] w-[24px]' />
      </button>
    </section>
  );
};

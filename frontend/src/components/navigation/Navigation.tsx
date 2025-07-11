export const Navigation = () => {
  return (
    <ul className='flex gap-x-[64px] max-[1024px]:gap-x-[32px]'>
      <li>
        <a
          href='#'
          className='px-[5px] outline-0 duration-400 hover:text-[#BAE249] focus-visible:shadow-[0_0_0_1px_#83A440] active:text-[#688B05]'
        >
          Каталог
        </a>
      </li>
      <li>
        <a
          href='#'
          className='px-[5px] outline-0 duration-400 hover:text-[#BAE249] focus-visible:shadow-[0_0_0_1px_#83A440] active:text-[#688B05]'
        >
          Галерея
        </a>
      </li>
      <li className='shrink-0'>
        <a
          href='#'
          className='px-[5px] outline-0 duration-400 hover:text-[#BAE249] focus-visible:shadow-[0_0_0_1px_#83A440] active:text-[#688B05]'
        >
          О лаборатории
        </a>
      </li>
      <li>
        <a
          href='#'
          className='px-[5px] outline-0 duration-400 hover:text-[#BAE249] focus-visible:shadow-[0_0_0_1px_#83A440] active:text-[#688B05]'
        >
          Контакты
        </a>
      </li>
    </ul>
  );
};

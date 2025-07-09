export const Navigation = () => {
  return (
    <ul className='flex gap-x-[64px] max-[1024px]:gap-x-[32px]'>
      <li>
        <a
          href='#'
          className='px-[5px] outline-0 duration-400 hover:text-[#BAE249] focus:shadow-[0_0_0_1px_#83A440]'
        >
          Каталог
        </a>
      </li>
      <li>
        <a
          href='#'
          className='px-[5px] outline-0 duration-400 hover:text-[#BAE249] focus:shadow-[0_0_0_1px_#83A440]'
        >
          Галерея
        </a>
      </li>
      <li className="shrink-0">
        <a
          href='#'
          className='px-[5px] outline-0 duration-400 hover:text-[#BAE249] focus:shadow-[0_0_0_1px_#83A440]'
        >
          О лаборатории
        </a>
      </li>
      <li>
        <a
          href='#'
          className='px-[5px] outline-0 duration-400 hover:text-[#BAE249] focus:shadow-[0_0_0_1px_#83A440]'
        >
          Контакты
        </a>
      </li>
    </ul>
  );
};

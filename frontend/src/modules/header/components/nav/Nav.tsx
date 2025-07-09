import { Navigation } from "../../../../components/navigation/Navigation";

export const Nav = () => {
  return (
    <div className='flex items-center justify-between gap-x-[125px]'>
      <img
        src='/images/header/logo.png'
        alt='Логотип'
        width={65}
        height={20}
        className='select-none'
      />
      <nav className='max-[1024px]:hidden'>
        <Navigation />
      </nav>
    </div>
  );
};

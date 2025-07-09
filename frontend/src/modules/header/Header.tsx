import { Navigation } from "../../components/navigation/Navigation";
import { Buttons } from "./components/buttons/Buttons";
import { Nav } from "./components/nav/Nav";

export const Header = () => {
  return (
    <header className='fixed top-0 left-0 w-[100%] text-white'>
      <div className="bg-[#1D2F30]">
        <div className='mx-[auto] flex w-[min(100%-64px,1110px)] items-center justify-between py-[20px]'>
          <Nav />
          <Buttons />
        </div>
      </div>
      <div className='w-[100%] ml-[32px] overflow-x-scroll lg:hidden'>
        <Navigation />
      </div>
    </header>
  );
};

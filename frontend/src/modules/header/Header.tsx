import { Container } from "../../components/container/Container";
import { Navigation } from "../../components/navigation/Navigation";
import { Buttons } from "./components/buttons/Buttons";
import { Nav } from "./components/nav/Nav";

export const Header = () => {
  return (
    <header className='fixed top-0 left-0 w-[100%] text-white z-300'>
      <div className='bg-[#1D2F30]'>
        <Container className="flex items-center justify-between py-[20px]">
          <Nav />
          <Buttons />
        </Container>
      </div>
      <div className='m-auto py-[15px_5px] w-[calc(100%-54px)] overflow-x-scroll lg:hidden'>
        <Navigation />
      </div>
    </header>
  );
};

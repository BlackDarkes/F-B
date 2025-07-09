import { Container } from "../../components/container/Container";
import { DescriptionBlock } from "./components/DescriptionBlock";

export const Description = () => {
  return (
    <>
      <section className='w-fill relative flex h-[clamp(25.25rem,9.875rem+35.14vw,40.625rem)] items-center pt-[64px]'>
        <div
          className='absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30 bg-blend-multiply'
          style={{ backgroundImage: "url(./images/header/header.png)" }}
        />

        <Container className='relative z-100'>
          <DescriptionBlock />
        </Container>
      </section>
    </>
  );
};

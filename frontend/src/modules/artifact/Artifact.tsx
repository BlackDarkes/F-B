import { Container } from "../../components/container/Container";
import { useSizeWindow } from "../../hooks/useSizeWindow";
import { ArtifactBlock } from "./components/artifactBlock/ArtifactBlock";

export const Artifact = () => {
  const { width } = useSizeWindow();

  return (
    <section className="pb-[60px]">
      <Container className="flex flex-col gap-y-[30px]">
        <ArtifactBlock width={width} />
      </Container>
    </section>
  );
};

import { Artifact } from "./modules/artifact/Artifact";
import { Description } from "./modules/description/Description";
import { Footer } from "./modules/footer/Footer";
import { Header } from "./modules/header/Header";
import { Help } from "./modules/help/Help";
import { Plants } from "./modules/plants/Plants";

function App() {
  return (
    <>
      <Header />
      <main>
        <Description />
        <Plants />
        <Artifact />
        <Help />
      </main>
      <Footer />
    </>
  );
}

export default App;

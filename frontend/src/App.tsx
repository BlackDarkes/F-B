import { Description } from "./modules/description/Description";
import { Header } from "./modules/header/Header";
import { Plants } from "./modules/plants/Plants";

function App() {
  return (
    <>
      <Header />
      <main>
        <Description />
        <Plants />
      </main>
    </>
  );
}

export default App;

import Header from "./components/Header/Header.jsx";
import CoreConcepts from "./components/core-concept/CoreConcepts.jsx";
import Exampless from "./components/core-concept/Exampless.jsx";

function App() {
  return (
    <>
      <Header />

      <main>
        <CoreConcepts />
        <Exampless />
        <h2>Time to get started!</h2>
      </main>
    </>
  );
}

export default App;

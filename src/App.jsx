import Header from "./components/molecules/Header/Header";
import Form from "./components/organisms/Form/Form";
import Sandbox from "./components/organisms/Sandbox/Sandbox";
import GeneratedCode from "./components/organisms/GeneratedCode/GeneratedCode";
import DataContext from "./context/DataContext";

function App() {
  return (
    <main>
      <Header name="CSS FLEXBOX GENERATOR BY GG" />
      <div className="content-container">
        <DataContext>
          <Form />
          <Sandbox />
          <GeneratedCode />
        </DataContext>
      </div>
    </main>
  );
}

export default App;

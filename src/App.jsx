import Form from "./components/organisms/Form/Form";
import Sandbox from "./components/organisms/Sandbox/Sandbox";
import GeneratedCode from "./components/organisms/GeneratedCode/GeneratedCode";
import DataContext from "./context/DataContext";
import MainHeader from "./components/molecules/MainHeader/MainHeader";

function App() {
  return (
    <main>
      <div className="content-container">
        <MainHeader name="CSS FLEXBOX GENERATOR BY GG" />
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

import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Title, ReadTheDocs, Counter, Code, Card } from "../components";
function App() {

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <Title>React + Vite</Title>
      <Card padding={2}>
        <Counter />
        <Code path="src/App.tsx" />
      </Card>
      <ReadTheDocs colorId={1}>
        Click on the Vite and React logos to learn more
      </ReadTheDocs>
    </>
  );
}

export default App;

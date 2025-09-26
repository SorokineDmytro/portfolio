import "./App.css";
import { BrowserRouter } from "react-router";
import Wrapper from "./components/Wrapper/Wrapper";

function App() {
  return (
    <>
      <BrowserRouter>
        <Wrapper></Wrapper>
      </BrowserRouter>
    </>
  );
}

export default App;

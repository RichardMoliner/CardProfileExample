import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./components/Card";

function App() {
  return (
    <>
      <Card
        image={"src/assets/i-L5wqGPL-X2.jpg"}
        name={"Richard Moliner"}
        job={"Gerente de Suporte"}
        telephone={"+55 48 99844 8586"}
        email={"richardmoliner1@gmail.com"}
        githubUrl={"https://github.com/RihardMoliner"}
        linkedinUrl={"https://linkedin.com/in/richard-moliner"}
        twitterUrl={"https://twitter.com"}
      />
    </>
  );
}

export default App;

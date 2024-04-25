import { useState } from "react";
import "./App.css";
import explorer from "./data/data";
import Folder from "./component/Folder";

function App() {
  const [explorerData, setExplorerData] = useState(() => explorer);
  console.log(explorerData);
  return (
    <>
      <Folder explorer={explorerData} />
    </>
  );
}

export default App;

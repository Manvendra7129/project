import { createBrowserRouter } from "react-router-dom";
import "./App.css";
import Body from "./components/Body";
import Header from "./components/Header";
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [],
  },
]);
function App() {
  return (
    <section className="app">
      <Header />
      <Body />
    </section>
  );
}

export default App;

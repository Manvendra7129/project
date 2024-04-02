import "./App.css";
import Header from "./components/Header";
import RecommendedVideo from "./components/RecommendedVideo";
import SearchPage from "./components/SearchPage";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <section className="app">
      <Header />
      <main>
        <Sidebar />
        <RecommendedVideo />
      </main>
    </section>
  );
}

export default App;

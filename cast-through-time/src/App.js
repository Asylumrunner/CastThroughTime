import Header from "./components/Header";
import CardList from "./components/CardList";

function App() {
  return (<div className="h-screen overflow-scroll snap-y snap-mandatory bg-gradient-to-b from-cyan-500 via-red-200 to-emerald-300">
    <Header />
    <CardList />
  </div>)

}

export default App;

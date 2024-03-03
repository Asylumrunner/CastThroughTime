import Header from "./components/Header";
import Footer from "./components/Footer";
import CardList from "./components/CardList";

function App() {
  const headerHeight = window.innerHeight * 1/5

  return (<div className={`h-screen overflow-scroll snap-y snap-mandatory`}>
    <Header />
    <CardList />
  </div>)

}

export default App;

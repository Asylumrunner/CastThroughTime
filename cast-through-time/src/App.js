import Header from "./components/Header";
import Footer from "./components/Footer";
import CardList from "./components/CardList";
import SetSelectorToggle from "./components/SetSelectorToggle";

function App() {
  return (<div>
    <Header />
    <div className="flex items-center justify-center">
      <SetSelectorToggle />
    </div>
    <CardList />
    <Footer />
  </div>)

}

export default App;

import Header from "./components/Header";
import Footer from "./components/Footer";
import CardList from "./components/CardList";
import SetSelector from "./components/SetSelector";

function App() {
  return (<div>
    <Header />
    <div className="flex items-center justify-center">
      <SetSelector />
    </div>
    <CardList />
    <Footer />
  </div>)

}

export default App;

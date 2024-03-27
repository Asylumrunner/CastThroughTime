import Header from "./components/Header";
import CardList from "./components/CardList";
import { useRef, useEffect } from "react";
import { useSelector } from 'react-redux';

function App() {
  var listRef = useRef(null)
  const lastPlayedSet = useSelector((state) => {
    return state.currentSet.lastPlayedSet;
  })

  useEffect(() => {
    listRef.current.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth"
    })
  }, [lastPlayedSet])

  return (<div ref={listRef} className="h-screen overflow-scroll snap-y snap-proximity lg:snap-mandatory bg-gradient-to-b from-cyan-500 to-emerald-300">
    <Header />
    <CardList />
  </div>)

}

export default App;

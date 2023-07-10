import { createContext, useState, useEffect } from 'react';
import setDict from '../data/set-data.json'

const SetContext = createContext();

function SetContextProvider({children}) {

    const [lastPlayedSet, setLastPlayedSet] = useState('3ed');

    const [sets, setSets] = useState({})

    const [cards, setCards] = useState([]);

    const selectSet = (setCode) => {
        console.log(setCode);
        setLastPlayedSet(setCode);
    }
    const cardsToShow = cards.filter((card) => sets[lastPlayedSet].date < sets[card.set].date)
    
    const setControl = {
        lastPlayedSet,
        selectSet,
        cardsToShow,
        sets
    }

    return <SetContext.Provider value={setControl}>
        {children}
    </SetContext.Provider>
}

export default SetContext;
export { SetContextProvider }
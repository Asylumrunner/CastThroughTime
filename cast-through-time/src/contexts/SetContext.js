import { createContext, useState } from 'react';
import setDict from '../data/set-data.json'

const SetContext = createContext();

function SetContextProvider({children}) {

    const [lastPlayedSet, setLastPlayedSet] = useState('3ed');

    const sets = setDict

    const cards = [
        {
            header: 'header',
            set: '3ed',
            subheader: 'subheader',
            img: 'img.png',
            body: 'body',
            category: 'category'
        }, 
        {
            header: 'header',
            set: '5ed',
            subheader: 'subheader',
            img: 'img.png',
            body: 'body',
            category: 'category'
        }, 
        {
            header: 'header',
            set: '7ed',
            subheader: 'subheader',
            img: 'img.png',
            body: 'body',
            category: 'category'
        }
    ]

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
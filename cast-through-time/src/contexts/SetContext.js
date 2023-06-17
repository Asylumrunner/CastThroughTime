import { createContext, useState } from 'react';
import setDict from '../data/set-data.json'

const SetContext = createContext();

function SetContextProvider({children}) {

    const [lastPlayedSet, setLastPlayedSet] = useState('3ed');

    const cards = [
        {
            header: 'header',
            set: 'leb',
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

    const cardsToShow = cards.filter((card) => setDict[lastPlayedSet].date < setDict[card.set].date)
    
    const setControl = {
        lastPlayedSet,
        setLastPlayedSet,
        cardsToShow
    }

    return <SetContext.Provider value={setControl}>
        {children}
    </SetContext.Provider>
}

export default SetContext;
export { SetContextProvider }
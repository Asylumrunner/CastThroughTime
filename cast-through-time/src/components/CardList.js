import { useContext } from 'react';
import SetContext from '../contexts/SetContext';
import InfoCard from './InfoCard';

function CardList() {
    const { cardsToShow } = useContext(SetContext)
    console.log(cardsToShow)
    const cards = cardsToShow.map((card) => {
        return <InfoCard card={card} />
    })

    return <div>
        {cards}
    </div>
}

export default CardList;
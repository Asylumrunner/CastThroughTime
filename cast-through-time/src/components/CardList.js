import { useContext } from 'react';
import SetContext from '../contexts/SetContext';
import InfoCard from './InfoCard';
import { useFetchCardsQuery } from '../store';

function CardList() {
    //const { cardsToShow } = useContext(SetContext)
    const { data, error, isFetching } = useFetchCardsQuery();

    if(isFetching) {
        return <div>Fetching set data</div>
    } else if (error) {
        console.log(error);
        return <div>Fetching set data fucked up somewhere</div>
    } else {
        const cards = data.map((card) => {
            return <InfoCard card={card} />
        })
    
        return <div>
            {cards}
        </div>
    }
    
}

export default CardList;
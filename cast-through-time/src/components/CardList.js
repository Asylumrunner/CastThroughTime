import InfoCard from './InfoCard';
import { useFetchCardsQuery, useFetchSetsQuery } from '../store';
import { useSelector } from 'react-redux';

function CardList() {
    const fetchCards = useFetchCardsQuery();
    const fetchSets = useFetchSetsQuery();

    const lastPlayedSet = useSelector((state) => {
        return state.currentSet.lastPlayedSet;
      })

    if (fetchCards.isFetching || fetchSets.isFetching) {
        return <div>Fetching set data</div>
    } else if (fetchCards.error || fetchSets.error) {
        return <div>Fetching set data fucked up somewhere</div>
    } else {
        const filteredCards = fetchCards.data.filter((card) => {
            return (new Date(fetchSets.data[lastPlayedSet].date) < new Date(fetchSets.data[card.set].date)) && ( !card["boundary-set"] || (new Date(fetchSets.data[lastPlayedSet].date) > new Date(fetchSets.data[card["boundary-set"]].date)))
        })

        const cards = filteredCards.map((card) => {
            return <InfoCard key={card.identifier} card={card} />
        })
    
        return <div>
            {cards}
        </div>
    }
    
}

export default CardList;
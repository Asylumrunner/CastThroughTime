import { useFetchSetsQuery } from "../store";
import { changeLastPlayedSet } from "../store";
import { useSelector, useDispatch } from "react-redux";
import Select from "react-select";

function SetDropdown() {
    const dispatch = useDispatch()
    const { data, error, isFetching } = useFetchSetsQuery();

    const lastPlayedSet = useSelector((state) => {
      return state.currentSet.lastPlayedSet;
    })

    const setSelectedSet = (option) => {
        dispatch(changeLastPlayedSet(option.value))
    }

    if (isFetching) {
        return <div>Loading data plz be patient</div>
    } else if (error) {
        return <div>Oopsie woopsie we had a fuckie wuckie</div>
    } else {
        const sortedSets = Object.keys(data).sort((a, b) => {
            return new Date(data[b].date) - new Date(data[a].date)
          })
        
        let options = []
        
        sortedSets.forEach((setCode) => {
            options.push({ value: setCode, label: `${data[setCode].name} (${data[setCode].date.slice(0, 4)})`})
        })
        
        return (<div>
            <div className="mb-3 text-center" style={{fontFamily: 'Roboto Slab'}}>You haven't played Magic since <b>{ data[lastPlayedSet].name }</b></div>
            <Select defaultValue={lastPlayedSet} options={options} onChange={setSelectedSet} />
        </div>)
    }
}

export default SetDropdown
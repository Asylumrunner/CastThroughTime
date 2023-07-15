import { useRef, useState } from "react";
import { useFetchSetsQuery } from "../store";
import { changeLastPlayedSet } from "../store";
import { useSelector, useDispatch } from "react-redux";

function SetSelector() {
    const dispatch = useDispatch()
    const { data, error, isFetching } = useFetchSetsQuery();

    const lastPlayedSet = useSelector((state) => {
      return state.currentSet.lastPlayedSet;
    })

    const sliderRef = useRef(null);
    const [startIdx, setStartIdx] = useState(0);
    const [endIdx, setEndIdx] = useState(5); // Adjust the number of sets to display

    const handleChangeLastPlayedSet = (set) => {
      dispatch(changeLastPlayedSet(set))
    }
  
    if (isFetching) {
      return <div>Loading data plz be patient</div>

    } else if (error) {
      return <div>Oopsie woopsie we had a fuckie wuckie</div>

    } else {

      const sortedSets = Object.keys(data).sort((a, b) => {
        return new Date(data[b].date) - new Date(data[a].date)
      })

      const visibleSetKeys = sortedSets.slice(startIdx, endIdx);
      const visibleSets = visibleSetKeys.map((key) => {
          return {...data[key], code: key}
      })

      const iteratedSets = visibleSets.map((set) => (
        <div className="flex-shrink-0" key={set.code} style={{ width: '200px' }} onClick={() => handleChangeLastPlayedSet(set.code)}>
          <div className="flex items-center justify-center">
            <img src={`https://castthroughtime.s3.us-west-1.amazonaws.com/setsymbol/${set.code}.svg`} alt={set.name} className="w-24 h-24" />
          </div>
          <div className="text-center">
            <p style={{fontFamily: 'PT Serif'}} className={`font-semibold ${set.code === lastPlayedSet && 'text-green-500'}`}>{set.name}</p>
            <p>{set.date}</p>
          </div>
        </div>
      ))

      return (
        <div>
          <div className="flex items-center justify-center mb-3" style={{fontFamily: 'Roboto Slab'}}>You haven't played Magic since <b className="ps-1">{ data[lastPlayedSet].name }</b></div>
          <div className="flex items-center space-x-4">
            <button
              className="px-4 py-2 bg-gray-300 rounded-md"
              disabled={startIdx === 0}
              onClick={() => {
                setStartIdx(0);
                setEndIdx(5);
              }}
            >
              Most Recent
            </button>
            <button
              className="px-4 py-2 bg-gray-300 rounded-md"
              disabled={startIdx === 0}
              onClick={() => {
                setStartIdx(startIdx - 1);
                setEndIdx(endIdx - 1);
              }}
            >
              Left
            </button>
            <div className="flex space-x-4 overflow-x-auto scrollbar-hide" ref={sliderRef}>
              {iteratedSets}
            </div>
            <button
              className="px-4 py-2 bg-gray-300 rounded-md"
              disabled={endIdx >= Object.values(data).length}
              onClick={() => {
                setStartIdx(startIdx + 1);
                setEndIdx(endIdx + 1);
              }}
            >
              Right
            </button>
            <button
              className="px-4 py-2 bg-gray-300 rounded-md"
              disabled={endIdx >= Object.values(data).length}
              onClick={() => {
                setStartIdx(Object.values(data).length - 5);
                setEndIdx(Object.values(data).length);
              }}
            >
              Oldest
            </button>
          </div>
        </div>
      );
    }
  };
  

export default SetSelector;
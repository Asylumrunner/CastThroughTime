import { useContext, useRef, useState } from "react";
import SetContext from "../contexts/SetContext";

function SetSelector() {
    const { sets, lastPlayedSet, selectSet } = useContext(SetContext);
    const sliderRef = useRef(null);
    const [startIdx, setStartIdx] = useState(0);
    const [endIdx, setEndIdx] = useState(5); // Adjust the number of sets to display
  
    const visibleSetKeys = Object.keys(sets).slice(startIdx, endIdx);
    const visibleSets = visibleSetKeys.map((key) => {
        return {...sets[key], code: key}
    })

    const iteratedSets = visibleSets.map((set) => (
      <div className="flex-shrink-0" key={set.code} style={{ width: '200px' }} onClick={() => selectSet(set.code)}>
        <div className="flex items-center justify-center">
          <img src={set.img_url} alt={set.name} className="w-24 h-24" />
        </div>
        <div className="text-center">
          <p className={`font-semibold ${set.code === lastPlayedSet && 'text-green-500'}`}>{set.name}</p>
          <p>{set.date}</p>
        </div>
      </div>
    ))

    return (
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
            disabled={endIdx >= Object.values(sets).length}
            onClick={() => {
              setStartIdx(startIdx + 1);
              setEndIdx(endIdx + 1);
            }}
          >
            Right
          </button>
          <button
            className="px-4 py-2 bg-gray-300 rounded-md"
            disabled={endIdx >= Object.values(sets).length}
            onClick={() => {
              setStartIdx(Object.values(sets).length - 5);
              setEndIdx(Object.values(sets).length);
            }}
          >
            Oldest
          </button>
        </div>
      );
  };
  

export default SetSelector;
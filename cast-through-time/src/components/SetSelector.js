import { useContext, useRef, useState } from "react";
import SetContext from "../contexts/SetContext";

function SetSelector() {
    const { sets, lastPlayedSet, selectSet } = useContext(SetContext);
    const sliderRef = useRef(null);
    const [startIdx, setStartIdx] = useState(0);
    const [endIdx, setEndIdx] = useState(5); // Adjust the number of sets to display
  
    const handleScroll = (scrollOffset) => {
      sliderRef.current.scrollLeft += scrollOffset;
    };
  
    const visibleSetKeys = Object.keys(sets).slice(startIdx, endIdx);
    const visibleSets = visibleSetKeys.map((key) => {
        return {...sets[key], code: key}
    })
    console.log(visibleSets)
  
    return (
        <div className="flex items-center space-x-4">
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
          <div
            className="flex space-x-4 overflow-x-auto scrollbar-hide"
            ref={sliderRef}
          >
            {visibleSets.map((set) => (
              <div className="flex-shrink-0" key={set.code} onClick={() => selectSet(set.code)}>
                <img src={set.img_url} alt={set.name} className="w-24 h-24" />
                <p>{set.date}</p>
              </div>
            ))}
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
        </div>
      );
  };
  

export default SetSelector;
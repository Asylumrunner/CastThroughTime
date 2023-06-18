import { useContext } from "react";
import SetContext from "../contexts/SetContext";

function SetSelector() {
    const { sets, selectSet, lastPlayedSet } = useContext(SetContext)

    const setCards = Object.keys(sets).map((setCode) => {
        const iconName = `ss ss-4x ss-rare ss-grad ss-${setCode}`
        const boxStyle = lastPlayedSet === setCode ? "border-4 border-red-500 max-w-screen-sm justify-center" : "border border-black max-w-screen-sm"
        return (<div key={setCode} onClick={() => {selectSet(setCode)}}className={boxStyle}>
            <i className={iconName} />
            <div>{sets[setCode].name}</div>
            <div>{sets[setCode].date}</div>
        </div>)
    })

    return <div className="grid gap-4 grid-cols-3 grid-rows-3">{setCards}</div>
}

export default SetSelector;
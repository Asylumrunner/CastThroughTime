import { useEffect, useState } from "react"
import SetSelector from "./SetSelector"
import SetDropdown from "./SetDropdown"

function SetSelectorToggle() {
    const narrowWindowThreshold = 1300
    const [narrowWindow, setNarrowWindow] = useState(window.innerWidth < narrowWindowThreshold)

    const checkForNarrowToggle = (width) => {
      let resizeRequired = (width >= narrowWindowThreshold) == narrowWindow
      if (resizeRequired) {
        setNarrowWindow(!narrowWindow)
      }
    }

    useEffect(() => {
      function handleResize() {
        checkForNarrowToggle(window.innerWidth)
      }
      window.addEventListener('resize', handleResize)

      return () => {
        window.removeEventListener('resize', handleResize)
      }
    }, [narrowWindow])

    if (narrowWindow) {
        return <SetDropdown />
    } else {
        return <SetSelector />
    }
}

export default SetSelectorToggle
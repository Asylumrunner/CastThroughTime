function Header() {
    return (<div className="flex flex-col md:flex-row justify-items-center items-center pb-8">
        <div className="md:basis-1/4"><h2 style={{fontFamily: 'PT Serif'}} className="m-3 text-4xl font-bold text-center">Cast Through Time</h2></div>
        <div className="md:basis-3/4 mt-4"><p style={{fontFamily: 'Roboto Slab'}} className="px-8">Been a while since you played <i>Magic: The Gathering</i>? Understandable, the game's been going for over 30 years. 
        With every new set comes new cards, new keywords, new ways to play, and frequently, new card types and major changes to the rules. If you're coming back to the game after a hiatus, and just need a catch-up on what you've missed, we gotcha.
        <br /><br />Using the set selector below, pick the last set to have come out before you stepped away from the game of <i>Magic</i>. We'll pull up the biggest rules changes, new card types, 
        play paradigms, and other big modifications to the game of <i>Magic</i> since you were gone. We prioritize big rules changes and new gameplay paradigms, the sorts of things that will probably come up in every game of <i>Magic</i> you play. That way, you can hit the ground running, learning the smaller, more situation stuff if and when it comes up.</p></div>
    </div>)
}

export default Header
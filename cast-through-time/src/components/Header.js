import SetDropdown from './SetDropdown'

function Header() {
    return (
        <div style={{fontFamily: 'Roboto Slab'}} className="sticky top-0 w-full bg-transparent py-4 h-1/5">
            <div className="text-center px-4">
                <h1 className="text-2xl font-semibold">Cast Through Time</h1>
                <p><i>Cast Through Time</i> is designed to help players refresh on the rules of <i>Magic: The Gathering</i> after a long break from the game. Simply select the set closest to when you stopped playing the game, and we'll give you a list of every major rules change, new card type, and format changes since you last played. For a full rules refresher, consult <a href="https://magic.wizards.com/en/how-to-play">Wizards of the Coast's official rules explanation</a><br/></p>
            </div>
            <div className="flex items-center justify-center">
                <SetDropdown />
            </div>
        </div>
        
    )
}

export default Header
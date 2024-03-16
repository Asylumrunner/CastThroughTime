function InfoCard({card}) {

    const checkImageExistsLocal = () => {
        try {
            require(`../images/${card.set}.svg`)
            return true
        } catch (error) {
            console.log(error)
            return false
        }
    }

    const imagePath = checkImageExistsLocal() ? `../images/${card.set}.svg` : `https://castthroughtime.s3.us-west-1.amazonaws.com/setsymbol/${card.set}.svg`

    return (<div className="flex flex-row snap-start h-screen pt-20">
        {card.img && <div className="basis-1/2 self-center justify-self-center">
            <img alt="An example for this card" src={`/img/${card.img}`}/>
        </div>}
        <div className="basis-1/2 flex flex-col pr-8 self-center">
            <div className="flex flex-row content-center">
                <img src={imagePath} alt={card.set} title={`Introduced in ${card.set.toUpperCase()}`}className="w-10 h-10 mr-3" />
                <h1 style={{fontFamily: 'PT Serif'}} className="text-3xl font-bold self-center">{card.header}</h1>  
            </div>
            <div className="italic">{card.subheader}<br/><br/></div>
            <div>{card.body.split("/n").map((row) => {
                return <>
                    {row}<br/><br/>
                </>
            })}
            </div>
        </div>
    </div>)
}

export default InfoCard;
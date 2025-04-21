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

    const condtlImgFormatting = card.img ? "basis-1/2" : "ml-10"
    const classNames = `${condtlImgFormatting} flex flex-col px-8 lg:pl-0 self-center`

    const imagePath = checkImageExistsLocal() ? `../images/${card.set}.svg` : `https://castthroughtime.s3.us-west-1.amazonaws.com/setsymbol/${card.set}.svg`

    return (<div className="flex flex-col lg:flex-row snap-start h-screen md:pt-20 mb-30 lg:mb-0">
        {card.img && <div className="basis-1/2 self-center justify-self-center">
            <img className="size-1/3 lg:size-auto" alt="An example for this card" src={`/img/${card.img}`}/>
        </div>}
        <div className={classNames}>
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
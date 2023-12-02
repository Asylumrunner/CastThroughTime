function InfoCard({card}) {

    const type_gradients = {
        type:  "from-slate-300 to-blue-300",
        rules: "from-slate-300 to-red-300",
        format: "from-slate-300 to-green-300",
        keywords: "from-slate-300 to-yellow-300",
        lore: "from-slate-300 to-cyan-300",
        product: "from-slate-300 to-violet-300",
    }

    let cardContents;

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

    if (card.img) {
        cardContents = (<div className="flex flex-wrap xl:flex-nowrap items-center justify-center xl:justify-normal" style={{fontFamily: 'Roboto Slab'}}>
        <div className='xl:w-1/3'><img alt='pictures' src={`/img/${card.img}`}/></div>
        <div className='xl:w-2/3 mx-2'>{card.body.split("/n").map((row) => {
            return <>
                {row}<br/><br/>
            </>
        })}</div>
    </div>)
    } else {
        cardContents = (<div className="flex items-center" style={{fontFamily: 'Roboto Slab'}}>
        <div className='mx-2'>{card.body.split("/n").map((row) => {
            return <>
                {row}<br/><br/>
            </>
        })}</div>
    </div>)
    }

    return (<div className={`border-4 border-black bg-gradient-to-r ${type_gradients[card.category]} m-4 rounded-lg`}>
        <div className="m-2 flex flex-row items-center justify-between">
            <div className="flex-col justify-items-center">
                <h1 style={{fontFamily: 'PT Serif'}} className="text-3xl font-bold underline justify-self-center">{card.header}</h1>
                <div className="italic">{card.subheader}</div>
            </div>     
            <div className="flex-col items-center">
                <div className="flex place-content-center"><img src={imagePath} alt={card.set} className="w-16 h-16" /></div>
                <div style={{fontFamily: 'PT Serif'}}>Introduced in {card.set.toUpperCase()}</div>
            </div>
        </div>
        {cardContents}     
    </div>)
}

export default InfoCard;
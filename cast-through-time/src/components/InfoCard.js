import '../keyrune-master/keyrune-master/css/keyrune.css';

function InfoCard({card}) {
    const iconName = `ss ss-4x ss-rare ss-grad ss-${card.set}`
    return (<div className='border border-red-500 m-4'>
        <div className="m-2 flex flex-row items-center justify-between">
            <div className="flex-col justify-items-center">
                <h1 className="text-3xl font-bold underline justify-self-center">{card.header}</h1>
                <div className="italic">{card.subheader}</div>
            </div>     
            <div className="flex-col items-center">
                <div className="flex place-content-center"><i className={iconName} /></div>
                <div>Introduced in {card.set.toUpperCase()}</div>
            </div>
        </div>
        <div className="m-2">
            <div>{card.img}</div>
            <div>{card.body.split("/n").map((row) => {
                return <>
                    {row}<br/>
                </>
            })}</div>
        </div>        
    </div>)
}

export default InfoCard;
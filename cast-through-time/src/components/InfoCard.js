import '../keyrune-master/keyrune-master/css/keyrune.css';

function InfoCard({card}) {
    const iconName = `ss ss-4x ss-rare ss-grad ss-${card.set}`
    return (<div className='border border-red-500'>
        <h1 className="text-3xl font-bold underline justify-self-center">{card.header}</h1>
        <i className={iconName}></i>
        <div>{card.subheader}</div>
        <div className='grid grid-cols-3 gap-4 place-items-center'>
            <div className='border border-black'>{card.img}</div>
            <div className='border border-black'>{card.body}</div>
        </div>        
    </div>)
}

export default InfoCard;
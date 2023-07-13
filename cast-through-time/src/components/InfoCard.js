import '../keyrune-master/keyrune-master/css/keyrune.css';
import image from '../img/sagas.png'

function InfoCard({card}) {
    const iconName = `ss ss-4x ss-rare ss-grad ss-${card.set}`
    return (<div className='border-4 border-black bg-slate-300 m-4 rounded-lg'>
        <div className="m-2 flex flex-row items-center justify-between">
            <div className="flex-col justify-items-center">
                <h1 style={{fontFamily: 'PT Serif'}} className="text-3xl font-bold underline justify-self-center">{card.header}</h1>
                <div className="italic">{card.subheader}</div>
            </div>     
            <div className="flex-col items-center">
                <div className="flex place-content-center"><i className={iconName} /></div>
                <div style={{fontFamily: 'PT Serif'}}>Introduced in {card.set.toUpperCase()}</div>
            </div>
        </div>
        <div className="flex items-center" style={{fontFamily: 'Roboto Slab'}}>
            <div className='w-1/3'><img alt='pictures' src={image}/></div>
            <div className='w-2/3 mr-2'>{card.body.split("/n").map((row) => {
                return <>
                    {row}<br/><br/>
                </>
            })}</div>
        </div>        
    </div>)
}

export default InfoCard;
import RightCardContent from './RightCardContent'

const RightCard = (props) => {
    
    return (
        <div className='h-full w-80 rounded-2xl shrink-0 flex flex-nowrap overflow-x object-cover overflow-hidden relative'>
            <img className='h-full w-full object-cover' src={props.img} alt=''/>
            <RightCardContent color={props.color} id={props.id} tag={props.tag} />
        </div>
    )
}

export default RightCard
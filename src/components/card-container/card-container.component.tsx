import '../card-container/card-container.styles.css'
import {Monsters} from '../../App'

type CardProps={
    monsterHandler:Monsters;
}

const cardContainer = (props : CardProps) => {

    const {monsterHandler} = props;
    const {name,id,email} = monsterHandler;
    return (
        <div className= 'card-container' key={id}>
        <img alt={`monster ${name}`} src={`https://robohash.org/${id}?set=set2&size=180x180`} />
        <h2>{name}</h2>
        <p>{email}</p>
    </div>
    )

}

export default cardContainer;
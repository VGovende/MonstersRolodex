import './card-list.styles.css'
import CardContainer from '../card-container/card-container.component';
import {Monsters} from '../../App'

type CardListProps = {
    monsters:Monsters[];
}

const cardList = ({monsters}:CardListProps) => {

    return (
        <div className="card-list" >
            {
            monsters.map(
                (monster) => {
                    return(
                        <CardContainer key={monster.id} monsterHandler = {monster}/>
                )}
            ) 
            }
        </div>
    );

}

export default cardList;
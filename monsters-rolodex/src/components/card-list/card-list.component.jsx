import './card-list.styles.css'
import CardContainer from '../../components/card-container/card-container.component';

const cardList = ({monsters}) => {

    return (
        <div className="card-list">
            {
            monsters.map(
                (monster) => {
                    return(
                        <CardContainer monsterHandler = {monster}/>
                )}
            ) 
            }
        </div>
    );

}

export default cardList;
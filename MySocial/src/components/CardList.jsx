
import Card from './Card.jsx'
function CardList(props) {

    const cardElelemts = props.cards.map(card =>{
        return<Card 
            id={card.id}
            image={card.image}
            titre={card.titre_carte}
            description={card.description}
        />
    });
    return(
       <ul class="card-list">
          {cardElelemts}
        </ul> 
    )
    
  }
  export default CardList;
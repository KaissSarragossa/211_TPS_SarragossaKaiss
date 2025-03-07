import Card from './Card.jsx'

function CardList(props) {

    const cardElements = props.cards.map(card =>{
        return<Card 
            key={card.id}
            image={card.image}
            titre={card.titre_carte}
            description={card.description}
        />
    });
    return(
        <ul class="card-list">
            {cardElements}
        </ul> 
       
    );
    
  }
  export default CardList;
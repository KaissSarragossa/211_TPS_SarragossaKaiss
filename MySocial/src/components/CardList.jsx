import './cardlist.css'
import cards from './cards.js'

function CardList() {

const cardElelemts = cards.map(element =>{
    return<CardList 
        id={element.id}
        image={element.image}
        titre_carte={element.titre_carte}
        description={element.description}
    />
})

return (
    <>
        <ul class="card-list">
          {cardElelemts}
        </ul>
    </>
  )
}
export default CardList;
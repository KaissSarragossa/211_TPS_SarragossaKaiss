import CardList from './CardList.jsx'
import './maincomponent.css'
import ProfileContent from './ProfileContent'
import cardlist from './cardlist.js'


function mainComponent() {

  const cardElelemts = cardlist.map(card =>{
    return<CardList 
        id={card.id}
        image={card.image}
        titre={card.titre_carte}
        description={card.description}
    />
})

  return (
    <>
      <main>
        <ProfileContent bio="Lorem ipsum dolor sit, amet consectetur adipisicing elit 📷✈️🏕️" post="4" followers="188" following="206"/>
        <ul class="card-list">
          {cardElelemts}
        </ul>
      </main>
        
    </>
  )
}

export default mainComponent
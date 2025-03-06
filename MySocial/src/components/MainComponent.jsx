import CardList from './CardList.jsx'
import './maincomponent.css'
import ProfileContent from './ProfileContent'
import cards from './cards.js'
import profile from './profile.js'

function mainComponent() {

  const cardElelemts = cards.map(element =>{
    return<CardList 
        id={element.id}
        image={element.image}
        titre_carte={element.titre_carte}
        description={element.description}
    />
})

  const profilElements = profile.map(element =>{
    return<ProfileContent
        profileimage={element.profileimage}
        nom={element.nom}
        bio={element.bio}
        post={element.post}
        followers={element.followers}
        following={element.following}
    />
})

  return (
    <>
      <main>
        {profilElements}
        <ul class="card-list">
          {cardElelemts}
        </ul>
      </main>
    </>
  )
}

export default mainComponent;
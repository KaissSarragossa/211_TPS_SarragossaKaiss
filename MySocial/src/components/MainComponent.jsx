import CardList from './Card.jsx'
import './maincomponent.css'
import ProfileContent from './ProfileContent'
import cards from './cards.js'


function mainComponent() {
  return (
    <>
      <main>
        <ProfileContent 
            bio="Lorem ipsum dolor sit amet, consectetur adipiscing elit. 📷✈️🏕️"  
            profileimage = "https://images.unsplash.com/photo-1513721032312-6a18a42c8763?w=152&h=152&fit=crop&crop=faces" 
            nom = "Jane Doe" 
            post = {cards.length}
            followers = "188"
            following = "206"
        />
        <CardList cards = {cards}/>
      </main>
    </>
  )
}

export default mainComponent;
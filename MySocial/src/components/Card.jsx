import './card.css'

function Card(prop) {

  return (          
        <li class="card" >
            <img class="card-image" src={prop.image} alt={prop.titre_carte} />
            <div class="card-description">
                <h2>{prop.titre_carte}</h2>
                <p>{prop.description}</p>
            </div>
        </li>
);
}

export default Card;
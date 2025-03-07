import './cardlist.css'

function Card(props) {

  return (          
        <li class="card" >
            <img class="card-image" src={props.image} alt={props.titre}/>
            <div class="card-description">
                <h2>{props.titre}</h2>
                <p>{props.description}</p>
            </div>
        </li>
  );
}
export default Card;
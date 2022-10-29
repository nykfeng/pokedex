import './Pokecard.css';

const POKE_API = (id) => {
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`
}

const Pokecard = (props) => {
  return (
    <div className="Pokecard">
      <h1>{props.name}</h1>
      <img src={POKE_API(props.id)} alt={props.name + " pokemon"}/>
      <p>Type: {props.type}</p>
      <p>Experience: {props.exp}</p>
    </div>
  );
};

export default Pokecard;

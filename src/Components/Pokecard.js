import "./Pokecard.css";

const POKE_API = (id) => {
  return `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${id.toString().padStart(3, '0')}.png`;
};

const Pokecard = (props) => {
  return (
    <div className="Pokecard">
      <h1 className="Pokecard-title">{props.name}</h1>
      <img src={POKE_API(props.id)} alt={props.name + " pokemon"} />
      <p className="Pokecard-data">Type: {props.type}</p>
      <p className="Pokecard-data">
        Experience: <span className="Pokecard-data__exp">{props.exp}</span>
      </p>
    </div>
  );
};

export default Pokecard;

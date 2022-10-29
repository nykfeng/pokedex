import "./Pokedex.css";
import Pokecard from "./Pokecard";

const Pokedex = (props) => {
  let title;
  if (props.isWinner) {
    title = <h1 className="Pokedex-winner">Winning Hand!</h1>;
  } else {
    title = <h1 className="Pokedex-loser">Losing Hand!</h1>;
  }

  return (
    <div className="Pokedex">
      {title}
      <h3>Total Experience: <span className="exp-text">{props.exp}</span></h3>
      <div className="Pokedex-cards">
        {props.pokemon.map((p) => (
          <Pokecard
            id={p.id}
            name={p.name}
            type={p.type}
            exp={p.base_experience}
          />
        ))}
      </div>
    </div>
  );
};

export default Pokedex;

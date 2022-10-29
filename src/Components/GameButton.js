import "./GameButton.css";

const GameButton = () => {
  const clickHandler = () => {
    window.location.reload();
  };
  return (
    <div className="reset-game">
      <button className="reset-btn" onClick={clickHandler}>
        Pokedex Game
      </button>
    </div>
  );
};

export default GameButton;

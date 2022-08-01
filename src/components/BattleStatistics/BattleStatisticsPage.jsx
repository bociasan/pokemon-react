import "./battleStatistics.css";
import pokemonEnd from "../../img/pokemon_end.jpeg";
export const BattleStatisticsPage = () => {
  return (
    <div className="battleStatistics">
      <div className="imageContainer">
        <img className="pokemonImg" src={pokemonEnd} />
      </div>
      <div className="textContainer">
        <h1 className="title">Battle Results</h1>
        <h3>Your score:</h3>
      </div>
    </div>
  );
};

import "./card.css";
import "../../styles/fonts.css";
import { useEffect, useState } from "react";
import BackgroundImage from "../BackgroundComponent/backgroundComponent";
import backgroundImage from "../../img/background.webp";
import FavoriteIcon from "@material-ui/icons/Favorite";
import RoundIntroduction from "./RoundIntroduction";
import BattleStatisticsComponent from "../BattleStatistics/BattleStatisticsPage";
function PokemonCards({ userPoints, setUserPoints }) {
  const [gameHearts, setGameHearts] = useState(new Array(3));
  const [pokemons, setPokemons] = useState([]);
  const [battleGroundCardsStatus, setBattleGroundCardStatus] = useState(false);

  if (gameHearts.length > 0)
    return (
      <div className="battleground page">
        <BackgroundImage image={backgroundImage} />
        <div className="gameHeartRemaining">
          {[...gameHearts].map((value, index) => (
            <FavoriteIcon
              key={index}
              style={{ color: "red", fontSize: "100px" }}
            />
          ))}
        </div>

        <RoundIntroduction
          delay={2000}
          setBattleGroundCardStatus={setBattleGroundCardStatus}
          battleGroundCardsStatus={battleGroundCardsStatus}
          gameHearts={gameHearts}
          setGameHearts={setGameHearts}
          userPoints={userPoints}
          setUserPoints={setUserPoints}
        />
      </div>
    );
  else if (gameHearts.length === 0) return <BattleStatisticsComponent />;
}
export default PokemonCards;

import "./card.css";
import "../../styles/fonts.css";
import { useState } from "react";
import BackgroundImage from "../BackgroundComponent/backgroundComponent";
import backgroundImage from "../../img/background.webp";
import FavoriteIcon from "@material-ui/icons/Favorite";
import RoundIntroduction from "./RoundIntroduction";
import { Navigate } from "react-router-dom";
function PokemonCards({ handleChangeUserPoints }) {
  const [gameHearts, setGameHearts] = useState(new Array(3));
  const [battleGroundCardsStatus, setBattleGroundCardStatus] = useState(false);
  const handleChangeGameHearts = () =>
    setGameHearts(new Array(gameHearts.length - 1));
  const handleChangeBattleGroundStatus = () =>
    setBattleGroundCardStatus(!battleGroundCardsStatus);
  if (gameHearts.length > 0)
    return (
      <div className="battleground page">
        <BackgroundImage image={backgroundImage} />
        <div className="gameHeartRemaining">
          {[...gameHearts].map((value, index) => (
            <FavoriteIcon
              className="heart-img"
              key={index}
              style={{ color: "red", fontSize: "50px" }}
            />
          ))}
        </div>

        <RoundIntroduction
          delay={1000}
          handleChangeUserPoints={handleChangeUserPoints}
          handleChangeGameHearts={handleChangeGameHearts}
          handleChangeBattleGroundStatus={handleChangeBattleGroundStatus}
        />
      </div>
    );
  else if (gameHearts.length === 0) return <Navigate to="/statistics" />;
}
export default PokemonCards;

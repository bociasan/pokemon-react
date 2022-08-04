import React from "react";
import CardsContainer from "./CardContainer";
import { useState, useEffect } from "react";
import { CSSTransition } from "react-transition-group";

const RoundIntroduction = ({
  delay,
  // pokemons,
  // battleGroundCardsStatus,
  // setBattleGroundCardStatus,
  gameHearts,
  setGameHearts,
  userPoints,
  setUserPoints,
}) => {
  const [battleRound, setBattleRound] = useState(1);
  const [visible, setVisible] = useState(true);
  // console.log(visible);
  const handleChangeRoundClick = () => {
    // setBattleGroundCardStatus(!battleGroundCardsStatus);
    setBattleRound(battleRound + 1);
    setVisible(true);

  };
  // console.log(battleRound);
  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), delay);
    return () => clearTimeout(timer);
  }, [battleRound]);
  return visible ? (
    <CSSTransition in={true} appear={true} classNames="example" timeout={2000}>
      <div className="roundAnnouncer">{`Round ${battleRound}`}</div>
    </CSSTransition>
  ) : (
    <CardsContainer
        chance={Math.trunc(Math.random()*2)}
      // pokemons={pokemons}
      handleChangeRoundClick={handleChangeRoundClick}
      battleRound={battleRound}
      setBattleRound={setBattleRound}
      gameHearts={gameHearts}
      setGameHearts={setGameHearts}
      userPoints={userPoints}
      setUserPoints={setUserPoints}
    />
  );
};
export default RoundIntroduction;

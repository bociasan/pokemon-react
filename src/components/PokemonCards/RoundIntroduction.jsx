import React from "react";
import CardsContainer from "./CardContainer";
import { useState, useEffect } from "react";
import { CSSTransition } from "react-transition-group";

const RoundIntroduction = ({
  delay,
  pokemons,
  battleGroundCardsStatus,
  setBattleGroundCardStatus,
}) => {
  const [battleRound, setBattleRound] = useState(1);
  const [visible, setVisible] = useState(true);
  const handleChangeRoundClick = () => {
    setBattleGroundCardStatus(!battleGroundCardsStatus);
    setBattleRound(battleRound + 1);
    setVisible(!visible);
  };
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
      pokemons={pokemons}
      handleChangeRoundClick={handleChangeRoundClick}
      battleRound={battleRound}
    />
  );
};
export default RoundIntroduction;

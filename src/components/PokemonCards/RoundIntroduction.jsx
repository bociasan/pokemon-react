import React from "react";
import CardsContainer from "./CardContainer";
import { useState, useEffect } from "react";
import { CSSTransition } from "react-transition-group";

const RoundIntroduction = ({
  delay,
  pokemons,
  handleChangeUserPoints,
  handleChangeGameHearts,
  handleChangeBattleGroundStatus,
}) => {
  const [battleRound, setBattleRound] = useState(1);
  const [visible, setVisible] = useState(true);
  const handleChangeRoundClick = () => {
    handleChangeBattleGroundStatus();
    setBattleRound(battleRound + 1);
    setVisible(true);
  };
  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), delay);
    return () => clearTimeout(timer);
  }, [battleRound]);
  return visible ? (
    <CSSTransition in={true} appear={true} classNames="example" timeout={delay}>
      <div className="roundAnnouncer">{`Round ${battleRound}`}</div>
    </CSSTransition>
  ) : (
    <CardsContainer
      pokemons={pokemons}
      handleChangeRoundClick={handleChangeRoundClick}
      handleChangeUserPoints={handleChangeUserPoints}
      handleChangeGameHearts={handleChangeGameHearts}
    />
  );
};
export default RoundIntroduction;

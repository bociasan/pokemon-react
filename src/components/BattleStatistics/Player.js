export const Player = ({ player, index }) => {
  return (
    <div className="player">
      <span className="playerOverallRank">{index + 1}</span>
      <p className="playerName">
        <i className="fa-solid fa-scroll"></i>
        {player.name}
      </p>
      <p className="playerScore">
        {player.score} <i className="fa-solid fa-dragon"></i>
      </p>
    </div>
  );
};

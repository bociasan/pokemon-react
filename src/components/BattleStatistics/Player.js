export const Player = ({ player, index }) => {
  return (
    <div className="player">
      <span className="playerOverallRank">{index + 1}</span>
      <p className="playerName">
        <i class="fa-solid fa-scroll"></i>
        {player.name}
      </p>
      <p className="playerScore">
        {player.score} <i class="fa-solid fa-dragon"></i>
      </p>
    </div>
  );
};

export const Player = ({ player, index }) => {
  return (
    <div className="player">
      <button className="playerBtn">{index + 1}</button>
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

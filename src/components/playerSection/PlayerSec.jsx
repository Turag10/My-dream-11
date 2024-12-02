import PropTypes from "prop-types";
import PlayerCard from "../PlayerCard";

const PlayerSec = ({ players, onChoosePlayer, selectedPlayers, setView }) => {
  return (
    <section className="p-8 bg-gray-100">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Available Players</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {players.map((player) => (
            <PlayerCard
              key={player.id}
              player={player}
              onChoosePlayer={onChoosePlayer}
              isSelected={selectedPlayers.some((p) => p.id === player.id)}
            />
          ))}
        </div>
        
      </div>
    </section>
  );
};

PlayerSec.propTypes = {
  players: PropTypes.arrayOf(PropTypes.object).isRequired,
  selectedPlayers: PropTypes.arrayOf(PropTypes.object).isRequired,
  onChoosePlayer: PropTypes.func.isRequired,
  setView: PropTypes.func.isRequired,
};

export default PlayerSec;

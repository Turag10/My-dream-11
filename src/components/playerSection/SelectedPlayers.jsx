import PropTypes from "prop-types";

const SelectedPlayers = ({ selectedPlayers, onRemovePlayer, setView }) => {
  return (
    <section className="p-8 bg-gray-100">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">
          Selected Players ({selectedPlayers.length}/6)
        </h2>
        <ul className="space-y-4">
          {selectedPlayers.map((player) => (
            <li
              key={player.id}
              className="border p-4 bg-white rounded-md shadow-md flex justify-between items-center"
            >
              <div>
                <h3 className="text-lg font-bold">{player.name}</h3>
                <span className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded-md">
                  {player.role}
                </span>
              </div>
              <button
                onClick={() => onRemovePlayer(player.id)}
                className="text-red-500 hover:text-red-700 justify-end"
              >
                <img className="w-6 h-6" src="/src/assets/image/dlt.png" alt="Delete Icon" />
              </button>
            </li>
          ))}
        </ul>


        <button
          className="mt-8 px-6 py-4 bg-yellow-300 text-black rounded-full font-semibold shadow-md hover:bg-yellow-600"
          onClick={() => setView("players")} 
        >
          Add More Player
        </button>
      </div>
    </section>
  );
};

SelectedPlayers.propTypes = {
  selectedPlayers: PropTypes.arrayOf(PropTypes.object).isRequired,
  onRemovePlayer: PropTypes.func.isRequired,
  setView: PropTypes.func.isRequired, 
};

export default SelectedPlayers;

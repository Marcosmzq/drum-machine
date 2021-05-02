const Controls = ({
  display,
  setDisplay,
  setVolume,
  volume,
  recording,
  setRecording,
  playRecording,
}) => {
  return (
    <div className="controlsContainer">
      {display ? (
        <>
          <h3 className="controlsTitles">Sound name</h3>
          <p className="text-xl font-nunito font-bold">{display}</p>
        </>
      ) : (
        ""
      )}
      <h2 className="controlsTitles">Volume</h2>
      <input
        type="range"
        step="0.01"
        value={volume}
        max="1"
        min="0"
        onChange={(e) => setVolume(e.target.value)}
      />
      <p className="text-xs font-nunito font-bold">{recording}</p>
      {recording && (
        <div className="my-2 w-full flex justify-center items-center">
          <button className="controlsBtn" onClick={playRecording}>
            Play
          </button>
          <button
            className="controlsBtn"
            onClick={() => {
              setRecording("");
              setDisplay("");
            }}
          >
            Clear
          </button>
        </div>
      )}
    </div>
  );
};

export default Controls;

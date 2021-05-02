import { useState } from "react";
import useClipsData from "hooks/useClipsData";
import Controls from "components/Controls";
import Pad from "components/Pad";

const DrumMachine = () => {
  const { clips } = useClipsData();
  const [volume, setVolume] = useState(1);
  const [display, setDisplay] = useState("");
  const [recording, setRecording] = useState("");

  const playRecording = () => {
    let index = 0;
    const recordingArray = recording.split(" ");
    setInterval(() => {
      const audioTag = document.getElementById(recordingArray[index]);
      if (audioTag != null) {
        audioTag.currentTime = 0;
        audioTag.volume = volume;
        audioTag.play();
        index++;
      }
    }, 300);
  };
  return (
    <div className="drumMachineContainer">
      <div className="w-full sm:w-1/2">
        {clips
          ? clips.map((clip) => (
              <Pad
                clip={clip}
                key={clip.id}
                volume={volume}
                setRecording={setRecording}
                setDisplay={setDisplay}
              />
            ))
          : ""}
      </div>
      <Controls
        display={display}
        setDisplay={setDisplay}
        setVolume={setVolume}
        volume={volume}
        recording={recording}
        setRecording={setRecording}
        playRecording={playRecording}
      />
    </div>
  );
};

export default DrumMachine;

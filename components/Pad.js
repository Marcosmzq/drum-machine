import { useEffect } from "react";

const Pad = ({ clip, volume, setRecording, setDisplay }) => {
  const playSound = () => {
    const audioTag = document.getElementById(clip.keyTrigger);
    audioTag.currentTime = 0;
    audioTag.volume = volume;
    audioTag.play();
    setRecording((prev) => prev + clip.keyTrigger + " ");
    setDisplay("");
    setDisplay(audioTag.getAttribute("value"));
  };
  const handleKeyPrees = (e) => {
    if (e.keyCode === clip.keyCode) {
      playSound();
    }
  };
  useEffect(() => {
    document.addEventListener("keydown", handleKeyPrees);
  }, []);

  return (
    <button className="padBtn" onClick={playSound}>
      {clip.keyTrigger}
      <audio id={clip.keyTrigger} src={clip.url} value={clip.id} />
    </button>
  );
};

export default Pad;

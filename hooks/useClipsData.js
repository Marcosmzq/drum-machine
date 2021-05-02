import { useState, useEffect } from "react";

const useClipsData = () => {
  const [clips, setClips] = useState(undefined);

  useEffect(() => {
    fetch("/api/clips")
      .then((res) => res.json())
      .then((data) => setClips(data));
  }, []);

  return { clips };
};

export default useClipsData;

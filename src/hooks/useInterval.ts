import { useEffect, useRef, useState } from "react";

export default function useInterval(callback: Function, delay: number) {
  const savedCallback = useRef<Function>(() => {});
  const intervalRef = useRef<any>();
  const [playing, setPlaying] = useState<Boolean>(true);

  const pause = () => {
    setPlaying(false);
  };
  const play = () => {
    setPlaying(true);
  };
  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  useEffect(() => {
    if (playing) {
      intervalRef.current = setInterval(() => {
        savedCallback.current();
      }, delay);
    } else {
      clearInterval(intervalRef.current);
    }
    return () => clearInterval(intervalRef.current);
  }, [delay, playing]);

  return { pause, play };
}

import React, { useState } from "react";
import useInterval from "../../hooks/useInterval";

interface AutoAccordionProps {
  children: React.ReactElement[];
  autoplay?: boolean;
  interval?: number;
}

export interface AccordionState {
  current: number;
  autoplay: boolean;
  interval: number;
  isPlaying: boolean;
}

export type AccordionContext = {
  accordionState: AccordionState;
  setAccordionState: React.Dispatch<React.SetStateAction<AccordionState>>;
};

export const AutoAccordion = React.createContext<AccordionContext | null>(null);

export default function AutoAccordionComp(props: AutoAccordionProps) {
  const { autoplay = true, interval = 5000, children } = props;
  const [accordionState, setAccordionState] = useState<AccordionState>({
    current: 0,
    isPlaying: autoplay,
    autoplay,
    interval,
  });
  const { pause, play } = useInterval(() => {
    start();
  }, interval);

  const setTab = (tab: number) => {
    setAccordionState({
      ...accordionState,
      current: tab,
    });
  };

  const start = () => {
    if (!autoplay) return;
    const nextTab = accordionState.current + 1;

    if (nextTab < children.length) {
      setTab(nextTab);
    } else {
      setTab(0);
    }
  };

  return (
    <div
      className="auto-accordion"
      onMouseOver={() => {
        pause();
      }}
      onMouseOut={() => {
        play();
      }}
    >
      <AutoAccordion.Provider value={{ accordionState, setAccordionState }}>
        {children.map((child, index) =>
          React.cloneElement(child, {
            key: index,
            index,
          })
        )}
      </AutoAccordion.Provider>
    </div>
  );
}

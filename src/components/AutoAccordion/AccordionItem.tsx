import React, { useEffect, useRef } from "react";
import useAutoAccordion from "../../hooks/useAutoAccordion";
import { AccordionContext, AutoAccordion } from "./AutoAccordion";

interface AccordionItemProps {
  children: React.ReactNode;
  index?: number;
}

export default function AccordionItem(props: AccordionItemProps) {
  const itemRef = useRef<HTMLDivElement>(null);
  const sliderRef = useRef<HTMLDivElement>(null);
  const accordionState = useAutoAccordion()?.accordionState;

  useEffect(() => {
    if (accordionState) {
      const { interval, current, isPlaying } = accordionState;
      if (sliderRef.current && isPlaying) {
        if (current === props.index) {
          sliderRef.current.style.transitionTimingFunction = "ease-in-out";
          sliderRef.current.style.transitionDuration = interval / 1000 + "s";
          sliderRef.current.style.width = "100%";
        } else {
          sliderRef.current.style.width = "0%";
          sliderRef.current.style.transitionDuration = "0s";
        }
      }
    }
  }, [accordionState, props.index]);

  return (
    <AutoAccordion.Consumer>
      {(value) => {
        const { accordionState, setAccordionState } = value as AccordionContext;
        const { current, isPlaying, autoplay } = accordionState;

        setTimeout(() => {
          if (itemRef.current) {
            if (current === props.index) {
              itemRef.current.classList.add("open");
              itemRef.current.classList.add("is-active");
              itemRef.current.classList.remove("close");
            } else {
              itemRef.current.classList.remove("open");
              itemRef.current.classList.add("close");
              itemRef.current.classList.remove("is-active");
            }
          }
        }, 0);

        return (
          <div
            ref={itemRef}
            className="accordion-item"
            onMouseOver={({ currentTarget }) => {
              const nextProps = { ...accordionState };
              if (current !== props.index)
                nextProps.current =
                  typeof props.index === "number" ? props.index : current;
              if (isPlaying) {
                nextProps.isPlaying = false;
              }
              if (!currentTarget.classList.contains("is-active"))
                currentTarget.classList.add("animating");
              if (sliderRef.current) {
                sliderRef.current.style.width = "0px";
              }
              setAccordionState(nextProps);
            }}
            onMouseLeave={({ currentTarget }) => {
              currentTarget.classList.add("animating");
              if (!isPlaying && autoplay) {
                setAccordionState({
                  ...accordionState,
                  isPlaying: true,
                });
              }
            }}
            onTransitionEnd={({ currentTarget }) => {
              currentTarget.classList.remove("animating");
            }}
          >
            {props.children}
            <div className="timer">
              <div className="slider" ref={sliderRef}></div>
              <span className="timer-bg"></span>
            </div>
          </div>
        );
      }}
    </AutoAccordion.Consumer>
  );
}

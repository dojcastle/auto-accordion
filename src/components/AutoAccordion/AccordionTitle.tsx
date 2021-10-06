import React from "react";

interface AccordionTitleProps {
  children: React.ReactElement | string;
  icon?: React.ReactElement;
}

export default function AccordionTitle(props: AccordionTitleProps) {
  return (
    <div className="accordion-title">
      {props.icon}
      <h1>{props.children}</h1>
    </div>
  );
}

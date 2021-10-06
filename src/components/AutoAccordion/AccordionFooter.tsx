import React from "react";

interface AccordionFooterProps {
  icon?: React.ReactNode;
  children?: React.ReactNode;
}

export default function AccordionFooter(props: AccordionFooterProps) {
  return (
    <div className="accordion-footer">
      {props.icon}
      {props.children}
    </div>
  );
}

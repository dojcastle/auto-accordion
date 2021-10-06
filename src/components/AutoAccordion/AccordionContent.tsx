import React from "react";

interface AccordionContentProps {
  children: React.ReactNode | string;
}

export default function AccordionContent(props: AccordionContentProps) {
  return <div className="accordion-content">{props.children}</div>;
}

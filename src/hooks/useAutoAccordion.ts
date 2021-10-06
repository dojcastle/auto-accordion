import { useContext } from "react";
import { AutoAccordion } from "../components/AutoAccordion/AutoAccordion";

export default function useAutoAccordion() {
  const accordionContext = useContext(AutoAccordion);

  return accordionContext;
}

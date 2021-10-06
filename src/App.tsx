import { AccordionItem, AutoAccordion } from "./components/AutoAccordion";
import AccordionContent from "./components/AutoAccordion/AccordionContent";
import AccordionFooter from "./components/AutoAccordion/AccordionFooter";
import AccordionTitle from "./components/AutoAccordion/AccordionTitle";
import Icon from "./components/Icon";
import { ReactComponent as TechnIcon } from "./icons/technology-icon.svg";
import { ReactComponent as ProjectsIcon } from "./icons/projects-icon.svg";
import { ReactComponent as CaseStudyIcon } from "./icons/case-studies-icon.svg";
import { ReactComponent as RBLabIcon } from "./icons/rb-lab-icon.svg";
import { ReactComponent as Arrow } from "./icons/arrow.svg";

function App() {
  return (
    <AutoAccordion interval={9000} autoplay={true}>
      <AccordionItem>
        <AccordionTitle icon={<Icon icon={<TechnIcon />} />}>
          Technology
        </AccordionTitle>
        <AccordionContent>
          <div>
            <h1>We develop open source Technology</h1>
            <p>
              The EW-STACK is a suite of open source tools built on top of the
              Energy Web Chain, the world’s first public, enterprise-grade
              blockchain tailored to the energy sector
            </p>
          </div>
          <AccordionFooter icon={<Icon icon={<Arrow />} />}>
            <a href="/">Read More</a>
          </AccordionFooter>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem>
        <AccordionTitle icon={<Icon icon={<ProjectsIcon />} />}>
          Projects
        </AccordionTitle>
        <AccordionContent>
          <div>
            <h1>That we use to build many projects worldwide</h1>
            <p>
              With our technology we’ve grown the EW Community into the world’s
              largest energy blockchain ecosystem, developing 46 projects, in 21
              countries, for 41 partners
            </p>
          </div>
          <AccordionFooter icon={<Icon icon={<Arrow />} />}>
            <a href="/">Read More</a>
          </AccordionFooter>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem>
        <AccordionTitle icon={<Icon icon={<CaseStudyIcon />} />}>
          Case Studies
        </AccordionTitle>
        <AccordionContent>
          <div>
            <h1>Some of which you can read as case studies</h1>
            <p>
              Read these for an easy and approachable way to understand what we
              do, even if you know nothing about blockchain, crypto or how the
              energy industry works
            </p>
          </div>
          <AccordionFooter icon={<Icon icon={<Arrow />} />}>
            <a href="/">Read More</a>
          </AccordionFooter>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem>
        <AccordionTitle icon={<Icon icon={<RBLabIcon />} />}>
          R&D LAB
        </AccordionTitle>
        <AccordionContent>
          <div>
            <h1>We also continuosly do R&D Innovation</h1>
            <p>
              The energy transition can’t be solved with old thinking. We are
              always experimenting, creating and improving the EW Stack with the
              latest innovations in decentralized technology
            </p>
          </div>
          <AccordionFooter icon={<Icon icon={<Arrow />} />}>
            <a href="/">Read More</a>
          </AccordionFooter>
        </AccordionContent>
      </AccordionItem>
    </AutoAccordion>
  );
}

export default App;

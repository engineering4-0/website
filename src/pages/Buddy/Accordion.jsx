import { useState } from "react";
import { FaAngleDown } from "react-icons/fa6";

const Accordion = (props) => {
  const [accordionOpen, setAccordionOpen] = useState(false);
  return (
    <div className="rounded-lg bg-gray-200 p-4">
      <div className="px-4">
        <button onClick={() => setAccordionOpen((p) => !p)} className="flex w-full items-center justify-between">
          <span className="my-2 font-bold">{props.title}</span>
          <FaAngleDown
            className={`font-bold text-accent-700 transition-all duration-300 ease-in-out ${
              accordionOpen && "rotate-180"
            }`}
          />
        </button>
        <div
          className={`text-small grid overflow-hidden text-slate-800 transition-all duration-300 ease-in-out ${
            accordionOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
          }`}
        >
          <div className="overflow-hidden">{props.content}</div>
        </div>
      </div>
    </div>
  );
};

export default Accordion;

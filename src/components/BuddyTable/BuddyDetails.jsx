import { useState } from "react";

const BuddyDetails = ({ index, item }) => {
  const [accordionOpen, setAccordionOpen] = useState(false);
  return (
    <div className="flex flex-col justify-center">
      <div
        className={`${index % 2 === 0 ? "bg-white" : "bg-gray-50"} grid cursor-pointer grid-cols-3`}
        key={index}
        onClick={() => setAccordionOpen((p) => !p)}
      >
        <div className="text-md p-3 text-gray-700">{item.name}</div>
        <div className="text-md p-3 text-gray-700">{item.createdAt.toLocaleDateString("en-US")}</div>
        <div className="text-md p-3 text-gray-700">
          {item.requiredSkills.map((skill) => (
            <span
              key={skill}
              className="mx-1 rounded-full bg-accent-200 px-2.5 py-1.5  text-xs font-bold uppercase text-accent-800"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
      <div
        className={`grid w-full overflow-hidden text-slate-800 transition-all duration-300 ease-in-out ${
          accordionOpen ? "grid-rows-[1fr] py-4 opacity-100" : "grid-rows-[0fr] py-0 opacity-0"
        } ${index % 2 === 0 ? "bg-white" : "bg-gray-50"}`}
      >
        <div className="w-full overflow-hidden px-32 text-left">
          <h4 className="text-lg">Project Details</h4>
          <p className="mb-4 text-sm">{item.description}</p>
          <h4 className="text-lg">Contact</h4>
          <p className="text-sm">{item.email}</p>
        </div>
      </div>
    </div>
  );
};

export default BuddyDetails;

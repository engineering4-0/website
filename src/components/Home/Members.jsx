import React from "react";
import MEMBERS from "../../utils/member-list";

const Members = () => {
  return (
    <div className="flex items-center justify-start">
      {MEMBERS.map((member) => {
        return (
          <img
            key={member.id}
            src={member.img}
            alt={member.name}
            className="-mr-3 aspect-square h-10 w-10 rounded-full object-cover object-top"
          />
        );
      })}
      <div className="flex aspect-square h-10 w-10 items-center justify-center rounded-full bg-slate-100 object-cover object-top p-2 text-sm">
        +50
      </div>
      <span className="ml-1.5">Members</span>
    </div>
  );
};

export default Members;

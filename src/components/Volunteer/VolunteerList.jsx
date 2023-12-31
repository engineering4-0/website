import React from "react";
import MEMBERS from "../../utils/member-list";
import Volunteer from "./Volunteer";

const VolunteerList = () => {
  return (
    <div className="mx-auto my-20 flex max-w-screen-lg flex-col items-center gap-2">
      <h2 className="text-center text-5xl">Our Volunteers</h2>
      <div className="my-4 flex flex-auto flex-wrap items-stretch justify-center gap-4">
        {MEMBERS.map((member) => {
          return (
            <Volunteer
              key={member.id}
              name={member.name}
              img={member.img}
              role={member.role}
              linkedIn={member.linkedIn}
              instagram={member.instagram}
              gitHub={member.gitHub}
              facebook={member.facebook}
            />
          );
        })}
      </div>
    </div>
  );
};

export default VolunteerList;

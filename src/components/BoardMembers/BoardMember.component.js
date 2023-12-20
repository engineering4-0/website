import { Grid, Column } from "@carbon/react";
import "./BoardMember.style.css";
import Abishek from "./Abishek.jpg";
import Ameya from "./Ameya.jpg";
import Divya from "./Divya.jpg";
import Sockalingam from "./Sockalingam.jpeg";
import Vikas from "./Vikas.jpg";
import ProfileCard from "../ProfileCard/ProfileCard.component";


const boardMembers = [
  {
    imageUrl: Abishek,
    name: "Abhishek Bhalaaji",
    position: "President & Operations Head",
    profileLink: "https://www.linkedin.com/in/abishekbr1/",
  },
  {
    imageUrl: Vikas,
    name: "Vikas Kumar",
    position: "Vice President",
    profileLink: "https://www.linkedin.com/in/vikas-kumar-7b0451128/",
  },
  {
    imageUrl: Divya,
    name: "Divya Khurana",
    position: "Digital Marketing Head",
    profileLink: "https://www.linkedin.com/in/divya-khurana-7331ba261/",
  },
  {
    imageUrl: Sockalingam,
    name: "Sockalingam",
    position: "Treasurer",
    profileLink: "https://www.linkedin.com/in/sockalingam-saravanan-341a9a193/",
  },
  {
    imageUrl: Ameya,
    name: "Ameya Ade",
    position: "Technical Head",
    profileLink: "https://www.linkedin.com/in/ameya-ade-833a16146/",
  }
];


const BoardMembers = () => {
  return (
    <div
      style={{
        marginTop: "2rem",
        marginBottom: "2rem",
      }}
    >
      <Grid
        fullWidth
        style={{
          gridGap: "2rem",
          padding: " 2rem 5rem",
        }}
      >
        <Column lg={16} md={8} sm={4}>
          <p className="textColor heading-02 member-heading">
            Connect with the board members and volunteers{" "}
          </p>
        </Column>

        <Column lg={16} md={8} sm={4}>
          <p className="textColor heading-04 member-heading-board">
            {" "}
            BOARD MEMBERS{" "}
          </p>{" "}
        </Column>

        {boardMembers.map((member) => {
          return (
            <Column lg={{ span: 4 }} md={4} sm={4} className="board-members">
              <ProfileCard
                imageUrl={member.imageUrl}
                name={member.name}
                position={member.position}
                profileLink={member.profileLink}
              />
            </Column>
          );
        })}
      </Grid>
    </div>
  );
};

export default BoardMembers;

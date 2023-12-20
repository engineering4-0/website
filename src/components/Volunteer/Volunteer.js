import { Grid, Column } from "@carbon/react";
import "./Volunteer.style.css";
import Altamash from "./Altamash.jpeg";
import Ashvinjeet from "./Ashvinjeet.jpg";
import Varsha from "./varsha.jpeg";
import Wazeem from "./wazeem.jpeg";
import Aeshita from "./Aeshita.jpeg";
import ProfileCard from "../ProfileCard/ProfileCard.component";

const volunteers = [
  {
    imageUrl: Varsha,
    name: "Varsha",
    position: "Operations & Digital Marketing Associate",
    profileLink: "",
  },
  {
    imageUrl: Altamash,
    name: "Altamash Yar Khan",
    position: "Operations Coordinator",
    profileLink: "",
  },
  {
    imageUrl: Altamash,
    name: "Altamash Yar Khan",
    position: "Operations Coordinator",
    profileLink: "",
  },
  {
    imageUrl: Altamash,
    name: "Altamash Yar Khan",
    position: "Operations Coordinator",
    profileLink: "",
  },
  {
    imageUrl: Altamash,
    name: "Altamash Yar Khan",
    position: "Operations Coordinator",
    profileLink: "",
  },
  {
    imageUrl: Altamash,
    name: "Altamash Yar Khan",
    position: "Operations Coordinator",
    profileLink: "",
  },
  {
    imageUrl: Altamash,
    name: "Altamash Yar Khan",
    position: "Operations Coordinator",
    profileLink: "",
  },
  {
    imageUrl: Altamash,
    name: "Altamash Yar Khan",
    position: "Operations Coordinator",
    profileLink: "",
  },

];

const Volunteer = () => {
  return (
    <div
      style={{
        marginTop: "2rem",
        marginBottom: "2rem",
      }}
      id="Volunteer_div"
    >
      {" "}
      {/* Heading for volunteers */}{" "}
      <Grid
        fullWidth
        style = {
          {
            gridGap: "2rem",
            padding: " 2rem 5rem",
          }
        }
      >
        <Column lg={16} md={8} sm={4}>
          <p className="heading-04 member-heading-volunteers"> VOLUNTEERS </p>
        </Column>
        {volunteers.map((member) => {
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

export default Volunteer;

import { Grid, Column } from "@carbon/react";
import "./Volunteer.style.scss";
import Altamash from "./Altamash.jpeg";
import Ashvinjeet from "./Ashvinjeet.jpg";
import Varsha from "./varsha.jpeg";
import Wazeem from "./wazeem.jpeg";
import Aeshita from "./Aeshita.jpeg";
import ProfileCard from "../ProfileCard/ProfileCard.component";

const volunteers = [
  {
    imageUrl: Aeshita,
    name: "Aeshita Dhiman",
    position: "Digital Marketing Associate",
    profileLink: "",
  },
  {
    imageUrl: Altamash,
    name: "Suhani Prajapati",
    position: "Digital Marketing Associate",
    profileLink: "",
  },
  {
    imageUrl: Altamash,
    name: "Shreya Bille",
    position: "Digital Marketing Associate",
    profileLink: "",
  },
  {
    imageUrl: Ashvinjeet,
    name: "Ashvinjeet Singh",
    position: "Web Developer",
    profileLink: "",
  },
  {
    imageUrl: Altamash,
    name: "Tarun Vignesh Selvabalaji",
    position: "Web Developer",
    profileLink: "",
  },
  {
    imageUrl: Altamash,
    name: "Prableen Kaur Sachdeva",
    position: "Web Developer",
    profileLink: "",
  },
  {
    imageUrl: Altamash,
    name: "Karthi Krishnamurthy",
    position: "Web Developer",
    profileLink: "",
  },
  {
    imageUrl: Altamash,
    name: "Gagandeep Singh",
    position: "Web Developer",
    profileLink: "",
  },
  {
    imageUrl: Altamash,
    name: "Vikram Singh Bedi",
    position: "Web Developer",
    profileLink: "",
  },
  {
    imageUrl: Altamash,
    name: "Shivani Sharma",
    position: "Finance Associate",
    profileLink: "",
  },
  {
    imageUrl: Altamash,
    name: "Arman Panjwani",
    position: "Finance Associate",
    profileLink: "",
  },
  {
    imageUrl: Altamash,
    name: "Anand SM",
    position: "Finance Associate",
    profileLink: "",
  },
  {
    imageUrl: Altamash,
    name: "Amandeep Singh",
    position: "Operations Coordinator",
    profileLink: "",
  },
  {
    imageUrl: Altamash,
    name: "Thiruvikraman S",
    position: "Operations Coordinator",
    profileLink: "",
  },
  {
    imageUrl: Altamash,
    name: "Gokul S",
    position: "Operations Coordinator",
    profileLink: "",
  },
  {
    imageUrl: Altamash,
    name: "Manoj Chetty",
    position: "Operations Coordinator",
    profileLink: "",
  },
  {
    imageUrl: Altamash,
    name: "Muskan Rana",
    position: "Operations Coordinator",
    profileLink: "",
  },
];

const Volunteer = () => {
  return (
    <div className="volunteer_container">
      <Grid fullWidth className="volunteer_grid">
        <Column lg={16} md={8} sm={4}>
          <p className="sub-heading"> VOLUNTEERS </p>
        </Column>
        {volunteers.map((member) => {
          return (
            <Column
              lg={{ span: 4 }}
              md={4}
              sm={4}
              className="board_members_cards"
            >
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

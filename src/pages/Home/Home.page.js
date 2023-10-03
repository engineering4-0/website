import { Grid, Column, Button } from "@carbon/react";
import { AiOutlineInstagram, AiFillLinkedin } from "react-icons/ai";
import { FaDiscord } from "react-icons/fa";
import "./Home.style.css";
import Fade from "react-reveal/Fade";
import Registration from "../../components/Registration/Registration.component";
import { useNavigate } from "react-router-dom";
import BoardMembers from "../../components/BoardMembers/BoardMember.component";
import Banner from "../../components/Update_Banner/Banner";
import EventSuggestionModal from "../../components/Modal/EventSuggestionModal.component";
import background from "./bg.png";
import { useState } from "react";
import Contact from "../Contact_club/Contact";
import Footer from "../../components/Footer/Footer";
import Hero from "./hero.png";
const HomePage = () => {
  const navigate = useNavigate();
  const [isSuggestionModalOpen, setIsSuggestionModalOpen] = useState(false);
  const concatenatedString =
    "Engineering 4.0 are looking for volunteers. Unlock Your Potential: <u>Join</u> our Student Engineering Club Today!";
  const renderedString = (
    <span dangerouslySetInnerHTML={{ __html: concatenatedString }} />
  );

  const concatenatedString2 =
    "Follow our social media platform for regular updates";

  // const renderedString2 = (
  //   <span dangerouslySetInnerHTML={{ __html: concatenatedString2 }} />
  // );
  const handleModalClose = () => {
    setIsSuggestionModalOpen(false);
  };

  return (
    <div style={{ backgroundImage: `url(${background})` }}>
      <div
        style={{
          // backgroundImage: `url(${background})`,
          paddingTop: "6em",
          position: "relative",
          paddingBottom: "2rem",
          backgroundImage: `url(${background})`,
        }}
        className="hero_1 Hello"
      >
        <Column
          lg={12}
          md={0}
          sm={0}
          className={"alertBanner"}
          style={{ background: "#0019f5" }}
        >
          <Banner message={renderedString} />
        </Column>
        {/* <EventSuggestionModal
        open={isSuggestionModalOpen}
        handleModalClose={handleModalClose}
      /> */}
        <Grid style={{ marginBottom: "2em", marginTop: "3em" }}>
          <Column lg={2} md={0} sm={0}></Column>
          <Column lg={6} md={5} sm={4} className="home-heading">
            <p className="heading">
              <span className="underline">Student-run</span>, Applied Science
              Club! 👋
            </p>
            <p className="secondary_heading">
              Engineering 4.0 is a student-run organization dedicated to
              supporting and providing a platform for all engineers and tech
              enthusiasts of the University of Windsor! We are dedicated to -
              <ul className="list_hero">
                <li>
                  Providing up-to-date information on recent technological
                  developments.
                </li>
                <li>
                  Provide a platform for all students to connect and collaborate
                  with others through social events and the Buddy Program.
                </li>
                <li>
                  Conduct workshops and talks by Industry experts for all
                  students.
                </li>
                <li>Organize Study Groups.</li>
                <li>
                  Provide each student with the opportunity to participate in
                  technical competitions and paper presentations and upgrade
                  their resumes!
                </li>
                <li>
                  Conduct ideathons to help students work on real-world projects
                  and so much more!
                </li>
              </ul>
            </p>
            <div style={{ marginTop: "1em" }}>
              <Button
                onClick={() => navigate("about")}
                className="member_button"
              >
                Join Us
              </Button>
              <Button
                kind="secondary"
                onClick={() => setIsSuggestionModalOpen(true)}
                className="learn_more"
              >
                Learn More
              </Button>
            </div>
            {/* <Grid>
              <Column lg={5} md={8} sm={4}>
                <Button onClick={() => navigate("about")}>
                  Learn More About Us
                </Button>
              </Column>
              <Column
                lg={5}
                md={8}
                sm={4}
                style={{ marginTop: "1em", marginBottom: "1em" }}
              >
                <Button
                  kind="secondary"
                  onClick={() => setIsSuggestionModalOpen(true)}
                >
                  Suggest Events
                </Button>
              </Column>
            </Grid> */}
          </Column>
          <Column lg={6} md={5} sm={4}>
            <img src={Hero} alt="Hero image" style={{ maxWidth: "100%" }} />
          </Column>
          <Column lg={2} md={0} sm={0}></Column>
        </Grid>
        <Fade bottom>
          <BoardMembers />
        </Fade>
        <div>
          <Contact />
        </div>
        {/* <Fade bottom>
          <Grid style={{ marginBottom: "3em" }}>
            <Column lg={1} md={0} sm={0}></Column>
            <Column lg={12} md={8} sm={4} style={{ textAlign: "left" }}>
              <p className="heading-02">
                Follow us on our social media platform for regular updates!
              </p>
              <br></br>
              <div></div>
            </Column>
            <Column lg={2} md={8} sm={4} style={{ marginTop: "1em" }}>
              <AiOutlineInstagram
                size="4em"
                className="icons instagram"
                onClick={() =>
                  (window.location.href =
                    "https://www.instagram.com/eng4.0_uwin/")
                }
              />
              <AiFillLinkedin
                size="4em"
                className="icons instagram"
                onClick={() =>
                  (window.location =
                    "https://www.linkedin.com/company/engineering-4-0/")
                }
              />
              <FaDiscord
                size="4em"
                className="icons instagram"
                onClick={() =>
                  (window.location = "https://discord.gg/Z8JnPSC5tD")
                }
              />
            </Column>
            <Column lg={1} md={0} sm={0}></Column>
          </Grid>
        </Fade> */}
        <Column
          lg={12}
          md={0}
          sm={0}
          className={"alertFooter"}
          style={{ background: "#CDCDCD" }}
        >
          <Banner message={concatenatedString2} />
        </Column>
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;

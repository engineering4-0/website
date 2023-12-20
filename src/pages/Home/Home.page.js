import { Grid, Column, Button } from "@carbon/react";
import "./Home.style.scss";
import BoardMembers from "../../components/BoardMembers/BoardMember.component";
import Banner from "../../components/Update_Banner/Banner";
// import EventSuggestionModal from "../../components/Modal/EventSuggestionModal.component";
import background from "./bg.png";
import Contact from "../Contact_club/Contact";
import Footer from "../../components/Footer/Footer";
import Hero from "./hero.png";
import EventGallery from "../../components/Gallery/eventGallery";
import Volunteer from "../../components/Volunteer/Volunteer";

const HomePage = () => {
  const concatenatedString =
    "Engineering 4.0 are looking for volunteers. Unlock Your Potential: Join our Student Engineering Club Today!";
  const renderedString = (
    <span dangerouslySetInnerHTML={{ __html: concatenatedString }} />
  );

  const concatenatedString2 =
    "Follow our social media platform for regular updates";

  const handleClickScroll = () => {
    const element = document.getElementById("contactSection");
    if (element) {
      // 👇 Will scroll smoothly to the top of the next section
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="homePage" style={{ backgroundColor: "#F9F5F6"}}>
      <div
        style={{
          paddingTop: "8rem",
          position: "relative",
        }}
        className="textColor hero_1 Hello"
      >
        <Column
          lg={16}
          md={0}
          sm={0}
          className={"alertBanner"}
          style={{ background: "#FF8080" }}
        >
          <Banner message={renderedString} />
        </Column>

        <Grid fullWidth style={{ padding: " 2rem 5rem" }}>
          <Column lg={8} md={8} sm={4} className="home-heading">
            <p className="textColor heading">
              <span className="underline">Student-Run</span>, Applied Science
              Club! 👋
            </p>
            <p className="textColor secondary_heading">
              Engineering 4.0 is a student-run organization dedicated to
              supporting and providing a platform for all engineers and tech
              enthusiasts of the University of Windsor! <br />
              We are dedicated to -
              <ul className="textColor list_hero">
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
                  and so much more!
                </li>
              </ul>
            </p>
            <div style={{ marginTop: "1rem" }}>
              <Button
                kind="primary"
                onClick={handleClickScroll}
                className="primary_button"
              >
                Join Us
              </Button>
              <Button
                kind="secondary"
                className="secondary_button"
                href="https://linktr.ee/uwindsor_eng4.0?fbclid=PAAaZ6Gw0pfLUFGmJPXntgyT4AuLPLN8aPCzn8C7aaqjM94NpD0CQxVq6PUaE"
              >
                Learn More
              </Button>
            </div>
          </Column>
          <Column lg={8} md={8} sm={4} className="imageColumn">
            <img
              src={Hero}
              alt="Hero"
              style={{
                maxHeight: "80vh",
                justifyContent: "center",
                overflow: "hidden",
                filter: "drop-shadow(0px 0px 5px #27374d)"
              }}
            />
          </Column>
        </Grid>
        {/* Board member grid */}
        <BoardMembers />
        {/* Volumteer member grid */}
        <Volunteer />
        {/* Event gallery grid */}
        <EventGallery />
        {/* Contact grid */}
        <Contact />
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

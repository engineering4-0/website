import { Grid, Column, Button } from "@carbon/react";
import "./Home.style.scss";
import BoardMembers from "../../components/BoardMembers/BoardMember.component";
import Banner from "../../components/Update_Banner/Banner";
import Contact from "../Contact_club/Contact";
import Footer from "../../components/Footer/Footer";
import Hero from "./hero.png";
import Blob from "./blob.svg";
import EventGallery from "../../components/Gallery/eventGallery";
import Volunteer from "../../components/Volunteer/Volunteer";

const HomePage = () => {
  const handleClickScroll = () => {
    const element = document.getElementById("contactSection");
    console.log(element);
    if (element) {
      // 👇 Will scroll smoothly to the top of the next section
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="homePage">
      <div className="homePage_container">
        <Column lg={16} md={0} sm={0} className="alertBanner">
          <Banner message="Engineering 4.0 are looking for volunteers. Unlock Your Potential: Join our Student Engineering Club Today!" />
        </Column>

        <Grid className="hero_grid" fullWidth>
          <Column lg={8} md={8} sm={4} className="hero_container_left">
            <p className="hero_heading">
              <span>Student-Run</span>, Applied Science Club! 👋
            </p>
            <p className="hero_sub_heading">
              Engineering 4.0 is a student-run organization dedicated to
              supporting and providing a platform for all engineers and tech
              enthusiasts of the University of Windsor! <br />
              We are dedicated to -
              <ul className="hero_content">
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
            <div className="hero_button_container">
              <Button
                kind="primary"
                onClick={handleClickScroll}
                className="button primary"
              >
                Join Us
              </Button>
              <Button
                formTarget="_blank"
                kind="secondary"
                className="button secondary"
                href="https://linktr.ee/uwindsor_eng4.0?fbclid=PAAaZ6Gw0pfLUFGmJPXntgyT4AuLPLN8aPCzn8C7aaqjM94NpD0CQxVq6PUaE"
              >
                Learn More
              </Button>
            </div>
          </Column>
          <Column lg={8} md={8} sm={4} className="hero_container_right dots">
            <img src={Blob} className="svg" alt="" />
            <img src={Hero} className="img" alt="hero_image" />
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
          <Column lg={16} md={0} sm={0} className="followBanner">
            <Banner message="Follow our social media platform for regular updates" />
          </Column>
        </Column>
      </div>
    </div>
  );
};

export default HomePage;

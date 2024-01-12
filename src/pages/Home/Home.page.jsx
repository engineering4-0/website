import { Grid, Column, Button } from "@carbon/react";
import "./Home.style.scss";
import BoardMembers from "../../components/BoardMembers/BoardMember.component";
import Banner from "../../components/Update_Banner/Banner";
import Contact from "../Contact_club/Contact";
import Hero from "./hero.png";
import Blob from "./blob.svg";
import EventGallery from "../../components/Gallery/eventGallery";
import Volunteer from "../../components/Volunteer/Volunteer";

const HomePage = () => {
  const handleClickScroll = () => {
    const element = document.getElementById("contactSection");
    if (element) {
      // 👇 Will scroll smoothly to the top of the next section
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="home_page">
      <Column lg={16} md={0} sm={0} className="banner">
        <Banner message="Engineering 4.0 are looking for volunteers. Unlock Your Potential: Join our Student Engineering Club Today!" />
      </Column>

      <Grid className="hero_grid" fullWidth>
        <Column lg={8} md={8} sm={4} className="hero_container_left">
          <div className="hero_heading">
            <span>Student-Run</span>, Applied Science Club! 👋
          </div>
          <div className="hero_sub_heading">
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
                technical competitions and paper presentations and upgrade their
                resumes!
              </li>
              <li>
                Conduct ideathons to help students work on real-world projects
                and so much more!
              </li>
            </ul>
          </div>
          <div className="hero_button_container">
            <Button
              kind="primary"
              onClick={handleClickScroll}
              className="button_primary"
            >
              Join Us
            </Button>
            <Button
              formTarget="_blank"
              kind="secondary"
              className="button_secondary"
              href="https://linktr.ee/uwindsor_eng4.0?fbclid=PAAaZ6Gw0pfLUFGmJPXntgyT4AuLPLN8aPCzn8C7aaqjM94NpD0CQxVq6PUaE"
            >
              Learn More
            </Button>
          </div>
        </Column>
        <Column lg={8} md={8} sm={4} className="hero_container_right">
          <svg className="hero_image" width="100%" height="100%">
            <pattern
              id="pattern-circles"
              x="0"
              y="0"
              width="50"
              height="50"
              patternUnits="userSpaceOnUse"
              patternContentUnits="userSpaceOnUse"
            >
              <circle
                id="pattern-circle"
                cx="10"
                cy="10"
                r="2"
                fill="#6d8b74"
              ></circle>
            </pattern>

            <rect
              id="rect"
              x="0"
              y="0"
              width="100%"
              height="100%"
              fill="url(#pattern-circles)"
            ></rect>
          </svg>
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
      <Column lg={12} md={0} sm={0}>
        <Column lg={16} md={0} sm={0} className="banner">
          <Banner message="Follow our social media platform for regular updates" />
        </Column>
      </Column>
    </div>
  );
};

export default HomePage;

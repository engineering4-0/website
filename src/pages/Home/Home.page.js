import { Grid, Column, Button } from '@carbon/react';
import './Home.style.css';
import Hero from '../../components/Home/Hero';
import BoardMembers from '../../components/BoardMembers/BoardMember.component';
import Banner from '../../components/Update_Banner/Banner';
// import EventSuggestionModal from "../../components/Modal/EventSuggestionModal.component";
import background from './bg.png';
import Contact from '../Contact_club/Contact';
import Footer from '../../components/Footer/Footer';
import heroImage from './hero.png';
// import EventGallery from '../../components/Gallery/eventGallery';
const HomePage = () => {
  const concatenatedString =
    'Engineering 4.0 are looking for volunteers. Unlock Your Potential: <u>Join</u> our Student Engineering Club Today!';
  const renderedString = (
    <span dangerouslySetInnerHTML={{ __html: concatenatedString }} />
  );

  const concatenatedString2 =
    'Follow our social media platform for regular updates';

  const handleClickScroll = () => {
    const element = document.getElementById('contactSection');
    if (element) {
      // 👇 Will scroll smoothly to the top of the next section
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <Hero />
      <div
        style={{ backgroundImage: `url(${background})`, lightingColor: '50%' }}
      >
        <div
          style={{
            // backgroundImage: `url(${background})`,
            paddingTop: '6em',
            position: 'relative',
            // paddingBottom: "2rem",
            // backgroundImage: `url(${background})`,
          }}
          className="hero_1 Hello"
        >
          <Column
            lg={12}
            md={0}
            sm={0}
            className={'alertBanner'}
            style={{ background: '#0019f5' }}
          >
            <Banner message={renderedString} />
          </Column>

          <Grid style={{ marginBottom: '2em', marginTop: '3em' }}>
            <Column lg={2} md={0} sm={0}></Column>
            <Column lg={6} md={5} sm={4} className="home-heading">
              <p className="heading">
                <span className="underline">Student-run</span>, Applied Science
                Club! 👋
              </p>
              <p className="secondary_heading">
                Engineering 4.0 is a student-run organization dedicated to
                supporting and providing a platform for all engineers and tech
                enthusiasts of the University of Windsor! <br />
                We are dedicated to -
                <ul className="list_hero">
                  <li>
                    Providing up-to-date information on recent technological
                    developments.
                  </li>
                  <li>
                    Provide a platform for all students to connect and
                    collaborate with others through social events and the Buddy
                    Program.
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
                    Conduct ideathons to help students work on real-world
                    projects and so much more!
                  </li>
                </ul>
              </p>
              <div style={{ marginTop: '1em' }}>
                <Button onClick={handleClickScroll} className="member_button">
                  Join Us
                </Button>
                <Button
                  kind="secondary"
                  className="learn_more"
                  href="https://linktr.ee/uwindsor_eng4.0?fbclid=PAAaZ6Gw0pfLUFGmJPXntgyT4AuLPLN8aPCzn8C7aaqjM94NpD0CQxVq6PUaE"
                >
                  Learn More
                </Button>
              </div>
            </Column>
            <Column lg={6} md={5} sm={4}>
              <img src={heroImage} alt="Hero" style={{ maxWidth: '100%' }} />
            </Column>
            <Column lg={2} md={0} sm={0}></Column>
          </Grid>
          {/* Board member grid */}
          <BoardMembers />
          {/* Event gallery grid */}
          {/* <EventGallery /> */}
          {/* Contact grid */}
          <div id="contactSection">
            <Contact />
          </div>
          <Column
            lg={12}
            md={0}
            sm={0}
            className={'alertFooter'}
            style={{ background: '#CDCDCD' }}
          >
            <Banner message={concatenatedString2} />
          </Column>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default HomePage;

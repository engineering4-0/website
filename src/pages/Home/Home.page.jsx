import { Column } from '@carbon/react';
import './Home.style.css';
import Hero from '../../components/Home/Hero';
import BoardMembers from '../../components/BoardMembers/BoardMember.component';
import Banner from '../../components/Update_Banner/Banner';

import background from './bg.png';
import Contact from '../Contact_club/Contact';
import Footer from '../../components/Footer/Footer';

const HomePage = () => {
  const concatenatedString =
    'Engineering 4.0 are looking for volunteers. Unlock Your Potential: <u>Join</u> our Student Engineering Club Today!';
  const renderedString = (
    <span dangerouslySetInnerHTML={{ __html: concatenatedString }} />
  );

  const concatenatedString2 =
    'Follow our social media platform for regular updates';

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

          <BoardMembers />

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

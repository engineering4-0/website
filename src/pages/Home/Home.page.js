import {
    Grid,
    Column,
    Button,
} from '@carbon/react';
import { AiOutlineInstagram, AiFillLinkedin } from "react-icons/ai";
import { FaDiscord } from "react-icons/fa";
import './Home.style.css';
import Fade from 'react-reveal/Fade';
import Registration from '../../components/Registration/Registration.component';
import { useNavigate } from 'react-router-dom';
import BoardMembers from '../../components/BoardMembers/BoardMember.component';

const HomePage = () => {

    const navigate = useNavigate();

    return (<div style={{ backgroundColor: "#266382", paddingTop: "6em" }}>
        <Grid style={{ marginBottom: "6em" }}>
            <Column lg={1} md={0} sm={0}></Column>
            <Column lg={9} md={8} sm={4} className='home-heading'>
                <p className='heading'><span className='underline'>Student-run</span>, Applied Science Club! 👋</p>
                <Button onClick={() => navigate('about')}>Learn More About Us</Button>
            </Column>
            <Column lg={5} md={8} sm={4}>
                <Registration />
            </Column>
            <Column lg={1} md={0} sm={0}></Column>
        </Grid>
        <Fade bottom>
            <BoardMembers />
        </Fade>
        <hr></hr>
        <Fade bottom>
            <Grid style={{ marginBottom: "3em" }}>
                <Column lg={1} md={0} sm={0}></Column>
                <Column lg={12} md={8} sm={4} style={{ textAlign: "left" }}>
                    <p className='heading-02'>Follow us on our social media platform for regular updates!</p><br></br>
                    <div>
                    </div>
                </Column>
                <Column lg={2} md={8} sm={4} style={{ marginTop: "1em" }}>
                    <AiOutlineInstagram size="4em" className='icons instagram' onClick={() => window.location.href = "https://www.instagram.com/eng4.0_uwin/"} />
                    <AiFillLinkedin size="4em" className='icons instagram' onClick={() => window.location = "https://www.linkedin.com/company/engineering-4-0/"} />
                    <FaDiscord size="4em" className='icons instagram' onClick={() => window.location = "https://discord.gg/Z8JnPSC5tD"} />
                </Column>
                <Column lg={1} md={0} sm={0}></Column>
            </Grid>
        </Fade>

        <Grid style={{ paddingBottom: "1em" }}>
            <Column lg={16} md={8} sm={4} style={{ textAlign: "center", marginBottom: "1em", color: "white" }}>
                Designed with <span style={{ color: "red" }}>♥️</span> by The Technical Team
            </Column>
            <Column lg={16} md={8} sm={4} style={{ textAlign: "center", color: "white" }}>
                Contribute to this website here, <a target="_blank" rel="noreferrer" style={{ color: "white" }} href='https://github.com/engineering4-0/website'>GitHub</a>
            </Column>
        </Grid>
    </div>);
};

export default HomePage;
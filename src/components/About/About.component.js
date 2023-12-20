import {
    Grid, Column, UnorderedList, ListItem
} from '@carbon/react';
import Fade from 'react-reveal/Fade';

const About = () => {
    return (<>
        {/* <Fade bottom> */}
            <Grid style={{ marginBottom: "6em" }}>
                <Column lg={16} md={8} sm={4} className='department-section'>
                    <p className='departments hover-underline-animation'>People intrested in engineering</p><br></br>
                    <p className='departments hover-underline-animation'>The club is for every engineer and tech enthusiasts!</p>
                </Column>
                <Column lg={16} md={8} sm={4}>
                    <p style={{ fontWeight: 400, fontSize: "20px", marginBottom: "1em" }}>We are a diverse, inclusive student-run organization seeking
                        to provide a platform to the science and technology enthusiasts of University of Windsor to</p>
                    <div>
                        <hr></hr>
                        <UnorderedList >
                            <ListItem style={{ fontSize: "17px", fontWeight: 600, color: "#F9fbe7" }}>
                                Attend workshops and talks by industry professionals
                            </ListItem>
                            <ListItem style={{ fontSize: "17px", fontWeight: 600, color: "#F9fbe7" }}>
                                Work on real-world projects,
                            </ListItem>
                            <ListItem style={{ fontSize: "17px", fontWeight: 600, color: "#F9fbe7" }}>
                                Organize study groups,
                            </ListItem>
                            <ListItem style={{ fontSize: "17px", fontWeight: 600, color: "#F9fbe7" }}>
                                Get peer review or help to participate in technical competitions and paper presentations, (not to forget!)
                            </ListItem>
                            <ListItem style={{ fontSize: "17px", fontWeight: 600, color: "#F9fbe7" }}>
                                Grow your professional network through social events, and so much more!
                            </ListItem>
                        </UnorderedList>
                    </div>
                </Column>
            </Grid>
        {/* </Fade> */}
    </>)
}

export default About;
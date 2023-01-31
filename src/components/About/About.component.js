import {
    Grid, Column, UnorderedList, ListItem
} from '@carbon/react';

const About = () => {
    return (<>
        <Grid>
            <Column lg={2} sm={0} md={0}>
            </Column>
            <Column lg={12} sm={4} md={12}>
                <div className='about-content'>
                    <h3>About Us 👋</h3>
                    <hr></hr>
                    <p>We are a diverse, inclusive student-run organization seeking 
                        to provide a platform to the science and technology enthusiasts of University of Windsor to</p>
                        <br></br>
                    <UnorderedList>
                        <ListItem>Attend workshops and talks by industry professionals </ListItem>
                        <ListItem>Work on real-world projects,</ListItem>
                        <ListItem>Organize study groups,</ListItem>
                        <ListItem>Get peer review or help to participate in technical competitions and paper presentations, (not to forget!)</ListItem>
                        <ListItem>Grow your professional network through social events, and so much more!</ListItem>
                    </UnorderedList>
                </div>
            </Column>
            <Column lg={2} sm={0} md={0}>

            </Column>
        </Grid>
    </>)
}

export default About;
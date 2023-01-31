import {
    Grid, Column
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
                    <p>We are a diverse, inclusive student-run organization seeking to provide a platform to the science and technology enthusiasts of University of Windsor to</p>
                    <ul>
                        <li>Attend workshops and talks by industry professionals</li>
                        <li>Work on real-world projects,</li>
                        <li>Organize study groups,</li>
                        <li>Get peer review or help to participate in technical competitions and paper presentations, (not to forget!)</li>
                        <li>Grow your professional network through social events, and so much more!</li>
                    </ul>
                </div>
            </Column>
            <Column lg={2} sm={0} md={0}>

            </Column>
        </Grid>
    </>)
}

export default About;
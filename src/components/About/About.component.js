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
                    <h3>This is About</h3>
                    <hr></hr>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer viverra eros diam, sit amet vehicula sapien pharetra condimentum. Etiam non risus erat. Praesent orci justo, fermentum in nunc quis, porta pellentesque sapien. Phasellus at vestibulum nunc. Mauris gravida, lacus ut malesuada egestas, erat nulla rhoncus urna, vitae sagittis urna orci a felis. Duis urna risus, rutrum et viverra ut, iaculis blandit libero. Morbi consectetur augue lectus, in ornare erat suscipit ut. Sed efficitur accumsan pretium. Phasellus quis placerat lacus. Vestibulum nisl enim, sollicitudin sed lobortis eu, laoreet eget est. Suspendisse dictum pellentesque condimentum.</p>
                </div>
            </Column>
            <Column lg={2} sm={0} md={0}>

            </Column>
        </Grid>
    </>)
}

export default About;
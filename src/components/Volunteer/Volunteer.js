import { Grid, Column, ClickableTile } from "@carbon/react";
import "./Volunteer.style.css";
import Abishek from "./Abishek.jpg";
import Altamash from "./Altamash.jpeg";
import Ashvinjeet from "./Ashvinjeet.jpg";
import Ameya from "./Ameya.jpg";
import Divya from "./Divya.jpg";
import Sockalingam from "./Sockalingam.jpeg";
import Vikas from "./Vikas.jpg";

const Volunteer = () => {
  return (
    <div style={{ marginBottom: "6em" }} id="Volunteer_div">
      {/* Heading for volunteers */}
      <Grid style={{ marginTop: "2em", marginBottom: "2em" }}>
        <Column lg={1} md={0} sm={0}></Column>
        <Column lg={14} md={8} sm={4}>
          <p className="heading-04 member-heading-volunteers">VOLUNTEERS</p>
        </Column>
        <Column lg={1} md={0} sm={0}></Column>
      </Grid>
      <Grid style={{ marginBottom: "2em" }} className="Volunteer_Member_Row">
        <Column lg={2} md={0} sm={0}></Column>
        <Column lg={3} md={4} sm={2} className="volunteer-members">
          <ClickableTile
            className="member-tile"
            target="_blank"
            href="https://www.linkedin.com/in/vikas-kumar-7b0451128/"
          >
            <Grid>
              <Column lg={1} md={4} sm={2}>
                <img
                  alt="profile-pic"
                  style={{ height: "55px", width: "55px", borderRadius: "50%" }}
                  src={Vikas}
                />
              </Column>
              <Column lg={2} md={4} sm={2}>
                Vikas Kumar<hr></hr>
                Operations Coordinator
              </Column>
            </Grid>
          </ClickableTile>
        </Column>
        <Column lg={3} md={4} sm={2} className="volunteer-members">
          <ClickableTile
            className="member-tile"
            target="_blank"
            href="https://www.linkedin.com/in/altamashyarkhan/"
          >
            <Grid>
              <Column lg={1} md={4} sm={2}>
                <img
                  alt="profile-pic"
                  style={{ height: "55px", width: "55px", borderRadius: "50%" }}
                  src={Altamash}
                />
              </Column>
              <Column lg={2} md={4} sm={2}>
                Altamash Yar Khan<hr></hr>
                Operations Coordinator
              </Column>
            </Grid>
          </ClickableTile>
        </Column>
        <Column lg={3} md={4} sm={2} className="volunteer-members">
          <ClickableTile
            className="member-tile"
            target="_blank"
            href="https://www.linkedin.com/in/ashvinjeetsingh"
          >
            <Grid>
              <Column lg={1} md={4} sm={2}>
                <img
                  alt="profile-pic"
                  style={{ height: "55px", width: "55px", borderRadius: "50%" }}
                  src={Ashvinjeet}
                />
              </Column>
              <Column lg={2} md={4} sm={2}>
                Ashvinjeet Singh<hr></hr>
                Web Developer
              </Column>
            </Grid>
          </ClickableTile>
        </Column>
        <Column lg={3} md={4} sm={2} className="volunteer-members">
          <ClickableTile
            className="member-tile"
            target="_blank"
            href="https://www.linkedin.com/in/ameya-ade-833a16146/"
          >
            <Grid>
              <Column lg={1} md={4} sm={2}>
                <img
                  alt="profile-pic"
                  style={{ height: "55px", width: "55px", borderRadius: "50%" }}
                  src={Ameya}
                />
              </Column>
              <Column lg={2} md={4} sm={2}>
                Ameya Ade<hr></hr>
                Web Developer
              </Column>
            </Grid>
          </ClickableTile>
        </Column>
        <Column lg={2} md={0} sm={0}></Column>
      </Grid>
      <Grid style={{ marginBottom: "2em" }} className="Volunteer_Member_Row">
        <Column lg={3} md={0} sm={0}></Column>
        <Column lg={3} md={4} sm={2} className="volunteer-members">
          <ClickableTile
            className="member-tile"
            target="_blank"
            href="https://www.linkedin.com/in/divya-khurana-7331ba261/"
          >
            <Grid>
              <Column lg={1} md={4} sm={2}>
                <img
                  alt="profile-pic"
                  style={{ height: "55px", width: "55px", borderRadius: "50%" }}
                  src={Divya}
                />
              </Column>
              <Column lg={2} md={4} sm={2}>
                Divya Khurana
                <hr />
                Digital Marketing
              </Column>
            </Grid>
          </ClickableTile>
        </Column>

        <Column lg={3} md={4} sm={2} className="volunteer-members">
          <ClickableTile className="member-tile" target="_blank" href="#">
            <Grid>
              <Column lg={1} md={4} sm={2}>
                <img
                  alt="profile-pic"
                  style={{ height: "55px", width: "55px", borderRadius: "50%" }}
                  src={Abishek}
                />
              </Column>
              <Column lg={2} md={4} sm={2}>
                Abishek bhalaaji<hr></hr>
                Digital Marketing
              </Column>
            </Grid>
          </ClickableTile>
        </Column>

        <Column lg={3} md={4} sm={2} className="volunteer-members">
          <ClickableTile
            className="member-tile"
            target="_blank"
            href="https://www.linkedin.com/in/divya-khurana-7331ba261/"
          >
            <Grid>
              <Column lg={1} md={4} sm={2}>
                <img
                  alt="profile-pic"
                  style={{ height: "55px", width: "55px", borderRadius: "50%" }}
                  src={Sockalingam}
                />
              </Column>
              <Column lg={2} md={4} sm={2}>
                Sockalingam
                <hr />
                Finance Associate
              </Column>
            </Grid>
          </ClickableTile>
        </Column>

        <Column lg={3} md={0} sm={0}></Column>
      </Grid>
    </div>
  );
};

export default Volunteer;

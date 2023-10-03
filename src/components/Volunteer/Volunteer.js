import { Grid, Column, ClickableTile } from "@carbon/react";
import "./Volunteer.style.css";
import Altamash from "./Altamash.jpeg";
import Ashvinjeet from "./Ashvinjeet.jpg";
import Varsha from "./varsha.jpeg";
import Wazeem from "./wazeem.jpeg";

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
            href="https://www.linkedin.com/in/varsha-sri-selvakumar-5b516b177/"
          >
            <Grid>
              <Column lg={1} md={4} sm={2}>
                <img
                  alt="profile-pic"
                  style={{ height: "55px", width: "55px", borderRadius: "50%" }}
                  src={Varsha}
                />
              </Column>
              <Column lg={2} md={4} sm={2}>
                Varsha<hr></hr>
                Operations & Digital Marketing Associate
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
            href="https://www.linkedin.com/in/aeshita-dhiman/"
          >
            <Grid>
              <Column lg={1} md={4} sm={2}>
                <img
                  alt="profile-pic"
                  style={{ height: "55px", width: "55px", borderRadius: "50%" }}
                  src={Varsha}
                />
              </Column>
              <Column lg={2} md={4} sm={2}>
                Aeshita Dhiman<hr></hr>
                Digital Marketing Associate
              </Column>
            </Grid>
          </ClickableTile>
        </Column>
        <Column lg={2} md={0} sm={0}></Column>
        <Grid></Grid>
      </Grid>
      <Grid style={{ marginBottom: "2em" }} className="Volunteer_Member_Row">
        <Column lg={2} md={0} sm={0}></Column>
        <Column lg={3} md={4} sm={2} className="volunteer-members">
          <ClickableTile
            className="member-tile"
            target="_blank"
            href="https://www.linkedin.com/in/waseem-zahir/"
          >
            <Grid>
              <Column lg={1} md={4} sm={2}>
                <img
                  alt="profile-pic"
                  style={{ height: "55px", width: "55px", borderRadius: "50%" }}
                  src={Wazeem}
                />
              </Column>
              <Column lg={2} md={4} sm={2}>
                Waseem
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

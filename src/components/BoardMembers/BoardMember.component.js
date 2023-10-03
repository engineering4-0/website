import { Grid, Column, ClickableTile } from "@carbon/react";
import "./BoardMember.style.css";
import Abishek from "./Abishek.jpg";
import Ameya from "./Ameya.jpg";
import Divya from "./Divya.jpg";
import Sockalingam from "./Sockalingam.jpeg";
import Vikas from "./Vikas.jpg";
import Volunteer from "../Volunteer/Volunteer";

const BoardMembers = () => {
  return (
    <div style={{ marginTop: "8em", marginBottom: "6em" }}>
      <Grid style={{ marginBottom: "2em" }}>
        <Column lg={1} md={0} sm={0}></Column>
        <Column lg={14} md={8} sm={4}>
          <p className="heading-02 member-heading">
            <u>Connect</u> with the board members and volunteers
          </p>
        </Column>
        <Column lg={1} md={0} sm={0}></Column>
      </Grid>
      {/* heading for board members */}
      <Grid style={{ marginBottom: "2em" }}>
        <Column lg={1} md={0} sm={0}></Column>
        <Column lg={14} md={8} sm={4}>
          <p className="heading-04 member-heading-board">BOARD MEMBERS</p>
        </Column>
        <Column lg={1} md={0} sm={0}></Column>
      </Grid>

      <Grid style={{ marginBottom: "2em" }} className="board_member_row">
        <Column lg={2} md={0} sm={0}></Column>
        <Column lg={3} md={4} sm={2} className="board-members">
          <ClickableTile
            className="member-tile"
            target="_blank"
            href="https://www.linkedin.com/in/abishekbr1/"
          >
            <Grid>
              <Column lg={1} md={4} sm={2}>
                <img
                  alt="profile-pic"
                  style={{
                    height: "55px",
                    width: "55px",
                    borderRadius: "50%",
                  }}
                  src={Abishek}
                />
              </Column>
              <Column lg={2} md={4} sm={2}>
                Abishek bhalaaji<hr></hr>
                President & Operations Head
              </Column>
            </Grid>
          </ClickableTile>
        </Column>

        <Column lg={3} md={4} sm={2} className="board-members">
          <ClickableTile
            className="member-tile"
            target="_blank"
            href="https://www.linkedin.com/in/vikas-kumar-7b0451128/"
          >
            <Grid>
              <Column lg={1} md={4} sm={2}>
                <img
                  alt="profile-pic"
                  style={{
                    height: "55px",
                    width: "55px",
                    borderRadius: "50%",
                  }}
                  src={Vikas}
                />
              </Column>
              <Column lg={2} md={4} sm={2}>
                Vikas Kumar<hr></hr>
                Vice President
              </Column>
            </Grid>
          </ClickableTile>
        </Column>
        <Column lg={3} md={4} sm={2} className="board-members">
          <ClickableTile
            className="member-tile"
            target="_blank"
            href="https://www.linkedin.com/in/divya-khurana-7331ba261/"
          >
            <Grid>
              <Column lg={1} md={4} sm={2}>
                <img
                  alt="profile-pic"
                  style={{
                    height: "55px",
                    width: "55px",
                    borderRadius: "50%",
                  }}
                  src={Divya}
                />
              </Column>
              <Column lg={2} md={4} sm={2}>
                Divya Khurana<hr></hr>
                Digital Marketing Head
              </Column>
            </Grid>
          </ClickableTile>
        </Column>
        <Column lg={3} md={4} sm={2} className="board-members">
          <ClickableTile
            className="member-tile"
            target="_blank"
            href="https://www.linkedin.com/in/sockalingam-saravanan-341a9a193/"
          >
            <Grid>
              <Column lg={1} md={4} sm={2}>
                <img
                  alt="profile-pic"
                  style={{
                    height: "55px",
                    width: "55px",
                    borderRadius: "50%",
                  }}
                  src={Sockalingam}
                />
              </Column>
              <Column lg={2} md={4} sm={2}>
                Sockalingam<hr></hr>
                Treasurer
              </Column>
            </Grid>
          </ClickableTile>
        </Column>
        <Column lg={2} md={0} sm={0}></Column>
        <Grid></Grid>
      </Grid>
      <Grid style={{ marginBottom: "2em" }} className="board_member_row">
        <Column lg={2} md={0} sm={0}></Column>
        <Column lg={3} md={4} sm={2} className="board-members">
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
                Technical Head
              </Column>
            </Grid>
          </ClickableTile>
        </Column>
      </Grid>
      <Volunteer />
    </div>
  );
};

export default BoardMembers;

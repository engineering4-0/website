import { Grid, Column, ClickableTile } from "@carbon/react";
import "./BoardMember.style.css";
import kishok from "./kishok.jpeg";
import wazeem from "./wazeem.jpeg";
import varsha from "./varsha.jpeg";
import raj from "./raj.jpeg";
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
            href="https://www.linkedin.com/in/varsha-sri-selvakumar-5b516b177/"
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
                  src={varsha}
                />
              </Column>
              <Column lg={2} md={4} sm={2}>
                Varsha<hr></hr>
                President & Social Media Head
              </Column>
            </Grid>
          </ClickableTile>
        </Column>

        <Column lg={3} md={4} sm={2} className="board-members">
          <ClickableTile
            className="member-tile"
            target="_blank"
            href="https://www.linkedin.com/in/rajcrk/"
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
                  src={raj}
                />
              </Column>
              <Column lg={2} md={4} sm={2}>
                Raj<hr></hr>
                Vice President & Technical Head
              </Column>
            </Grid>
          </ClickableTile>
        </Column>
        <Column lg={3} md={4} sm={2} className="board-members">
          <ClickableTile
            className="member-tile"
            target="_blank"
            href="https://www.linkedin.com/in/kishokrai/"
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
                  src={kishok}
                />
              </Column>
              <Column lg={2} md={4} sm={2}>
                Kishok<hr></hr>
                Operations Head
              </Column>
            </Grid>
          </ClickableTile>
        </Column>
        <Column lg={3} md={4} sm={2} className="board-members">
          <ClickableTile className="member-tile" target="_blank" href="#">
            <Grid>
              <Column lg={1} md={4} sm={2}>
                <img
                  alt="profile-pic"
                  style={{
                    height: "55px",
                    width: "55px",
                    borderRadius: "50%",
                  }}
                  src={wazeem}
                />
              </Column>
              <Column lg={2} md={4} sm={2}>
                Wazeem<hr></hr>
                Treasurer
              </Column>
            </Grid>
          </ClickableTile>
        </Column>
        <Column lg={2} md={0} sm={0}></Column>
      </Grid>

      <Volunteer />
    </div>
  );
};

export default BoardMembers;

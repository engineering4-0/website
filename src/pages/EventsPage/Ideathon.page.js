import { Events } from "@carbon/icons-react";
import { Button, Column, Grid, Tile } from "@carbon/react";
import IdeathonRegistrationModal from "../../components/Modal/IdeathonRegistrationModal.component";
import { useState } from "react";
import "./IdeathonPage.css";

const IdeathonPage = () => {
  const [isRegistrationModalOpen, setIsRegistrationModalOpen] = useState(false);

  const handleModalClose = () => {
    setIsRegistrationModalOpen(false);
  };

  const handleRegistrationClick = () => {
    setIsRegistrationModalOpen(true);
  };

  return (
    <div style={{ backgroundColor: "#266382" }}>
      <IdeathonRegistrationModal
        open={isRegistrationModalOpen}
        handleModalClose={handleModalClose} />
      <Grid style={{ paddingTop: "8em" }}>
        <Column lg={3}>

        </Column>
        <Column lg={10} md={8} sm={4}
          style={{ color: "white" }} >
          <Grid>
            <Column lg={6} md={4} sm={4}>
              <h3
                className="eventTitle">
                Event Time 🎉
              </h3>
            </Column>
            <Column lg={4} md={4} sm={4}>
              <Tile id="tile-1"
                className="eventDate">
                10 - 20 July
              </Tile>
            </Column>
          </Grid>
          <Grid style={{ paddingTop: "1em" }}>
            <Column lg={10} md={8} sm={4}>
              <h3 className="ideathonTitle">4.0 Ideathon Competition 2023</h3>
            </Column>
          </Grid>
          <Grid style={{ paddingTop: "2em" }}>
            <Column lg={4} md={4} sm={4} className="stackDivide">
              <Button
                style={{ minWidth: "100%" }}
                size="xl"
                renderIcon={Events}
                onClick={handleRegistrationClick}>
                Register for the event
              </Button>
            </Column>
            <Column lg={6} md={4} sm={4}>
              <p>For people looking for team members for the event,
                Check out our Buddy platform to reqest team mates
              </p>
            </Column>
          </Grid>
        </Column>
        <Column lg={3}>

        </Column>
      </Grid>
      <Grid style={{ paddingTop: "8em", paddingBottom: "8em" }}>
        <Column lg={1}>

        </Column>
        <Column lg={14} md={8} sm={4}
          style={{
            paddingTop: "2em",
            paddingBottom: "2em",
            backgroundColor: "#212121",
            borderRadius: "16px",
            textAlign: "center"
          }}>
          <Grid style={{ color: "white" }}>
            <Column lg={1} md={1}></Column>
            <Column lg={4} md={2} sm={4} style={{ marginBottom: "1em" }}>
              <h3>Challenge</h3>
              <div style={{ marginTop: "1em" }}>
                <p>
                  You will come up with a novel idea.
                </p>
              </div>
              <hr className="eventLine" style={{ width: "80%" }}></hr>
            </Column>
            <Column lg={4} md={2} sm={4} style={{ marginBottom: "1em" }}>
              <h3>Teams</h3>
              <div style={{ marginTop: "1em" }}>
                <p>
                  You will come up with a novel idea.
                </p>
              </div>
              <hr className="eventLine" style={{ width: "80%" }}></hr>
            </Column>
            <Column lg={4} md={2} sm={4} style={{ marginBottom: "1em" }}>
              <h3>Prizes 🏆</h3>
              <div style={{ marginTop: "1em" }}>
                <p>
                  You will come up with a novel idea.
                </p>
              </div>
            </Column>
            <Column lg={1} md={1}></Column>
          </Grid>

        </Column>
        <Column lg={1}>

        </Column>
      </Grid>
    </div>
  );
};

export default IdeathonPage;
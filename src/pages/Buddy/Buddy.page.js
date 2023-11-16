import { Button, Column, ExpandableTile, Grid, TileAboveTheFoldContent, TileBelowTheFoldContent } from "@carbon/react";
import "./Buddy.style.css";
import { useNavigate } from "react-router-dom";

const BuddyPage = () => {
  const navigate = useNavigate();

  return (
    <div style={{ backgroundColor: "#266382" }}>
      <Grid style={{ paddingTop: "8em", color: "white", marginBottom: "2em" }}>
        <Column lg={8} md={8} sm={4}>
          <div className="heading-02" style={{ paddingBottom: "1em" }}>
            Welcome to the <span
              style={{ textDecoration: "underline" }}>
              4.0 Buddy Program</span>!
          </div>
          <div style={{ fontSize: "1.5em" }}>
            Are you looking for someone to work with you on a project idea, or do you want to collaborate with someone else on a project they've already started?
            <br></br><br></br>This is the place to connect with like-minded individuals who share your passion and skills.</div>
          <div style={{ marginTop: "1em" }}>
            <Button onClick={() => navigate("/buddy-list")}>
              Create / Collaborate on Projects
            </Button>
          </div>
        </Column>
        <Column lg={8} md={0} sm={0} className="buddyBackground"></Column>
      </Grid>
      <hr style={{ width: "80%" }}></hr>
      <Grid style={{ paddingTop: "2em", color: "white" }}>
        <Column lg={2} md={0} sm={0}></Column>
        <Column lg={12} md={8} sm={4}>
          <div>
            <div
              className="heading-02"
              style={{ textAlign: "center", marginBottom: "1em" }}>
              Here's how it works
            </div>
            <div style={{ color: "black" }}>
              <ExpandableTile
                tabIndex={0}
                tileCollapsedIconText="Interact to Expand tile"
                tileExpandedIconText="Interact to Collapse tile"
                tileMaxHeight={0}
                tilePadding={0}
                light={false} expanded={false} style={{ marginBottom: "2em" }}>
                <TileAboveTheFoldContent>
                  <div style={{ height: '34px', fontSize: '20px' }}>
                    1. Create a post
                  </div>
                </TileAboveTheFoldContent>
                <TileBelowTheFoldContent>
                  To get started, simply create a post outlining your project idea and what type of collaborator you're looking for. Be as detailed as possible, including the skills you need and any relevant experience or qualifications.
                </TileBelowTheFoldContent>
              </ExpandableTile>
              <ExpandableTile
                tabIndex={0}
                tileCollapsedIconText="Interact to Expand tile"
                tileExpandedIconText="Interact to Collapse tile"
                tileMaxHeight={0}
                tilePadding={0}
                light={false} expanded={false} style={{ marginBottom: "2em" }}>
                <TileAboveTheFoldContent>
                  <div style={{ height: '34px', fontSize: '20px' }}>
                    2. Browse existing posts
                  </div>
                </TileAboveTheFoldContent>
                <TileBelowTheFoldContent>
                  Take a break from Netflix and scrolling through social media and browse through existing posts to see if there's a project that interests you. If you have the skills and experience needed to contribute to the project, reach out to the poster and introduce yourself.
                </TileBelowTheFoldContent>
              </ExpandableTile>
              <ExpandableTile
                tabIndex={0}
                tileCollapsedIconText="Interact to Expand tile"
                tileExpandedIconText="Interact to Collapse tile"
                tileMaxHeight={0}
                tilePadding={0}
                light={false} expanded={false} style={{ marginBottom: "2em" }}>
                <TileAboveTheFoldContent>
                  <div style={{ height: '34px', fontSize: '20px' }}>
                    3. Connect with collaborators
                  </div>
                </TileAboveTheFoldContent>
                <TileBelowTheFoldContent>
                  Once you've found someone you want to work with, start a conversation and discuss the project in more detail. Make sure you're both on the same page about timelines, goals, and expectations before getting started.
                </TileBelowTheFoldContent>
              </ExpandableTile>
              <ExpandableTile
                tabIndex={0}
                tileCollapsedIconText="Interact to Expand tile"
                tileExpandedIconText="Interact to Collapse tile"
                tileMaxHeight={0}
                tilePadding={0}
                light={false} expanded={false} style={{ marginBottom: "2em" }}>
                <TileAboveTheFoldContent>
                  <div style={{ height: '34px', fontSize: '20px' }}>
                    4. Get to work
                  </div>
                </TileAboveTheFoldContent>
                <TileBelowTheFoldContent>
                  With your collaboration team in place, it's time to start working on your project! Use this page to keep track of progress, communicate with your team members, and share files and other resources.
                </TileBelowTheFoldContent>
              </ExpandableTile>
            </div>
          </div>
        </Column>
        <Column lg={2} md={0} sm={0}></Column>
      </Grid>
    </div>
  )
};

export default BuddyPage;
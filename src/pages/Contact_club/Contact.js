import React from "react";
import { Grid, Column } from "@carbon/react";
import join from "./Join.png";
import Registration from "../../components/Registration/Registration.component";

const Contact = () => {
  return (
    <div
      style={{
        marginTop: "2rem",
        marginBottom: "2rem",
      }}
    >
      <Grid
        fullWidth
        style={{
          gridGap: "2rem",
          padding: " 2rem 5rem",
        }}
      >
        <Column lg={16} md={8} sm={4}>
          <p className="heading-02 member-heading">
            Become a member of Engineering 4.0
          </p>
        </Column>
        <Column lg={8} md={4} sm={4}>
          <img
            src={join}
            alt="contact_avatar"
            id="contact_image"
            style={{
              maxWidth: "100%",
            }}
          />
        </Column>
        <Column
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          lg={8}
          md={4}
          sm={4}
        >
          <Registration />
        </Column>
      </Grid>
    </div>
  );
};

export default Contact;

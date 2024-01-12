import React from "react";
import { Grid, Column } from "@carbon/react";
import join from "./Join.png";
import Registration from "../../components/Registration/Registration.component";
import "./Contact.style.scss"

const Contact = () => {
  return (
    <div className="contact_container" id="contactSection">
      <Grid fullWidth className="contact_grid">
        <Column lg={16} md={8} sm={4}>
          <p className="heading">
            Become a member of Engineering 4.0
          </p>
        </Column>
        <Column lg={8} md={4} sm={4}>
          <img
            src={join}
            alt="contact_avatar"
            className="contact_image"
          />
        </Column>
        <Column
          className="registration_container"
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

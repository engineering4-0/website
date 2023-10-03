import React from "react";
import { Grid, Column, ClickableTile } from "@carbon/react";
import join from "./Join.png";
import Registration from "../../components/Registration/Registration.component";
const Contact = () => {
  return (
    <div>
      {" "}
      <Grid style={{ marginBottom: "2em" }}>
        <Column lg={1} md={0} sm={0}></Column>
        <Column lg={14} md={8} sm={4}>
          <p className="heading-02 member-heading">
            Become a member of Engineering 4.0
          </p>
        </Column>
        <Column lg={1} md={0} sm={0}></Column>
      </Grid>
      <Grid style={{ marginBottom: "2em" }}>
        <Column lg={2} md={0} sm={0}></Column>
        <Column lg={6} md={5} sm={4}>
          <img
            src={join}
            alt="contact_avatar"
            id="contact_image"
            style={{ maxWidth: "100%" }}
          />
        </Column>
        <Column lg={6} md={5} sm={4}>
          <Registration />
        </Column>
        <Column lg={2} md={0} sm={0}></Column>
      </Grid>
    </div>
  );
};

export default Contact;

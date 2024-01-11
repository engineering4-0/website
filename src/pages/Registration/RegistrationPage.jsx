import { Grid, Column } from "@carbon/react";
import React from "react";
import About from "../../components/About/About";
import Registration from "../../components/Registration/Registration";
import "./Registration.style.css";

const RegistrationPage = () => {
  return (
    <div className="registration-container">
      <Grid>
        <Column lg={1} md={0} sm={0}></Column>
        <Column lg={6} md={4} sm={0}>
          <About />
        </Column>
        <Column lg={1} md={0} sm={0}></Column>
        <Column lg={5} md={12} sm={4}>
          <Registration />
        </Column>
        <Column lg={1} md={0} sm={0}></Column>
      </Grid>
    </div>
  );
};

export default RegistrationPage;

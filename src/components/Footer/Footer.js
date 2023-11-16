import React from "react";
import { Column } from "@carbon/react";

const Footer = () => {
  return (
    <div className="footer">
      <Column
        lg={16}
        md={8}
        sm={4}
        style={{
          textAlign: "center",
          marginBottom: "0.25em",
          color: "white",
        }}
      >
        Designed with <span style={{ color: "red" }}>♥️</span> by The Technical
        Team
      </Column>
      <Column
        lg={16}
        md={8}
        sm={4}
        style={{ textAlign: "center", color: "white" }}
      >
        Contribute to this website here,{" "}
        <a
          target="_blank"
          rel="noreferrer"
          style={{ color: "white" }}
          href="https://github.com/engineering4-0/website"
        >
          GitHub
        </a>
      </Column>
    </div>
  );
};

export default Footer;

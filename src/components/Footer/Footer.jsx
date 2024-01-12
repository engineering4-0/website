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
          marginBottom: "0.5rem",
        }}
      >
        Designed with <span style={{ color: "red" }}>♥️</span> by The Technical
        Team
      </Column>
      <Column lg={16} md={8} sm={4} style={{ textAlign: "center" }}>
        Contribute to this website here
        <a
          target="_blank"
          rel="noreferrer"
          href="https://github.com/engineering4-0/website"
          className="link"
        >
          GitHub
        </a>
      </Column>
    </div>
  );
};

export default Footer;

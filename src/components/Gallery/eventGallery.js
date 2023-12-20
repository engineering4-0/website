import React, { useEffect } from "react";
import { Grid, Column } from "@carbon/react";
import Event1 from "./Event1.jpeg";
import Event2 from "./Event2.jpeg";
import Event3 from "./Event3.jpeg";
import Event4 from "./Event4.jpeg";
import Event5 from "./Event5.jpeg";
import Event6 from "./Event6.jpeg";
import Event7 from "./Event7.jpeg";
import Event8 from "./Event8.jpg";
import Event9 from "./Event9.jpg";
import Event10 from "./Event10.jpg";
import Event11 from "./Event11.jpg";
import "./gallery.style.css";

const galleryImages = [
  Event1,
  Event2,
  Event3,
  Event4,
  Event5,
  Event6,
  Event7,
  Event8,
  Event9,
  Event10,
  Event11,
];

const EventGallery = () => {
  useEffect(() => {
    const scroller = document.querySelectorAll(".scroller");
    addAnimation(scroller);
  }, []);

  function addAnimation(el) {
    el &&
      el.forEach((scroller) => {
        scroller.setAttribute("data-animated", true);
        console.log("Am i called");
        const scrollerInner = scroller.querySelector(".scroller__inner");
        const scrollerContent = Array.from(scrollerInner.children);
        scrollerContent.forEach((item) => {
          const duplicatedItem = item.cloneNode(true);
          duplicatedItem.setAttribute("aria-hidden", true);
          scrollerInner.appendChild(duplicatedItem);
        });
      });
  }

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
          <p className="heading-02 member-heading">Past Events</p>
        </Column>
        <Column lg={16} md={8} sm={4}>
          <div className="scroller">
            <ul className="scroller__inner">
              {galleryImages.map((item, i) => {
                return (
                  <li key={i}>
                    <img src={item} alt={i} />
                  </li>
                );
              })}
            </ul>
          </div>
        </Column>
      </Grid>
    </div>
  );
};

export default EventGallery;

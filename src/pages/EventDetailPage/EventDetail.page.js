import React from "react";
import { IconButton } from "@carbon/react";
import { ArrowLeft } from "@carbon/icons-react";
import "./EventDetailPage.css";
import UpEvent_1_1 from "./UpEvent-1_1.jpeg";
import { useNavigate } from "react-router-dom";

const EventsDetailPage = () => {
  const navigate = useNavigate();

  const upcomingEvent = {
    images: [UpEvent_1_1],
    title: "Industry Skills That Matter",
    // subHeading: "this is sub heading",
    location: "CEI",
    time: "June 15, 2023",
    describe:
      "Get the insights into the today's job market and the knowledge necessary from the industry experts on the panel Ashwin Rajeev, Barath Prem Kumar",
  };

  const handleRedirect = () => {
    navigate(-1);
  };

  return (
    <div className="eventDetailWrapper">
      <section className="eventDetailSection">
        <IconButton
          align="right"
          size="lg"
          kind="ghost"
          label="Go Back"
          enterDelayMs={0}
          leaveDelayMs={0}
        >
          <ArrowLeft onClick={handleRedirect} />
        </IconButton>
        <h2 className="eventHeading">{upcomingEvent.title}</h2>
        <h3 className="eventSubHeading">{upcomingEvent.subHeading}</h3>
        <div className="locationAndTimeContainer">
          <span className="location">{upcomingEvent.location}</span>
          <span className="time">{upcomingEvent.time}</span>
        </div>
        <img className="img-wrapper" src={UpEvent_1_1} alt="Event post"></img>

        <p className="eventsDetails">{upcomingEvent.describe}</p>
      </section>
    </div>
  );
};

export default EventsDetailPage;

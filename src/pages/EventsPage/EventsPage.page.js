import React from "react";
import Carousel from "../../components/Carousel/carousel.component";
import "./EventsPage.css";

export default function EventsPage() {
  // list of upcoming events goes here
  const upcomingEvents = [
    {
      images: [
        "https://picsum.photos/401/267",
        "https://picsum.photos/402/268",
        "https://picsum.photos/403/269",
        "https://picsum.photos/404/261",
        "https://picsum.photos/405/262",
      ],
      title: "This is a title of event",
      subHeading: "this is sub heading",
      location: "Toldo health center",
      time: "22 Apr 2023",
      describe:
        "This is a description of an event, This is a description of an event, This is a description of an event,This is a description of an event, This is a description of an event",
    },
    {
      images: [
        "https://picsum.photos/401/267",
        "https://picsum.photos/402/268",
        "https://picsum.photos/403/269",
        "https://picsum.photos/404/261",
        "https://picsum.photos/405/262",
      ],
      title: "This is a title of event",
      subHeading: "this is sub heading",
      location: "Toldo health center",
      time: "23 Apr 2023",
      describe:
        "This is a description of an event, This is a description of an event, This is a description of an event,This is a description of an event, This is a description of an event",
    },
  ];

  // list of past events goes here
  const pastEvents = [
    {
      images: [
        "https://picsum.photos/401/267",
        "https://picsum.photos/402/268",
        "https://picsum.photos/403/269",
        "https://picsum.photos/404/261",
        "https://picsum.photos/405/262",
      ],
      title: "This is a title of event",
      subHeading: "this is sub heading",
      location: "Toldo health center",
      time: "22 Apr 2023",
      describe:
        "This is a description of an event, This is a description of an event, This is a description of an event,This is a description of an event, This is a description of an event",
    },
  ];
  return (
    <div className="eventsPageWrapper">
      <h1 className="title"> Upcomin Events</h1>
      <section className="eventsTimeline">
        {upcomingEvents.map((event, index) => (
          <div
            className={`eventCardContainer ${
              (index + 1) % 2 === 0 ? "right" : ""
            }`}
            key={index}
            style={{ gridRowStart: index + 1, gridRowEnd: index + 2 }}
          >
            <div className="img-wrapper">
              <Carousel images={event.images} />
            </div>
            <div className="content-wrapper">
              <h2 className="eventHeading">{event.title}</h2>
              <h3 className="eventSubHeading">{event.subHeading}</h3>
              <div className="locationAndTimeContainer">
                <span className="location">{event.location}</span>
                <span className="time">{event.time}</span>
              </div>

              <p className="eventDescription">{event.describe}</p>
            </div>
          </div>
        ))}
      </section>
      <h1 className="title"> Past Events</h1>
      <section className="eventsTimeline">
        {pastEvents.map((event, index) => (
          <div
            className={`eventCardContainer ${
              (index + 1) % 2 === 0 ? "right" : ""
            }`}
            key={index}
            style={{ gridRowStart: index + 1, gridRowEnd: index + 2 }}
          >
            <div className="img-wrapper">
              <Carousel images={event.images} />
            </div>
            <div className="content-wrapper">
              <h2 className="eventHeading">{event.title}</h2>
              <h3 className="eventSubHeading">{event.subHeading}</h3>
              <div className="locationAndTimeContainer">
                <span className="location">{event.location}</span>
                <span className="time">{event.time}</span>
              </div>
              <p className="eventDescription">{event.describe}</p>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}

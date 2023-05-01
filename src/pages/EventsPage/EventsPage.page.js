import React from "react";
import Carousel from "../../components/Carousel/carousel.component";
import "./EventsPage.css";
import event_1_1 from "./Event-1_1.jpeg";
import event_2_1 from "./Event-2_1.jpeg";
import event_2_2 from "./Event-2_2.jpeg";
import event_2_3 from "./Event-2_3.jpeg";
import event_2_4 from "./Event-2_4.jpeg";
import event_2_5 from "./Event-2_5.jpeg";
import event_2_6 from "./Event-2_6.jpeg";

export default function EventsPage() {
  // list of upcoming events goes here
  const upcomingEvents = [
    // {
    //   images: [event_1_1],
    //   title: "Club Day!",
    //   // subHeading: "this is sub heading",
    //   location: "CAW Center",
    //   time: "Feb 16, 2023",
    //   describe:
    //     "Meet members, learn about our projects, and get involved! Free coffee, hot chocolate, and marshmallows for all attendees. All are welcome!",
    // },
    // {
    //   images: [
    //     event_2_6,
    //     event_2_1,
    //     event_2_2,
    //     event_2_3,
    //     event_2_4,
    //     event_2_5,
    //   ],
    //   title: "This is a title of event",
    //   subHeading: "this is sub heading",
    //   location: "Toldo health center",
    //   time: "23 Apr 2023",
    //   describe:
    //     "This is a description of an event, This is a description of an event, This is a description of an event,This is a description of an event, This is a description of an event",
    // },
  ];

  // list of past events goes here
  const pastEvents = [
    {
      images: [event_1_1],
      title: "Club Day!",
      // subHeading: "this is sub heading",
      location: "CAW Center",
      time: "Feb 16, 2023",
      describe:
        "Attendees learned about our projects, met with the club members, and got involved! Free coffee, hot chocolate, and marshmallows were provided for all who attended. All were welcome!",
    },
    {
      images: [
        event_2_6,
        event_2_1,
        event_2_2,
        event_2_3,
        event_2_4,
        event_2_5,
      ],
      title: "Welcome Event 👋",
      // subHeading: "this is sub heading",
      location: "CEI, Room Mo 1100",
      time: "March 11, 2023",
      describe:
        "Members and attendees gathered for a night of networking and fun activities, where they learned about what the club can offer. They also enjoyed free refreshments and meetup with the team.",
    },
  ];
  return (
    <div className="eventsPageWrapper">
      {upcomingEvents.length ? (
        <>
          <h1 className="heading-02 member-heading title">Upcoming Events</h1>
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
        </>
      ) : null}
      <h1 className="heading-02 member-heading title">Past Events</h1>
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
              {event.subHeading && (
                <h3 className="eventSubHeading">{event.subHeading}</h3>
              )}
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

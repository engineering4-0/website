import { Fragment } from "react";
import { SlEvent } from "react-icons/sl";
import "./EventsPage.css";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import event_1_1 from "./Event-1_1.jpeg";
import event_2_1 from "./Event-2_1.jpeg";
import event_2_2 from "./Event-2_2.jpeg";
import event_2_3 from "./Event-2_3.jpeg";
import event_2_4 from "./Event-2_4.jpeg";
import event_2_5 from "./Event-2_5.jpeg";
import event_2_6 from "./Event-2_6.jpeg";
import event_3_1 from "./Event-3_1.jpg";
import event_3_2 from "./Event-3_2.jpg";
import event_3_3 from "./Event-3_3.jpg";
import event_3_4 from "./Event-3_4.jpg";
import event_3_5 from "./Event-3_5.jpg";
import event_4_1 from "./Event-4_1.jpg";
import event_4_2 from "./Event-4_2.jpg";
import event_4_3 from "./Event-4_3.jpg";
import event_4_4 from "./Event-4_4.jpg";
import event_4_5 from "./Event-4_5.jpg";
import event_4_6 from "./Event-4_6.jpg";
import event_4_7 from "./Event-4_7.jpg";
import event_4_8 from "./Event-4_8.jpg";
import event_4_9 from "./Event-4_9.jpg";
import event_4_10 from "./Event-4_10.jpg";
import event_5_1 from "./Event-5_1.jpeg";
import event_5_2 from "./Event-5_2.jpeg";
import event_5_3 from "./Event-5_3.jpeg";
import event_5_4 from "./Event-5_4.jpeg";

const EventsPage = () => {
  // list of upcoming events goes here
  // const upcomingEvents = [
  //   {
  //     images: [event_1_1],
  //     title: "Club Day!",
  //     // subHeading: "this is sub heading",
  //     location: "CAW Center",
  //     time: "Feb 16, 2023",
  //     describe:
  //       "Meet members, learn about our projects, and get involved! Free coffee, hot chocolate, and marshmallows for all attendees. All are welcome!",
  //   },
  //   {
  //     images: [
  //       event_2_6,
  //       event_2_1,
  //       event_2_2,
  //       event_2_3,
  //       event_2_4,
  //       event_2_5,
  //     ],
  //     title: "This is a title of event",
  //     subHeading: "this is sub heading",
  //     location: "Toldo health center",
  //     time: "23 Apr 2023",
  //     describe:
  //       "This is a description of an event, This is a description of an event, This is a description of an event,This is a description of an event, This is a description of an event",
  //   },
  // ];

  // list of past events goes here
  const pastEvents = [
    {
      images: [event_1_1],
      title: "Club Day!",
      // subHeading: "this is sub heading",
      location: "CAW Center",
      time: "Feb 16, 2023",
      description:
        "Attendees learned about our projects, met with the club members, and got involved! Free coffee, hot chocolate, and marshmallows were provided for all who attended. All were welcome!",
    },
    {
      images: [event_2_3, event_2_2, event_2_1, event_2_4, event_2_5, event_2_6],
      title: "Welcome Event 👋",
      // subHeading: "this is sub heading",
      location: "CEI, Room Mo 1100",
      time: "March 11, 2023",
      description:
        "Members and attendees gathered for a night of networking and fun activities, where they learned about what the club can offer. They also enjoyed free refreshments and meetup with the team.",
    },
    {
      images: [event_3_1, event_3_2, event_3_3, event_3_4, event_3_5],
      title: "Club Coffee Day ☕",
      // subHeading: "this is sub heading",
      location: "CAW Center",
      time: "June, 2023",
      description:
        "Club Coffee Day was a fun and joyful event conducted in June 2023. The event acted as an introduction event to new club members and an opportunity for all students to learn about the club, possible hirings, and upcoming events!",
    },
    {
      images: [
        event_4_1,
        event_4_2,
        event_4_3,
        event_4_4,
        event_4_5,
        event_4_6,
        event_4_7,
        event_4_8,
        event_4_9,
        event_4_10,
      ],
      title: "Industry Skills that matters",
      // subHeading: "this is sub heading",
      location: "Toldo Health Center",
      time: "June, 2023",
      description:
        "Industry Skills that Matter is a workshop conducted by Engineering 4.0 on June 2023 to bring working professionals from various Industries to provide a seminar on what skills are required by all students to land their dream jobs! The workshop brought three working professionals from the workforce to discuss their experiences and struggles to land their jobs!",
    },
    {
      images: [event_5_1, event_5_2, event_5_3, event_5_4],
      title: "Club Showcase Day",
      // subHeading: "this is sub heading",
      location: "CEI building",
      time: "September, 2023",
      description:
        "The Club Showcase Day is an event conducted with the Windsor Engineering Society from the University of Windsor. The event showcased six student clubs from the University to both Undergraduate and Graduate Students. The students participated in a giveaway raffle to win goodies, learn what the club is about, and apply for possible hirings",
    },
  ];
  return (
    <div className="container mx-auto">
      <h1 className="text-center text-5xl">Past Events</h1>
      <div className="mb-12 mt-8">
        <VerticalTimeline lineColor="">
          {pastEvents.map((event) => {
            return (
              <Fragment key={event.title}>
                <VerticalTimelineElement
                  contentStyle={{ background: "#f3f4f6", borderRadius: "1rem", boxShadow: "none" }}
                  contentArrowStyle={{ borderRight: "0.4rem solid #9ca3af" }}
                  date={event.time}
                  icon={<SlEvent />}
                  iconStyle={{ background: "#fff", fontSize: "1.5rem" }}
                >
                  <div className=" flex flex-col items-center justify-center text-center">
                    <img
                      className="aspect-video w-full max-w-lg rounded-lg object-cover"
                      src={event.images[0]}
                      alt="event"
                    />
                    <h3 className="mt-4 text-2xl">{event.title}</h3>
                    <p className="!my-1 !text-xs !text-slate-600">{event.location}</p>
                    <p className="!text-sm">{event.description}</p>
                  </div>
                </VerticalTimelineElement>
              </Fragment>
            );
          })}
        </VerticalTimeline>
      </div>
    </div>
  );
};

export default EventsPage;

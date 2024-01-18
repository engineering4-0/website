import { Link } from "react-router-dom";
import Accordion from "./Accordion";

const BuddyPage = () => {
  return (
    <>
      <div className="container mx-auto flex flex-col items-center justify-center gap-4  p-4 text-center">
        <h1 className="text-5xl">Welcome to the 4.0 Buddy Program!</h1>
        <p className="max-w-screen-md">
          Are you looking for someone to work with you on a project idea, or do you want to collaborate with someone
          else on a project they've already started?
        </p>
        <p className="max-w-screen-md">
          This is the place to connect with like-minded individuals who share your passion and skills.
        </p>
        <Link to="/buddy-list" className="btn-accent">
          Create/Collaborate on Projects
        </Link>
      </div>
      <div className="container m-8 mx-auto">
        <h2 className="m-4 text-center text-3xl">Here's how it works</h2>
        <div className="mx-auto flex max-w-screen-lg flex-col justify-center gap-4 self-stretch">
          <Accordion
            title="Create a Post"
            content="To get started, simply create a post outlining you project idea and what type of collaborator you're looking for. Be as detailed as possible, including the skills you need and any relevant experience or qualifications."
          />
          <Accordion
            title="Browse existing posts"
            content="Take a break from Netflix and scrolling through social media and browse through existing posts to see if there's a project that interests you. If you have the skills and experience needed to contribute to the project, reach out to the author of the post and introduce yourself."
          />
          <Accordion
            title="Connect with collaborators"
            content="Once you've found someone you want to work with, start a conversation and discuss the project in more detail. Make sure you're both on the same page about timelines, goals, and expectations before getting started."
          />
          <Accordion
            title="Get to work"
            content="With your collaboration team in place, it's time to start working on your project! Use this page to keep track of progress, communicate with your team members, and share files and other resources."
          />
        </div>
      </div>
    </>
  );
};

export default BuddyPage;

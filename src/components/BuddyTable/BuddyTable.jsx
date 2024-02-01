import React, { useEffect, useState } from "react";
import BuddyRequestModal from "../Modal/BuddyRequestModal";
import axios from "axios";
import BuddyDetails from "./BuddyDetails";
import Modal from "../Modal/Modal";

const BuddyTable = () => {
  const [isRequestModalOpen, setIsRequestModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [buddyRequests, setBuddyRequests] = useState([]);
  const scriptUrl = process.env.REACT_APP_FIREBASE_BUDDY_DATABASE;

  const getBuddyRequests = async () => {
    setLoading(true);
    await axios
      .get(scriptUrl)
      .then((res) => {
        return res.data;
      })
      .then((data) => {
        setBuddyRequests(data);
        console.log(buddyRequests);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
      });
  };

  useEffect(() => {
    getBuddyRequests();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    getBuddyRequests();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isRequestModalOpen]);

  const handleModalClose = () => {
    setIsRequestModalOpen(false);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  const data = [
    {
      createdAt: new Date(),
      description: "This is a description",
      email: "XHr5D@example.com",
      name: "John Doe",
      requiredSkills: ["skill 1", "skill 2"],
    },
    {
      createdAt: new Date(),
      description: "This is a description",
      email: "XHr5D@example.com",
      name: "John Doe",
      requiredSkills: ["skill 2", "skill 4"],
    },
    {
      createdAt: new Date(),
      description: "This is a description",
      email: "XHr5D@example.com",
      name: "John Doe",
      requiredSkills: ["skill 3", "skill 4"],
    },
  ];

  return (
    <section className="container mx-auto my-8 flex flex-col items-center gap-4">
      <Modal open={isRequestModalOpen} handleModalClose={handleModalClose}>
        <BuddyRequestModal />
      </Modal>
      <h2 className="text-3xl">List of people looking for project buddies</h2>
      <p>
        If you are interested in working with someone or on a project listed here, send out an email to the person who
        created the post.
      </p>
      <p className="text-gray-500">
        Note: If you want to take down your buddy request, Please contact the technical team.
      </p>
      <div className="my-4 flex gap-4">
        <input type="text" placeholder="Search" className="rounded-lg border-2 border-gray-300 px-2 py-1" />
        <button className="btn-accent" onClick={() => setIsRequestModalOpen(true)}>
          I need a Buddy!
        </button>
      </div>
      <div className="w-full max-w-screen-lg overflow-hidden rounded-lg">
        <div className="w-full border-gray-200 text-center">
          <div className="border-b-2 border-gray-200 bg-gray-50">
            <div className="grid grid-cols-3">
              <div className="p-3 text-sm font-semibold tracking-wide">Name</div>
              <div className="p-3 text-sm font-semibold tracking-wide">Posted On</div>
              <div className="p-3 text-sm font-semibold tracking-wide">I need people who know...</div>
            </div>
          </div>
          <div>
            {data.map((item, index) => (
              <BuddyDetails index={index} item={item} key={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BuddyTable;

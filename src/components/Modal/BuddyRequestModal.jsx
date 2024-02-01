import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { validateEmail } from "../../utils/validation/email";

const BuddyRequestModal = ({ open, handleModalClose }) => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [requiredSkills, setRequiredSkills] = useState([]);
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);
  const [invalid, setInvalid] = useState(false);
  const [isAgreementInvalid, setIsAgreementInvalid] = useState(false);
  const [isEmailInvalid, setIsEmailInvalid] = useState(false);
  const [invalidText, setInvalidText] = useState("");
  const [isNameInvalid, setIsNameInvalid] = useState(false);
  const [isAgreementChecked, setIsAgreementChecked] = useState(false);
  const scriptUrl = process.env.REACT_APP_FIREBASE_BUDDY_DATABASE;

  const AVAILABLE_TECH_STACK = [
    "Mobile Development",
    "Blockchain",
    "Digital Signal Processing",
    "Data Science",
    "Machine Learning",
    "Electrical",
    "Solidworks",
    "Creo",
    "Catia",
    "Ansys",
    "Siemens NX",
    "Autodesk inventor",
    "Fusion 360",
    "Power BI",
    "MS Excel",
    "R Programming",
    "SQL",
    "Python",
  ];

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
    if (e.target.value.length === 0) {
      setInvalid(true);
      setInvalidText("Description cannot be blank");
    } else {
      setInvalid(false);
      setInvalidText("");
    }
  };

  const handleTechStackSelection = ({ selectedItems }) => {
    setRequiredSkills(selectedItems);
  };

  const handleAgreementChange = () => {
    setIsAgreementInvalid(false);
    setIsAgreementChecked(!isAgreementChecked);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);

    if (!validateEmail(e.target.value)) {
      setIsEmailInvalid(true);
    } else {
      setIsEmailInvalid(false);
    }
  };

  const handleNameChange = (e) => {
    setName(e.target.value);

    if (e.target.value.length === 0) {
      setIsNameInvalid(true);
    } else {
      setIsNameInvalid(false);
    }
  };

  const handleSubmission = async (e) => {
    e.preventDefault();
    let isInvalid = false;

    if (!isAgreementChecked || isAgreementInvalid) {
      isInvalid = true;
      setIsAgreementInvalid(true);
    }

    if (email.length === 0 || isEmailInvalid) {
      isInvalid = true;
      setIsEmailInvalid(true);
    }

    if (name.length === 0 || isNameInvalid) {
      isInvalid = true;
      setIsNameInvalid(true);
    }

    if (description.length === 0 || invalid) {
      isInvalid = true;
      setInvalid(true);
      setInvalidText("Suggestion cannot be blank");
    }

    if (isInvalid) {
      return;
    }

    setLoading(true);

    await axios
      .post(scriptUrl, { email, description, requiredSkills, name, createdAt: new Date() })
      .then((res) => {
        setLoading(false);
        handleModalClose();
        toast("Your buddy search is posted. Keep an eye out on your email.");
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
        handleModalClose();
        toast("An error occurred while making buddy request. Contact club members");
      });
    setInvalidText("");
    setEmail("");
    setRequiredSkills([]);
    setDescription("");
  };

  if (loading) return <div description="Active loading indicator" withOverlay={false} />;

  return (
    <div className="container mx-auto px-8" open={open}>
      <h3 className="mb-2 text-center text-3xl">Post Your Buddy Request 🚀</h3>
      <p className="max-w-screen-md">
        Send your request to a place that connects you with like-minded individuals who share your passion and skills.
        <span>If you ever want to take down your request, Reach out to the technical team.</span>
      </p>
      <form onSubmit={handleSubmission} className="mx-auto my-8 flex max-w-screen-md flex-col justify-center gap-4">
        <div className="flex flex-col gap-2">
          <label htmlFor="name-input">Enter your name</label>
          <input
            className="rounded-lg border-2 border-gray-300 p-2"
            id="name-input"
            invalid={isNameInvalid}
            invalidText="You need to enter a valid name"
            onChange={handleNameChange}
            onClick={function noRefCheck() {}}
            placeholder="Eg. Levi Ackerman"
            value={name}
            type="text"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="email-input">Enter your UWindsor email</label>
          <input
            className="rounded-lg border-2 border-gray-300 p-2"
            id="email-input"
            invalid={isEmailInvalid}
            invalidText="You need to enter a valid UWindsor email address eg. example@uwindsor.ca"
            onChange={handleEmailChange}
            onClick={function noRefCheck() {}}
            placeholder="example@uwindsor.ca"
            value={email}
            type="email"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="carbon-multiselect-example">Select the tech stack you need</label>
          <div className="overflow-hidden rounded-lg border-2 border-gray-300">
            <select
              multiple={true}
              className="w-full p-2"
              id="carbon-multiselect-example"
              onChange={handleTechStackSelection}
            >
              {AVAILABLE_TECH_STACK.map((item) => (
                <option key={item}>{item}</option>
              ))}
            </select>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="description-input">Describe the project that you want to collaborate on</label>
          <textarea
            className="rounded-lg border-2 border-gray-300 p-2"
            id="description-input"
            rows={4}
            value={description}
            invalid={invalid}
            invalidText={invalidText}
            placeholder="How about we work on the next big Twitter?"
            onChange={handleDescriptionChange}
          />
        </div>
        <div className="m-4">
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              id="agreement-checkbox"
              onChange={handleAgreementChange}
              checked={isAgreementChecked}
              invalid={isAgreementInvalid}
              invalidText="You need to agree to submit a Buddy request."
            />
            <label htmlFor="agreement-checkbox" className="m-2">
              Please check the box below to confirm that you agree to share your email address and project description
              with the public.
            </label>
          </div>
          <p className="my-2 text-sm text-gray-500">
            By checking this box, you acknowledge that this information will be made available to other users of the
            platform and may be used by them for various purposes. You also affirm that you have the necessary
            permissions to share this information and that it does not violate any applicable laws or regulations. Thank
            you for your cooperation.
          </p>
        </div>
        <button className="btn-accent">Submit</button>
      </form>
    </div>
  );
};

export default BuddyRequestModal;

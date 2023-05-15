import {
  Checkbox,
  Form,
  Loading,
  Modal,
  MultiSelect,
  Stack,
  TextArea,
  TextInput
} from "@carbon/react";
import { useState } from "react";
import axios from 'axios';
import { toast } from 'react-toastify';
import { validateEmail } from '../../utils/validation/email';

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
    'Mobile Development',
    'Blockchain',
    'Digital Signal Processing',
    'Data Science',
    'Machine Learning',
    'Electrical',
    'Solidworks',
    'Creo',
    'Catia',
    'Ansys',
    'Siemens NX',
    'Autodesk inventor',
    'Fusion 360',
    'Power BI',
    'MS Excel',
    'R Programming',
    'SQL',
    'Python'
  ];

  const handleClose = () => {
    setInvalid(false);
    setInvalidText("");
    setEmail("");
    setDescription("");
    setRequiredSkills([]);
    handleModalClose();
  };

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
  }

  const handleSubmission = async () => {
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

    await axios.post(scriptUrl,
      { email, description, requiredSkills, name, createdAt: new Date() })
      .then(res => {
        setLoading(false);
        handleModalClose();
        toast("Your buddy search is posted. Keep an eye out on your email.");
      })
      .catch(err => {
        console.log(err);
        setLoading(false);
        handleModalClose();
        toast("An error occured while making buddy request. Contact club members");
      });
    setInvalidText("");
    setEmail("");
    setRequiredSkills([]);
    setDescription("");
  };

  if (loading) return <Loading
    description="Active loading indicator" withOverlay={false} />

  return (
    <Modal
      open={open}
      modalHeading="Post Your Buddy Request 🚀"
      primaryButtonText="Request Buddy"
      secondaryButtonText="Nevermind"
      onRequestClose={handleClose}
      onRequestSubmit={handleSubmission}>
      <p style={{ marginBottom: '1rem' }}>
        Send your request to a place that connects you with like-minded
        individuals who share your passion and skills.<br></br><br></br>
        <span style={{ textDecoration: "underline" }}>If you ever want to take down your request, Reach out to the technical team.</span>
      </p>
      <Form>
        <Stack gap={5}>
          <TextInput
            data-modal-primary-focus
            id="name-input"
            invalid={isNameInvalid}
            invalidText="You need to enter a valid name"
            labelText="Enter your name"
            onChange={handleNameChange}
            onClick={function noRefCheck() { }}
            placeholder="Eg. Levi Ackerman"
            playgroundWidth={300}
            size="md"
            value={name}
            type="text"
          />
          <TextInput
            id="email-input"
            invalid={isEmailInvalid}
            invalidText="You need to enter a valid uwindsor email address eg. example@uwindsor.ca"
            labelText="Enter your UWindsor email"
            onChange={handleEmailChange}
            onClick={function noRefCheck() { }}
            placeholder="example@uwindsor.ca"
            playgroundWidth={300}
            size="md"
            value={email}
            type="email"
          />
          <MultiSelect
            label="Select the tech stack you need"
            id="carbon-multiselect-example"
            titleText="Tech stack you need for your project"
            items={AVAILABLE_TECH_STACK}
            itemToString={(item) => (item ? item : '')}
            onChange={handleTechStackSelection}
            selectionFeedback="top-after-reopen"
          />
          <TextArea
            id="description-input"
            rows={4}
            maxCount={60}
            value={description}
            invalid={invalid}
            invalidText={invalidText}
            labelText="Describe the project that you want to collaborate on"
            placeholder="How about we work on the next big Twitter?"
            style={{ marginBottom: '1rem' }}
            onChange={handleDescriptionChange}
          />
          <Checkbox
            labelText="Please check the box below to confirm that you agree to share your email address and project description with the public."
            id="agrement-checkbox"
            onChange={handleAgreementChange}
            checked={isAgreementChecked}
            helperText="By checking this box, you acknowledge that this information will be made available to other users of the platform and may be used by them for various purposes. You also affirm that you have the necessary permissions to share this information and that it does not violate any applicable laws or regulations. Thank you for your cooperation."
            invalid={isAgreementInvalid}
            invalidText="You need to agree to submit a Buddy request."
          />
        </Stack>
      </Form>
    </Modal>
  );
};

export default BuddyRequestModal;

import { Form, Loading, Modal, MultiSelect, Stack, TextArea, TextInput } from "@carbon/react";
import { useState } from "react";
import axios from 'axios';
import { toast } from 'react-toastify';

const BuddyRequestModal = ({ open, handleModalClose }) => {
  const [suggestion, setSuggestion] = useState("");
  const [loading, setLoading] = useState(false);
  const [invalid, setInvalid] = useState(false);
  const [invalidText, setInvalidText] = useState("");
  const scriptUrl = process.env.REACT_APP_FIREBASE_BUDDY_DATABASE;

  const handleClose = () => {
    setInvalid(false);
    setInvalidText("");
    setSuggestion("");
    handleModalClose();
  };

  const handleSuggestionChange = (e) => {
    setSuggestion(e.target.value);
    if (e.target.value.length === 0) {
      setInvalid(true);
      setInvalidText("Suggestion cannot be blank");
    } else {
      setInvalid(false);
      setInvalidText("");
    }
  };

  const handleSubmission = async () => {
    if (suggestion.length === 0) {
      setInvalid(true);
      setInvalidText("Suggestion cannot be blank");
      return;
    }

    await axios.post(scriptUrl,
      { suggestion, createdAt: new Date() })
      .then(res => {
        setLoading(false);
        handleModalClose();
        toast("We hear you loud and clear! Thank you for the suggestion.");
      })
      .catch(err => {
        setLoading(false);
        handleModalClose();
        toast("An error occured while sending feedback. Contact club members");
      });
    setInvalidText("");
    setSuggestion("");
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
        <div style={{ textDecoration: "underline" }}>If you ever want to take down your request, Reach out to the technical team.</div>
      </p>
      <Form>
        <Stack gap={5}>
          <TextInput
            className="input-test-class"
            id="text-input-1"
            invalidText="Error message goes here"
            labelText="Enter your UWindsor email"
            onChange={function noRefCheck() { }}
            onClick={function noRefCheck() { }}
            placeholder="example@uwindsor.ca"
            playgroundWidth={300}
            size="md"
            type="email"
            warnText="Warning message that is really long can wrap to more lines but should not be excessively long."
          />
          <MultiSelect
            label="Select the tech stack you need"
            id="carbon-multiselect-example"
            titleText="Tech stack for your project"
            items={[{ text: 'Mobile Development' }, { text: 'Blockchain' }, { text: 'Digital Signal Processing' },  { text: 'UI/UX Design' }]}
            itemToString={(item) => (item ? item.text : '')}
            selectionFeedback="top-after-reopen"
          />
          <TextArea
            data-modal-primary-focus
            id="text-input-1"
            rows={4}
            maxCount={60}
            invalid={invalid}
            invalidText={invalidText}
            labelText="Describe the project that you want to collaborate on"
            placeholder="How about we work on the next big Twitter?"
            style={{ marginBottom: '1rem' }}
            onChange={handleSuggestionChange}
            value={suggestion}
          />
        </Stack>
      </Form>
    </Modal>
  );
};

export default BuddyRequestModal;

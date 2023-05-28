import { Loading, Modal, TextArea } from "@carbon/react";
import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import emailjs from "@emailjs/browser";

const EventSuggestionModal = ({ open, handleModalClose }) => {
  const [suggestion, setSuggestion] = useState("");
  const [loading, setLoading] = useState(false);
  const [invalid, setInvalid] = useState(false);
  const [invalidText, setInvalidText] = useState("");
  const scriptUrl = process.env.REACT_APP_FIREBASE_SUGGESTIONS_DATABASE;

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

  const handleSubmission = async (e) => {
    e.preventDefault()
    if (suggestion.length === 0) {
      setInvalid(true);
      setInvalidText("Suggestion cannot be blank");
      return;
    }
    await axios
      .post(scriptUrl, { suggestion, createdAt: new Date() })
      .then((res) => {
        setLoading(false);
        handleModalClose();
        sendEmail(suggestion);    // This line will not work with localhost but it will in production due to env is setting the API URL
        toast("We hear you loud and clear! Thank you for the suggestion.");
      })
      .catch((err) => {
        console.log("err", err)
        setLoading(false);
        handleModalClose();
        toast("An error occured while sending feedback. Contact club members");
      });
    setInvalidText("");
    setSuggestion("");
  };

  const sendEmail = (message) => {
    emailjs
      .send(
        REACT_APP_EMAIL_JS_SERVICE_ID,
        REACT_APP_EMAIL_JS_TEMPLATE_ID,
        { message },
        REACT_APP_EMAIL_JS_PUBLIC_KEY 
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  if (loading)
    return (
      <Loading description="Active loading indicator" withOverlay={false} />
    );

  return (
    <Modal
      open={open}
      modalHeading="We want to hear from you ♥️"
      primaryButtonText="Suggest Event"
      secondaryButtonText="Nevermind"
      onRequestClose={handleClose}
      onRequestSubmit={handleSubmission}
    >
      <p style={{ marginBottom: "1rem" }}>
        We're back and better than ever, and we need your help. We're planning a
        bunch of awesome events for the upcoming year, and we want to make sure
        we're catering to your every whim and fancy. After all, who knows better
        what you want than...well, you?<br></br>
        <br></br>
        So, we're here to ask you to put on your thinking caps and let us know
        what kinds of events you'd like to see us host. Don't be shy, we're open
        to all kinds of suggestions (within reason, of course). The weirder and
        wackier, the better!<br></br>
        <br></br>
        So hit us with your best ideas, and let's make this year one to
        remember!
      </p>
      <TextArea
        data-modal-primary-focus
        id="text-input-1"
        rows={4}
        maxCount={60}
        invalid={invalid}
        invalidText={invalidText}
        labelText="Describe the event that you want us to organize"
        placeholder="How about we do a tech talk on Blockchain?"
        style={{ marginBottom: "1rem" }}
        onChange={handleSuggestionChange}
        value={suggestion}
      />
    </Modal>
  );
};

export default EventSuggestionModal;

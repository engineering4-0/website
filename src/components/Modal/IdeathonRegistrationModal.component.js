import {
  Checkbox,
  Form,
  Loading,
  Modal,
  MultiSelect,
  Stack,
  TextArea,
  TextInput,
  FileUploaderDropContainer,
  FormItem,
} from "@carbon/react";
import { useState } from "react";
import axios from 'axios';
import { toast } from 'react-toastify';
import { validateEmail } from '../../utils/validation/email';

const IdeathonRegistrationModal = ({ open, handleModalClose }) => {
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
      modalHeading="Sumbit Abstract"
      primaryButtonText="Register for event"
      secondaryButtonText="Cancel"
      onRequestClose={handleClose}
      onRequestSubmit={handleSubmission}>
      <p style={{ marginBottom: '1rem' }}>
        Send your request to a place that connects you with like-minded
        individuals who share your passion and skills.<br></br>
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
          <FormItem >
            <p className="cds--file--label">
              Upload files
            </p>
            <p className="cds--label-description">
              Max file size is 500kb. Supported file types are .jpg and .png.
            </p>
            <FileUploaderDropContainer
              accept={[
                'image/jpeg',
                'image/png'
              ]}
              style={{ minWidth: "100%" }}
              innerRef={{
                current: '[Circular]'
              }}
              labelText="Drag and drop files here or click to upload"
              multiple
              name=""
              onAddFiles={function noRefCheck() { }}
              onChange={function noRefCheck() { }}
              tabIndex={0}
            />
            <div className="cds--file-container cds--file-container--drop" />
          </FormItem>
        </Stack>
      </Form>
    </Modal>
  );
};

export default IdeathonRegistrationModal;

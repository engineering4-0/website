import { Button, Loading, InlineNotification } from '@carbon/react';
import { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import emailjs from '@emailjs/browser';
import { validateEmail } from '../../utils/validation/email';

const Registration = () => {
  const [registrationNotif, setRegistrationNotif] = useState({
    isEnabled: false,
    id: null,
  });

  const [contactInfo, setContactInfo] = useState({
    first: '',
    last: '',
    email: '',
    instagram: '',
  });

  const sendEmail = (name, email, memberId) => {
    emailjs
      .send(
        process.env.REACT_APP_EMAIL_JS_SERVICE_ID,
        'template_dy1kxqz',
        {
          name,
          email,
          memberId,
        },
        process.env.REACT_APP_EMAIL_JS_PUBLIC_KEY
      )
      .then(
        function (response) {
          console.log('SUCCESS!', response.status, response.text);
        },
        function (error) {
          console.log('FAILED...', error);
        }
      );
  };

  const [isLoading, setLoading] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [firstNameError, setFirstNameError] = useState(false);
  const [lastNameError, setLastNameError] = useState(false);

  const scriptUrl = process.env.REACT_APP_FIREBASE_USER_DATABASE;

  const handleChange = (event) => {
    setContactInfo({ ...contactInfo, [event.target.name]: event.target.value });

    if (event.target.name === 'email' && !validateEmail(event.target.value)) {
      setEmailError(true);
    } else {
      setEmailError(false);
    }
  };

  const onSubmitHandler = async (e) => {
    setLoading(true);
    e.preventDefault();

    if (
      contactInfo.first.length === 0 ||
      contactInfo.last.length === 0 ||
      contactInfo.email.length === 0
    ) {
      if (contactInfo.first.length === 0) setFirstNameError(true);

      if (contactInfo.last.length === 0) setLastNameError(true);

      if (contactInfo.email.length === 0) setEmailError(true);

      setLoading(false);
      return;
    }

    const isEmailValid = await validateEmail(contactInfo.email);
    if (!isEmailValid) {
      setEmailError(true);
      return;
    }

    axios
      .get(scriptUrl, {
        params: {
          orderBy: '"email"',
          equalTo: `"${contactInfo.email}"`,
        },
      })
      .then((res) => {
        if (res.data && Object.keys(res.data).length === 0) {
          registerUser();
        } else {
          toast('You are already a member!');
          setLoading(false);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const registerUser = async () => {
    await axios
      .post(scriptUrl, { ...contactInfo, createdAt: new Date() })
      .then((res) => {
        sendEmail(
          `${contactInfo.first} ${contactInfo.last}`,
          contactInfo.email,
          res.data.name
        );
        setRegistrationNotif({ isEnabled: true, id: res.data.name });
        setContactInfo({
          email: '',
          first: '',
          last: '',
          instagram: '',
        });
        setLoading(false);
        toast('Registration Completed');
      })
      .catch((err) => {
        setLoading(false);
        toast('An error occurred during registration. Contact club members');
        setContactInfo({
          email: '',
          first: '',
          last: '',
          instagram: '',
        });
      });
  };

  if (isLoading)
    return (
      <Loading description="Active loading indicator" withOverlay={false} />
    );

  return (
    <div
      style={{
        backgroundColor: '#cdcdcd',
        borderRadius: '5px',
        padding: '2em',
      }}
    >
      <form onSubmit={onSubmitHandler}>
        <div class="form-floating mb-3">
          <input
            type="text"
            className={`form-control ${firstNameError && 'is-invalid'}`}
            id="firstname"
            name="first"
            placeholder="First name"
            value={contactInfo.first}
            onChange={handleChange}
          />
          <label for="firstname">First Name</label>
        </div>
        <div class="form-floating mb-3">
          <input
            type="text"
            className={`form-control ${lastNameError && 'is-invalid'}`}
            id="lastname"
            name="last"
            placeholder="Last name"
            value={contactInfo.last}
            onChange={handleChange}
          />
          <label for="lastname">Last Name</label>
        </div>
        <div class="form-floating mb-3">
          <input
            type="email"
            className={`form-control ${emailError && 'is-invalid'}`}
            id="email"
            name="email"
            placeholder="UWindsor Email"
            value={contactInfo.email}
            onChange={handleChange}
          />
          <label for="email">Email</label>
        </div>
        <div class="form-floating mb-3">
          <input
            type="text"
            className="form-control"
            id="instagram"
            name="instagram"
            placeholder="@username"
            value={contactInfo.instagram}
            onChange={handleChange}
          />
          <label for="instagram">Instagram Handle</label>
        </div>
        <div className="registerButtonContainer">
          <Button
            kind="primary"
            tabIndex={0}
            type="submit"
            className="submitButton"
          >
            Register
          </Button>
        </div>
      </form>
      {/* <Form onSubmit={onSubmitHandler}>
        <Stack gap={7}>
          <TextInput
            helperText=""
            id="first"
            invalid={firstNameError}
            invalidText="Invalid name."
            labelText="Name"
            placeholder="Enter first name"
            name="first"
            value={contactInfo.first}
            onChange={handleChange}
          />
          <TextInput
            helperText=""
            id="last"
            invalid={lastNameError}
            invalidText="Invalid name."
            labelText="Last name"
            placeholder="Enter last name"
            name="last"
            value={contactInfo.last}
            onChange={handleChange}
          />

          <TextInput
            className="form-control"
            value={contactInfo.email}
            helperText=""
            id="email floatingInput"
            type="email"
            invalidText="Please provide a valid @uwindsor.ca email"
            invalid={emailError}
            labelText="Email"
            placeholder="Enter uwindsor email address"
            name="email"
            onChange={handleChange}
          />
          <TextInput
            helperText="You can provide us your instagram handle to get a mention"
            id="instagram"
            invalidText="Invalid instagram handle."
            labelText="Instagram Handle (Optional)"
            placeholder="@username"
            name="instagram"
            value={contactInfo.instagram}
            onChange={handleChange}
          />
          <div className="registerButtonContainer">
            <Button
              kind="primary"
              tabIndex={0}
              type="submit"
              className="submitButton"
            >
              Register
            </Button>
          </div>
        </Stack>
      </Form> */}
      {registrationNotif.isEnabled ? (
        <InlineNotification
          style={{ marginTop: '2em' }}
          kind="info"
          subtitle={`This is your member ID ${registrationNotif.id} Make sure your have this copied.`}
          title="You are now a member of Engineering 4.0!"
        />
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default Registration;

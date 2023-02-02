import {
    Form,
    Stack,
    TextInput,
    Button,
    Loading,
    InlineNotification
} from '@carbon/react';
import { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { validateEmail } from '../../utils/validation/email';

const Registration = () => {

    const [registrationNotif, setRegistrationNotif] = useState({ isEnabled: false, id: null });

    const [contactInfo, setContactInfo] = useState({
        first: "",
        last: "",
        email: "",
        instagram: "",
    });

    const [isLoading, setLoading] = useState(false);
    const [emailError, setEmailError] = useState(false);

    const scriptUrl = process.env.REACT_APP_FIREBASE_USER_DATABASE;

    const handleChange = (event) => {
        setContactInfo({ ...contactInfo, [event.target.name]: event.target.value });

        if (!validateEmail(contactInfo.email)) {
            setEmailError(true);
        } else {
            setEmailError(false);
        }
    };

    const onSubmitHandler = async (e) => {
        setLoading(true);
        e.preventDefault();

        if (contactInfo.first.length === 0
            || contactInfo.last.length === 0
            || contactInfo.email.length === 0) return;

        const isEmailValid = await validateEmail(contactInfo.email);
        if (!isEmailValid) {
            setEmailError(true);
        }

        axios.post(scriptUrl, contactInfo)
            .then(res => {
                console.log(res);
                setRegistrationNotif({ isEnabled: true, id: res.data.name });
                setContactInfo({
                    email: "",
                    first: "",
                    last: "",
                    instagram: "",
                });
                setLoading(false);
                toast("Registration Completed");
            })
            .catch(err => {
                setLoading(false);
                toast("An error occured during registration. Contact club members");
                setContactInfo({
                    email: "",
                    first: "",
                    last: "",
                    instagram: "",
                });
            });
    };

    if (isLoading) return <Loading
        description="Active loading indicator" withOverlay={false} />

    return (
        <div style={{ backgroundColor: "white", borderRadius: "5px", padding: "2em" }}>
            <h3>Become a member of Engineering 4.0</h3>
            <hr></hr>
            <Form onSubmit={onSubmitHandler}>
                <Stack gap={7}>
                    <TextInput
                        helperText=""
                        id="first"
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
                        invalidText="Invalid name."
                        labelText="Last name"
                        placeholder="Enter last name"
                        name="last"
                        value={contactInfo.last}
                        onChange={handleChange}
                    />
                    <TextInput
                        value={contactInfo.email}
                        helperText=""
                        id="email"
                        invalidText="Invalid email."
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
                    <Button
                        kind="primary"
                        tabIndex={0}
                        type="submit"
                    >
                        Register
                    </Button>
                </Stack>
            </Form>
            {registrationNotif.isEnabled ? (<InlineNotification
            style={{ marginTop: "2em"}}
                kind="info"
                iconDescription="describes the close button"
                subtitle={<span>This is your member ID <span style={{fontWeight: 600}}>{registrationNotif.id}</span> Make sure your have this copied.</span>}
                title="You are now a member of Engineering 4.0!"
            />) : (<div></div>)}

        </div>
    );
}

export default Registration;
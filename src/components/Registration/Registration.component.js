import {
    Form,
    Stack,
    TextInput,
    Button,
    Loading
} from '@carbon/react';
import { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

const Registration = () => {

    const [contactInfo, setContactInfo] = useState({
        first: "",
        last: "",
        email: "",
    });

    const [isLoading, setLoading] = useState(false);

    const scriptUrl = "https://sheet.best/api/sheets/80075981-73e9-431a-85c4-7caa42b4680f";

    const handleChange = (event) => {
        setContactInfo({ ...contactInfo, [event.target.name]: event.target.value });
    };

    const onSubmitHandler = (e) => {
        setLoading(true);
        e.preventDefault();

        if (contactInfo.first.length === 0
            || contactInfo.last.length === 0
            || contactInfo.email.length === 0) return;

        console.log(contactInfo);

        axios.post(scriptUrl, contactInfo)
            .then(res => {
                setContactInfo({
                    email: "",
                    first: "",
                    last: "",
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
                });
            });

    };

    if (isLoading) return <Loading
        description="Active loading indicator" withOverlay={false} />

    return (
        <>
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
                        labelText="Email"
                        placeholder="Enter uwindsor email address"
                        name="email"
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
        </>
    );
}

export default Registration;
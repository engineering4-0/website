import {
  Button,
  Column,
  Grid,
  Stack,
  TextInput,
  FormGroup,
  Loading,
} from "@carbon/react";
import { useState } from "react";
import { validateEmail } from "../../utils/validation/email";
import axios from "axios";
import { toast } from "react-toastify";

const UserInfo = () => {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [instagramId, setInstagramId] = useState("");
  const [isLoading, setLoading] = useState(false);
  const scriptUrl = process.env.REACT_APP_FIREBASE_COFFEE_DATABASE;
  console.log(scriptUrl);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    if (!validateEmail(e.target.value)) {
      setEmailError(true);
    } else {
      setEmailError(false);
    }
  };

  const handleSubmit = async () => {
    if (email.length > 0 && instagramId.length > 0 && !emailError) {
      await axios
        .post(scriptUrl, {
          email: email,
          id: instagramId,
          createdAt: new Date(),
        })
        .then((res) => {
          console.log(res);
          setLoading(false);
          toast("Completed");
        })
        .catch((err) => {
          console.log(err);
          setEmail("");
          setInstagramId("");
          setLoading(false);
          toast("An error occured during submission. Contact club members");
        });
    }
  };

  return (
    <>
      <Grid style={{ marginTop: "8em" }}>
        <Column lg={{ span: 12, offset: 4 }} sm={4} md={8}>
          <FormGroup
            style={{ maxWidth: "600px" }}
            legendText="Coffee Day June 2023"
          >
            <Stack gap={7}>
              <TextInput
                helperText=""
                id="email"
                invalidText="Please provide a valid @uwindsor.ca email"
                invalid={emailError}
                labelText="Email"
                placeholder="Enter uwindsor email address"
                name="email"
                required
                value={email}
                onChange={handleEmailChange}
              />
              <TextInput
                helperText="You can provide us your instagram handle to get a mention"
                id="instagram"
                invalidText="Invalid instagram handle."
                labelText="Instagram Handle"
                placeholder="@username"
                name="instagram"
                required
                value={instagramId}
                onChange={(e) => setInstagramId(e.target.value)}
              />
              <Button
                disabled={isLoading && emailError}
                onClick={handleSubmit}
                className="some-class"
              >
                Submit {isLoading && <Loading />}
              </Button>
            </Stack>
          </FormGroup>
        </Column>
      </Grid>
    </>
  );
};

export default UserInfo;

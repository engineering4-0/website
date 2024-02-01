// import emailjs from "@emailjs/browser";
// import axios from "axios";

const Registration = () => {
  // const scriptUrl = process.env.REACT_APP_FIREBASE_USER_DATABASE;

  // const sendEmail = (name, email, memberId) => {
  //   emailjs
  //     .send(
  //       process.env.REACT_APP_EMAIL_JS_SERVICE_ID,
  //       "template_dy1kxqz",
  //       {
  //         name,
  //         email,
  //         memberId,
  //       },
  //       process.env.REACT_APP_EMAIL_JS_PUBLIC_KEY,
  //     )
  //     .then(
  //       function (response) {
  //         console.log("SUCCESS!", response.status, response.text);
  //       },
  //       function (error) {
  //         console.log("FAILED...", error);
  //       },
  //     );
  // };
  const handleSubmit = (e) => {
    e.preventDefault();

    const fd = new FormData(e.target);
    const data = Object.fromEntries(fd.entries());
    console.log(data);
    // axios
    // .get(scriptUrl, {
    //   params: {
    //     orderBy: '"email"',
    //     equalTo: `"${contactInfo.email}"`,
    //   },
    // })
    // .then((res) => {
    //   if (res.data && Object.keys(res.data).length === 0) {
    //     registerUser();
    //   } else {
    //     toast('You are already a member!');
    //     setLoading(false);
    //   }
    // })
    // .catch((err) => {
    //   console.log(err);
    // });

    e.target.reset();
  };

  // const registerUser = async () => {
  //   await axios
  //     .post(scriptUrl, { ...contactInfo, createdAt: new Date() })
  //     .then((res) => {
  //       sendEmail(
  //         `${contactInfo.first} ${contactInfo.last}`,
  //         contactInfo.email,
  //         res.data.name
  //       );
  //       setRegistrationNotif({ isEnabled: true, id: res.data.name });
  //       setContactInfo({
  //         email: '',
  //         first: '',
  //         last: '',
  //         instagram: '',
  //       });
  //       setLoading(false);
  //       toast('Registration Completed');
  //     })
  //     .catch((err) => {
  //       setLoading(false);
  //       toast('An error occurred during registration. Contact club members');
  //       setContactInfo({
  //         email: '',
  //         first: '',
  //         last: '',
  //         instagram: '',
  //       });
  //     });
  // };

  return (
    <div className="mx-4 my-10 flex items-stretch justify-between gap-6 rounded-xl shadow-2xl md:mx-auto md:w-full md:max-w-screen-md">
      <div className="hidden max-w-xs sm:block">
        <img src="/images/img.jpg" alt="registration" className="h-full rounded-bl-xl rounded-tl-xl object-cover" />
      </div>
      <form onSubmit={handleSubmit} className="mx-auto p-4 sm:p-10">
        <div className="container mx-auto flex flex-col items-center justify-stretch gap-4">
          <h2 className="text-4xl">Register</h2>
          <div className="flex flex-col justify-start gap-1">
            <label htmlFor="firstName">First Name</label>
            <input id="firstName" type="text" name="firstName" required className="rounded-lg border-2 px-4 py-2" />
          </div>
          <div className="flex flex-col justify-start gap-1">
            <label htmlFor="lastName">Last Name</label>
            <input id="lastName" type="text" name="lastName" required className="rounded-lg border-2 px-4 py-2" />
          </div>
          <div className="flex flex-col justify-start gap-1">
            <label htmlFor="email">Email</label>
            <input id="email" type="email" name="email" required className="rounded-lg border-2 px-4 py-2" />
          </div>
          <div className="flex flex-col justify-start gap-1">
            <label htmlFor="instagram">
              Instagram handle <span className="text-xs">(optional)</span>
            </label>
            <input id="instagram" type="text" name="instagram" className="rounded-lg border-2 px-4 py-2" />
          </div>
          <div className="mt-4 flex gap-4">
            <button type="reset" className="btn-primary">
              Reset
            </button>
            <button className="btn-accent">Submit</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Registration;

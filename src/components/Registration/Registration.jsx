const Registration = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

    const fd = new FormData(e.target);
    const data = Object.fromEntries(fd.entries());
    console.log(data);

    e.target.reset();
  };

  return (
    <div className="mx-auto my-10 flex w-full max-w-screen-md items-stretch justify-between gap-6 rounded-xl shadow-2xl">
      <div className="max-w-xs">
        <img src="/images/img.jpg" alt="registration" className="h-full rounded-bl-xl rounded-tl-xl object-cover" />
      </div>
      <form onSubmit={handleSubmit} className="mx-auto p-10">
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

import img from "../Gallery/Event1.jpeg";

const About = () => {
  return (
    <div className="flex flex-col gap-6 px-4 py-10">
      <h1 className="mx-auto max-w-screen-lg text-center text-6xl">About Us</h1>
      <div className="about-bg mx-auto mb-6 flex h-80 w-full max-w-screen-2xl flex-col items-center justify-center gap-3 bg-slate-300 p-10 text-center">
        <h2 className="text-4xl">Go-to community for engineering and tech enthusiast at UWindsor.</h2>
        <p className="max-w-screen-md">
          As a diverse, inclusive, and student-run organization, we're dedicated to providing a dynamic platform for
          science and technology enthusiasts.
        </p>
      </div>
      <div className="container mx-auto flex max-w-screen-lg items-center gap-6">
        <div>
          <h2 className="mb-2 text-3xl underline">Join us to:</h2>
          <ul className="flex flex-col gap-3">
            <li>Attend workshops and talks by industry professionals.</li>
            <li>Work on real-world projects.</li>
            <li>Organize study groups and participate in technical competitions.</li>
            <li>Receive peer review, support, and expand your professional network through social events.</li>
          </ul>
        </div>
        <img src={img} alt="engineering 4.0 event" className="w-full max-w-sm rounded-xl shadow-lg" />
      </div>
      <p className="mt-3 text-center">Embark on a journey of growth and connection with Engineering Club 4.0!</p>
    </div>
  );
};

export default About;

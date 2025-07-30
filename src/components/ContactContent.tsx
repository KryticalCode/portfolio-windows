export default function ContactContent() {
  return (
    <div className="p-4">
      <h2 className="text-center text-2xl font-semibold">mail time!</h2>

      {/* First section - thanks message */}
      <p className="text-center font-light p-4">
        Thanks for having a look at my website!
      </p>

      {/* Second section - contact info */}
      <p className="text-center font-light px-4 pb-4">
        The best way to reach me is via email.
      </p>

      {/* Email section */}
      <p className="text-center font-light px-4 pb-4">
        Email me at:{" "}
        <a
          href="mailto:mattcirona@gmail.com"
          className="text-amber-500 hover:text-amber-600 underline"
        >
          mattcirona@gmail.com
        </a>
      </p>

      <img
        src="/garfield-sleeping.jpeg"
        alt="Garfield sleeping"
        className="w-1/2 max-w-xs mt-4 mx-auto rounded-lg"
      ></img>
      <button
        className="mt-6 px-4 py-2 bg-amber-400 text-white rounded hover:bg-amber-500 transition-colors mx-auto block"
        onClick={() =>
          (window.location.href = "mailto:" + "mattcirona@gmail.com")
        }
      >
        Email Me
      </button>
    </div>
  );
}

import { useState } from "react";

export default function ContactContent() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(""); // success/error messages

  const onFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // validate input first
    if (!email || !message) {
      setSubmitStatus("Please fill in both fields.");
      return;
    }
    // then set loading state
    setIsLoading(true);
    setSubmitStatus(""); // clear previous status for new submission

    // api call to send email
    try {
      const response = await fetch("https://api.mcirona.com/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, message }),
      });

      // check if server responded with success (200-299 status codes)
      if (response.ok) {
        setSubmitStatus("Message has been sent successfully!");
        setEmail(""); // clear email field
        setMessage(""); // clear message field
      } else {
        // server responded but with an error status (400, 500, etc.)
        const errorData = await response.json();
        setSubmitStatus(errorData.error || "Failed to send the message");
      }
    } catch (error) {
      // network errors, server not running, or connection issues
      setSubmitStatus("Failed to send the message");
      console.error("Error sending email:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <h2 className="text-center text-2xl font-semibold">mail time!</h2>

      {/* first section - thanks message */}
      <p className="text-center font-light p-4">
        Thanks for having a look at my website!
      </p>

      {/* second section - contact info */}
      <p className="text-center font-light px-4 pb-4">
        The best way to reach me is via email, send one through below.
      </p>

      <img
        src="/garfield-sleeping.jpeg"
        alt="Garfield sleeping"
        className="w-40 max-w-xs mt-4 mx-auto rounded-lg"
      ></img>

      {/* contact form */}
      <form
        onSubmit={onFormSubmit}
        className="flex flex-col items-center space-y-4 mt-10 w-full max-w-md mx-auto"
      >
        <input
          type="email"
          placeholder="Your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border border-gray-300 rounded-lg px-4 py-2 w-full"
        />
        <textarea
          placeholder="Send me a message!"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="border border-gray-300 rounded-lg px-4 py-2 w-full h-28"
        />
        <button
          type="submit"
          className={`px-4 py-2 bg-orange-400 text-white rounded-lg hover:bg-orange-500 transition-colors ${
            isLoading ? "opacity-50" : "opacity-100"
          }`}
          disabled={isLoading}
        >
          {isLoading ? "Sending..." : "Send Message"}
        </button>

        {/* display status message */}
        {submitStatus && (
          <p
            className={`text-center ${
              submitStatus.includes("successfully")
                ? "text-green-600"
                : "text-red-600"
            }`}
          >
            {submitStatus}
          </p>
        )}
      </form>
    </div>
  );
}

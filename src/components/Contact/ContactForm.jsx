import React, { useState } from "react";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState(""); // For success/failure messages

  const sendEmail = (e) => {
    e.preventDefault(); // Prevent page reload

    if (!name || !email || !message) {
      alert("Please fill all fields!");
      return;
    }

    const templateParams = {
      name,
      email,
      message,
    };

    emailjs
      .send("service_nu2tued", "template_nowqypo", templateParams, "93ElHa9KZgngAJQ9F")
      .then(() => {
        setStatus("Email sent successfully!");
        setName("");
        setEmail("");
        setMessage("");
      })
      .catch((error) => {
        setStatus("Email failed to send!");
        console.error("Error:", error);
      });
  };

  return (
    <div>
      <form className="flex flex-col gap-4" onSubmit={sendEmail}>
        <input
          className="h-12 rounded-lg bg-light-brown px-2"
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          className="h-12 rounded-lg bg-light-brown px-2"
          type="email"
          placeholder="Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <textarea
          className="rounded-lg bg-light-brown p-2"
          rows="9"
          placeholder="Message"
          cols="50"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button
          className="bg-cyan rounded-lg text-white border border-cyan h-12 font-bold hover:bg-dark-cyan transition-all duration-500"
          type="submit"
        >
          Send
        </button>
      </form>
      {status && <p>{status}</p>}
    </div>
  );
};

export default ContactForm;

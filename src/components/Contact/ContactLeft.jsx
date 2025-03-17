import React from "react";
import ContactForm from "./ContactForm";

const ContactLeft = () => {
  return (
    <div>
      <div className="">
        <h2 className="text-orange text-3xl mb-4">Get In Touch </h2>
        <p className="text-white mb-2">
          Feel free to reach out if you'd like to collaborate
          <br />
          you are just a few clicks away!
        </p>
      </div>
      <div className="">
      <ContactForm/>
      </div>
    </div>
  );
};

export default ContactLeft;

import React from "react";
import ContactLeft from "./ContactLeft";
import ContactRight from "./ContactRight";

const ContactMain = () => {
  return (
    <div
      id="contact"
      className="max-w-[1200px] mx-auto items-center justify-center mt-[100px] px-4"
    >
      <h2 className="text-cyan mb-10 text-6xl text-center">Contact Me</h2>
      <div className="flex justify-between gap-24 bg-brown rounded-2xl p-8 lg:flex-row sm:flex-col ">
        <ContactLeft />
        <ContactRight />
      </div>
    </div>
  );
};

export default ContactMain;

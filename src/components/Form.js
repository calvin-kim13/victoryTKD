import emailjs from "@emailjs/browser";
import React, { useRef } from "react";
import CustomBtn from "../components/Button";
import { message } from "antd";

const Form = () => {
  const form = useRef();
  const success = () => {
    message.success("Message sent");
  };

  function sendEmail(e) {
    e.preventDefault();
    success();
    emailjs
      .sendForm(
        "service_btib8op",
        "template_5lafa75",
        form.current,
        "J-GW3rCTxWA_E4cdV"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }

  return (
    <form ref={form} onSubmit={sendEmail}>
      <input type="text" name="name" placeholder="NAME" className="input " />
      <input type="email" name="email" placeholder="EMAIL" className="input" />
      <input type="phone" name="phone" placeholder="PHONE" className="input" />
      <textarea
        name="message"
        placeholder="MESSAGE"
        rows="7"
        className="input"
      />
      <CustomBtn type="submit" value="Send" className="contact-btn">
        SEND
      </CustomBtn>
    </form>
  );
};

export default Form;

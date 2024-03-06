import Footer from "../components/Footer";
import Header from "../components/Header";
import bgImage from "../img/bg4.jpg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";

const Contact = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [subject, setSubject] = useState();
  const [message, setMessage] = useState();

  const handleSumit = () => {
    // event.preventDefault();
    if ((name, email, subject, message == "")) {
      return toast.error("Todos los campos son obligatorios");
    }

    if (Number(name, email, subject, message)) {
      return toast.warn(
        "Debes poner informacion valida y no solo numeros en cada campo"
      );
    }

    // window.location.href = 'https://formsubmit.co/guillermotd23@gmail.com'
  };

  // <button onClick={notify}>Notify !</button>
  //         <ToastContainer />

  console.log(name, email);

  return (
    <div className="Contact">
      <div className="Notification">
        <ToastContainer />
      </div>
      <Header />
      <div className="Contact_Hero">
        <img src={bgImage} alt="" className="Contact_Hero_Image" />
        <div className="Contact_Hero_Box">
          <h2>Contact</h2>
          <p>{"Let's"} chat</p>
        </div>
      </div>
      <div className="Contact_Container">
        <form
          target="_blank"
          className="Contact_Form"
          action="https://formsubmit.co/guillermotd23@gmail.com"
          method="POST"
        >
          <label htmlFor="input-name">Your Name</label>
          <input
            type="text"
            id="input-name"
            placeholder="Write your name"
            onChange={(event) => setName(event.target.value)}
            name="name"
          />

          <label htmlFor="input-name">Email</label>
          <input
            type="text"
            id="input-name"
            placeholder="Write your email"
            onChange={(event) => setEmail(event.target.value)}
            name="email"
          />

          <label htmlFor="input-name">Subject</label>
          <input
            type="text"
            id="input-name"
            placeholder="Write a subject"
            onChange={(event) => setSubject(event.target.value)}
            name="subject"
          />

          <label htmlFor="input-name">Message</label>
          <textarea
            id="input-name"
            cols="30"
            rows="6"
            placeholder="Type your message here"
            onChange={(event) => setMessage(event.target.value)}
            name="message"
          />

          <button
            id="form-button"
            className="Contact_Form_Button"
            onClick={(event) => handleSumit(event)}
          >
            Submit
          </button>
        </form>
      </div>
      <Footer />
    </div>
  );
};
export default Contact;

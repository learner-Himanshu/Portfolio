import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import "./Contact.css";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMSG] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !email || !msg) {
      toast.error("Please provide all the required fields..");
      return;
    }
    try {
      const response = await axios.post("/api/v1/portfolio/sendEmail", {
        name,
        email,
        msg
      });

      if (response.data.success) {
        toast.success(response.data.message);
        console.log("Message sent successfully!");
        // Reset form fields
        setName("");
        setEmail("");
        setMSG("");
      } else {
        toast.error(response.data.message);
        console.error("Message not sent!");
      }
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  return (
    <>
      <div
        className="contact"
        id="contact"
        data-aos="zoom-in-up"
        data-aos-duration="1600"
      >
        <div className="card card0 border-0">
          <div className="row">
            {/* Image Section */}
            <div className="col-md-6 col-sm-12">
              <div className="card1">
                <div className="row border-line">
                  <img
                    src="https://thumbs.dreamstime.com/b/business-website-page-contact-businessman-touching-us-icons-customer-service-include-telephone-address-email-message-d-227408342.jpg"
                    alt="contact-me-picture"
                    className="image px-5 rounded"
                  />
                </div>
              </div>
            </div>

            {/* Form Section */}
            <div className="col-md-6 col-sm-12">
              <div className="card d-flex card2 border-0 px-4 my-5">
                <form onSubmit={handleSubmit}>
                  <div className="row pt-5">
                    {/* Connect With Section */}
                    <div className="row text-center">
                      <h3 className="icons mb-4">Connect With</h3>
                      <div className="d-flex justify-content-center gap-3">
                        <FaLinkedin
                          title="Linkedin"
                          size={35}
                          color="#0077B5"
                        />
                        <FaGithub title="Github" color="black" size={35} />
                        <FaFacebook
                          title="Facebook"
                          color="#316FF6"
                          size={35}
                        />
                      </div>
                    </div>

                    {/* OR Divider */}
                    <div className="row px-3 my-4">
                      <div className="line" />
                      <small className="or text-center">OR</small>
                      <div className="line" />
                    </div>

                    {/* Input Fields */}
                    <div className="row px-4 mt-2">
                      <input
                        type="text"
                        name="name"
                        placeholder="Enter Your Name"
                        className="mb-4"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                    </div>
                    <div className="row px-4">
                      <input
                        type="email"
                        name="email"
                        placeholder="Enter Your Email"
                        className="mb-4"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                    <div className="row px-4">
                      <textarea
                        type="text"
                        name="msg"
                        placeholder="Type Your Message."
                        className="mb-4"
                        value={msg}
                        onChange={(e) => setMSG(e.target.value)}
                      />
                    </div>

                    {/* Send Button */}
                    <div className="row px-4">
                      <button type="submit" className="mb-3 btn">
                        SEND MESSAGE
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;

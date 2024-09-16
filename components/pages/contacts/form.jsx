import React, { useState } from "react";

const FormArea = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const response = await fetch(
        "https://prowebcoder.com/email/send-mail.php",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        setStatus("Message sent successfully!");
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      } else {
        setStatus("Failed to send message.");
      }
    } catch (error) {
      setStatus("Error occurred.");
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-md-6 mb-30">
            <div className="contact__form-area-item">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Full Name"
                required
              />
            </div>
          </div>
          <div className="col-md-6 md-mb-30">
            <div className="contact__form-area-item">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Email Address"
                required
              />
            </div>
          </div>
          <div className="col-md-12 mb-30">
            <div className="contact__form-area-item">
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                placeholder="Subject"
              />
            </div>
          </div>
          <div className="col-md-12 mb-30">
            <div className="contact__form-area-item">
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Message"
              />
            </div>
          </div>
          <div className="col-md-12">
            <div className="contact__two-right-form-item">
              <button className="btn-one" type="submit">
                Submit Now
              </button>
            </div>
          </div>
        </div>
      </form>
      <p>{status}</p>
    </>
  );
};

export default FormArea;

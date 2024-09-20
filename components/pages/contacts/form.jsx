import React, { useState } from "react";

const FormArea = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    isEuropeanImporter: "",
    importedProducts: "",
    productOrigin: "",
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
      const response = await fetch("/api/sendEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("Message sent successfully!");
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
          isEuropeanImporter: "",
          importedProducts: "",
          productOrigin: "",
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
          {/* Name Field */}
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
          {/* Email Field */}
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
          {/* Subject Field */}
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
          {/* Message Field */}
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

          {/* Survey Questions */}
          {/* Question 1: Are you a European importer? */}
          <div className="col-md-12 mb-30">
            <div className="contact__form-area-item">
              <label>Are you a European importer?</label>
              <br />
              <input
                type="radio"
                name="isEuropeanImporter"
                value="Yes"
                checked={formData.isEuropeanImporter === "Yes"}
                onChange={handleInputChange}
              />{" "}
              Yes{" "}
              <input
                type="radio"
                name="isEuropeanImporter"
                value="No"
                checked={formData.isEuropeanImporter === "No"}
                onChange={handleInputChange}
              />{" "}
              No
            </div>
          </div>

          {/* Question 2: What products do you import into the EU? */}
          <div className="col-md-12 mb-30">
            <div className="contact__form-area-item">
              <label>What products do you import into the EU?</label>
              <input
                type="text"
                name="importedProducts"
                value={formData.importedProducts}
                onChange={handleInputChange}
                placeholder="List the products"
              />
            </div>
          </div>

          {/* Question 3: Where were the products produced? */}
          <div className="col-md-12 mb-30">
            <div className="contact__form-area-item">
              <label>Where were the products produced?</label>
              <select
                name="productOrigin"
                value={formData.productOrigin}
                onChange={handleInputChange}
              >
                <option value="">Select country</option>
                {[
                  "Afghanistan",
                  "Albania",
                  "Algeria",
                  "Andorra",
                  "Angola",
                  "Antigua and Barbuda",
                  "Argentina",
                  "Armenia",
                  "Australia",
                  "Austria",
                  "Azerbaijan",
                  "Bahamas",
                  "Bahrain",
                  "Bangladesh",
                  "Barbados",
                  "Belarus",
                  "Belgium",
                  "Belize",
                  "Benin",
                  "Bhutan",
                  "Bolivia",
                  "Bosnia and Herzegovina",
                  "Botswana",
                  "Brazil",
                  "Brunei",
                  "Bulgaria",
                  "Burkina Faso",
                  "Burundi",
                  "Cabo Verde",
                  "Cambodia",
                  "Cameroon",
                  "Canada",
                  "Central African Republic",
                  "Chad",
                  "Chile",
                  "China",
                  "Colombia",
                  "Comoros",
                  "Congo",
                  "Costa Rica",
                  "Croatia",
                  "Cuba",
                  "Cyprus",
                  "Czech Republic",
                  "Democratic Republic of the Congo",
                  "Denmark",
                  "Djibouti",
                  "Dominica",
                  "Dominican Republic",
                  "Ecuador",
                  "Egypt",
                  "El Salvador",
                  "Equatorial Guinea",
                  "Eritrea",
                  "Estonia",
                  "Eswatini",
                  "Ethiopia",
                  "Fiji",
                  "Finland",
                  "France",
                  "Gabon",
                  "Gambia",
                  "Georgia",
                  "Germany",
                  "Ghana",
                  "Greece",
                  "Grenada",
                  "Guatemala",
                  "Guinea",
                  "Guinea-Bissau",
                  "Guyana",
                  "Haiti",
                  "Honduras",
                  "Hungary",
                  "Iceland",
                  "India",
                  "Indonesia",
                  "Iran",
                  "Iraq",
                  "Ireland",
                  "Israel",
                  "Italy",
                  "Jamaica",
                  "Japan",
                  "Jordan",
                  "Kazakhstan",
                  "Kenya",
                  "Kiribati",
                  "Kuwait",
                  "Kyrgyzstan",
                  "Laos",
                  "Latvia",
                  "Lebanon",
                  "Lesotho",
                  "Liberia",
                  "Libya",
                  "Liechtenstein",
                  "Lithuania",
                  "Luxembourg",
                  "Madagascar",
                  "Malawi",
                  "Malaysia",
                  "Maldives",
                  "Mali",
                  "Malta",
                  "Marshall Islands",
                  "Mauritania",
                  "Mauritius",
                  "Mexico",
                  "Micronesia",
                  "Moldova",
                  "Monaco",
                  "Mongolia",
                  "Montenegro",
                  "Morocco",
                  "Mozambique",
                  "Myanmar",
                  "Namibia",
                  "Nauru",
                  "Nepal",
                  "Netherlands",
                  "New Zealand",
                  "Nicaragua",
                  "Niger",
                  "Nigeria",
                  "North Korea",
                  "North Macedonia",
                  "Norway",
                  "Oman",
                  "Pakistan",
                  "Palau",
                  "Panama",
                  "Papua New Guinea",
                  "Paraguay",
                  "Peru",
                  "Philippines",
                  "Poland",
                  "Portugal",
                  "Qatar",
                  "Romania",
                  "Russia",
                  "Rwanda",
                  "Saint Kitts and Nevis",
                  "Saint Lucia",
                  "Saint Vincent and the Grenadines",
                  "Samoa",
                  "San Marino",
                  "Sao Tome and Principe",
                  "Saudi Arabia",
                  "Senegal",
                  "Serbia",
                  "Seychelles",
                  "Sierra Leone",
                  "Singapore",
                  "Slovakia",
                  "Slovenia",
                  "Solomon Islands",
                  "Somalia",
                  "South Africa",
                  "South Korea",
                  "South Sudan",
                  "Spain",
                  "Sri Lanka",
                  "Sudan",
                  "Suriname",
                  "Sweden",
                  "Switzerland",
                  "Syria",
                  "Taiwan",
                  "Tajikistan",
                  "Tanzania",
                  "Thailand",
                  "Timor-Leste",
                  "Togo",
                  "Tonga",
                  "Trinidad and Tobago",
                  "Tunisia",
                  "Turkey",
                  "Turkmenistan",
                  "Tuvalu",
                  "Uganda",
                  "Ukraine",
                  "United Arab Emirates",
                  "United Kingdom",
                  "United States",
                  "Uruguay",
                  "Uzbekistan",
                  "Vanuatu",
                  "Vatican City",
                  "Venezuela",
                  "Vietnam",
                  "Yemen",
                  "Zambia",
                  "Zimbabwe",
                ].map((country) => (
                  <option key={country} value={country}>
                    {country}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Submit Button */}
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

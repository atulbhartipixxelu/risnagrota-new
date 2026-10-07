import React, { useState } from "react";

const AdmissionForm = () => {
  const [formData, setFormData] = useState({
    student_name: "",
    dob: "",
    class_admitted: "",
    father_name: "",
    mother_name: "",
    phone_no: "",
    address: ""
  });

  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  // 🔹 Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;

    // ✅ Phone number validation (only digits & max 10)
    if (name === "phone_no") {
      if (!/^\d*$/.test(value)) return;
      if (value.length > 10) return;
    }

    setFormData({ ...formData, [name]: value });
  };

  // 🔹 Submit form
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const form = new FormData();

      // append all fields
      Object.entries(formData).forEach(([key, value]) => {
        form.append(key, value);
      });

      // ✅ extra keys for backend email compatibility
      form.append("phone", formData.phone_no);
      form.append("mobile", formData.phone_no);
      form.append("phone_number", formData.phone_no);

      const response = await fetch(
        "https://api.risnagrota.pixxeluclients.com/api/create-student-admission-form",
        {
          method: "POST",
          body: form
        }
      );

      const data = await response.json();

      if (response.ok) {
        setSuccessMessage(
          data.message || "Student admission form created successfully."
        );
        setErrorMessage("");
        setFormData({
          student_name: "",
          dob: "",
          class_admitted: "",
          father_name: "",
          mother_name: "",
          phone_no: "",
          address: ""
        });
      } else {
        setErrorMessage(data.message || "Form submission failed.");
        setSuccessMessage("");
      }
    } catch (error) {
      setErrorMessage("Network error. Please try again.");
      setSuccessMessage("");
    }
  };

  return (
    <div className="admission_form_devlop">
      <div className="form_admission">
        <form onSubmit={handleSubmit}>

          <div className="form-group">
            <label>Name of the Student:</label>
            <input
              type="text"
              name="student_name"
              placeholder="Enter student name"
              value={formData.student_name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="flex-field-ftt">
            <div className="form-group">
              <label>Date of Birth:</label>
              <input
                type="date"
                name="dob"
                value={formData.dob}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Class to be Admitted:</label>
              <input
                type="text"
                name="class_admitted"
                placeholder="Enter class"
                value={formData.class_admitted}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="flex-field-ftt">
            <div className="form-group">
              <label>Father's Name:</label>
              <input
                type="text"
                name="father_name"
                placeholder="Enter father's name"
                value={formData.father_name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Mother's Name:</label>
              <input
                type="text"
                name="mother_name"
                placeholder="Enter mother's name"
                value={formData.mother_name}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="form-group">
            <label>Phone Number:</label>
            <input
              type="text"
              name="phone_no"
              placeholder="Enter 10 digit mobile number"
              value={formData.phone_no}
              onChange={handleChange}
              maxLength={10}
              required
            />
          </div>

          <div className="form-group">
            <label>Address:</label>
            <textarea
              name="address"
              placeholder="Enter complete residential address"
              value={formData.address}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <button type="submit">Submit</button>
          </div>

          {successMessage && (
            <p className="success-message">{successMessage}</p>
          )}

          {errorMessage && (
            <p className="error-message">{errorMessage}</p>
          )}

        </form>
      </div>
    </div>
  );
};

export default AdmissionForm;

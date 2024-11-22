"use client";
import React, { useState } from "react";
import InputBox from "./inputBox";
export default function ContactUsForm() {
  const [formValues, setFormValues] = useState({
    select: "",
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    select: "",
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const [hasError, setHasError] = useState(false);

  //for validation
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const phoneRegex = /^\d+$/; // Only accepts digits

  const validateForm = () => {
    let formIsValid = true;
    const newErrors = { ...errors };

    // Check if the 'select' field is selected
    if (!formValues.select) {
      newErrors.select = "Please select a reason for inquiry";
      formIsValid = false;
    } else {
      newErrors.select = "";
    }

    // Check if the 'text' field (full name) has a value
    if (!formValues.name) {
      newErrors.name = "Please enter your full name";
      formIsValid = false;
    } else {
      newErrors.name = "";
    }

    // Check if the 'email' field has a value and matches the email regex
    if (!formValues.email) {
      newErrors.email = "Please enter a valid email address";
      formIsValid = false;
    } else if (!emailRegex.test(formValues.email)) {
      newErrors.email =
        "Please enter a valid email address (e.g., example@example.com)";
      formIsValid = false;
    } else {
      newErrors.email = "";
    }

    // Check if the 'phone' field has a value and matches the phone regex
    if (!formValues.phone) {
      newErrors.phone = "Please enter a valid phone number";
      formIsValid = false;
    } else if (!phoneRegex.test(formValues.phone)) {
      newErrors.phone = "Please enter a valid phone number";
      formIsValid = false;
    } else {
      newErrors.phone = "";
    }

    // Check if the 'textArea' field (message) has a value
    if (!formValues.message) {
      newErrors.message = "Please enter a message";
      formIsValid = false;
    } else {
      newErrors.message = "";
    }

    setErrors(newErrors);
    return formIsValid;
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormValues((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      setHasError(false);
      console.log("Form Submitted:", formValues); // Log the form values
    } else {
      setHasError(true);
      console.log("Form has errors, please correct them.");
    }
  };
  return (
    <>
      <div
        className="md:max-h-[946px] bg-cream py-8 px-4 md:px-[70px] md:pt-[67px] md:pb-[78px] 
      flex flex-col justify-center items-center"
      >
        <div className="flex flex-col justify-center items-center">
          <div className="flex flex-col gap-3 mb-8 md:mb-[38px]">
            <h1 className="font-lato text-center text-[32px] md:text-5xl font-normal leading-normal text-denim md:max-w-[1296px] w-auto">
              how can we help you?
            </h1>
            <span className="font-lato text-center text-lg font-normal leading-normal text-primary">
              Do you have a general question for a MedExpress team member?
              Submit your inquiry below and we'll be sure that your question
              gets routed to the appropriate person.
            </span>
            <div className="pb-[35px] border-b border-beige md:pb-[31px]"></div>
            <h2 className="font-lato text-center text-lg md:text-[21px] font-normal leading-normal text-denim md:max-w-[1296px] w-auto">
              Please enter your contact information and inquiry below.
            </h2>
            <span className="font-lato text-center text-base md:text-lg font-normal leading-normal text-primary">
              *Required fields
            </span>
          </div>
          <form className="w-full h-auto flex flex-col md:flex-row gap-5 justify-center items-stretch">
            <div className="w-full flex flex-col gap-4 firstCol">
              <InputBox
                label="Reason for Inquiry*"
                type="select"
                value={formValues.select}
                onChange={handleChange}
                error={errors.select}
              />

              <div className="w-full flex flex-col md:flex-row  gap-5">
                <InputBox
                  label="Full name"
                  type="text"
                  value={formValues.name}
                  onChange={handleChange}
                  error={errors.name}
                />
                <InputBox
                  label="Phone"
                  type="tel"
                  value={formValues.phone}
                  onChange={handleChange}
                  error={errors.phone}
                />
              </div>

              <InputBox
                label="Email Address*"
                type="email"
                value={formValues.email}
                onChange={handleChange}
                error={errors.email}
              />
            </div>
            <div className="w-full flex flex-col gap-4 secondCol">
              <InputBox
                label="Message"
                type="textArea"
                value={formValues.message}
                onChange={handleChange}
                error={errors.message}
              />
            </div>
          </form>
          {hasError && (
            <span className="font-lato text-start text-base md:text-lg font-normal leading-normal text-error my-[38px]">
              Please correct the errors and submit again.
            </span>
          )}
          <button
            onClick={handleSubmit}
            type="submit"
            className={`${
              hasError ? "mt-0" : "mt-6"
            } md:mt-10 uppercase w-auto py-[14px] px-7 border bg-cream text-terracota border-terracota hover:bg-terracota 
             hover:text-white font-lato text-center text-[21px] font-bold mb-[43px] md:mb-[78px]`}
          >
            send us your questions
          </button>
          <h3
            className="text-lg font-inter pt-[35px] md:pt-[55px] border-t border-beige"
            style={{ fontStyle: "italic", color: "#616161" }}
          >
            <strong>*Emergency Service Notice: &nbsp;</strong>
            If you are suffering from chest pain, shortness of breath, severe
            abdominal pain, stroke-like symptoms, or any other emergency, please
            dial 911 or go to the nearest ER.
          </h3>
        </div>
      </div>
    </>
  );
}

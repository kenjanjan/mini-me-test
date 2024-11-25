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
    >,
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
      <div className="flex flex-col items-center justify-center bg-cream px-4 py-8 md:max-h-[946px] md:px-[70px] md:pb-[78px] md:pt-[67px]">
        <div className="flex flex-col items-center justify-center">
          <div className="mb-8 flex flex-col gap-3 md:mb-[38px]">
            <h1 className="font-lato w-auto text-center text-[32px] font-normal leading-normal text-denim md:max-w-[1296px] md:text-5xl">
              how can we help you?
            </h1>
            <span className="font-lato text-center text-lg font-normal leading-normal text-primary">
              Do you have a general question for a MedExpress team member?
              Submit your inquiry below and we&apos;ll be sure that your
              question gets routed to the appropriate person.
            </span>
            <div className="border-b border-beige pb-[35px] md:pb-[31px]"></div>
            <h2 className="font-lato w-auto text-center text-lg font-normal leading-normal text-denim md:max-w-[1296px] md:text-[21px]">
              Please enter your contact information and inquiry below.
            </h2>
            <span className="font-lato text-center text-base font-normal leading-normal text-primary md:text-lg">
              *Required fields
            </span>
          </div>
          <form className="flex h-auto w-full flex-col items-stretch justify-center gap-5 md:flex-row">
            <div className="firstCol flex w-full flex-col gap-4">
              <InputBox
                label="Reason for Inquiry*"
                type="select"
                value={formValues.select}
                onChange={handleChange}
                error={errors.select}
              />

              <div className="flex w-full flex-col gap-5 md:flex-row">
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
            <div className="secondCol flex w-full flex-col gap-4">
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
            <span className="font-lato my-[38px] text-start text-base font-normal leading-normal text-error md:text-lg">
              Please correct the errors and submit again.
            </span>
          )}
          <button
            onClick={handleSubmit}
            type="submit"
            className={`${
              hasError ? "mt-0" : "mt-6"
            } font-lato mb-[43px] w-auto border border-terracota bg-cream px-7 py-[14px] text-center text-[21px] font-bold uppercase text-terracota hover:bg-terracota hover:text-white md:mb-[78px] md:mt-10`}
          >
            send us your questions
          </button>
          <h3
            className="font-inter border-t border-beige pt-[35px] text-lg md:pt-[55px]"
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

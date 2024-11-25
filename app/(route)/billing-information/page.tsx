import React from "react";

const BillingQuestions = () => {
  return (
    <div>
      {/* Hero section */}
      <div
        className={`bg-ME-bgLightBlue relative flex flex-col min-h-[375px]  items-start justify-center md:min-h-[450px]`}
        style={{
          backgroundImage: `url(/assets/images/woman-smiling.png)`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "top left",
          backgroundSize: "cover",
          height: "100%",
          zIndex: 10,
        }}
      >
        <div
          className={`flex flex-col gap-3 pr-[100px] pl-[25px]  md:pl-[70px] md:gap-6 mt-0`}
        >
          <span
            className={`font-lato leading-[42px] md:text-[64px] md:leading-[84px] text-white text-[32px] font-bold md:w-full `}
          >
            Understanding billing and payment
          </span>
        </div>
      </div>

      {/* Main contents */}
      <div className="flex flex-col min-h-screen items-center w-full md:py-[45px] md:px-0 py-6 px-4">
        <div className="flex flex-col max-w-[860px] ">
          <span className="font-lato text-primary text-lg font-normal leading-6 ">
            Today and every day, MedExpress is dedicated to making the billing
            process as easy and convenient as possible. We have a team of
            dedicated payment experience representatives who are happy to help
            with any questions you might have. <br />
            We’re here to help make sure you receive the full benefits of your
            insurance coverage. For billing questions, please contact us at
            1-888-249-6365, Monday – Friday, 8 am to 7 pm EST. In case of a
            medical emergency, call 911.
            <br />
            <br />
          </span>
          <h2 className="font-lato text-denim text-2xl font-bold leading-6 text-start">
            Direct Billing to Insurance Providers <br />
          </h2>
          <span className="font-lato text-primary text-lg font-normal leading-6 max-w-[860px] ">
            On your behalf and for your convenience, MedExpress will verify your
            coverage either before or during your visit and bill your insurance
            company directly for the services we provide. Once we’ve heard back
            from your insurance provider, we’ll send you a statement that
            details the remaining balance.
            <br />
            <br />
            You’ll also receive an Explanation of Benefits (EOB) from your
            insurance company that lists the services provided by MedExpress,
            the amount billed, any insurance payments made, and your
            responsibility.
            <br />
            <br />
            Please make sure to bring your health insurance card to your visit,
            along with any secondary insurance information, if applicable. If
            you are not the subscriber of the insurance covering your services,
            we will need the date of birth and social security number of the
            policy holder.
            <br />
            <br />
            If your information has changed since your last visit, please let
            our team members know so that we can update our records.
            <br />
            <br />
          </span>
          <h2 className="font-lato text-denim text-2xl font-bold leading-6 text-start">
            Online Bill Payment <br />
          </h2>
          <span className="font-lato text-primary text-lg font-normal leading-6 max-w-[860px] ">
            The care and convenience of MedExpress doesn’t stop when you walk
            out our doors. It can continue at home through the option to pay
            your bill through our &nbsp;
            <a
              className="underline"
              href="https://payment.patient.athenahealth.com/statement/?src=statement"
              target="_blank"
              rel="noopener noreferrer"
            >
              online bill pay portal.
            </a>
            <br />
            <br />
            The online bill pay portal allows you to communicate with MedExpress
            securely and confidentially.
            <br />
            <br />
            With our online bill pay portal, you’ll be able to:
            <ul className="list-disc ml-5">
              <li>View your billing statement and balance.</li>
              <li>Make secure credit card payments.</li>
              <li>Send messages and billing inquiries.</li>
            </ul>
            <br />
            <br />
          </span>
          <h2 className="font-lato text-denim text-2xl font-bold leading-6 text-start">
            Understanding Your Insurance Plan <br />
          </h2>

          <span className="font-lato text-primary text-lg font-normal leading-6 max-w-[860px] ">
            The majority of insurance plans require that you make a co-payment
            at the time you received medical services. Typically, besides your
            co-payment, you may be responsible for any unpaid amount not
            satisfied by your insurance plan.
            <br />
            <br />
            If you have questions about your insurance plan, please contact your
            insurance provider. The phone number will be located on the back of
            your insurance card.
          </span>
        </div>
      </div>
    </div>
  );
};

export default BillingQuestions;

import React from "react";

const BillingQuestions = () => {
  return (
    <div>
      {/* Hero section */}
      <div
        className={`bg-ME-bgLightBlue relative flex min-h-[375px] flex-col items-start justify-center md:min-h-[450px]`}
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
          className={`mt-0 flex flex-col gap-3 pl-[25px] pr-[100px] md:gap-6 md:pl-[70px]`}
        >
          <span
            className={`font-lato text-[32px] font-bold leading-[42px] text-white md:w-full md:text-[64px] md:leading-[84px]`}
          >
            Understanding billing and payment
          </span>
        </div>
      </div>

      {/* Main contents */}
      <div className="flex min-h-screen w-full flex-col items-center px-4 py-6 md:px-0 md:py-[45px]">
        <div className="flex max-w-[860px] flex-col">
          <span className="font-lato text-lg font-normal leading-6 text-primary">
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
          <h2 className="font-lato text-start text-2xl font-bold leading-6 text-denim">
            Direct Billing to Insurance Providers <br />
          </h2>
          <span className="font-lato max-w-[860px] text-lg font-normal leading-6 text-primary">
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
          <h2 className="font-lato text-start text-2xl font-bold leading-6 text-denim">
            Online Bill Payment <br />
          </h2>
          <span className="font-lato max-w-[860px] text-lg font-normal leading-6 text-primary">
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
            <ul className="ml-5 list-disc">
              <li>View your billing statement and balance.</li>
              <li>Make secure credit card payments.</li>
              <li>Send messages and billing inquiries.</li>
            </ul>
            <br />
            <br />
          </span>
          <h2 className="font-lato text-start text-2xl font-bold leading-6 text-denim">
            Understanding Your Insurance Plan <br />
          </h2>

          <span className="font-lato max-w-[860px] text-lg font-normal leading-6 text-primary">
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

import React from "react";
import "../Css/Banking.css";

const Banking = () => {
  return(
    <>
      <div className="banking">
        <h1>Why choose Easybank?</h1>
        <p className="muted-text">
          We leverage Open Banking to turn your bank account into your financial
          hub.Control your finances like never before.
        </p>
        <section>
          <div>
            <img src="./images/icon-online.svg" alt="" />
            <h4>Online Banking</h4>
            <p className="muted-text">
              Our modern web and mobile applications allow you to keep track of
              your finances wherever you are in the world
            </p>
          </div>
          <div>
            <img src="./images/icon-onboarding.svg" alt="" />
            <h4>Simple Budgeting</h4>
            <p className="muted-text">
              See exactly where your money goes each month. Receive notifications
              when you’re close to hitting your limits.
            </p>
          </div>
          <div>
            <img src="./images/icon-budgeting.svg" alt="" />
            <h4>Fast Onboarding</h4>
            <p className="muted-text">
              We don’t do branches. Open your account in minutes online and start
              taking control of your finances right away.
            </p>
          </div>
          <div>
            <img src="./images/icon-online.svg" alt="" />
            <h4>Open API</h4>
            <p className="muted-text">
              Manage your savings, investments, pension, and much more from one
              account.Tracking your money has never been easier.
            </p>
          </div>
        </section>
      </div>
    </>
  );
};
export default Banking;
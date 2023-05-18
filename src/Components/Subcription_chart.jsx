import React from "react";

export default function Subcription_chart() {
  var amount1 = 99;
  return (
    <>
      <div className="subscription_container">
        <div className="subscription_nav">
          <span>
            <p>Sign Up</p>
            <p>Subscribe</p>
          </span>
        </div>
        <div className="subscription_heading">
          <h5>Select your Subscription plan</h5>
        </div>
        <div className="subscription_menu">
          <div className="sunscription_menu_container">
            <span class="badge text-bg-primary">Offer Expired</span>
            <input type="checkbox" name="fruit" value="Apple"></input>12 Months
            Subscription
            <p>Total</p>
            <p>₹{amount1}</p>
            <p>₹{amount1 / 3} /mo</p>
          </div>
        </div>
      </div>
    </>
  );
}

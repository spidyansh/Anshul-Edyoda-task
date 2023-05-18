import React from "react";

export default function Subcription_chart(props) {
  return (
    <>
      <div className="subscription_menu">
        <div className="subscription_menu_container">
          <div>
            <span class="badge text-bg-success subscription_menu_badge" >
              {props.badge}
            </span>
          </div>
          <div className="subscription_menu_container_main">
            <div className="we">
              <input type="checkbox" name="plan" value="12"></input>
              {props.months} Months Subscription
            </div>
            <div className="subscription_menu_container_price">
              <p>Total ₹{props.amount}</p>

              <p className="font_small">₹{props.amount / props.months} /mo</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

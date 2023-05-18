import React from "react";
import Subcription_chart from "./Subcription_chart";

export default function Subscription_plan() {
  return (
    <>
      <div className="subscription_container">
        <div className="subscription_nav">
          <div>
            <div className="subscription_nav_item_signup">
              <span class="badge text-bg-primary">1</span>
            </div>
            <div>Sign Up</div>
          </div>
          <div>
            <div className="subscription_nav_item_subscribe">
              <span class="badge text-bg-primary ">2</span>
            </div>
            <div>Subscribe</div>
          </div>
        </div>
        <div className="subscription_heading">
          <h5>Select your Subscription plan</h5>
        </div>
        <Subcription_chart badge="Offer Expired" months="12" amount="99" />
        <Subcription_chart badge="Recommended" months="12" amount="180" />
        <Subcription_chart badge="Recommended" months="6" amount="150" />
        <Subcription_chart badge="Recommended" months="3" amount="99" />
        <div className="subscription_btn">
          <div>
            <button
              type="button"
              class="btn btn-light"
              style={{ color: "red", border: "2px solid red" }}
            >
              CANCEL
            </button>
          </div>
          <div>
            <button type="button" class="btn btn-success">
              PROCEED TO PAY
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

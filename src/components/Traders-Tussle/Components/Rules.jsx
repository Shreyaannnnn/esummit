import React from "react";
// import rulesImg from "../assets/event.jpg"
import "./Rules.css";
const Rules = () => {
  return (
    <div className="rules">
      <h2>Rules</h2>
      <div className="rulesContainer">
        <div className="imgsectionRules">
          <div class="rules-container">
            <p class="text">Rules For The Event Are As Follows</p>
          </div>
        </div>
        <div className="ruleSection">
          <div className="rulebox">
            <span> 1.</span>EACH TEAM HAS TOTAL RESOURCES WORTH OF ₹20,000 (RAW
            MATERIAL + HUMAN RESOURCE + VIRTUAL MONEY)
          </div>

          <div className="rulebox">
            <span> 2.</span>TWO EXCEL SHEETS WILL BE SHARED WITH ALL THE TEAMS,
            FIRST ONE CONTAINS THE INITIAL RESOURCES OF ALL THE TEAMS AND THE
            SECOND ONE WILL BE A LIVE SHEET WHICH WILL HAVE CURRENT RESOURCES
            FOR EACH TEAM.
          </div>

          <div className="rulebox">
            <span> 3.</span>THE DURATION OF THE EVENT IS 1-2 HOURS.
          </div>

          <div className="rulebox">
            <span> 4.</span>THE GOAL IS TO PROCURE GOODS AND SERVICES FROM OTHER
            PARTICIPANTS AND PRODUCE FINISHED FINAL PRODUCTS THAT WILL HOLD A
            CERTAIN VALUE.
          </div>

          <div className="rulebox">
            <span> 5.</span>EACH TEAM HAS TO COME UP WITH AT LEAST 1 FINISHED
            PRODUCT.
          </div>

          <div className="rulebox">
            <span> 6.</span>THE TRANSACTIONS OF GOODS/SERVICES OR MONEY BETWEEN
            PARTICIPANTS WILL BE CARRIED OUT THROUGH THE TRADERS.
          </div>

          <div className="rulebox">
            <span> 7.</span>AT ONE POINT OF TIME, ONLY TWO TEAMS CAN APPROACH A
            TRADER FOR TRANSACTIONS BETWEEN THEM. (ALL THE 2/3 MEMBERS SHOULD BE
            PRESENT WHILE CARRYING OUT THE TRADE)
          </div>

          <div className="rulebox" s>
            <span> 8.</span> THE AUCTION FOR BONUS RESOURCES WILL COMMENCE ONE
            HOUR AFTER
          </div>
        </div>
      </div>
    </div>
  );
};
export default Rules;

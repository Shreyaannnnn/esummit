import React from "react";
import eventImg from '../assets/event.jpg'
import "./Event.css";
const Event = () => {
  return (
    <div className="our_event">
      <div className="contentOfEvent">
        <h2>Our Event</h2>
        <div className="eventImg">
          <img src={eventImg} alt="" />
        </div>
        <p>
          WANT TO FLEX YOUR TRADING AND COMPANY MANAGEMENT SKILLS? UTKARSH’ 24 IS
          HERE TO PROVIDE YOU AN ARENA WHERE YOU CAN LEARN AND PRACTICE YOUR
          SKILLSET** AND WIN EXCITING PRIZES WORTH... TRADE RAW AND HUMAN
          RESOURCES & BUILD YOUR PRODUCTS TO INCREASE YOUR COMPANY'S WORTH. WE
          BRING YOU UTKARSH’ 24... TEAM OF 2-4 WITH VIRTUAL CASH IN HAND- RS.
          20000 EACH TEAM WILL BE ASSIGNED SOME RAW MATERIALS AND HUMAN RESOURCES.
          A TEAM HAS TO CREATE AS MANY PRODUCTS AD THEY CAN WITH THE CORRECT
          COMBINATION OF RAW MATERIALS AND HUMAN RESOURCES. AFTER COMPLETION OF
          THE EVENT, THE WINNING TEAM WILL BE CALCULATED ON THE BASIS OF THE MOST
          VALUE THEY HOLD. TEAM'S VALUE = COST OF PRODUCTS + INTIAL COST OF HUMAN
          RESOURCES + ANY LEFTOVER RESOURCES + ANY CASH IN HAND
        </p>
      </div>

    </div>
  );
};
export default Event;

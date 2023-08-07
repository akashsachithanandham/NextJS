import React from "react";
import SlotDetailsStyles from './SlotDetails.module.css';

const SlotCard = ({ slot }) => {
  return (
    <div className={SlotDetailsStyles.c_slot_card}>
      <div className={SlotDetailsStyles.c_slot_card_title}>Mon - Fri</div>
      <div className={SlotDetailsStyles.c_slot_card_slot}>10:00 AM - 8:00 PM</div>
      <div className={SlotDetailsStyles.c_slot_card_slot}>10:00 AM - 8:00 PM</div>
    </div>
  );
};

const SlotDetails = () => {

  const arr = new Array(5).fill('0');
  return (
    <div className={SlotDetailsStyles.c_slot_details}>
      <div className={SlotDetailsStyles.c_slot_details_title}>Open Today - 9AM - 8PM</div>
      <div className={SlotDetailsStyles.c_slot_details_slots}>{arr.map((slot, index) => <SlotCard key={index} slot={slot} />)}</div>
    </div>
  );
};

export default SlotDetails;

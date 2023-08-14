import React from "react";

const NoAppointment = (props) => {
  let { button_text } = props;

  return (
    <button data-qa-id="no_appointment_text" className="no-appointment" >
      {button_text}
    </button>
  );
}

NoAppointment.defaultProps = {
  button_text: "Doctor does not take appointment on Practo"
}

export default NoAppointment;

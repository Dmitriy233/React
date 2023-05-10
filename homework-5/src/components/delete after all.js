import React, { useState } from "react";

const CardForm = () => {
  const [cardNumber, setCardNumber] = useState("");
  const [cvv, setCvv] = useState("");
  const [cardholderName, setCardholderName] = useState("");
  const [cardType, setCardType] = useState("");

  const handleCardNumberChange = (event) => {
    const input = event.target.value;
    const regex = /^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13})$/;
    if (regex.test(input)) {
      setCardNumber(input);
      if (input.startsWith("4")) {
        setCardType("Visa");
      } else {
        setCardType("Mastercard");
      }
    } else {
      setCardNumber("");
      setCardType("");
    }
  };

  const handleCvvChange = (event) => {
    const input = event.target.value;
    const regex = /^[0-9]{3,4}$/;
    if (regex.test(input)) {
      setCvv(input);
    } else {
      setCvv("");
    }
  };

  const handleCardholderNameChange = (event) => {
    setCardholderName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Code for submitting the form data goes here
  };

  return (
    <>
    <div>
        <p>{cardNumber}</p>
        <p>{cardholderName}</p>
        <p>{cvv}</p>
    </div>
    <form onSubmit={handleSubmit}>
      <label>
        Card Number:
        <input type="text" value={cardNumber} onInput={handleCardNumberChange} />
      </label>
      <br />
      <label>
        CVV:
        <input type="text" value={cvv} onInput={handleCvvChange} />
      </label>
      <br />
      <label>
        Cardholder Name:
        <input type="text" value={cardholderName} onInput={handleCardholderNameChange} />
      </label>
      <br />
      <label>
        Card Type:
        <input type="text" value={cardType} disabled />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
    </>
  );
};

export default CardForm;
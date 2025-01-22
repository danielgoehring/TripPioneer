import React from "react";
import { useLocation } from "react-router-dom";

function Receipt() {
  const location = useLocation();
  const { checkInDate, checkOutDate, guestAmount, daysBetween, selectedImage } =
    location.state;

  console.log(checkInDate);
  console.log(checkOutDate);

  // if (guestAmount > 1) {
  //   guestAmount = guestAmount.toString() + "s";
  //   guestAmount = parseInt(guestAmount.slice(0, -1), 10);
  // }

  // const formattedCheckInDate = new Date(checkInDate).toLocaleDateString(
  //   "en-US",
  //   { month: "long", day: "numeric" }
  // );
  // const formattedCheckOutDate = new Date(checkOutDate).toLocaleDateString(
  //   "en-US",
  //   { month: "long", day: "numeric" }
  // );

  function formatDateString(dateString) {
    const [year, month, day] = dateString.split("-");
    const date = new Date(year, month - 1, day);
    return date.toLocaleDateString("en-US", { month: "long", day: "numeric" });
  }

  const formattedCheckInDate = formatDateString(checkInDate);
  const formattedCheckOutDate = formatDateString(checkOutDate);

  console.log(formattedCheckInDate);
  console.log(formattedCheckOutDate);

  const totalBeforeTaxes = selectedImage.price * daysBetween + 150 + 371;

  return (
    <section className="p-4 max-w-xl mx-auto mt-20">
      <h1 className="text-4xl font-semibold mb-10">Your Receipt</h1>
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-5">Reservation Details</h2>
        <p className="mb-1 font-semibold italic">Check-in Date:</p>{" "}
        <p className="mb-4">{formattedCheckInDate}</p>
        <p className="mb-1 font-semibold italic">Check-out Date:</p>{" "}
        <p className="mb-4">{formattedCheckOutDate}</p>
        <p className="mb-1 font-semibold italic">Guests:</p>
        <p className="mb-4"> {guestAmount}</p>
        <p className="mb-1 font-semibold italic">Number of Nights:</p>{" "}
        <p> {daysBetween}</p>
      </div>
      <div className="mb-4">
        <h2 className="text-xl font-semibold mb-4">Cost Details</h2>
        <div className="flex justify-between">
          <span>
            ${selectedImage.price} x {daysBetween} nights
          </span>
          <span>${selectedImage.price * daysBetween}</span>
        </div>
        <div className="flex justify-between">
          <span>Cleaning Fee</span>
          <span>$150</span>
        </div>
        <div className="flex justify-between">
          <span>Service Fee</span>
          <span>$371</span>
        </div>
        <div className="flex justify-between font-bold border-t pt-2 mt-2">
          <span>Total Before Taxes</span>
          <span>${totalBeforeTaxes}</span>
        </div>
      </div>
    </section>
  );
}

export default Receipt;

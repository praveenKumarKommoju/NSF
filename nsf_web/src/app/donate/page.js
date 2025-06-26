"use client";
import { useState } from "react";

const DonatePage = () => {
  const [name, setName] = useState("");
  const [transactionId, setTransactionId] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim() || !transactionId.trim()) {
      alert("Please fill in all fields.");
      return;
    }

    // TODO: Send data to server or API
    console.log("Submitted:", { name, transactionId });
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4 py-10">
      <h1 className="text-3xl font-bold text-red-600 mb-6">Donate to Support</h1>

      {/* QR Code */}
      <div className="mb-6">
        <img
          src="/qr-code.png" // Put your QR code image in the public folder
          alt="Donate QR Code"
          className="w-48 h-48 rounded shadow-lg"
        />
        <p className="text-sm text-gray-600 mt-2 text-center">
          Scan the QR code above to make your donation.
        </p>
      </div>

      {/* Form */}
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-sm bg-white p-6 rounded-lg shadow-md space-y-4"
      >
        <input
          type="text"
          placeholder="Your Name"
          className="w-full p-2 border rounded-md focus:ring-2 focus:ring-red-400"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Transaction ID"
          className="w-full p-2 border rounded-md focus:ring-2 focus:ring-red-400"
          value={transactionId}
          onChange={(e) => setTransactionId(e.target.value)}
        />

        <button
          type="submit"
          className="w-full bg-red-600 text-white py-2 rounded-md hover:bg-red-700 transition"
        >
          Submit
        </button>
      </form>

      {/* Thank You Message */}
      {submitted && (
        <div className="mt-4 text-green-600 font-medium">
          Thank you for your donation!
        </div>
      )}
    </div>
  );
};

export default DonatePage;

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaCreditCard, FaLock } from "react-icons/fa";

function CardPayment() {
  const navigate = useNavigate();

  const [cardNumber, setCardNumber] = useState("");
  const [cardName, setCardName] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvv, setCvv] = useState("");
  const [loading, setLoading] = useState(false);

  const handlePayment = () => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      navigate("/order-success");
    }, 2500);
  };

  return (
    <>
      {loading && (
        <div className="fixed inset-0 bg-black/60 flex justify-center items-center z-50">
          <div className="bg-white dark:bg-gray-900 rounded-3xl p-10 text-center w-96 shadow-2xl">
            <div className="w-20 h-20 border-8 border-gray-300 border-t-yellow-500 rounded-full animate-spin mx-auto"></div>

            <h2 className="text-3xl font-bold mt-8 dark:text-yellow-400">
              Processing Payment...
            </h2>

            <p className="text-gray-500 mt-3">
              Please don't close this window.
            </p>
          </div>
        </div>
      )}

      <div className="bg-white dark:bg-gray-900 rounded-3xl shadow-xl p-8">

        <h2 className="text-2xl font-bold mb-6 dark:text-yellow-400">
          💳 Card Payment
        </h2>

        <div className="bg-gradient-to-r from-black via-gray-900 to-yellow-600 text-white rounded-3xl p-6 shadow-xl mb-8">

          <div className="flex justify-between items-center">
            <FaCreditCard className="text-4xl text-yellow-400" />
            <span className="font-bold">VISA</span>
          </div>

          <h2 className="text-3xl tracking-widest mt-8">
            {cardNumber || "1234 5678 9012 3456"}
          </h2>

          <div className="flex justify-between mt-8">

            <div>
              <p className="text-gray-300 text-sm">Card Holder</p>
              <h3>{cardName || "ADITYA VYAS"}</h3>
            </div>

            <div>
              <p className="text-gray-300 text-sm">Expires</p>
              <h3>{expiry || "12/30"}</h3>
            </div>

          </div>

        </div>

        <div className="space-y-5">

          <div>
            <label className="font-semibold">Card Number</label>

            <input
              value={cardNumber}
              onChange={(e) => setCardNumber(e.target.value)}
              placeholder="1234 5678 9012 3456"
              className="w-full border rounded-xl p-4 mt-2 dark:bg-gray-800"
            />
          </div>

          <div>
            <label className="font-semibold">Card Holder Name</label>

            <input
              value={cardName}
              onChange={(e) => setCardName(e.target.value)}
              placeholder="Aditya Vyas"
              className="w-full border rounded-xl p-4 mt-2 dark:bg-gray-800"
            />
          </div>

          <div className="grid grid-cols-2 gap-5">

            <div>
              <label className="font-semibold">Expiry</label>

              <input
                value={expiry}
                onChange={(e) => setExpiry(e.target.value)}
                placeholder="MM/YY"
                className="w-full border rounded-xl p-4 mt-2 dark:bg-gray-800"
              />
            </div>

            <div>
              <label className="font-semibold">CVV</label>

              <input
                type="password"
                value={cvv}
                onChange={(e) => setCvv(e.target.value)}
                placeholder="***"
                className="w-full border rounded-xl p-4 mt-2 dark:bg-gray-800"
              />
            </div>

          </div>

          <button
            onClick={handlePayment}
            className="w-full bg-black text-yellow-400 py-4 rounded-2xl font-bold hover:bg-yellow-500 hover:text-black transition flex items-center justify-center gap-3"
          >
            <FaLock />
            Pay Securely
          </button>

        </div>

      </div>
    </>
  );
}

export default CardPayment;
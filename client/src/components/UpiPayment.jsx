import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaCopy, FaCheckCircle } from "react-icons/fa";

function UpiPayment() {
  const navigate = useNavigate();

  const upiId = "stylehub@upi";
  const amount = 4749;

  const [loading, setLoading] = useState(false);

  const copyUpi = () => {
    navigator.clipboard.writeText(upiId);
    alert("UPI ID Copied");
  };

  const verifyPayment = () => {
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
              Verifying your UPI payment.
            </p>

          </div>
        </div>
      )}

      <div className="bg-white dark:bg-gray-900 rounded-3xl shadow-xl p-8">

        <h2 className="text-2xl font-bold mb-6 dark:text-yellow-400">
          📱 UPI Payment
        </h2>

        <div className="grid md:grid-cols-2 gap-8 items-center">

          <div className="flex flex-col items-center">

            <img
              src={`https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=upi://pay?pa=${upiId}&pn=StyleHub&am=${amount}`}
              alt="QR Code"
              className="rounded-2xl border shadow-lg"
            />

            <p className="mt-4 text-gray-500">
              Scan using Google Pay, PhonePe, Paytm or any UPI App
            </p>

          </div>

          <div>

            <div className="bg-gray-100 dark:bg-gray-800 rounded-2xl p-5 mb-5">

              <p className="text-gray-500">
                UPI ID
              </p>

              <div className="flex justify-between items-center mt-2">

                <h3 className="font-bold text-lg">
                  {upiId}
                </h3>

                <button
                  onClick={copyUpi}
                  className="flex items-center gap-2 bg-black text-yellow-400 px-4 py-2 rounded-xl hover:bg-yellow-500 hover:text-black transition"
                >
                  <FaCopy />
                  Copy
                </button>

              </div>

            </div>

            <div className="bg-yellow-50 dark:bg-gray-800 rounded-2xl p-5 mb-5">

              <p className="text-gray-500">
                Amount to Pay
              </p>

              <h2 className="text-4xl font-bold text-green-600">
                ₹{amount}
              </h2>

            </div>

            <button
              onClick={verifyPayment}
              className="w-full bg-black text-yellow-400 py-4 rounded-2xl font-bold hover:bg-yellow-500 hover:text-black transition flex items-center justify-center gap-3"
            >
              <FaCheckCircle />
              Verify Payment
            </button>

            <p className="text-center mt-4 text-sm text-gray-500">
              Google Pay • PhonePe • Paytm • BHIM
            </p>

          </div>

        </div>

      </div>
    </>
  );
}

export default UpiPayment;

import { FaQrcode, FaCreditCard, FaMoneyBillWave } from "react-icons/fa";

function PaymentMethods({ paymentMethod, setPaymentMethod }) {
  return (
    <div className="bg-white dark:bg-gray-900 rounded-3xl shadow-xl p-8 mb-8">

      <h2 className="text-2xl font-bold mb-6 dark:text-yellow-400">
        💳 Select Payment Method
      </h2>

      <div className="space-y-4">

        <label
          className={`flex items-center justify-between p-5 rounded-2xl border-2 cursor-pointer transition ${
            paymentMethod === "upi"
              ? "border-yellow-500 bg-yellow-50 dark:bg-gray-800"
              : "border-gray-300"
          }`}
        >
          <div className="flex items-center gap-4">
            <FaQrcode className="text-2xl text-blue-600" />
            <div>
              <h3 className="font-bold">UPI Payment</h3>
              <p className="text-sm text-gray-500">
                Google Pay • PhonePe • Paytm • BHIM
              </p>
            </div>
          </div>

          <input
            type="radio"
            checked={paymentMethod === "upi"}
            onChange={() => setPaymentMethod("upi")}
          />
        </label>

        <label
          className={`flex items-center justify-between p-5 rounded-2xl border-2 cursor-pointer transition ${
            paymentMethod === "card"
              ? "border-yellow-500 bg-yellow-50 dark:bg-gray-800"
              : "border-gray-300"
          }`}
        >
          <div className="flex items-center gap-4">
            <FaCreditCard className="text-2xl text-green-600" />
            <div>
              <h3 className="font-bold">Credit / Debit Card</h3>
              <p className="text-sm text-gray-500">
                Visa • Mastercard • RuPay
              </p>
            </div>
          </div>

          <input
            type="radio"
            checked={paymentMethod === "card"}
            onChange={() => setPaymentMethod("card")}
          />
        </label>

        <label
          className={`flex items-center justify-between p-5 rounded-2xl border-2 cursor-pointer transition ${
            paymentMethod === "cod"
              ? "border-yellow-500 bg-yellow-50 dark:bg-gray-800"
              : "border-gray-300"
          }`}
        >
          <div className="flex items-center gap-4">
            <FaMoneyBillWave className="text-2xl text-red-500" />
            <div>
              <h3 className="font-bold">Cash on Delivery</h3>
              <p className="text-sm text-gray-500">
                Pay after receiving your order
              </p>
            </div>
          </div>

          <input
            type="radio"
            checked={paymentMethod === "cod"}
            onChange={() => setPaymentMethod("cod")}
          />
        </label>

      </div>
    </div>
  );
}

export default PaymentMethods;
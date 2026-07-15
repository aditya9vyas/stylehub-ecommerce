import {
  FaMoneyBillWave,
  FaTruck,
  FaShieldAlt,
  FaCheckCircle,
} from "react-icons/fa";

function CODPayment() {
  return (
    <div className="bg-white dark:bg-gray-900 rounded-3xl shadow-xl p-8">

      <h2 className="text-2xl font-bold mb-6 dark:text-yellow-400">
        💵 Cash on Delivery
      </h2>

      <div className="bg-gradient-to-r from-green-50 to-white dark:from-gray-800 dark:to-gray-900 rounded-3xl p-8 border">

        <div className="flex items-center gap-4">

          <div className="w-16 h-16 rounded-full bg-green-500 flex items-center justify-center">

            <FaMoneyBillWave className="text-white text-3xl"/>

          </div>

          <div>

            <h3 className="text-2xl font-bold">
              Pay After Delivery
            </h3>

            <p className="text-gray-500">
              Cash will be collected when your order arrives.
            </p>

          </div>

        </div>

        <div className="mt-8 grid md:grid-cols-3 gap-5">

          <div className="bg-white dark:bg-gray-800 rounded-2xl p-5 shadow">

            <FaTruck className="text-3xl text-blue-500 mb-3"/>

            <h4 className="font-bold">
              Fast Delivery
            </h4>

            <p className="text-sm text-gray-500 mt-2">
              Delivery within 2–4 business days.
            </p>

          </div>

          <div className="bg-white dark:bg-gray-800 rounded-2xl p-5 shadow">

            <FaShieldAlt className="text-3xl text-yellow-500 mb-3"/>

            <h4 className="font-bold">
              Secure Order
            </h4>

            <p className="text-sm text-gray-500 mt-2">
              Your order is protected until delivered.
            </p>

          </div>

          <div className="bg-white dark:bg-gray-800 rounded-2xl p-5 shadow">

            <FaCheckCircle className="text-3xl text-green-500 mb-3"/>

            <h4 className="font-bold">
              Easy Returns
            </h4>

            <p className="text-sm text-gray-500 mt-2">
              7-day hassle-free returns.
            </p>

          </div>

        </div>

        <button
          className="w-full mt-8 bg-black text-yellow-400 py-4 rounded-2xl font-bold hover:bg-yellow-500 hover:text-black transition"
          onClick={() => alert("🎉 Order Placed Successfully!")}
        >
          Place Order
        </button>

      </div>

    </div>
  );
}

export default CODPayment;
import { Link } from "react-router-dom";
import { FaCheckCircle } from "react-icons/fa";

function OrderSuccess() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-950 flex justify-center items-center">

      <div className="bg-white dark:bg-gray-900 rounded-3xl shadow-2xl p-12 text-center w-[500px]">

        <FaCheckCircle className="text-green-500 text-7xl mx-auto"/>

        <h1 className="text-4xl font-bold mt-6 dark:text-yellow-400">
          Payment Successful
        </h1>

        <p className="text-gray-500 mt-4">
          Thank you for shopping with StyleHub.
        </p>

        <div className="bg-gray-100 dark:bg-gray-800 rounded-2xl p-6 mt-8">

          <h3 className="font-bold">
            Order ID
          </h3>

          <p className="text-xl mt-2">
            STY2026001
          </p>

        </div>

        <Link
          to="/"
          className="block mt-8 bg-black text-yellow-400 py-4 rounded-2xl font-bold hover:bg-yellow-500 hover:text-black transition"
        >
          Continue Shopping
        </Link>

      </div>

    </div>
  );
}

export default OrderSuccess;
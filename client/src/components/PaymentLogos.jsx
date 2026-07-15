import gpay from "../assets/payment/gpay.png";
import phonepe from "../assets/payment/phonepe.png";
import paytm from "../assets/payment/paytm.png";
import visa from "../assets/payment/visa.png";
import mastercard from "../assets/payment/mastercard.png";
import rupay from "../assets/payment/rupay.png";

function PaymentLogos() {
  const logos = [gpay, phonepe, paytm, visa, mastercard, rupay];

  return (
    <div className="bg-white dark:bg-gray-900 rounded-3xl shadow-xl p-6 mb-8">

      <h2 className="text-xl font-bold mb-5 dark:text-yellow-400">
        Supported Payment Methods
      </h2>

      <div className="grid grid-cols-3 md:grid-cols-6 gap-5">

        {logos.map((logo, index) => (
          <div
            key={index}
            className="bg-gray-100 dark:bg-gray-800 rounded-2xl p-4 flex justify-center items-center hover:scale-105 transition"
          >
            <img
              src={logo}
              className="h-10 object-contain"
              alt="logo"
            />
          </div>
        ))}

      </div>

    </div>
  );
}

export default PaymentLogos;